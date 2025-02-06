<script setup>
import "~/assets/css/main.css";
</script>
<template>
  <div id="red-layout">
    <SharedNavbar />
    <slot />
  </div>
</template>
<style>
#red-layout * {
  color: red;
}
</style>
