import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartsolid } from '@fortawesome/free-solid-svg-icons'
type CardProps = {
  name: string
  id: number
  isFavorite: boolean
  onClickCard: (id:number) => void
  onClickFav: (id:number, name:string) => void
}

function Card({name, id, isFavorite, onClickCard, onClickFav}: CardProps) {
  
  return (
    <>
      <div className='pokemon-card' onClick={() => onClickCard(id)}>
        <div className='pokemon-header'>
          <h2 className='pokemon-name'><span className='pokemon-id'>#{id} </span>{name}</h2>
          <div className='fav-button' onClick={() => onClickFav(id, name)}>
              {isFavorite 
              ? <FontAwesomeIcon icon={faHeartsolid} style={{color: "#f11e5d",}} />
              : <FontAwesomeIcon icon={faHeart} />
              }
          </div>
        </div>
        <img src ={` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
      </div>
      
    </>
  )
}

export default Card