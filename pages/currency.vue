<script setup>
// var functionName = "CURRENCY_EXCHANGE_RATE";
const apiKey = "I6EMNITXEYUWPEYL";

const { data, status, error } = useFetch("https://www.alphavantage.co/query", {
  query: {
    function: "CURRENCY_EXCHANGE_RATE",
    from_currency: "BTC",
    to_currency: "EUR",
    apikey: apiKey,
  },
});
</script>
<template>
  <p>{{ status }}</p>
  <p>{{ data }}</p>
</template>
