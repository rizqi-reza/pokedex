export interface IPokeBase {
  url?: string;
  name?: string;
}

export interface IPokemon {
  id: number;
  name: string;
  image: string;
  types: IPokeType[];
  weight: number;
  height: number;
  abilities: IPokeAbilities[];
  base_experience: number;
  species: IPokeBase;
  pokeSpecies: IPokeSpecies;
  sprites: IPokeSprites;
  stats: IPokeStat[];
  color?: string;
  onClick?: (name: string) => void;
}

export interface IPokemonDetail {
  pokemon: IPokemon;
  showDetail: boolean;
  onClose: () => void;
}

export interface IPokeType {
  slot: number;
  type: {
    name: string;
  };
}

export interface IPokeAbilities {
  ability: {
    name: string;
  };
  is_hidden: boolean;
}

export interface IPokeStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}

export interface IPokeSprites {
  back_default: string;
  front_default: string;
}

export interface IPokeSpecies {
  id: number;
  base_happiness: number;
  capture_rate: number;
  color: IPokeBase;
  egg_groups: IPokeBase[];
  evolution_chain: IPokeBase;
  flavor_text_entries: IPokeFlavorTextEntries[];
  genera: IPokeGenera[];
  growth_rate: IPokeBase;
  shape: IPokeBase;
  habitat: IPokeBase;
  hatch_counter: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
}

export interface IPokeGenera {
  genus: string;
  language: IPokeBase;
}

export interface IPokeFlavorTextEntries {
  flavor_text: string;
  language: IPokeBase;
  version: IPokeBase;
}

export interface IPokeEvo {
  evolution_details: IPokeEvoDetail[];
  evolves_to: IPokeEvo[];
  species: IPokeBase;
}

export interface IPokeEvoDetail {
  min_affection: number;
  min_beauty: number;
  min_happiness: number;
  min_level: number;
  item: IPokeBase;
  location: IPokeBase;
  known_move: IPokeBase;
  known_move_type: IPokeBase;
  held_item: IPokeBase;
  time_of_day: string;
  trigger: IPokeBase;
}

export interface IPokeBall {
  background?: string;
  width?: number;
  height?: number;
  isActive: boolean;
}

export interface IPokeAction {
  variant?: 'default' | 'catch' | 'release';
}
