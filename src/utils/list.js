export async function fetchPokemons() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((data) => data.json())
  return response
}

export async function fetchPokemonData(url) {
  const response = await fetch(url).then((data) => data.json())
  return response
}

export async function fetchLocation(id) {
  try {
    const response = await fetch(`https://api.craft-demo.net/pokemon/${id}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': 'HHko9Fuxf293b3w56zAJ89s3IcO9D5enaEPIg86l',
      },
    })
    const data = await response.json()

    if (data.locations) {
      const locations = data.locations.map((coord) => {
        let coordinates = coord.split(',')
        return {
          lat: parseFloat(coordinates[0]),
          lng: parseFloat(coordinates[1]),
        }
      })
      return locations
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}
