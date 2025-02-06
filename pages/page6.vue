<script setup>
const id = ref(1);
const { data: product, refresh } = await useFetch(() => {
  return `https://fakestoreapi.com/products/${id.value}`;
});
const fetchproduct = async () => {
  ++id.value;
  await refresh();
};
console.log(product.value);
</script>
<template>
  <div>
    <button @click="fetchproduct"><h1>Display new prroductt</h1></button>
    <div>
      {{ product }}
    </div>
  </div>
</template>
