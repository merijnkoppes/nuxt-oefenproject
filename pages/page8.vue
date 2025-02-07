<script setup>
const counter = useState(() => 1);
</script>
<template>
  <h1>{{ counter }}</h1>
  <button @click="counter++">Increment</button>
</template>
