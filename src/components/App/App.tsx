import './App.css'
import { useState, useEffect } from "react";
import axios from "axios";
import Board from '../Board/Board'
import SinglePokemon from '../SinglePokemon/SinglePokemon'
import { Pokemon } from '../../type';

function App() {
  const url = "https://api-pokemon-fr.vercel.app/api/v1/pokemon";
  const [data, setData] = useState<Pokemon[]>([]);
  const [singlePokemon, setSinglePokemon] = useState<Pokemon | undefined>();


  const fetchInfo = () => {
     axios.get(url).then((res) => {
      const data = res.data.slice(1, 1011) 
      console.log(data)
      function extractInformations<T>(dataArray: T[], properties: (keyof T)[]): T[] {
        return dataArray.map((object) => {
          const newObject: Partial<T> = {};
          for (const prop of properties) {
            newObject[prop] = object[prop];
          }
          return newObject as T;
        });
      }
      const propertiesSelected: (keyof Pokemon)[] = ["pokedexId", "category", "name"];
      const newData: Pokemon[] = extractInformations(data, propertiesSelected);
      console.log(newData)
      setData(newData)
    });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  function displayCard(id:number){
    axios.get(`${url}/${id}`).then((res) => {
      console.log(res.data)
      const pokemon = {
        pokedexId: res.data.pokedexId,
        category:  res.data.category,
        name: {
          fr: res.data.name.fr
        }
      }
      console.log(pokemon)
      setSinglePokemon(pokemon)
     });
  }

  return (
    <>
      <h1>Pokédex</h1>
      <Board 
        pokemons ={data}
        displayCard = {displayCard}
      />
      {singlePokemon &&
      <SinglePokemon 
        pokemon = {singlePokemon}
      />}
    </>
  )
}

export default App
