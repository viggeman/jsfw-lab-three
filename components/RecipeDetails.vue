<template>
  <Modal name="first-modal">
    <template #header>
      <div>
        <h2 class="border-b-2 mb-4 pb-2">Ingredients</h2>
        <ul class="border-b-2 mb-4 pb-2">
          <li
            class="list-inside list-none my-1"
            :class="
              ingredientCheck.includes(ingredient.name + ingredient.amount)
                ? 'checked'
                : ''
            "
            v-for="ingredient in recipe[0].ingredients"
            :key="ingredient.id"
          >
            <label class="container" :for="ingredient.id">
              <input
                type="checkbox"
                class="checkbox"
                :name="ingredient.name"
                :id="ingredient.id"
                :value="ingredient.name + ingredient.amount"
                v-model="ingredientCheck"
              />
              <span class="checkmark"></span>
              {{ upperCase(ingredient.name) }} - {{ ingredient.amount
              }}{{ ingredient.unit }}
              <span v-if="ingredient.preparation">
                {{ ingredient.preparation }}
              </span>
            </label>
          </li>
        </ul>
      </div>
    </template>
    <template #content>
      <div>
        <h2 class="border-b-2 mb-4 pb-2">Instructions</h2>
        <ul>
          <li
            class="list-inside list-decimal my-1"
            v-for="step in recipe[0].instructions"
          >
            {{ step }}
          </li>
        </ul>
      </div>
    </template>
    <template #footer>Custom content</template>
  </Modal>

  <div class="pt-1 md:pt-7">
    <div class="grid md:grid-cols-2">
      <div class="p-2 md:p-3">
        <img
          class="w-full aspect-square h-h"
          src="https://source.unsplash.com/random/600x800"
          alt="Random Image"
        />
      </div>

      <div class="p-3">
        <h1 class="mb-5 text-2xl">{{ recipe[0].title }}</h1>
        <p class="mb-5">{{ recipe[0].short_description }}</p>

        <div class="mb-4 card max-w-xs">
          <p>{{ recipe[0].servings }} Servings</p>
          <p class="text-s">
            <span>Prep time: </span>{{ recipe[0].prep_time }} minutes
          </p>
          <p class="text-s" v-if="recipe[0].cook_time !== 0">
            <span>Cook time: </span>{{ recipe[0].cook_time }} minutes
          </p>
          <p v-else>No cooking time</p>
        </div>

        <ul>
          <li>
            <button class="pb-2" @click="openDrawer.toggle()">
              <span class="border-b-2 border-black hover:border-none"
                >Preparation</span
              >
            </button>
          </li>
          <li>
            <button class="pb-2" @click="openDrawer.toggle()">
              <span class="border-b-2 border-black hover:border-none"
                >Ingredients</span
              >
            </button>
          </li>
        </ul>

        <div class="pb-3">
          <h2 class="text-lg">Description:</h2>
          <p>{{ recipe[0].description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { openDrawer } from '~/store/module/openDrawer';
  const { recipe } = defineProps(['recipe']);
  const ingredientCheck = ref([]);

  const upperCase = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };
</script>

<style scoped>
  .checked {
    text-decoration: line-through;
    color: #a0aec0;
  }

  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }
  .container input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 9px;
    top: 4px;
    width: 6px;
    height: 15px;
    border: solid white;
    border-width: 0 3px 4px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>
