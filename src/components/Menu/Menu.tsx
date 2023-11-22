import './Menu.css'
type MenuProps = {
  onClickMenu: (boolean:boolean) => void
}

function Menu({onClickMenu}: MenuProps) {
  
  return (
    <ul className='menu'>
        <li onClick={() => onClickMenu(false)}>Liste des pokémons</li>
        <li onClick={() => onClickMenu(true)}>Mes favoris</li>
    </ul>
  )
}

export default Menu