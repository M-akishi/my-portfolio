<script setup>
const cursos = {
  certificaciones_cursos: [
    {
      nombre: 'Desarrollo de Aplicaciones Básicas',
      institucion: 'CFT Inacap',
      periodo: 'Mar 2023 - Dic 2024',
    },
    {
      nombre: 'Soporte Computacional',
      institucion: 'CFT Inacap',
      periodo: 'Mar 2023 - Ene 2024',
    },
    {
      nombre: 'Desarrollador Full Stack',
      institucion: 'CFT Inacap',
      periodo: 'Mar 2023 - Dic 2024',
    },
    {
      nombre: 'Diseño Ágil De Sistemas',
      institucion: 'CFT Inacap',
      periodo: 'Mar 2023 - Dic 2024',
    },
    {
      nombre: 'Diseño Y Gestión De Base De Datos',
      institucion: 'CFT Inacap',
      periodo: 'Mar 2023 - Dic 2024',
    },
  ],
}

function syntaxHighlight(json) {
  if (typeof json !== 'string') {
    json = JSON.stringify(json, null, 2)
  }

  // Resaltar claves con la clase 'key' y los valores con sus respectivas clases
  json = json
    .replace(/"(\w+)"\s*:/g, (match, key) => {
      return `<span class="key">"${key}"</span>:` // Resalta las claves con la clase 'key'
    })
    .replace(/:\s*"([^"]*)"/g, (match, value) => {
      return `: <span class="string">"${value}"</span>` // Resalta los valores tipo string
    })
    .replace(/:\s*(\d+)/g, (match, number) => {
      return `: <span class="number">${number}</span>` // Resalta los números
    })
    .replace(/:\s*(true|false|null)/g, (match, boolean) => {
      return `: <span class="boolean">${boolean}</span>` // Resalta los booleanos (true/false) y null
    })

  return json
}
</script>

<template>
  <pre class="courses" v-html="syntaxHighlight(cursos)"></pre>
</template>

<style>
.courses {
  font-family: 'Courier New', monospace;
  color: #ccc;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  white-space: pre-wrap;
}

.key {
  color: #8be9fd; /* Celeste para claves */
}

.string {
  color: #f1fa8c; /* Amarillo para strings */
}

.number {
  color: #bd93f9; /* Morado para números */
}

.boolean {
  color: #ff79c6; /* Rosa para booleanos (true/false) y null */
}
</style>
