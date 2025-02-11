<script setup>
const { data: product, error } = await useFetch(
  "https://fakestoreapi.com/products/1"
);
if (product) {
  throw createError({
    statusCode: 404,
    message: "page not found, dit is mijn eigen error",
  });
}
</script>
<template>
  <div>
    <!-- <p>{{ products }}</p> -->
    <!-- <ul> -->
    <!-- <li v-for="product in products" :key="product.id">
        <br /> -->
    <p>{{ product.title }}</p>
    <!-- </li>
    </ul> -->
  </div>
</template>
