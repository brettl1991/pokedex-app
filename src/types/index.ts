export interface Pokemon {
  id: string;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  weight: number;
  height: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };

    front_default: string;
  };
  abilities: Ability[];
  stats: Stat[];
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
}

interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface TextEntry {
  flavor_text: string;
  genus?: string;
  language: {
    name: string;
  };
}

export interface PokemonSpecies {
  flavor_text: string | undefined;
  species: string | undefined;
}

export interface Move {
  name: string;
  url: string;
}

export interface MoveDetail {
  name: string;
  type: string;
}
