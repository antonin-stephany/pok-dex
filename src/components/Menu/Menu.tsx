import './Menu.css'
type MenuProps = {
  onClickMenu: (boolean:boolean) => void,
  showFavorites: boolean
}

function Menu({onClickMenu, showFavorites}: MenuProps) {
  
  return (
    <ul className='menu'>
        <li className={showFavorites ? '' : 'active'} onClick={() => onClickMenu(false)}>Liste des pokémons</li>
        <li className={showFavorites ? 'active' : ''} onClick={() => onClickMenu(true)}>Mes favoris</li>
    </ul>
  )
}

export default Menu