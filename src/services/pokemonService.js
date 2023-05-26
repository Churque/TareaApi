import axios from "axios";

const BASE_URL = 'https://pokeapi.co/api/v2';
const IMAGE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

  function showPokemonNum1_4_7() {
    const pokemonNumbers = [1, 4, 7];
    const requests = pokemonNumbers.map((number) =>axios.get(`${BASE_URL}/pokemon/${number}`));
    return axios.all(requests).then((datas) => datas.map((data) => data.data));
  }
  
  async function getPokemonId(name) {
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return data.data.id;
  }

  function getImage(id){
    return axios.get(`${IMAGE_URL}/${id}.png`).then((data) => {
      return data.data
    })
  }

  function getPokemonAbilities(id) {
    return axios
      .get(`${BASE_URL}/pokemon/${id}`).then((data) => 
      {const abilities = data.data.abilities.map((ability) => ability.ability.name);
        return abilities;})
  }
  
  export {getPokemonAbilities, getImage, getPokemonId, showPokemonNum1_4_7};

