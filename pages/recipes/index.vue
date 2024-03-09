<template>
  <div class="py-5">
    <Modal>
      <template #header>
        <h2>Filter</h2>
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
      <p>test</p>
    </Modal>

    <h3>Browse by category</h3>
    <nav class="mx-auto p-7 flex justify-between">
      <ul class="flex gap-4">
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
    </nav>
    <div class="flex justify-between">
      <button @click="openDrawer.toggle()">Filter</button>
      <p>Total: {{ filter.length }}</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-3 sm:mx-2">
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

  watch(vegan, (newVal) => {
    console.log('vegan', newVal);
  });

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
