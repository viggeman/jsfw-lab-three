<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </div>
  </div>
</template>

<script setup>
  const { data: recipes, error } = await useFetch(
    'http://localhost:4000/recipes'
  );
  console.log(recipes);
</script>

<style scoped>
  /* Your component styles here */
</style>