<script setup>
const route = useRoute();
const id = route.params.id;

definePageMeta({
  validate: async (r) => {
    return /^\d+$/.test(r.params.id);
  },
  middleware: [
    function (to) {
      if (to.params.id == "1") return navigateTo("/");

      if (to.params.id == "2") return navigateTo("/");

      //   return abortNavigation("id should nit be more than 2");
    },
  ],
});
</script>
<template>
  <h1>{{ $route.params.id }}</h1>
</template>
