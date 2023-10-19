import './Board.css'
import Card from '../Card/Card'
import { Pokemon} from '../../type'
type BoardProps = {
  pokemons: Array<Pokemon>
  displayCard: (id:number) => void
}

function Board({pokemons, displayCard}: BoardProps ) {
  return (
    <>
      <section className='pokemons_container'>
      {pokemons.map((pokemon: Pokemon) => (
        <Card 
          key = {pokemon.pokedexId}
          name = {pokemon.name.fr}
          id = {pokemon.pokedexId}
          onClickCard = {displayCard}
        />
      ))}
      </section>
      
    </>
  )
}

export default Board
