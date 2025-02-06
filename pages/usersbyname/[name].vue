<script setup>
const route = useRoute();
</script>

<template>
  <h1>{{ route.params.name }}</h1>
</template>
