import React, { useState, useEffect } from 'react'
import PokemonDetails from 'components/Pokemon/PokemonDetails'
import { fetchPokemons } from '../utils/list'
import PokemonList from 'components/Pokemon/PokemonList'

const Main = () => {
  const [showPokemonDetails, setShowPokemonDetails] = useState(false)
  const [pokemonData, setPokemonData] = useState(false)
  const [list, setList] = useState([])

  useEffect(() => {
    let mounted = true
    fetchPokemons().then((pokemons) => {
      if (mounted) {
        setList(pokemons)
      }
    })
    return () => (mounted = false)
  }, [])

  const displayPokemonDetails = () => {
    setShowPokemonDetails(true)
  }

  const undisplayPokemonDetails = () => {
    setShowPokemonDetails(false)
  }

  const setPokemonDetails = (value) => {
    setPokemonData(value)
  }

  return (
    <div style={{ padding: 50 }}>
      {showPokemonDetails ? (
        <PokemonDetails data={pokemonData} undisplayPokemonDetails={undisplayPokemonDetails} />
      ) : (
        <PokemonList
          data={list.results}
          displayPokemonDetails={displayPokemonDetails}
          setPokemonDetails={setPokemonDetails}
        />
      )}
    </div>
  )
}

export default Main
