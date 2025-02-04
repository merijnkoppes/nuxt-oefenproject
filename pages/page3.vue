<template>
  <div>
    <label>Welke parameter wil jij doorgeven aan de param pagina?</label>

    <form id="paramform"><input type="number" v-model="param" /></form>
    <button class="e-primary" @click="this.$router.push('/' + param)"></button>
  </div>
</template>
<script setup>
import { ref } from "vue";

const param = ref(0); // Make param reactive
</script>
<style scoped>
input {
  color: black;
}
button {
  padding: 10px 20px;
  /* font-size: 1.2rem; 
 
  background-color: #007bff; 
  color: white;
  border: none;
  border-radius: 5px; 
  cursor: pointer;
  transition: background-color 0.3s; */
}
</style>
