<template>
  <div class="card">
    <NuxtLink :to="`/recipes/${recipe.id}`">
      <img
        class="w-full aspect-square h-h"
        src="https://source.unsplash.com/random"
        alt="Random Image"
      />
      <div class="my-2">
        <h1 class="text-xl">{{ recipe.title }}</h1>
        <p>{{ recipe.category }}</p>
        <p>Time: {{ totalCookingTime }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
  const { recipe } = defineProps(['recipe']);
  const totalCookingTime = computed(() => {
    const totalTime = recipe.cook_time + recipe.prep_time;
    if (totalTime === 60) {
      return `${Math.floor(totalTime / 60)}h`;
    } else if (totalTime > 60) {
      return `${Math.floor(totalTime / 60)}h ${totalTime % 60}min`;
    } else {
      return `${totalTime}min`;
    }
  });
</script>

<style scoped>
  /* Your component's styles go here */
</style>
