<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>
<template>
  <div>
    <!-- <p>{{ products }}</p> -->
    <ul>
      <li v-for="product in products" :key="product.id">
        <br />
        <p>{{ product.title }}</p>
      </li>
    </ul>
  </div>
</template>
