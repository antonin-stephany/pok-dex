import './Card.css'
type CardProps = {
  name: string
  id: number
  onClickCard: (id:number) => void
}

function Card({name, id, onClickCard}: CardProps) {
  
  
  return (
    <>
      <div className='pokemon-card' onClick={() => onClickCard(id)}>
        <h2 className='pokemon-name'><span className='pokemon-id'>#{id} </span>{name}</h2>
        <img src ={` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
      </div>
      
    </>
  )
}

export default Card