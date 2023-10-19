import './SinglePokemon.css'
import { Pokemon} from '../../type'

type SinglePokemonProps = {
  pokemon: Pokemon
  }

function SinglePokemon({pokemon}: SinglePokemonProps) {
  return (
    <>
      <section className='pokemon-description_container'>
        <img src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.pokedexId}.gif`} />
        <span>{pokemon.pokedexId}</span>
        <h2>{pokemon.name.fr}</h2>
        <h3>{pokemon.category}</h3>
        <ul>
          {pokemon.types.map((type) => (      
        <li key = {type.name}>{type.name}</li>
      ))}
        </ul>
      </section>
    </>
  )
}

export default SinglePokemon
