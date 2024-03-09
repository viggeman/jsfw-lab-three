<template>
  <div class="card">
    <NuxtLink
      :to="{
        name: 'recipes-slug',
        params: { slug: recipe.slug },
      }"
    >
      <img
        class="w-full aspect-square h-h"
        src="https://source.unsplash.com/random"
        alt="Random Image"
      />
      <div class="md:my-2">
        <h1 class="md:text-xl">{{ recipe.title }}</h1>
        <p>{{ recipeCategory }}</p>
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

  const recipeCategory = computed(() => {
    const category = recipe.category;
    const words = category.split('-');
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return capitalizedWords.join(' ');
  });
</script>

<style scoped>
  /* Your component's styles go here */
</style>
