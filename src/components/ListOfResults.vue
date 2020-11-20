<template>
  <h1>{{ title }}</h1>
  <ul>
    <li v-for="{ id, name, image } in results" :key="id">
      <img v-if="image" :src="image" :alt="name"/>
      {{ name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListOfResults',
  props: {
    title: String,
    results: Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
