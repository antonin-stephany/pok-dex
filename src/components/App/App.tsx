import './App.css'
import { useState, useEffect } from "react";
import axios from "axios";
import Board from '../Board/Board';
import Search from '../Search/Search';
import SinglePokemon from '../SinglePokemon/SinglePokemon';
import ScrollButton from '../ScrollButton/ScrollButton';
import Menu from '../Menu/Menu';
import { Pokemon, PokemonFav } from '../../type';

function App() {
  const url = "https://tyradex.vercel.app/api/v1/pokemon";
  const [data, setData] = useState<Pokemon[]>([]);
  const [singlePokemon, setSinglePokemon] = useState<Pokemon | undefined>();
  const [favoris, setFavoris] = useState<PokemonFav[]>([]);

  const fetchInfo = () => {
     axios.get(url).then((res) => {
      const data = res.data.slice(1, 1011) 
      function extractInformations<T>(dataArray: T[], properties: (keyof T)[]): T[] {
        return dataArray.map((object) => {
          const newObject: Partial<T> = {};
          for (const prop of properties) {
            newObject[prop] = object[prop];
          }
          return newObject as T;
        });
      }
      const propertiesSelected: (keyof Pokemon)[] = ["pokedexId", "name"];
      const newData: Pokemon[] = extractInformations(data, propertiesSelected);
      setData(newData)
      console.log(newData)
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
        generation: res.data.generation,
        name: {
          fr: res.data.name.fr
        },
        height: res.data.height,
        weight: res.data.weight,
        stats: {
          hp: res.data.stats.hp,
          atk: res.data.stats.atk,
          def: res.data.stats.def,
          spe_atk: res.data.stats.spe_atk,
          spe_def: res.data.stats.spe_def,
          vit: res.data.stats.vit,
        },
        types: res.data.types.map((typeData:{name:string}) => ({
          name: typeData.name,
        })),
          
      }
      setSinglePokemon(pokemon)
     });
  }
  function displayFav(id:number, name:string){
    setFavoris([
      ...favoris,
      {name:{fr: name},
      pokedexId: id}
    ]);
    console.log(favoris)
  }
  const [inputText, setInputText] = useState("");
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lowerCase: string = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <>
      <h1>Pokédex</h1>
      <Menu />
      <Search inputHandler={inputHandler} />
      <Board 
        pokemons ={data}
        displayCard = {displayCard}
        displayFav = {displayFav}
        input={inputText} 
      />
      {singlePokemon &&
      <SinglePokemon 
        pokemon = {singlePokemon}
      />}
      <ScrollButton />
    </>
  )
}

export default App
