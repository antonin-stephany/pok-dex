import './Board.css'
import Card from '../Card/Card'
import { PokemonEssential } from '../../type'
type BoardProps = {
  pokemons: Array<PokemonEssential>;
  pokemonsFav: Array<PokemonEssential>;
  displayCard: (id:number) => void
  setFav: (id:number, name:string) => void
  input: string
  showFavorites: boolean;
}

function Board({pokemons, pokemonsFav, displayCard, setFav, input, showFavorites}: BoardProps ) {
  const pokemonsDisplayed = showFavorites ? pokemonsFav : pokemons;
  const filteredPokemons = pokemonsDisplayed.filter((el) => {
    if (input === '') {
        return el;
    }
    else {
        return el.name.fr.toLowerCase().includes(input)
    }
})
  return (
    <>
      <section className='pokemons_container'>
      {filteredPokemons.map((pokemon: PokemonEssential) => (
        <Card 
          key = {pokemon.pokedexId}
          name = {pokemon.name.fr}
          id = {pokemon.pokedexId}
          isFavorite = {pokemon.isFavorite}
          onClickCard = {displayCard}
          onClickFav = {setFav}
        />
      ))}
      </section>
      
    </>
  )
}

export default Board
