<template>
  <div class="py-5">
    <input type="text" v-model="id" />
    <input type="checkbox" v-model="checked" />
    <div class="grid grid-cols-2 md:grid-cols-3 gap-3 sm:mx-2">
      <RecipeCard
        v-if="recipes"
        v-for="recipe in recipesSort"
        :key="recipe.id"
        :recipe="recipe"
      />
    </div>
  </div>
</template>

<script setup>
  const id = ref('');
  const bool = ref(null);
  console.log(bool.value);
  const { data: recipes, error } = await useFetch(
    'http://localhost:4000/recipes/'
  );
  // const { data: recipes, error } = useLazyFetch(
  //   () => `http://localhost:4000/recipes/${id.value}`,
  //   {
  //     immediate: true,
  //   }
  // );
  const { data: recipesSort, pending } = useLazyFetch(
    'http://localhost:4000/recipes/',
    {
      query: {
        origin: id,
        vegan: bool,
      },
    }
  );
  const checked = computed({
    get: () => {
      return bool.value === 1;
    },
    set: (value) => {
      console.log('value', value);
      if (value === true) {
        bool.value = 1;
      } else if (value === false) {
        bool.value = 0;
      }
      console.log('bool value', bool.value);
    },
  });
</script>

<style scoped>
  /* Your component styles here */
</style>
