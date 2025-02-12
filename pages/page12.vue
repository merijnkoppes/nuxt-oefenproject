<script setup>
import { ref, onMounted } from "vue";

const userInfo = ref(null);
const error = ref("");

onMounted(async () => {
  try {
    userInfo.value = await $fetch("/api/MIPUserInfo", {
      method: "POST",
      body: { username: "", password: "" },
    });
  } catch (err) {
    error.value = "Failed to fetch user data!";
  }
});
</script>

<template>
  <div>
    <h2>User Info</h2>
    <p v-if="error">{{ error }}</p>
    <pre v-if="userInfo">{{ userInfo }}</pre>
  </div>
</template>
