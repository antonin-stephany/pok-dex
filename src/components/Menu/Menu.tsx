import './Menu.css'

function Menu({onClickMenu}) {
  
  return (
    <ul className='menu'>
        <li onClick={() => onClickMenu(false)}>Liste des pokémons</li>
        <li onClick={() => onClickMenu(true)}>Mes favoris</li>
    </ul>
  )
}

export default Menu