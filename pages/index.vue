<template>
  <div>
    <label>Wat is je naam?</label>

    <form id="name"><input required type="text" v-model="name" /></form>
    <button class="e-primary" @click="this.$router.push('/greetings/' + name)">
      <h1>Bekijk je groet!</h1>
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";

const name = ref("");
</script>
<style scoped>
input {
  color: black;
}
button * {
  color: black;
}
</style>
