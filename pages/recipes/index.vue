<template>
  <div class="py-5">
    <input type="text" v-model="id" />

    <input type="checkbox" id="vegan" value="vegan" v-model="checkedNames" />
    <label for="vegan">Vegan</label>

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
  const vegan = ref(null);
  const checkedNamesTest = ref([]);

  const { data: recipesSort, pending } = useLazyFetch(
    'http://localhost:4000/recipes/',
    {
      query: {
        origin: id,
        vegan: vegan,
      },
    },
    {
      immediate: false,
    }
  );

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
