<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/" :prefetch="true">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/page1" :prefetch="true">Pagina 1</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/page2" :prefetch="true">Pagina 2</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/page3" :prefetch="true">Pagina 3</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/nestedpage1" :prefetch="true">Nested pagina 1</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
.router-link-active {
  color: rgb(240, 127, 255);
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px; /* Space between links */
  align-items: center;
}

/* Style the nav */
nav {
  webkit-font-smoothing: antialiased;
  width: 100%;
  height: 3rem;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

/* Style links */
NuxtLink {
  color: aliceblue;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: color 0.3s;
}

/* Hover effect */
a:hover {
  color: lightblue;
}
</style>
