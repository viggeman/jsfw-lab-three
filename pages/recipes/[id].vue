<template>
  <div>
    <RecipeDetails :recipe="recipe" />
  </div>
</template>

<script setup>
  const { id } = useRoute().params;
  console.log(id);
  const uri = 'http://localhost:4000/recipes/' + id;
  console.log(uri);
  const { data: recipe, error } = await useFetch(uri);
</script>

<style scoped>
  /* Your component styles here */
</style>
