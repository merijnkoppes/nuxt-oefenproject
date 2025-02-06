<script setup>
definePageMeta({
  middleware: ["denyhacker"],
});
</script>
<template>
  <h1>{{ $route.params.name }}</h1>
</template>
