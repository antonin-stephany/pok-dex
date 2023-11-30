import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Board from '../Board/Board.tsx';
import Search from '../Search/Search.tsx';
import SinglePokemon from '../SinglePokemon/SinglePokemon.tsx';
import ScrollButton from '../ScrollButton/ScrollButton.tsx';
import Menu from '../Menu/Menu.tsx';
import { Pokemon, PokemonEssential } from '../../type.tsx';

function App() {
  const initialePokemonsDisplayed = 40;
  const url = 'https://tyradex.vercel.app/api/v1/pokemon';
  const [data, setData] = useState<PokemonEssential[]>([]);
  const [singlePokemon, setSinglePokemon] = useState<Pokemon>();
  const [favorite, setFavorite] = useState<PokemonEssential[]>([]);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [inputText, setInputText] = useState('');
  const [pokemonsDisplayed, setPokemonsDisplayed] = useState<number>(initialePokemonsDisplayed);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetchInfo();
  }, []);

  function fetchInfo() {
    axios
      .get(url)
      .then((res) => {
        const data = res.data.slice(1, 1011);
        const pokemons: PokemonEssential[] = [];
        data.map((pokemon: { pokedexId: number; name: { fr: string } }) =>
          pokemons.push({ pokedexId: pokemon.pokedexId, name: pokemon.name, isFavorite: false }),
        );
        setData(pokemons);
        console.log(pokemons);
      })
      .finally(() => setIsLoading(false));
  }

  function displayCard(id: number) {
    axios.get(`${url}/${id}`).then((res) => {
      console.log(res.data);
      const pokemon = {
        pokedexId: res.data.pokedexId,
        category: res.data.category,
        generation: res.data.generation,
        name: {
          fr: res.data.name.fr,
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
        types: res.data.types.map((typeData: { name: string }) => ({
          name: typeData.name,
        })),
      };
      setSinglePokemon(pokemon);
    });
  }
  function setFav(id: number, name: string) {
    // Vérifier si l'élément existe déjà dans le tableau
    const existingFavorite = favorite.find((f) => f.pokedexId === id);

    if (existingFavorite) {
      setFavorite(favorite.filter((f) => f.pokedexId !== id));
      const newData = data.map((pokemon) => (pokemon.pokedexId === id ? { ...pokemon, isFavorite: false } : pokemon));
      setData(newData);
    } else {
      // Si l'élément n'existe pas, l'ajouter au tableau
      setFavorite([
        ...favorite,
        {
          name: { fr: name },
          pokedexId: id,
          isFavorite: true,
        },
      ]);
      const newData = data.map((pokemon) => (pokemon.pokedexId === id ? { ...pokemon, isFavorite: true } : pokemon));
      setData(newData);
    }
  }
  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const lowerCase: string = e.target.value.toLowerCase();
    setInputText(lowerCase);
    setPokemonsDisplayed(initialePokemonsDisplayed);
  }

  function onClickMenu(boolean: boolean) {
    setShowFavorites(boolean);
    setPokemonsDisplayed(initialePokemonsDisplayed);
  }

  function handleHidePanel() {
    setSinglePokemon(undefined);
  }
  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop + 120 <= document.documentElement.offsetHeight ||
      isLoading ||
      pokemonsDisplayed > 1011
    ) {
      return;
    }
    setPokemonsDisplayed((nb) => nb + 40);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);
  return (
    <>
      <section className={`loader-container ${isLoading ? '' : 'hide'}`}>
        <div className="loader"></div>
      </section>
      <main>
        <h1>Pokédex</h1>
        <Menu onClickMenu={onClickMenu} showFavorites={showFavorites} />
        <Search inputHandler={inputHandler} />
        <Board
          pokemons={data}
          pokemonsFav={favorite}
          pokemonsIndexMax={pokemonsDisplayed}
          displayCard={displayCard}
          setFav={setFav}
          input={inputText}
          showFavorites={showFavorites}
          singlePokemon={singlePokemon}
        />
        {singlePokemon && <SinglePokemon pokemon={singlePokemon} onClickPanel={handleHidePanel} />}
        <ScrollButton />
      </main>
    </>
  );
}

export default App;
