const API_URL = "https://pokeapi.co/api/v2/pokemon/";

export default {
  async getRandomPokemon() {
    const id = Math.floor(Math.random() * 151) + 1; // Solo primera generación
    const response = await fetch(`${API_URL}${id}`);
    const data = await response.json();
    return {
      name: data.name,
      image: data.sprites.other["official-artwork"].front_default,
    };
  },
};
