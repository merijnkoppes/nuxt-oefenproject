<script setup>
import { ref, onMounted } from "vue";
import { useCookie } from "#app";

const showBanner = ref(false);
const consent = useCookie("cookieConsent"); // Retrieve cookie

onMounted(() => {
  if (!consent.value) {
    showBanner.value = true;
  }
});

const acceptCookies = () => {
  consent.value = "accepted"; // Save consent in a cookie
  showBanner.value = false;
};
</script>

<template>
  <div v-if="showBanner" class="cookie-banner">
    <p>This site uses cookies to enhance your experience. Do you accept?</p>
    <button @click="acceptCookies">Accept</button>
  </div>
</template>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 10px;
  left: 10px;
  right: 10px;
  background: #222;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
}
button {
  background: green;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
