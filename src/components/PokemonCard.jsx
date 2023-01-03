import axios from 'axios'
import React,{useState,useEffect} from 'react'
import PokeballSpin from './Pokeball';
import "../css/PokemonCard.css";

function PokemonCard({name, url}) {
    const [pokemonFicha, setPokemonFicha] = useState(null);

    useEffect(()=>{
      axios.get(url)
    .then(respuesta=>setPokemonFicha(respuesta.data))
      
    },[]);  
   
  return (
    <div className='fichaPokemon'>
      {(pokemonFicha == null)? <PokeballSpin />:<img src={pokemonFicha.sprites.other.dream_world.front_default} alt={name} /> }
        <h2>{name}</h2>       
    </div>
  )
}

export default PokemonCard