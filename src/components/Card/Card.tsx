import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartsolid } from '@fortawesome/free-solid-svg-icons';
type CardProps = {
  name: string;
  id: number;
  isFavorite: boolean;
  isPanelActive: boolean;
  onClickCard: (id: number) => void;
  onClickFav: (id: number, name: string) => void;
};

function Card({ name, id, isFavorite, isPanelActive, onClickCard, onClickFav }: CardProps) {
  return (
    <>
      <div className="pokemon-content-card">
        <div
          className={`pokemon-card ${isPanelActive ? 'active' : ''}`}
          onClick={() => onClickCard(id)}
          role="presentation"
        >
          <h2 className="pokemon-name">
            <span className="pokemon-id">#{id} </span>
            {name}
          </h2>
          <img src={` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        </div>
        <button className="fav-button" onClick={() => onClickFav(id, name)}>
          {isFavorite ? (
            <FontAwesomeIcon icon={faHeartsolid} style={{ color: '#f11e5d' }} />
          ) : (
            <FontAwesomeIcon icon={faHeart} />
          )}
        </button>
      </div>
    </>
  );
}

export default Card;
