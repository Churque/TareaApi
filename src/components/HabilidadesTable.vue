<template>
  <div class="habilidades_pokemon">
    <h2 class="mb-3">Habilidades del Pokémon</h2>
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="ability in abilities" :key="ability">
        <span>{{ ability }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PokemonHabilidades",
  props: {
    abilities: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>