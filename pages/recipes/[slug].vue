<template>
  <div>
    <RecipeDetails :recipe="recipe" />
  </div>
</template>

<script setup>
  const { slug } = useRoute().params;
  console.log(slug);

  const uri = `http://localhost:4000/recipes?slug=${slug}`;
  console.log('uri', uri);
  const { data: recipe, error } = await useFetch(uri);
  console.log('only', recipe);

  const drawerStatus = ref(false);

  provide('drawerStatus', () => {
    return {
      drawerStatus,

      openDrawer() {
        drawerStatus.value = drawerStatus.value === true ? false : true;
      },
    };
  });
</script>

<style scoped>
  /* Your component styles here */
</style>
