import './App.css'
import { useState, useEffect } from "react";
import axios from "axios";
import Board from '../Board/Board'

function App() {
  const url = "https://api-pokemon-fr.vercel.app/api/v1/pokemon";
  const [data, setData] = useState([]);

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
      <h1>Pokedex</h1>
      <Board 
        pokemons ={data}
      />
    </>
  )
}

export default App
