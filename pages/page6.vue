<script setup>
const { data: posts } = await useFetch("posts", {
  baseURL: "https://jsonplaceholder.typicode.com",
  method: "post",
  body: {
    title: "titel",
    name: "geentitel",
  },
});
// console.log(product.value);
</script>
<template>
  <div>
    <!-- <button @click="fetchproduct"><h1>Display new prroductt</h1></button> -->
    <div>
      {{ posts }}
    </div>
  </div>
</template>
