<script setup>
const apiKey = "I6EMNITXEYUWPEYL";
const {
  data: stocks,
  status,
  execute,
} = await useFetch("/query", {
  baseURL: "https://www.alphavantage.co/",
  query: {
    function: "TIME_SERIES_INTRADAY",
    symbol: "IBM",
    interval: "5min",
    apikey: apiKey,
  },
  timeout: 5000,
  lazy: true,
  immediate: false,
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
    </div>
  </div>
</template>
