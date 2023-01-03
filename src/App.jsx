import axios from 'axios'
import './App.css'
import React from 'react';
import PokeballSpin from './components/Pokeball';
import PokemonCard from './components/PokemonCard';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';

function App() {
  const [poke,setPoke] = React.useState(null);

  React.useEffect(()=>{
    axios.get(url)
    .then(response =>{setPoke(response.data.results)});
  },[]);


  
  return (
    <div className="App">
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/250px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon" />
      <div className="contenedor">

     {(poke == null)? <PokeballSpin />: poke.map(pokemon=><PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />)}
      </div>
    </div>
  )
}

export default App
