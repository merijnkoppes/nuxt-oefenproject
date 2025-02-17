<template>
  <div id="public-pages" data-app><Slot /></div>
</template>
<style>
div#public-pages {
  background-image: url("../assets/jpeg/login2.jpg");
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(0, 0, 0, 0.75);
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  height: calc(100% + 12px);
}
</style>
