<template>
  <div class="global-layout">
    <header>
      <nav class="mx-auto p-2 md:p-7 flex justify-between">
        <NuxtLink to="/">HOME</NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink class="btn" to="/recipes">Recipes</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <main class="container mx-auto">
      <slot />
    </main>
  </div>
</template>

<script></script>

<style scoped>
  /* Component styles go here */
</style>
