<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const email = useState(() => null);
const password = useState(() => null);
const address = useState(() => null);
const succesMsg = useState(() => false);
const errorMsg = useState(() => false);
if (user.value) await navigateTo("/");
const signUp = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        full_name: userName.value,
        adress: adress.value,
      },
      emailRedirectTo: "http://localhost:3000",
    },
  });
  if (error) {
    succesMsg.value = null;
    errorMsg.value = error.message;
    return;
  }
  errorMsg.value = null;
  succesMsg.value = "redirecting...";
  setTimeout(async () => {
    succesMsg.value = null;
    await navigateTo("/confirm");
  }, 2000);
};
</script>
<template>
  <div>
    <form class="max-w-sm mx-auto pt-4">
      <label
        for="email-address-icon"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Your Email</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
        ></div>
        <input
          type="text"
          id="email-address-icon"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          v-model="email"
        />
      </div>
      <label
        for="email-address-icon"
        class="block mb-2 text-sm mt-2 font-medium text-gray-900 dark:text-white"
        >Your Password</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
        ></div>
        <input
          type="password"
          id="email-address-icon"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="password"
          v-model="password"
        />
      </div>
      <label
        for="email-address-icon"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Your Email</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
        ></div>
        <input
          type="text"
          id="email-address-icon"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          v-model="username"
        />
      </div>
    </form>
  </div>
</template>
