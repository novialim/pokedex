// https://pokeapi.co/
// Use the v2 API when getting information regarding the list of Pokémon, their abilities, their names, their type, image sprites, etc.
// The API is subject to 100 requests per IP address per minute, so please make sure you can cache as much as you can as possible.

import React, { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = ({ displayPokemonDetails, setPokemonDetails, data, bag }) => {
  const [searchValue, setSearchValue] = useState('')
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    const filterPokemonList = (searchValue) => {
      let filteredList = []
      if (!searchValue) {
        setFilteredList(data)
      } else {
        filteredList = data.filter((pokemon) => {
          return pokemon.name.toLowerCase().startsWith(searchValue)
        })

        setFilteredList(filteredList)
      }
    }
    filterPokemonList(searchValue)
  }, [data, searchValue])

  const updateSearchValue = (searchVal) => {
    setSearchValue(searchVal)
  }

  const filterList = () => {
    let filteredByBag = data.filter((pokemon) => pokemon.url.includes(bag))
    console.log(filteredByBag)
    // setFilteredList(filteredByBag)
  }
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: 10 }}>
        <button onClick={() => updateSearchValue('')}>All</button>
        <button onClick={() => filterList()}>Bag</button>
      </div>
      <div style={{ textAlign: 'center', marginBottom: 10 }}>
        <input
          placeholder="search"
          type="search"
          onChange={(e) => {
            updateSearchValue(e.target.value)
          }}
        />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredList?.map(({ name, url }) => {
          return (
            <PokemonCard
              key={name}
              name={name}
              url={url}
              displayPokemonDetails={displayPokemonDetails}
              setPokemonDetails={setPokemonDetails}
            />
          )
        })}
      </div>
    </div>
  )
}

export default PokemonList
