<script setup>
import Bluelayout from "~/layouts/bluelayout.vue";

definePageMeta({
  middleware: [
    function (to, from) {
      console.log("inline middleware");
    },
    "middleware-example",
  ],
});
</script>
<template>
  <div>
    <h1>Test4</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed
      lorem non nibh elementum pretium eget a massa. Vestibulum porta odio
      neque, quis feugiat orci posuere et. Nulla eu tincidunt quam. Nullam elit,
      in tempor tortor. Vivamus ac ipsum facilisis lectus ullamcorper rhoncus ut
      et ipsum. Pellentesque habitant morbi tristique senectus et netus et
      malesuada fames ac turpis egestas. Sed pretium cursus tellus, ac
      condimentum libero pretium sit amet. Aliquam quis lectus consectetur,
      consectetur arcu sed, condimentum nibh. Nullam rhoncus enim in lorem
      placerat, eu aliquam est dapibus. Suspendisse eu tortor ac ligula
      tincidunt ornare. Mauris efficitur orci hendrerit sapien pulvinar gravida.
      Etiam pretium vel nulla non vestibulum. Integer egestas, ex porta egestas
      scelerisque, nulla lacus vestibulum nibh, et tempor tellus neque et nisl.
      Vestibulum vestibulum, augue sit amet ullamcorper consectetur, nunc lorem
      tempus nisl, quis tincidunt nibh neque in nulla. Phasellus sit amet tortor
      vitae ex malesuada convallis eu eu leo. Vestibulum tempor cursus laoreet.
      Phasellus ex ante, convallis at consequat ut, sodales et nulla. Nullam
      vulputate eu dui at congue. Vivamus accumsan massa vitae ex ullamcorper, a
      rhoncus est dictum. Etiam faucibus magna a feugiat lacinia. Phasellus eget
      nisl malesuada, iaculis metus vitae, elementum enim. Sed at est non velit
      fermentum fermentum. Aliquam eget bibendum risus. Etiam metus eros,
      commodo quis finibus quis, ullamcorper in felis. Orci varius natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Maecenas auctor, erat at faucibus accumsan, mi ex aliquam augue, nec
    </p>
  </div>
</template>
<style scoped></style>
