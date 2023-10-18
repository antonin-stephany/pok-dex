import './SinglePokemon.css'
import { useState, useEffect } from "react";
import axios from "axios";

type SinglePokemonProps = {
    id: number
  }

function SinglePokemon({id}: SinglePokemonProps) {
    const url = `https://api-pokemon-fr.vercel.app/api/v1/pokemon/${id}`;
    const [pokemon, setPokemon] = useState([]);
  
    const fetchInfo = () => {
       axios.get(url).then((res) => {
        console.log(res)
      });
    };
  
    useEffect(() => {
      fetchInfo();
    }, []);
  return (
    <>
      <section className='pokemon-description_container'>
     
      </section>
    </>
  )
}

export default SinglePokemon
