import './Board.css'
import Card from '../Card/Card'
import { PokemonEssential, Pokemon } from '../../type'
type BoardProps = {
  pokemons: Array<PokemonEssential>;
  pokemonsFav: Array<PokemonEssential>;
  singlePokemon?: Pokemon 
  displayCard: (id:number) => void
  setFav: (id:number, name:string) => void
  input: string
  showFavorites: boolean
}

function Board({pokemons, pokemonsFav, singlePokemon, displayCard, setFav, input, showFavorites}: BoardProps ) {
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
          isPanelActive = {pokemon.pokedexId === singlePokemon?.pokedexId}
        />
      ))}
      </section>
      
    </>
  )
}

export default Board
