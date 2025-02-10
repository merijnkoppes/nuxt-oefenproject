<script setup>
const apiKey = "I6EMNITXEYUWPEYL";
const nuxtApp = useNuxtApp();
const {
  data: stocks,
  status,
  execute,
  error,
} = await useFetch("/query", {
  baseURL: "https://www.alphavantage.co/",
  query: {
    function: "TIME_SERIES_INTRADAY",
    symbol: "IBM",
    interval: "5min",
    apikey: apiKey,
  },
  deep: false,
  timeout: 5000,
  lazy: true,
  immediate: false,
  transform: (stock) => {
    return { ...stock, title: "mijntitel" };
  },
  pick: ["title"],
  default: (stock) => {
    stock = "no data available";
    return stock;
  },
  getCachedData: (key) => {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
  },
});

// console.log(product.value);
</script>
<template>
  <div>
    <h1>Stocks</h1>
    <div>
      <p v-for="stock in stocks" :key="stock.id">
        {{ stock }}
      </p>
      <a @click="execute"><h1>fetch</h1></a>
      <h2 v-if="error">{{ error }}</h2>
    </div>
  </div>
</template>
