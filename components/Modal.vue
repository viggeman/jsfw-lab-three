<script setup>
  import { openDrawer } from '~/store/module/openDrawer';
</script>

<template>
  <div v-if="openDrawer.status" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container w-11/12 sm:w-1/2">
        <button class="pb-7" @click="openDrawer.toggle()">
          <span class="border-b-2 border-black hover:border-none">Close</span>
        </button>
        <div class="modal-header">
          <slot name="header"> default header </slot>
        </div>
        <div class="modal-body">
          <slot name="content"> default content </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .modal-container {
    height: 100%; /* 100% Full-height */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    right: 0;
    background-color: #fff; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding: 40px;
  }
</style>
