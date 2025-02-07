<script setup>
import { Dropdown } from "flowbite";

onMounted(() => {
  const dropdownElement = document.getElementById("dropdownNavbar");
  const dropdownToggle = document.getElementById("dropdownNavbarLink");

  if (dropdownElement && dropdownToggle) {
    new Dropdown(dropdownElement, dropdownToggle);
  }
});
</script>

<template>
  <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="https://nuxt.com/assets/design-kit/icon-green.svg"
          class="h-8"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >NuxtTest</span
        >
      </a>
      <button
        data-collapse-toggle="navbar-solid-bg"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-solid-bg"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
        <ul
          class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
        >
          <li>
            <NuxtLink
              to="/"
              :prefetch="true"
              class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
              aria-current="page"
              >Home</NuxtLink
            >
          </li>
          <!-- dropdown -->
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            >
              Pages
              <svg
                class="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdownNavbar"
              class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownLargeButton"
              >
                <li>
                  <NuxtLink
                    to="/page1"
                    :prefetch="true"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Page 1</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/page2"
                    :prefetch="true"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >page 2</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/page3"
                    :prefetch="true"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >page 3</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/page4"
                    :prefetch="true"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >page 4</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/page5"
                    :prefetch="true"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >page 5</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/page6"
                    :prefetch="true"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >page 6</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/page7"
                    :prefetch="true"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >page 7</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </li>
          <!-- dropdown -->
          <li></li>

          <li>
            <NuxtLink
              to="/currency"
              :prefetch="true"
              class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Currency</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/nestedpage1"
              :prefetch="true"
              class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Nested page 1</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.router-link-active {
  color: rgb(240, 127, 255);
}
/* ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
  align-items: center;
}

nav {
  webkit-font-smoothing: antialiased;
  width: 100%;
  height: 3rem;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

NuxtLink {
  color: aliceblue;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: color 0.3s;
}

a:hover {
  color: lightblue;
} */
</style>
