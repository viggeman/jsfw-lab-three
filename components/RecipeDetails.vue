<template>
  <div class="grid grid-cols-2">
    <div class="p-3">
      <img
        class="w-full aspect-square h-h"
        src="https://source.unsplash.com/random"
        alt="Random Image"
      />
    </div>
    <div class="p-3">
      <h1 class="mb-5 text-2xl">{{ recipe.title }}</h1>
      <p class="text-s">{{ recipe.origin }}</p>
      <p class="mb-5">{{ recipe.short_description }}</p>
      <div class="mb-4 card max-w-xs">
        <p>{{ recipe.servings }} Servings</p>
        <p class="text-s">
          <span>Prep time: </span>{{ recipe.prep_time }} minutes
        </p>
        <p class="text-s" v-if="recipe.cook_time !== 0">
          <span>Cook time: </span>{{ recipe.cook_time }} minutes
        </p>
        <p v-else>No cooking time</p>
      </div>
      <ul>
        <li>
          <button @click="openDrawer">Preparation</button>
        </li>
        <li>
          <button @click="openDrawer">Ingredients</button>
        </li>
      </ul>
    </div>
    <div class="p-3">
      <h2>Description:</h2>
      <p>{{ recipe.description }}</p>
    </div>
    <Modal name="first-modal">
      <template #header>
        <div class="m-4">
          <h2 class="border-b-2 mb-4 pb-2">Ingredients</h2>
          <ul class="border-b-2 mb-4 pb-2">
            <li
              class="text-s my-1"
              v-for="ingredient in recipe.ingredients"
              :key="ingredient.id"
            >
              {{ ingredient.name }} - {{ ingredient.amount
              }}{{ ingredient.unit }}
              <span v-if="ingredient.preparation">{{
                ingredient.preparation
              }}</span>
            </li>
          </ul>
        </div>
      </template>
      <template #content>
        <div class="m-4">
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
      </template>
      <template #footer>Custom content</template>
    </Modal>
  </div>
</template>

<script setup>
  const { recipe } = defineProps(['recipe']);
  const drawer = inject('drawerStatus');
  const { openDrawer } = drawer();
  console.log(recipe);
</script>

<style scoped>
  /* Add your component styles here */
</style>
