<template>
  <div>
    <h1>
      You've encountered an error, click <nuxt-link to="/">here</nuxt-link> to
      go home
    </h1>
    <h1>Error {{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>
<script setup>
defineProps({
  error: Object,
});
</script>
