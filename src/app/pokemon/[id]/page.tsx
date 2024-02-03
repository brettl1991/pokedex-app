import { fetchPokemonByNameOrId } from '@/actions';
import Loader from '@/components/Loader/Loader';
import PokemonDetailCard from '@/components/PokemonDetailCard/PokemonDetailCard';
import PokemonNavigation from '@/components/PokemonNavigation/PokemonNavigation';
import { getColorsByPokemonType } from '@/utils';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

interface PokemonDetailPageProps {
  params: {
    id: string;
  };
}
export default async function PokemonDetailPage({
  params,
}: PokemonDetailPageProps) {
  const { id } = params;
  const pokemon = await fetchPokemonByNameOrId(id);

  if (!pokemon) {
    return notFound();
  }

  let background;

  if (pokemon) {
    background = getColorsByPokemonType(pokemon.types[0].type.name).background;
    if (pokemon.types.length >= 2) {
      background = `linear-gradient(
          to right,
          ${
            getColorsByPokemonType(pokemon.types[0].type.name).backgroundColor
          } 50%,
          ${
            getColorsByPokemonType(pokemon.types[1].type.name).backgroundColor
          } 50%
      )`;
    }
  }

  return (
    <div
      className="flex items-center min-h-screen flex-col p-8"
      style={{ background }}
    >
      <PokemonNavigation currentId={+id} />
      <Suspense
        fallback={
          <div className="w-full h-[600px]">
            <Loader />
          </div>
        }
        key={id}
      >
        <PokemonDetailCard pokemon={pokemon} />
      </Suspense>
    </div>
  );
}
