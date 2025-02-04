<script setup>
const route = useRoute();
const param = route.params.param;
</script>

<template>
  <div>
    <h1>Param: {{ param }}</h1>
  </div>
</template>
