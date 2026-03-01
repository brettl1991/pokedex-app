import { fetchPokemonByNameOrId } from '@/actions';
import Loader from '@/components/Loader/Loader';
import PokemonDetailCard from '@/components/PokemonDetailCard/PokemonDetailCard';
import PokemonNavigation from '@/components/PokemonNavigation/PokemonNavigation';
import { getColorsByPokemonType } from '@/utils';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

interface PokemonDetailPageProps {
  params:
    | {
        id: string;
      }
    | Promise<{
        id: string;
      }>;
}
export default async function PokemonDetailPage({
  params,
}: PokemonDetailPageProps) {
  const { id } = await Promise.resolve(params);
  const pokemon = await fetchPokemonByNameOrId(id);

  if (!pokemon) {
    return notFound();
  }

  const primaryType = pokemon.types[0].type.name;
  const secondaryType = pokemon.types[1]?.type.name;
  const background = secondaryType
    ? `linear-gradient(
        to right,
        ${getColorsByPokemonType(primaryType).backgroundColor} 50%,
        ${getColorsByPokemonType(secondaryType).backgroundColor} 50%
      )`
    : getColorsByPokemonType(primaryType).background;

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
