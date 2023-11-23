import './SinglePokemon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Pokemon } from '../../type.tsx';

type SinglePokemonProps = {
  pokemon: Pokemon;
  onClickPanel: () => void;
};

function SinglePokemon({ pokemon, onClickPanel }: SinglePokemonProps) {
  function getTypeColor(typeName: string): string {
    const typeColors: Record<string, string> = {
      Normal: '#BCBCAC',
      Combat: '#BC5442',
      Vol: '#669AFF',
      Poison: '#AB549A',
      Sol: '#DEBC54',
      Roche: '#BCAC66',
      Insecte: '#ABBC1C',
      Spectre: '#6666BC',
      Acier: '#ABACBC',
      Feu: '#FF421C',
      Eau: '#2F9AFF',
      Plante: '#78CD54',
      Électrik: '#FFCD30',
      Psy: '#FF549A',
      Glace: '#78DEFF',
      Dragon: '#7866EF',
      Ténèbres: '#785442',
      Fée: '#FFACFF',
    };
    return typeColors[typeName] || '#F6F6F6';
  }
  return (
    <>
      {pokemon ? (
        <section className="pokemon-description_container">
          <div className="pokemon-description_img-container">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.pokedexId}.gif`}
              onError={(e) => {
                e.currentTarget.src = ` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokedexId}.png`;
              }}
              alt={`${pokemon.name.fr}`}
            />
          </div>
          <section className="pokemon-description_importantes-info">
            <span>#{pokemon.pokedexId}</span>
            <h2>{pokemon.name.fr}</h2>
            <h3>{pokemon.category}</h3>
            <h3>Génération n°{pokemon.generation}</h3>
          </section>
          <ul className="pokemon-description_types">
            <h4>Types</h4>
            {pokemon.types.map((type) => (
              <li key={type.name} style={{ backgroundColor: getTypeColor(type.name) }}>
                {type.name}
              </li>
            ))}
          </ul>
          <ul className="pokemon-description_body">
            <h4>Poids et taille</h4>
            <li>{pokemon.height}</li>
            <li>{pokemon.weight}</li>
          </ul>
          <ul className="pokemon-description_stats">
            <li>
              <span>HP </span>
              <span>{pokemon.stats.hp}</span>
            </li>
            <li>
              <span>Atq </span>
              <span>{pokemon.stats.atk}</span>
            </li>
            <li>
              <span>Def </span>
              <span>{pokemon.stats.def}</span>
            </li>
            <li>
              <span>ASp </span>
              <span>{pokemon.stats.spe_atk}</span>
            </li>
            <li>
              <span>DSp </span>
              <span>{pokemon.stats.spe_def}</span>
            </li>
            <li>
              <span>Vit </span>
              <span>{pokemon.stats.vit}</span>
            </li>
          </ul>
          <button className="button-close-panel" onClick={() => onClickPanel()}>
            <FontAwesomeIcon icon={faXmark} style={{ color: '#ffffff' }} />
          </button>
        </section>
      ) : (
        ''
      )}
    </>
  );
}

export default SinglePokemon;
