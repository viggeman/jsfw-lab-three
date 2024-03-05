<template>
  <div class="py-5">
    <NuxtLink to="/recipes">Back to all recipes</NuxtLink>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-3 sm:mx-2">
      <RecipeCard
        v-for="recipe in categoryData"
        :key="recipe.id"
        :recipe="recipe"
      />
    </div>
  </div>
</template>

<script setup>
  const { category } = useRoute().params;
  console.log(category);
  const uri = `http://localhost:4000/recipes?category=${category}`;
  console.log(uri);
  const { data: categoryData, error } = await useFetch(uri);
</script>

<style scoped>
  /* Your component styles here */
</style>
