import React, { useState, useEffect } from 'react'
import { fetchLocation } from '../../utils/list'
import GoogleMapReact from 'google-map-react'

const PokemonDetails = ({ data, undisplayPokemonDetails }) => {
  const [locations, setLocations] = useState([])
  const imgSrc = data?.sprites.other['official-artwork'].front_default

  const sampleLocations = [
    '32.96045,-117.15778',
    '32.734196,-117.139709',
    '32.833744,-117.067149',
    '32.819219,-117.029244',
    '32.907707,-116.797917',
  ]

  const defaultProps = {
    center: {
      lat: 32.96045,
      lng: -117.15778,
    },
    zoom: 11,
  }

  const displayPokemonsPage = () => {
    undisplayPokemonDetails()
  }

  const displayTypes = () => {
    return (
      <p>
        Types: &nbsp;
        {data.types.map(({ type }, i) => {
          return <span key={i}>{type.name + ' '}</span>
        })}
      </p>
    )
  }

  const displaySkills = () => {
    return data.abilities.map(({ ability }, i) => {
      return <p key={i}>{ability.name}</p>
    })
  }

  useEffect(() => {
    setLocations(fetchLocation(data.id))
  }, [data.id])

  return (
    <div>
      <div style={{ cursor: 'pointer', marginBottom: 50 }}>
        <u onClick={displayPokemonsPage}>return to pokemons main page</u>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '50%' }}>
          <img style={{ width: 150 }} src={imgSrc} alt={data?.name} />
          <div>
            <b>{data?.name}</b>
          </div>
          <div>
            <p>Height: {data?.height}</p>
          </div>
          <div>
            <p>In Bag: </p>
          </div>
          <div>{displayTypes()}</div>
          <div>
            Pokem ipsum dolor sit amet Exeggutor Kecleon Wing Attack Doduo Red Unown. Sunt in culpa Drilbur Calcium
            Hoenn Shieldon Wynaut Charizard. Growl Venonat Scolipede Espeon Charizard Barboach Hidden Machine. Duis aute
            irure dolor in reprehenderit in voluptate they're comfy and easy to wear Onix what kind of Pokemon are you
            Fog Badge Ampharos Noctowl. Pewter City Marill Slakoth Bronzong Rattata Treecko Cottonee.
          </div>
          <div style={{ marginTop: 50 }}>
            <b>Abilities</b>
          </div>
          <div>{displaySkills()}</div>
        </div>
        <div style={{ height: '50vh', width: '50%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCzk6r_fr0Fv5NQuzS1kvy5OOZvGUyfDMY' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}>
            {/* {locations?.map(({ lat, lng }, i) => {
            return <Marker key={i} lat={lat} lng={lng} imgSrc={imgSrc} />
          })} */}
            {sampleLocations?.map(({ lat, lng }, i) => {
              return <Marker key={i} lat={lat} lng={lng} imgSrc={imgSrc} />
            })}
          </GoogleMapReact>
        </div>
      </div>
    </div>
  )
}

const Marker = (imgSrc) => {
  return <img src={imgSrc} alt="" />
}

export default PokemonDetails
