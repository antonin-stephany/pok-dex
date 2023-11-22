
type PokemonIdentification = {
  pokedexId: number;
  name: {
    fr: string;
  };
}

export type Pokemon = PokemonIdentification & {
    category: string;
    generation: string;
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

  export type PokemonEssential = PokemonIdentification & {
    isFavorite: boolean;
  }