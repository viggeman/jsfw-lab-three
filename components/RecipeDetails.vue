<template>
  <div class="grid grid-cols-2 gap-5">
    <div class="p-7">
      <img src="" alt="" />
    </div>
    <div class="p-7">
      <h1 class="text-2xl">{{ recipe.title }}</h1>
      <p class="text-s">{{ recipe.origin }}</p>
      <p>{{ recipe.servings }} Servings</p>
      <p class="text-s">
        <span>Prep time: </span>{{ recipe.prep_time }} minutes
      </p>
      <p class="text-s" v-if="recipe.cook_time !== 0">
        <span>Cook time: </span>{{ recipe.cook_time }} minutes
      </p>
      <p v-else>No cooking time</p>
      <h2 class="border-b-2 mb-4 pb-2">Ingredients</h2>
      <ul class="border-b-2 mb-4 pb-2">
        <li
          class="text-s my-1"
          v-for="ingredient in recipe.ingredients"
          :key="ingredient.id"
        >
          {{ ingredient.name }} - {{ ingredient.amount }}{{ ingredient.unit }}
          <span>{{ ingredient.preparation }}</span>
        </li>
      </ul>
      <h2 class="border-b-2 mb-4 pb-2">Instructions</h2>
      <ul>
        <li
          class="list-inside list-decimal my-1"
          v-for="step in recipe.instructions"
        >
          {{ step }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  const { recipe, ingredients } = defineProps(['recipe']);
  console.log(recipe);
</script>

<style scoped>
  /* Add your component styles here */
</style>
