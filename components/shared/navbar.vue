<template>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/page1">Pagina 1</a></li>
      <li><a href="/page2">Pagina 2</a></li>
      <li><a href="/page3">Pagina 3</a></li>
    </ul>
  </nav>
</template>
<style scoped>
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
a {
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
