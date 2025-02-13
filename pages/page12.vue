<script setup>
import { ref, onMounted } from "vue";

const userInfo = ref(null);
const error = ref(null);
const response = ref(null);
onMounted(async () => {
  fetchData();
});

const fetchData = async () => {
  try {
    userInfo.value = await $fetch("/api/MIPUserInfo", {
      method: "POST",
    });
  } catch (err) {
    error.value = "Failed to fetch user data!";
  }
};

const MIPLogout = async () => {
  try {
    const data = await $fetch("/api/MIPLogout", {
      method: "POST",
      credentials: "include",
    });
    response.value = data;
    if (response.ok) {
      localStorage.removeItem("userInfo");
    } else {
      console.error("Logout failed:", response);
    }
  } catch (error) {
    console.error("Error during logout:", error);
  }
};
</script>

<template>
  <div>
    <button
      @click="fetchData"
      class="mt-4 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      Fetch data
    </button>
    <button
      @click="MIPLogout"
      class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      MIP Logout
    </button>
    <p v-if="error">{{ error }}</p>
    <p v-if="response">{{ response }}</p>
    <pre v-if="userInfo">{{ userInfo }}</pre>
  </div>
</template>
