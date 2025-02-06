<script setup>
definePageMeta({
  middleware: [
    function (to) {
      if (to.params.id == "1") return navigateTo("/");

      if (to.params.id == "2") return navigateTo("/");

      return abortNavigation("id should nit be more than 2");
    },
  ],
});
</script>
<template></template>
