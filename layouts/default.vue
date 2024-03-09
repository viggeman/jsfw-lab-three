<template>
  <div class="global-layout">
    <header>
      <nav class="mx-auto p-7 flex justify-between">
        <NuxtLink to="/">RECIPES</NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink class="btn" to="/recipes">Recipes</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <main class="mx-auto">
      <slot />
    </main>
  </div>
</template>

<script></script>

<style scoped>
  /* Component styles go here */
</style>
