export type Pokemon = {
    pokedexId: number;
    category: string;
    generation: string;
    name: {
      fr: string;
    }
    height: string;
    weight: string;
    stats:  {
      hp: number;
      atk: number;
      def: number;
      spe_atk: number;
      spe_def: number;
      vit: number;
    }
    types: {name: string}[]
  }

  export type PokemonEssential = {
    pokedexId: number;
    name: {
      fr: string;
    };
    isFavorite: boolean;
  }