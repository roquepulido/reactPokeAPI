import React from 'react'
import pokeB from "../assets/Poké_Ball_icon.svg"
import "../css/pokeballSpin.css"

function PokeballSpin() {
  return (
    <img src={pokeB} className="spin" alt="Spinner" height={80} />
  )
}

export default PokeballSpin