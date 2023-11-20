import './Board.css'
import Card from '../Card/Card'
import { Pokemon} from '../../type'
type BoardProps = {
  pokemons: Array<Pokemon>
  displayCard: (id:number) => void
  displayFav: (id:number, name:string) => void
  input: string
}

function Board({pokemons, displayCard, displayFav, input}: BoardProps ) {
  const filteredPokemons = pokemons.filter((el) => {
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
      {filteredPokemons.map((pokemon: Pokemon) => (
        <Card 
          key = {pokemon.pokedexId}
          name = {pokemon.name.fr}
          id = {pokemon.pokedexId}
          onClickCard = {displayCard}
          onClickFav = {displayFav}
        />
      ))}
      </section>
      
    </>
  )
}

export default Board
