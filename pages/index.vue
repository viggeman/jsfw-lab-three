<template>
  <div>
    <img
      class="w-full h-[50vh] object-cover sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]"
      src="https://source.unsplash.com/random"
      alt="Random Image"
    />
    <h2>All categories</h2>
    <div class="grid md:grid-cols-3 grid-cols-2 gap-4 py-4">
      <div v-for="category in categories" class="h-60 md:h-80 pb-4">
        <NuxtLink
          :key="category"
          :to="{
            name: 'recipes-category-category',
            params: { category: category },
          }"
        >
          <img
            class="w-full max-h-full object-cover"
            src="https://source.unsplash.com/random"
            alt="Random Image"
          />
          <h3>{{ upperCase(category) }}</h3>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { data: recipesSort } = await useFetch(
    'http://localhost:4000/recipes/'
  );

  const categories = computed(() => {
    const allCategories = recipesSort.value.map((recipe) => recipe.category);
    return [...new Set(allCategories)]; // remove duplicates
  });

  const upperCase = (category) => {
    const blank = category.replace(/-/g, ' ');
    const upper = blank.charAt(0).toUpperCase() + blank.slice(1);
    return upper;
  };
</script>

<style scoped></style>
