<template>
  <Modal>
    <template #header>
      <h2 class="text-lg pb-4">Filter by origin:</h2>
    </template>
    <template #content>
      <ul>
        <li v-for="origin in origins">
          <input
            type="radio"
            :id="origin"
            :value="origin"
            v-model="originFilter"
          />
          {{ upperCase(origin) }}
        </li>
        <li>
          <input type="radio" id="all" value="" v-model="originFilter" /> All
        </li>
      </ul>
    </template>
  </Modal>

  <div class="p-2 xl:p-15 md:p-7">
    <h3 class="text-center pb-4 text-lg">Browse by category</h3>
    <nav class="flex pb-4">
      <div class="mx-auto">
        <ul class="flex flex-wrap gap-4">
          <li v-for="category in categories">
            <NuxtLink
              class="btn"
              :to="{
                name: 'recipes-category-category',
                params: { category: category },
              }"
              >{{ upperCase(category) }}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </nav>
    <div class="flex justify-between">
      <button class="pb-3" @click="openDrawer.toggle()">
        <span class="border-b-2 border-black hover:border-none">Filter</span>
      </button>
      <p>Total: {{ filter.length }}</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 md:gap-3 gap-2">
      <RecipeCard v-for="recipe in filter" :key="recipe.id" :recipe="recipe" />
    </div>
  </div>
</template>

<script setup>
  import { openDrawer } from '~/store/module/openDrawer';

  const originFilter = ref([]);
  const vegan = ref(null);

  const { data: recipeTest } = await useFetch(
    'http://localhost:4000/recipes/',
    {
      transform: (recipes) => {
        return recipes.map((recipe) => ({
          title: recipe.title,
          id: recipe.id,
          category: recipe.category,
          origin: recipe.origin,
          slug: recipe.slug,
          prep_time: recipe.prep_time,
          cook_time: recipe.cook_time,
        }));
      },
    }
  );

  const { data: filter } = await useAsyncData(
    'posts',
    () =>
      $fetch('http://localhost:4000/recipes/', {
        query: {
          origin: originFilter.value,
          vegan: vegan.value,
        },
      }),
    {
      watch: [originFilter],
    }
  );

  const origins = computed(() => {
    const allOrigins = recipeTest.value.map((recipe) => recipe.origin);
    return [...new Set(allOrigins)];
  });

  const categories = computed(() => {
    const allCategories = recipeTest.value.map((recipe) => recipe.category);
    return [...new Set(allCategories)];
  });

  const upperCase = (category) => {
    const blank = category.replace(/-/g, ' ');
    const upper = blank.charAt(0).toUpperCase() + blank.slice(1);
    return upper;
  };
</script>

<style scoped>
  /* Your component styles here */
</style>
