<template>
  <div class="global-layout">
    <header>
      <nav class="container mx-auto p-4 flex justify-between">
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

    <nav>
      <!-- Navigation content goes here -->
    </nav>

    <main class="container mx-auto p-4">
      <!-- Main content goes here -->
      <slot />
    </main>

    <footer>
      <!-- Footer content goes here -->
    </footer>
  </div>
</template>

<script></script>

<style scoped>
  /* Component styles go here */
</style>
