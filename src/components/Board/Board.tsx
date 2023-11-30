import './Board.css';
import Card from '../Card/Card.tsx';
import { PokemonEssential, Pokemon } from '../../type.tsx';
type BoardProps = {
  pokemons: Array<PokemonEssential>;
  pokemonsFav: Array<PokemonEssential>;
  pokemonsIndexMax: number;
  singlePokemon?: Pokemon;
  displayCard: (id: number) => void;
  setFav: (id: number, name: string) => void;
  input: string;
  showFavorites: boolean;
};

function Board({
  pokemons,
  pokemonsFav,
  pokemonsIndexMax,
  singlePokemon,
  displayCard,
  setFav,
  input,
  showFavorites,
}: BoardProps) {
  const pokemonsDisplayed = showFavorites ? pokemonsFav : pokemons;
  const filteredPokemons = pokemonsDisplayed.filter((el) => {
    if (input === '') {
      return el;
    } else {
      return el.name.fr
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .includes(
          input
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase(),
        );
    }
  });

  return (
    <>
      <section className="pokemons_container">
        {filteredPokemons.slice(0, pokemonsIndexMax).map((pokemon: PokemonEssential) => (
          <Card
            key={pokemon.pokedexId}
            name={pokemon.name.fr}
            id={pokemon.pokedexId}
            isFavorite={pokemon.isFavorite}
            onClickCard={displayCard}
            onClickFav={setFav}
            isPanelActive={pokemon.pokedexId === singlePokemon?.pokedexId}
          />
        ))}
      </section>
    </>
  );
}

export default Board;
