'use server';

import { Move, MoveDetail, Pokemon, PokemonSpecies, TextEntry } from '@/types';

export async function fetchPokemons({
  query,
  url,
}: {
  query?: string;
  url?: string;
}): Promise<{ pokemons: (Pokemon | null)[]; nextUrl: string | null }> {
  if (!query) {
    const endpoint =
      url || 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=24';
    const response = await fetch(endpoint);
    const { results, next } = await response.json();

    const pokemons = await Promise.all(
      results.map(
        async ({ name }: { name: string }): Promise<Pokemon | null> => {
          try {
            const pokemonResponse = await fetchPokemonByNameOrId(name);
            return pokemonResponse || null;
          } catch (error) {
            console.error(`Error fetching details for pokemon ${name}:`, error);
            return null;
          }
        }
      )
    );

    return { pokemons, nextUrl: next };
  }
  try {
    const pokemonResponse = await fetchPokemonByNameOrId(query);
    const pokemons = pokemonResponse ? [pokemonResponse] : [];
    return { pokemons, nextUrl: null };
  } catch (error) {
    console.error(`Error fetching details for pokemon ${query}:`, error);
    return { pokemons: [], nextUrl: null };
  }
}

export async function fetchPokemonByNameOrId(
  pokemonName: string
): Promise<Pokemon | null> {
  try {
    const pokemonResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}/`
    );
    const pokemonData: Pokemon = await pokemonResponse.json();

    if (pokemonData) {
      return {
        id: pokemonData.id.toString(),
        name: pokemonData.name,
        height: pokemonData.height,
        weight: pokemonData.weight,
        moves: pokemonData.moves,
        sprites: {
          other: {
            'official-artwork': {
              front_default:
                pokemonData.sprites.other['official-artwork'].front_default,
            },
          },
          front_default: pokemonData.sprites.front_default,
        },
        types: pokemonData.types.map((type) => ({
          type: { name: type.type.name },
        })),
        stats: pokemonData.stats.map((stat) => ({
          base_stat: stat.base_stat,
          stat: {
            name: stat.stat.name,
          },
        })),
        abilities: pokemonData.abilities.map((ability) => ({
          ability: {
            name: ability.ability.name,
            url: ability.ability.url,
          },
          is_hidden: ability.is_hidden,
          slot: ability.slot,
        })),
      };
    }
    return null;
  } catch (error) {
    console.error(`Error fetching details for pokemon ${pokemonName}:`, error);
    return null;
  }
}

function filterText(array: TextEntry[]) {
  const textEntry = array.find((entry) => entry.language.name === 'en');
  return textEntry ? textEntry.flavor_text || textEntry.genus : undefined;
}

export async function fetchPokemonSpeciesByNameOrId(
  pokemonNameOrId: string
): Promise<PokemonSpecies | null> {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonNameOrId.toLowerCase()}`
    );
    const speciesData = await res.json();

    const flavorTextEnglish = filterText(speciesData.flavor_text_entries);
    const speciesTextEnglish = filterText(speciesData.genera);

    return {
      flavor_text: flavorTextEnglish,
      species: speciesTextEnglish,
    };
  } catch (error) {
    console.error(
      `Error fetching species details for pokemon ${pokemonNameOrId}:`,
      error
    );
    return null;
  }
}

export async function fetchMoveDetails(moves: Move[]): Promise<MoveDetail[]> {
  if (!moves) {
    return [];
  }

  const movesPromises = moves.map((move) =>
    fetch(move.url).then((res) => res.json())
  );
  const movesDetails = await Promise.all(movesPromises);
  return movesDetails.map((moveDetail) => ({
    name: moveDetail.name,
    type: moveDetail.type.name,
  }));
}
