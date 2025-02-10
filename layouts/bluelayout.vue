<template>
  <div id="blue-layout">
    <SharedNavbar />
    <div id="blueslot">
      <slot />
    </div>
  </div>
</template>
<style>
#blue-layout {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  min-height: 100vh; /* Ensure full height */
}

#blue-layout {
  margin-top: 0;
}
#blue-layout * {
  color: blue;
}

#blueslot {
  width: 60%;
  text-align: center; /* Center text inside */
}
</style>
