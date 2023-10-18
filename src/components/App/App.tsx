import './App.css'
import { useState, useEffect } from "react";
import axios from "axios";
import Board from '../Board/Board'
import SinglePokemon from '../SinglePokemon/SinglePokemon'

function App() {
  const url = "https://api-pokemon-fr.vercel.app/api/v1/pokemon";
  const [data, setData] = useState([]);
  const [idPokemon, setIdPokemon] = useState(0);

  const fetchInfo = () => {
     axios.get(url).then((res) => {
      const data = res.data.slice(1, 1011) 
      setData(data)
    });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <h1>Pokédex</h1>
      <Board 
        pokemons ={data}
      />
      <SinglePokemon
        id = {idPokemon}
      />
    </>
  )
}

export default App
