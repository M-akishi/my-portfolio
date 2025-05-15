<template>
  <pre class="sql-block">
    <span class="sql">INSERT INTO</span> experiencia (empresa, rol, desde, hasta, responsabilidades)
    <br />
    <span class="sql">VALUES</span> (
    <br />&nbsp;&nbsp;<span class="string">'Constructora Campos y Pérez Ltda.'</span>,
    <br />&nbsp;&nbsp;<span class="string">'Soporte de Base de Datos y Redes'</span>,
    <br />&nbsp;&nbsp;<span class="string">'06/2019'</span>,
    <br />&nbsp;&nbsp;<span class="string">'12/2024'</span>,
    <br />&nbsp;&nbsp;<span class="json">JSON_ARRAY</span>(
    <br />&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">'Administración y mantenimiento de bases de datos.'</span>,
    <br />&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">'Desarrollo de herramientas para teletrabajo.'</span>,
    <br />&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">'Soporte a la red interna de la oficina.'</span>,
    <br />&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">'Reparación y mantenimiento de equipos informáticos.'</span>
    <br />&nbsp;&nbsp;<span>)</span>
    <br />);
  </pre>
</template>

<style scoped>
.sql-block {
  padding-top: 1%;
  margin-left: 1%;
  margin-right: 1%;
  background-color: #1e1e1e;
  color: #d4d4d4;
  border-radius: 8px;
  max-width: 100%;
  font-family: 'Courier New', monospace;
  white-space: pre-wrap;
}

.sql {
  color: #569cd6;
}

.string {
  color: #029c76;
}

.json {
  color: #e9950c;
}
</style>
