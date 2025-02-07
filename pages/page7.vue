<script setup>
const toDo = await $fetch("https://jsonplaceholder.typicode.com/todos/1");

const { data } = await useAsyncData("key", async () => {
  const [todo1, todo2, jewelery] = await Promise.all([
    $fetch("https://jsonplaceholder.typicode.com/todos/1"),
    $fetch("https://jsonplaceholder.typicode.com/todos/2"),
    $fetch("https://fakestoreapi.com/products/category/jewelery"),
  ]);
  return { todo1, todo2, jewelery };
});
</script>
<template>
  <div>
    {{ toDo }}
    <br />
    <br />
    <br />
    {{ data.todo1 }}
    <br />
    <br />
    {{ data.todo2 }} <br />
    <br />
    {{ data.jewelery }}
  </div>
</template>
t
