<template>
  <div>
    <RecipeDetails :recipe="recipe" />
  </div>
</template>

<script setup>
  const { id } = useRoute().params;
  console.log(id);
  const uri = 'http://localhost:4000/recipes/' + id;
  console.log(uri);
  const { data: recipe, error } = await useFetch(uri);

  const drawerStatus = ref(false);

  provide('drawerStatus', () => {
    return {
      drawerStatus,

      openDrawer() {
        drawerStatus.value = drawerStatus.value === true ? false : true;
        console.log('hej', drawerStatus.value);
      },
    };
  });
</script>

<style scoped>
  /* Your component styles here */
</style>
