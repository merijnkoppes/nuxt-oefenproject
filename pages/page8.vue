<script setup>
const counter = useState("counterState", () => 1);
</script>
<template>
  <div>
    <h1>{{ counter }}</h1>
    <button @click="counter++">Increment</button>
  </div>
</template>
