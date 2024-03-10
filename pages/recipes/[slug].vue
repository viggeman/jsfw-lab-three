<template>
  <div>
    <RecipeDetails :recipe="recipe" />
  </div>
</template>

<script setup>
  const { slug } = useRoute().params;

  const uri = `http://localhost:4000/recipes?slug=${slug}`;
  const { data: recipe, error } = await useFetch(uri);
</script>

<style scoped>
  /* Your component styles here */
</style>
