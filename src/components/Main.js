import React, { useState, useEffect } from 'react'
import PokemonDetails from 'components/Pokemon/PokemonDetails'
import { fetchPokemons } from '../utils/list'
import PokemonList from 'components/Pokemon/PokemonList'

const Main = () => {
  const [showPokemonDetails, setShowPokemonDetails] = useState(false)
  const [pokemonData, setPokemonData] = useState(false)
  const [list, setList] = useState([])
  const [bag, setBag] = useState(new Set())
  const STORAGE_KEY = 'savedPokemon'

  useEffect(() => {
    let mounted = true
    fetchPokemons().then((pokemons) => {
      if (mounted) {
        setList(pokemons)
      }
    })

    let storedPokemon = localStorage.getItem(STORAGE_KEY)
    const storedSet = new Set(storedPokemon)
    if (storedSet) {
      setBag(storedSet)
    }

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

  const checkBag = (id, inBag) => {
    let newBag = new Set(bag)
    if (inBag) {
      newBag.add(id)
    } else {
      newBag.delete(id)
    }
    setBag(newBag)
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...newBag]))
  }

  return (
    <div style={{ padding: 50 }}>
      {showPokemonDetails ? (
        <PokemonDetails
          data={pokemonData}
          undisplayPokemonDetails={undisplayPokemonDetails}
          checkBag={checkBag}
          saved={bag.has(pokemonData.id)}
        />
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
