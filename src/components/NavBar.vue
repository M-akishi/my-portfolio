<template>
  <nav>
    <router-link to="/" class="blue" exact>[main.py]</router-link>
    <router-link to="/education" class="green">[educacion.txt]</router-link>
    <router-link to="/cursos" class="blue">[cursos.json]</router-link>
    <router-link to="/experience" class="green">[experiencia.sql]</router-link>
    <router-link to="/skills" class="blue">[skills.conf]</router-link>
  </nav>
</template>

<style scoped>
a {
  margin: 1vw;
  text-decoration: none;
}

.blue {
  color: blue;
}

.blue:hover {
  color: white;
  background-color: blue;
}

.green {
  color: #33ff00;
}

.green:hover {
  color: black;
  background-color: #33ff00;
}

nav {
  margin-bottom: 2vh;
  margin-top: 1vh;
}

.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
