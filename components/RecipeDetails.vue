<template>
  <div class="grid md:grid-cols-2">
    <div class="p-3">
      <img
        class="w-full aspect-square h-h"
        src="https://source.unsplash.com/random"
        alt="Random Image"
      />
    </div>

    <div class="p-3">
      <h1 class="mb-5 text-2xl">{{ recipe[0].title }}</h1>
      <p class="text-s">{{ recipe[0].origin }}</p>
      <p class="mb-5">{{ recipe[0].short_description }}</p>
      <div class="mb-4 card max-w-xs">
        <p>{{ recipe[0].servings }} Servings</p>
        <p class="text-s">
          <span>Prep time: </span>{{ recipe[0].prep_time }} minutes
        </p>
        <p class="text-s" v-if="recipe[0].cook_time !== 0">
          <span>Cook time: </span>{{ recipe[0].cook_time }} minutes
        </p>
        <p v-else>No cooking time</p>
      </div>

      <ul>
        <li>
          <button @click="openDrawer.toggle()">Preparation</button>
        </li>
        <li>
          <button @click="openDrawer.toggle()">Ingredients</button>
        </li>
        <li>
          <button @click="openDrawer.toggle()">Open</button>
        </li>
      </ul>
    </div>

    <div class="p-3">
      <h2>Description:</h2>
      <p>{{ recipe[0].description }}</p>
    </div>
    <Modal name="first-modal">
      <template #header>
        <div class="m-4">
          <h2 class="border-b-2 mb-4 pb-2">Ingredients</h2>
          <ul class="border-b-2 mb-4 pb-2">
            <li
              class="text-s my-1"
              v-for="ingredient in recipe[0].ingredients"
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
              v-for="step in recipe[0].instructions"
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
  import { openDrawer } from '~/store/module/openDrawer';
  const { recipe } = defineProps(['recipe']);
  // const { recipe } = data;
  console.log('recipe detail', recipe[0].id);
</script>

<style scoped>
  /* Add your component styles here */
</style>
