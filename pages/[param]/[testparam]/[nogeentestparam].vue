<script setup>
const route = useRoute();
const param = route.params.param;
</script>

<template>
  <div>
    <h1>Param: {{ param }}</h1>
    <h1>Testparam1 {{ $route.params.testparam }}</h1>
    <h1>Nogeentestparam {{ $route.params.nogeentestparam }}</h1>
  </div>
</template>
