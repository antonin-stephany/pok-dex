import './SinglePokemon.css'
import { Pokemon} from '../../type'

type SinglePokemonProps = {
  pokemon: Pokemon
  }

function SinglePokemon({pokemon}: SinglePokemonProps) {
  return (
    <>
      <section className='pokemon-description_container'>
        <p>{pokemon.pokedexId}</p>
        <p>{pokemon.category}</p>
      </section>
    </>
  )
}

export default SinglePokemon
