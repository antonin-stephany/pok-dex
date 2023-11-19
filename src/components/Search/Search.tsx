import './Search.css'
function Search({inputHandler}) {
  
  
  return (
    <>
      <input 
        onChange={inputHandler}
        placeholder="Chercher un pokémon..."
        className='input-search'
      />
      
    </>
  )
}

export default Search