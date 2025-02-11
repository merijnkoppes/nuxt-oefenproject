<script setup>
const route = useRoute();
const param = route.params.param;
</script>

<template>
  <div>
    <h1 class="text-gray-900 dark:text-white">Param: {{ param }}</h1>
    <h1 class="text-gray-900 dark:text-white">
      Testparam1 {{ $route.params.testparam }}
    </h1>
    <h1 class="text-gray-900 dark:text-white">
      Nogeentestparam {{ $route.params.nogeentestparam }}
    </h1>
  </div>
</template>
