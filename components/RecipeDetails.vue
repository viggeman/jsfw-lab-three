<template>
  <div class="grid grid-cols-2 gap-5">
    <div class="p-7">
      <img src="" alt="" />
    </div>
    <div class="p-7">
      <Modal
        :isOpen="drawerStatus"
        @open-drawer="openDrawer"
        name="first-modal"
      >
        <template #header>
          <div class="m-4">
            <h2 class="border-b-2 mb-4 pb-2">Ingredients</h2>
            <ul class="border-b-2 mb-4 pb-2">
              <li
                class="text-s my-1"
                v-for="ingredient in recipe.ingredients"
                :key="ingredient.id"
              >
                {{ ingredient.name }} - {{ ingredient.amount
                }}{{ ingredient.unit }}
                <span>{{ ingredient.preparation }}</span>
              </li>
            </ul>
          </div>
        </template>
        <template #content>
          <div class="m-4">
            <h2 class="border-b-2 mb-4 pb-2">Instructions</h2>
            <ul>
              <li
                class="list-inside list-decimal my-1"
                v-for="step in recipe.instructions"
              >
                {{ step }}
              </li>
            </ul>
          </div>
        </template>
        <template #footer>Custom content</template>
      </Modal>
      <h1 class="text-2xl">{{ recipe.title }}</h1>
      <p class="text-s">{{ recipe.origin }}</p>
      <p>{{ recipe.servings }} Servings</p>
      <p class="text-s">
        <span>Prep time: </span>{{ recipe.prep_time }} minutes
      </p>
      <p class="text-s" v-if="recipe.cook_time !== 0">
        <span>Cook time: </span>{{ recipe.cook_time }} minutes
      </p>
      <p v-else>No cooking time</p>
      <ul>
        <li>
          <button @click="openDrawer">Preparation</button>
        </li>
        <li>
          <button @click="openDrawer">Ingredients</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  const { recipe, ingredients } = defineProps(['recipe']);
  console.log(recipe);
  const drawerStatus = ref(false);
  const openDrawer = () => {
    if (drawerStatus.value) {
      drawerStatus.value = false;
      console.log('Drawer closed', drawerStatus.value);
      return;
    }
    drawerStatus.value = true;
    console.log('Drawer opened', drawerStatus.value);
  };
</script>

<style scoped>
  /* Add your component styles here */
</style>
