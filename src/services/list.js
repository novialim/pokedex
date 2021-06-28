export async function fetchPokemons() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((data) => data.json())
  return response
}

export async function fetchPokemonData(url) {
  const response = await fetch(url).then((data) => data.json())
  return response
}
