<script setup>
defineProps({
  error: Object,
});
const handleError = () => {
  clearError({ redirect: "/" });
};
</script>
<template>
  <div>
    <h1>
      You've encountered an error, click <nuxt-link to="/">here</nuxt-link> to
      go home
    </h1>
    <h1>Error {{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <!-- <NuxtLink to="/">Go back home</NuxtLink> -->
    <br />
    <button
      class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      @click="handleError()"
    >
      Handle Error
    </button>
  </div>
</template>
