<template>
  <nav>
    <a href="/" class="blue">[main.py]</a>
    <a href="/education" class="green">[educacion.txt]</a>
    <a href="/cursos" class="blue">[cursos.json]</a>
    <a href="/experience" class="green">[experiencia.sql]</a>
    <a href="/skills" class="blue">[skills.conf]</a>
  </nav>
</template>

<style scoped>
a {
  margin: 1vw;
}
.blue {
  color: blue;
  text-decoration: none;
}
.blue:hover {
  color: white;
  background-color: blue;
}
.green {
  color: #33ff00;
  text-decoration: none;
}
.green:hover {
  color: black;
  background-color: #33ff00;
}
nav {
  margin-bottom: 2vh;
  margin-top: 1vh;
}
</style>
