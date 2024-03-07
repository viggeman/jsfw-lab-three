<template>
  <div class="py-5">
    <input type="text" v-model="id" />

    <input type="checkbox" id="vegan" value="vegan" v-model="checkedNames" />
    <label for="vegan">Vegan</label>
    <h3>Browse by category</h3>
    <nav class="mx-auto p-7 flex justify-between">
      <ul class="flex gap-4">
        <li v-for="category in categories">
          <NuxtLink
            :to="{
              name: 'recipes-category-category',
              params: { category: category },
            }"
            >{{ upperCase(category) }}</NuxtLink
          >
        </li>
      </ul>
    </nav>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-3 sm:mx-2">
      <RecipeCard
        v-for="recipe in recipeTest"
        :key="recipe.id"
        :recipe="recipe"
      />
    </div>
  </div>
</template>

<script setup>
  const id = ref('');
  const vegan = ref(null);
  const checkedNamesTest = ref([]);

  const { data: recipesSort } = await useFetch(
    'http://localhost:4000/recipes/'
  );
  console.log(recipesSort.value);
  const { data: recipeTest } = await useFetch(
    'http://localhost:4000/recipes/',
    {
      transform: (recipes) => {
        return recipes.map((recipe) => ({
          title: recipe.title,
          id: recipe.id,
          category: recipe.category,
          slug: recipe.slug,
          prep_time: recipe.prep_time,
          cook_time: recipe.cook_time,
        }));
      },
    }
  );

  console.log(recipeTest.value);

  const categories = computed(() => {
    const allCategories = recipesSort.value.map((recipe) => recipe.category);
    return [...new Set(allCategories)];
  });
  const upperCase = (category) => {
    const blank = category.replace(/-/g, ' ');
    const upper = blank.charAt(0).toUpperCase() + blank.slice(1);
    return upper;
  };
  const checkedNames = computed({
    get: () => {
      return checkedNamesTest.value;
    },
    set: (value) => {
      checkedNamesTest.value = value;
      const updateFilterNames = (value) => {
        vegan.value = value.includes('vegan') ? '1' : '0';
        return {
          vegan: vegan.value,
        };
      };

      // Usage:
      if (value.length === 0) {
        vegan.value = null;
        return {
          vegan: null,
        };
      } else {
        return updateFilterNames(value);
      }
    },
  });
</script>

<style scoped>
  /* Your component styles here */
</style>
