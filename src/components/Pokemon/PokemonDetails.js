import React from 'react'

const PokemonDetails = ({ data, undisplayPokemonDetails }) => {
  const displayPokemonsPage = () => {
    undisplayPokemonDetails()
  }

  const displayTypes = () => {
    return (
      <p>
        Types: &nbsp;
        {data.types.map(({ type }) => {
          return type.name + ' '
        })}
      </p>
    )
  }

  const displaySkills = () => {
    return data.abilities.map(({ ability }) => {
      return <p>{ability.name}</p>
    })
  }

  return (
    <div>
      {console.log(data)}
      <div>
        <img style={{ width: 150 }} src={data?.sprites.other['official-artwork'].front_default} alt={data?.name} />
        <div>{data?.name}</div>
        <div>
          <p>Height: {data?.height}</p>
        </div>
        <div>
          <p>In Bag: </p>
        </div>
        <div>{displayTypes()}</div>
        <div>
          Pokem ipsum dolor sit amet Exeggutor Kecleon Wing Attack Doduo Red Unown. Sunt in culpa Drilbur Calcium Hoenn
          Shieldon Wynaut Charizard. Growl Venonat Scolipede Espeon Charizard Barboach Hidden Machine. Duis aute irure
          dolor in reprehenderit in voluptate they're comfy and easy to wear Onix what kind of Pokemon are you Fog Badge
          Ampharos Noctowl. Pewter City Marill Slakoth Bronzong Rattata Treecko Cottonee.
        </div>
        <div>{displaySkills()}</div>
      </div>
      <u onClick={displayPokemonsPage} style={{ cursor: 'pointer' }}>
        return to pokemons main page
      </u>
    </div>
  )
}

export default PokemonDetails
