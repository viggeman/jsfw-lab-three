<template>
  <div class="card">
    <NuxtLink :to="`/recipes/${recipe.id}`">
      <h1>{{ recipe.title }}</h1>
    </NuxtLink>
  </div>
</template>

<script setup>
  const { recipe } = defineProps(['recipe']);
</script>

<style scoped>
  /* Your component's styles go here */
</style>
