<script setup>
const result = ref(null);

const getPosts = async () => {
  result.value = await $fetch("/api/posts");
};

const addPost = async () => {
  result.value = await $fetch("/api/posts", {
    method: "post",
    body: { newPost: { id: 5, title: "newpost" } },
  });
};

const editPost = async () => {
  result.value = await $fetch("/api/posts", {
    method: "put",
    body: {
      title: "testtitle",
    },
  });
};

const deletePost = async () => {
  result.value = await $fetch("/api/posts", { method: "delete" });
};
</script>
<template>
  <div>
    <button
      @click="getPosts"
      class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      Get posts post
    </button>
    <button
      @click="addPost"
      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      Add post
    </button>
    <button
      @click="editPost"
      class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      Edit post
    </button>
    <button
      @click="deletePost"
      class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      Delete post
    </button>
    <h1 class="mt-5">{{ result }}</h1>
  </div>
</template>
<style scoped>
div {
  padding: 20px;
}
</style>
