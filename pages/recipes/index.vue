<template>
  <div class="py-5">
    <input type="text" v-model="id" />

    <input type="checkbox" id="vegan" value="vegan" v-model="checkedNames" />
    <label for="vegan">Vegan</label>

    <input
      type="checkbox"
      id="vegetarian"
      value="vegetarian"
      v-model="checkedNames"
    />
    <label for="vegetarian">Vegetarian</label>

    <input
      type="checkbox"
      id="glutenFree"
      value="glutenFree"
      v-model="checkedNames"
    />
    <label for="glutenFree">Gluten Free</label>

    <input
      type="checkbox"
      id="dairyFree"
      value="dairyFree"
      v-model="checkedNames"
    />
    <label for="dairyFree">Dairy Free</label>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-3 sm:mx-2">
      <RecipeCard
        v-for="recipe in recipesSort"
        :key="recipe.id"
        :recipe="recipe"
      />
    </div>
  </div>
</template>

<script setup>
  const id = ref('');
  const filterNamesTest = ref({
    vegan: null,
    vegetarian: null,
    glutenFree: null,
    dairyFree: null,
  });
  const checkedNamesTest = ref([]);

  const { data: recipesSort } = useLazyFetch('http://localhost:4000/recipes/', {
    query: {
      origin: id,
      vegan: filterNamesTest.value.vegan,
      // vegetarian: filterNamesTest.value.vegetarian,
    },
  });

  const checkedNames = computed({
    get: () => {
      return checkedNamesTest.value;
    },
    set: (value) => {
      checkedNamesTest.value = value;
      const updateFilterNames = (value) => {
        const filterNames = {
          vegan: value.includes('vegan') ? '1' : '0',
          vegetarian: value.includes('vegetarian') ? '1' : '0',
          glutenFree: value.includes('glutenFree') ? '1' : '0',
          dairyFree: value.includes('dairyFree') ? '1' : '0',
        };

        filterNamesTest.value = { ...filterNamesTest.value, ...filterNames };
      };

      // Usage:
      if (value.length === 0) {
        filterNamesTest.value = {
          vegan: null,
          vegetarian: null,
          glutenFree: null,
          dairyFree: null,
        };
      } else {
        updateFilterNames(value);
      }
      console.log('filterNamesTest.value', filterNamesTest.value);
    },
  });
</script>

<style scoped>
  /* Your component styles here */
</style>
