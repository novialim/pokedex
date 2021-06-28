import React, { useState } from 'react'
import PokemonGallery from 'components/Pokemon/PokemonGallery'
import PokemonDetails from 'components/Pokemon/PokemonDetails'

const Main = () => {
  const [showPokemonDetails, setShowPokemonDetails] = useState(false)
  const [pokemonData, setPokemonData] = useState(false)

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
        <PokemonGallery displayPokemonDetails={displayPokemonDetails} setPokemonDetails={setPokemonDetails} />
      )}
    </div>
  )
}

export default Main
