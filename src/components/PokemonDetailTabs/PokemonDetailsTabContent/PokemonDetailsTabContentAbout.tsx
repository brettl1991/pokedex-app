import { Pokemon, PokemonSpecies } from '@/types';
import { convertPokemonSize } from '@/utils';

interface PokemonDetailsTabContentAboutProps {
  pokemon: Pokemon;
  pokemonSpecies: PokemonSpecies | null;
}

export default function PokemonDetailsTabContentAbout({
  pokemon,
  pokemonSpecies,
}: PokemonDetailsTabContentAboutProps) {
  const { height, weight } = convertPokemonSize({
    height: pokemon.height,
    weight: pokemon.weight,
  });

  function cleanFlavorText(text: string | undefined) {
    if (text) {
      return text
        .replace(/[\n\f]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    return '';
  }

  return (
    <div>
      <p className="text-xs sm:text-sm mb-2">
        <strong>Species:</strong> {pokemonSpecies?.species}
      </p>
      <p className="text-xs sm:text-sm mb-2">
        <strong>Height:</strong> {height.feet} ft {height.inches} in
      </p>
      <p className="text-xs sm:text-sm mb-2">
        <strong>Weight:</strong> {weight.kg} kg ({weight.lbs}
        lbs)
      </p>
      <div className="flex items-center text-xs sm:text-sm mb-2 gap-1">
        <strong>Abilities: </strong>
        <div className="flex gap-2 capitalize">
          {pokemon.abilities
            .map((ability) => ability.ability.name.replace('-', ' '))
            .join(', ')}
        </div>
      </div>
      <p className="text-xs sm:text-sm mb-2">
        {cleanFlavorText(pokemonSpecies?.flavor_text)}
      </p>
    </div>
  );
}
