import './Card.css'
type CardProps = {
  name: string
  id: number
}

function Card({name, id}: CardProps) {
  return (
    <>
      <div className='pokemon-card'>
        <h2 className='pokemon-name'>{name}</h2>
        <img src ={` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
      </div>
      
    </>
  )
}

export default Card