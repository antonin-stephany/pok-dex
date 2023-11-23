import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
interface SearchProps {
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Search({ inputHandler }: SearchProps) {
  return (
    <div className="input-search-bar">
      <input onChange={inputHandler} placeholder="Chercher un pokémon..." className="input-search" />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
}

export default Search;
