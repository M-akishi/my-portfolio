<template>
  <pre class="conf-block">
<span class="section">[habilidades]</span>
<span class="key">bases_de_datos</span> = <span class="value">Administración y optimización (SQL, MySQL, PostgreSQL)</span>
<span class="key">backend</span> = <span class="value">Desarrollo backend (Java, PHP)</span>
<span class="key">redes</span> = <span class="value">Gestión y administración de redes</span>
<span class="key">soporte</span> = <span class="value">Soporte técnico y mantenimiento de hardware/software</span>
<span class="key">teletrabajo</span> = <span class="value">Desarrollo de herramientas de teletrabajo</span>
<span class="key">seguridad</span> = <span class="value">Seguridad informática y administración de sistemas</span>

<span class="section">[idiomas]</span>
<span class="key">Español</span> = <span class="value">Nativo</span>
<span class="key">Inglés</span> = <span class="value">Altamente competente</span>
  </pre>
</template>

<style scoped>
.conf-block {
  margin-left: 1%;
  margin-right: 1%;
  background-color: #1e1e1e;
  color: #d4d4d4;
  padding: 1.2rem;
  border-radius: 8px;
  font-family: 'Fira Code', 'Courier New', monospace;
  white-space: pre-wrap; /* permite que el texto haga wrap */
  word-break: break-word; /* rompe palabras largas si es necesario */
  max-width: 100%; /* que no exceda el contenedor padre */
  overflow-x: auto; /* muestra scroll horizontal si es muy ancho */
  box-sizing: border-box;
}

.section {
  color: #569cd6;
}

.key {
  color: #9cdcfe;
}

.value {
  color: #ce9178;
}
</style>
