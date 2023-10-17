import './Board.css'
import Card from '../Card/Card'
import { Pokemon} from '../../type'
type BoardProps = {
  pokemons: Array<Pokemon>
}


function Board({pokemons}: BoardProps ) {
  return (
    <>
      <section className='pokemons_container'>
      {pokemons.map((pokemon: Pokemon) => (
        <Card 
          key = {pokemon.pokedexId}
          name = {pokemon.name.fr}
          id = {pokemon.pokedexId}
        />
      ))}
      </section>
      
    </>
  )
}

export default Board
