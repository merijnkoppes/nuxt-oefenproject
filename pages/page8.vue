<script setup>
const counter = useCounter();
</script>
<template>
  <div>
    <h1>{{ counter }}</h1>
    <button @click="counter++">Increment</button>
  </div>
</template>
