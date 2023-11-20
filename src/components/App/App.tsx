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
  const [favorite, setFavorite] = useState<PokemonFav[]>([]);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);

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
  function setFav(id: number, name: string) {
    // Vérifier si l'élément existe déjà dans le tableau
    const existingFavorite = favorite.find((f) => f.pokedexId === id);
  
    if (existingFavorite) {
      setFavorite(favorite.filter((f) => f.pokedexId !== id));
    } else {
      // Si l'élément n'existe pas, l'ajouter au tableau
      setFavorite([
        ...favorite,
        {
          name: { fr: name },
          pokedexId: id,
        },
      ]);
    }
  }
  const [inputText, setInputText] = useState("");
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lowerCase: string = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  function onClickMenu(boolean : boolean){
    setShowFavorites(boolean);
  }
  return (
    <>
      <h1>Pokédex</h1>
      <Menu 
        onClickMenu={onClickMenu}
      />
      <Search inputHandler={inputHandler} />
      <Board 
        pokemons ={data}
        pokemonsFav = {favorite}
        displayCard = {displayCard}
        setFav = {setFav}
        input={inputText}
        showFavorites={showFavorites}
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
