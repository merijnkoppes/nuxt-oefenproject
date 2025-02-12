<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const email = useState(() => null);
const password = useState(() => null);
const userName = useState(() => null);
const address = useState(() => null);
const succesMsg = useState(() => false);
const errorMsg = useState(() => false);
if (user.value) await navigateTo("/");
const signup = async () => {
  console.log("test");
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        full_name: userName.value,
        address: address.value,
      },
      emailRedirectTo: "http://localhost:3000/",
    },
  });
  console.log("signup");
  if (error) {
    succesMsg.value = null;
    errorMsg.value = error.message;
    return;
  }

  errorMsg.value = null;
  successMsg.value = "Redirecting...";
  setTimeout(async () => {
    successMsg.value = null;
    await navigateTo("/confirm");
  }, 2000);
};
</script>
<template>
  <div>
    <form class="max-w-sm mx-auto pt-4" @submit.prevent="signup">
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
        for="password-icon"
        class="block mb-2 text-sm mt-3 font-medium text-gray-900 dark:text-white"
        >Your Password</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
        ></div>
        <input
          type="password"
          id="password-icon"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="password"
          v-model="password"
          minlength="6"
        />
      </div>
      <label
        for="username-icon"
        class="block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-white"
        >Your Username</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
        ></div>
        <input
          type="text"
          id="username-icon"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John doe"
          v-model="userName"
        />
      </div>
      <label
        for="adress-icon"
        class="block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-white"
        >Your Adress</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
        ></div>
        <input
          type="text"
          id="address-icon"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="john doe street 23"
          v-model="address"
        />
      </div>
      <button
        class="mt-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
        type="submit"
      >
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent"
        >
          Register
        </span>
      </button>
    </form>
    <div class="mt-6" v-if="succesMsg">{{ succesMsg }}</div>
    <div class="mt-6" v-if="errorMsg">{{ errorMsg }}</div>
  </div>
</template>
