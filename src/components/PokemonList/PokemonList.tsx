import { fetchPokemons } from '@/actions';
import PokemonItem from '../PokemonItem/PokemonItem';
import Image from 'next/image';

interface PokemonListProps {
  query?: string;
}

export default async function PokemonList({ query }: PokemonListProps) {
  const { pokemons } = await fetchPokemons({ query });

  if (!pokemons.length) {
    return (
      <div className="flex flex-col items-center text-center leading-relaxed m-auto p-4 min-h-screen">
        <h1 className="text-4xl mb-1">Pokémon not found!</h1>
        <h2 className="text-xl font-normal mb-4">
          Unfortunately the Pokémon you are looking for is not here.
        </h2>

        <Image
          src="/images/psyduck.png"
          width={350}
          height={200}
          alt="Psyduck confused"
          priority
          unoptimized
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3">
      {pokemons.map(
        (pokemon) =>
          pokemon && <PokemonItem key={pokemon.id} pokemon={pokemon} />
      )}
    </div>
  );
}
