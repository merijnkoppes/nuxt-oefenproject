<script setup>
import { ref } from "vue";

const show = ref(false);
const name = ref("");

const config = useRuntimeConfig();
console.log(config.public.publicKey);
console.log(config.api);
console.log(config.secretKey);

const { data } = await useFetch("/api/hello");
</script>
<template>
  <div>
    <h1 class="animate__animated animate__bounce">Bounce</h1>
    <label>Wat is je naam?</label>

    <form id="name"><input required type="text" v-model="name" /></form>
    <button
      class="e-primary"
      v-if="name"
      @click="this.$router.push('/greetings/' + name)"
    >
      <h1>Bekijk je groet!</h1>
    </button>
    <br />

    <button class="e-primary" @click="show = !show">
      <h1>Bekijk hoi!</h1></button
    ><br />
    <img
      v-if="show"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkg3nh2YF-8SUwmK3Kv13uxAfeFd6Z-W0k7w&s"
      width="500px"
    />

    <h2>{{ data }}</h2>
  </div>
</template>

<style scoped>
input {
  color: black;
}
</style>
