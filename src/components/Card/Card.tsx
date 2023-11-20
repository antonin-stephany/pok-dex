import './Card.css'
type CardProps = {
  name: string
  id: number
  onClickCard: (id:number) => void
  onClickFav: (id:number, name:string) => void
}

function Card({name, id, onClickCard, onClickFav}: CardProps) {
  
  
  return (
    <>
      <div className='pokemon-card' onClick={() => onClickCard(id)}>
        <h2 className='pokemon-name'><span className='pokemon-id'>#{id} </span>{name} <div className='fav-button' onClick={() => onClickFav(id, name)}>Fav</div></h2>
        <img src ={` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
      </div>
      
    </>
  )
}

export default Card