import { Pokemon } from '@/types';
import Image from 'next/image';
import BadgeType from '../BadgeType/BadgeType';
import { getColorsByPokemonType } from '@/utils';
import PokemonDetailTabs from '../PokemonDetailTabs/PokemonDetailTabs';
import PokemonDetailsTabContentStats from '../PokemonDetailTabs/PokemonDetailsTabContent/PokemonDetailsTabContentStats';
import PokemonDetailsTabContentAbout from '../PokemonDetailTabs/PokemonDetailsTabContent/PokemonDetailsTabContentAbout';
import { fetchMoveDetails, fetchPokemonSpeciesByNameOrId } from '@/actions';
import PokemonDetailsTabContentMoves from '../PokemonDetailTabs/PokemonDetailsTabContent/PokemonDetailsTabContentMoves';

interface PokemonDetailCardProps {
  pokemon: Pokemon;
}

export default async function PokemonDetailCard({
  pokemon,
}: PokemonDetailCardProps) {
  const imageUrl =
    pokemon?.sprites.other['official-artwork'].front_default ||
    pokemon?.sprites.front_default ||
    '/images/placeholder.png';

  const pokemonTypeColor = pokemon
    ? getColorsByPokemonType(pokemon.types[0].type.name).background
    : 'linear-gradient(180deg, #fff 50%, #fff 50%)';

  const formattedMoves =
    pokemon?.moves?.map((moveItem) => ({
      name: moveItem.move.name,
      url: moveItem.move.url,
    })) || [];

  const pokemonMoves = await fetchMoveDetails(formattedMoves);
  const pokemonSpecies = await fetchPokemonSpeciesByNameOrId(pokemon.id);

  const tabData = [
    {
      label: 'About',
      content: (
        <PokemonDetailsTabContentAbout
          pokemon={pokemon}
          pokemonSpecies={pokemonSpecies}
        />
      ),
    },
    {
      label: 'Base Stats',
      content: <PokemonDetailsTabContentStats pokemon={pokemon} />,
    },
    {
      label: 'Moves',
      content: <PokemonDetailsTabContentMoves pokemonMoves={pokemonMoves} />,
    },
  ];

  return (
    <div className="rounded-xl overflow-hidden shadow-2xl border border-black w-full sm:min-w-[311px] sm:w-[400px] md:max-w-md lg:max-w-lg mx-8 sm:mx-0">
      <div className="p-8 shadow-md" style={{ background: pokemonTypeColor }}>
        <div className="flex justify-between">
          <div className="flex flex-col  justify-center  gap-1">
            <h1 className="text-lg sm:text-md font-semibold capitalize">
              {pokemon?.name}
            </h1>
            <div className="flex gap-3">
              {pokemon?.types.map((type, index) => (
                <BadgeType type={type.type.name} key={index} />
              ))}
            </div>
          </div>
          <span>#{pokemon.id}</span>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Image
            src={imageUrl}
            alt={pokemon?.name}
            width={200}
            height={200}
            unoptimized
          />
        </div>
      </div>

      <PokemonDetailTabs tabs={tabData} />
    </div>
  );
}
