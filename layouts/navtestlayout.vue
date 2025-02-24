<template>
  <v-app>
    <div>
      <!-- Dynamic Navbar Component -->
      <component :is="currentNavbar" />

      <!-- Navbar Switcher Buttons -->
      <div class="navbar-buttons">
        <button
          class="font-semibold mt-4 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          @click="selectedNavbar = 'newnav1'"
        >
          Navbar 1
        </button>
        <button
          class="font-semibold text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          @click="selectedNavbar = 'newnav2'"
        >
          Navbar 2
        </button>
        <button
          class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          @click="selectedNavbar = 'newnav3'"
        >
          Navbar 3
        </button>
      </div>

      <!-- Page Content -->
      <slot />
    </div>
  </v-app>
</template>

<script setup>
import { ref, computed } from "vue";

// Import your navbar components
import NewNav1 from "~/components/(navbar)/newnav1.vue";
import NewNav2 from "~/components/(navbar)/newnav2.vue";
import NewNav3 from "~/components/(navbar)/newnav3.vue";

// Set up a reactive state for the selected navbar (default to newnav1)
const selectedNavbar = ref("newnav3");

// Compute the current navbar component based on the selectedNavbar value
const currentNavbar = computed(() => {
  if (selectedNavbar.value === "newnav1") return NewNav1;
  if (selectedNavbar.value === "newnav2") return NewNav2;
  if (selectedNavbar.value === "newnav3") return NewNav3;
});
</script>

<style scoped>
.navbar-buttons {
  margin-bottom: 1rem;
}
button {
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
