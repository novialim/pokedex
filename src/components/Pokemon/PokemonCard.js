import React, { useState, useEffect } from 'react'
import { fetchPokemonData } from '../../utils/list'

const PokemonCard = ({ name, url, displayPokemonDetails, setPokemonDetails }) => {
  const [pokemonData, setPokemonData] = useState([])

  useEffect(() => {
    let mounted = true
    fetchPokemonData(url).then((pokemon) => {
      if (mounted) {
        setPokemonData(pokemon)
      }
    })
    return () => (mounted = false)
  }, [url])

  const displayArt = () => {
    if (pokemonData?.length !== 0) {
      return (
        <img
          style={{ width: 150 }}
          src={pokemonData?.sprites.other['official-artwork'].front_default}
          alt={pokemonData?.name}
        />
      )
    }
  }

  const showPokemonDetails = () => {
    displayPokemonDetails(true)
    setPokemonDetails(pokemonData)
  }

  return (
    <>
      <div style={{ width: '20%', marginBottom: 50, cursor: 'pointer' }} onClick={showPokemonDetails}>
        <div>{displayArt()}</div>
        <div>{name}</div>
      </div>
    </>
  )
}

export default PokemonCard
