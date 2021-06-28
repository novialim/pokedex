// https://pokeapi.co/
// Use the v2 API when getting information regarding the list of Pokémon, their abilities, their names, their type, image sprites, etc.
// The API is subject to 100 requests per IP address per minute, so please make sure you can cache as much as you can as possible.

import React, { useState, useEffect } from 'react'
import { fetchPokemons } from '../../utils/list'
import PokemonList from './PokemonList'

const PokemonGallery = ({ displayPokemonDetails, setPokemonDetails }) => {
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

  return (
    <PokemonList
      data={list.results}
      displayPokemonDetails={displayPokemonDetails}
      setPokemonDetails={setPokemonDetails}
    />
  )
}

export default PokemonGallery
