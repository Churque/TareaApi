<template>
  <div class="col-md-4">
    <div class="card mb-4 box-shadow">
      <img class="card-img-top" :src="getImageUrl()" alt="Thumbnail [100%x225]">
      <div class="card-body">
        <p class="card-text">
          <strong>Name: </strong>{{ pokemon.name }}
        </p>
        <p class="card-text">
          <strong> Peso: </strong>{{ pokemon.weight }} 
        </p>
        <p class="card-text">
          <strong> Altura: </strong>{{ pokemon.height  * 10 }} cm
        </p>
        <div class="d-flex custom-centered">
          <div class="btn-group d-flex justify-content-center">
            <router-link :to="`/HabilidadesPokemon/${pokemonId}`" class="btn btn-sm btn-outline-secondary"> Ver Habilidades</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPokemonId } from "../services/pokemonService.js";

export default {
  name: "PokemonCard",
  props: {
    pokemon: {
      type: Object,
    },
  },
  data() {
    return {
      pokemonId: 0, 
    };
  },
  async mounted() {
    this.pokemonId = await getPokemonId(this.pokemon.name);
  },
  
  methods: {
    getImageUrl() {
      if (this.pokemonId) {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonId}.png`;
      }
      return "";
    },
  },
};
</script>

<style>
.custom-centered {
  display: flex;
  justify-content: center;
}
</style>