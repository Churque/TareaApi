<template>
<nav-pagina/>
  <div class="pokemon-details">
    <pokemon-habilidades :abilities="abilities"/>
  </div>
</template>

<script>
import { getPokemonAbilities } from "../services/pokemonService.js";
import PokemonHabilidades from '../components/HabilidadesTable.vue';
import navPagina from '../components/navPagina.vue';

export default {
  name: "HabilidadesPokemon",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  components: {
    PokemonHabilidades,
    navPagina,
  },
  data() {
    return {
      abilities: [],
      pokemons:[],
    };
  },
  async mounted() {
      this.abilities = await getPokemonAbilities(this.id);

  },
};
</script>

<style scoped>
</style>