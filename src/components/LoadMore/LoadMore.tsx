'use client';
import { fetchPokemons } from '@/actions';
import { Pokemon } from '@/types';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import PokemonItem from '../PokemonItem/PokemonItem';

export default function LoadMore() {
  const { ref, inView } = useInView();
  const [morePokemon, setMorePokemon] = useState<Pokemon[]>([]);
  const isLoadingRef = useRef(false);
  const [nextUrl, setNextUrl] = useState<string | null>(
    'https://pokeapi.co/api/v2/pokemon?offset=24&limit=24'
  );

  useEffect(() => {
    const loadMorePokemons = async () => {
      if (!inView || !nextUrl || isLoadingRef.current) {
        return;
      }

      isLoadingRef.current = true;
      try {
        const res = await fetchPokemons({ url: nextUrl });
        const newPokemons = res.pokemons.filter(
          (pokemon): pokemon is Pokemon => pokemon !== null
        );
        setMorePokemon((prev) => [...prev, ...newPokemons]);
        setNextUrl(res.nextUrl);
      } finally {
        isLoadingRef.current = false;
      }
    };
    loadMorePokemons();
  }, [inView, nextUrl]);

  return (
    <>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3">
        {morePokemon.map(
          (pokemon) =>
            pokemon && <PokemonItem key={pokemon.id} pokemon={pokemon} />
        )}
      </div>
      <div className="flex flex-col items-center" ref={ref}>
        {nextUrl && (
          <>
            <Image
              src={'/images/loading.gif'}
              width={56}
              height={56}
              alt="Pikachu loading"
              className="h-auto w-full"
              priority
            />
            <h3>Loading more pokemons...</h3>
          </>
        )}
      </div>
    </>
  );
}
