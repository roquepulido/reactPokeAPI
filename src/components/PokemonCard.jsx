import axios from 'axios'
import React,{useState} from 'react'

function PokemonCard({name, url}) {
    const [pokemonFicha, setPokemonFicha] = useState(null);
    axios.get(url)
    .then(respuesta=>{setPokemonFicha(respuesta)})
  return (
    <div className='fichaPokemon'>
        <h1>{name}</h1>
        <p>{JSON.stringify(pokemonFicha,"",2)}</p>
    </div>
  )
}

export default PokemonCard