import './Menu.css';
type MenuProps = {
  onClickMenu: (boolean: boolean) => void;
  showFavorites: boolean;
};

function Menu({ onClickMenu, showFavorites }: MenuProps) {
  return (
    <div className="menu">
      <button className={showFavorites ? '' : 'active'} onClick={() => onClickMenu(false)}>
        Liste des pokémons
      </button>
      <button className={showFavorites ? 'active' : ''} onClick={() => onClickMenu(true)}>
        Mes favoris
      </button>
    </div>
  );
}

export default Menu;
