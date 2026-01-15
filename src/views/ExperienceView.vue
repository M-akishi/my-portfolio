<template>
  <pre class="sql-block">
    <span class="sql">INSERT INTO</span> experiencia (empresa, rol, desde, hasta, responsabilidades)
    <br />
    <span class="sql">VALUES</span> (
    <br />&nbsp;&nbsp;<span class="string">'Constructora Campos y Pérez Ltda.'</span>,
    <br />&nbsp;&nbsp;<span class="string">'Soporte de Base de Datos y Redes'</span>,
    <br />&nbsp;&nbsp;<span class="string">'06/2019'</span>,
    <br />&nbsp;&nbsp;<span class="string">'12/2025'</span>,
    <br />&nbsp;&nbsp;<span class="json">JSON_ARRAY</span>(
    <br />&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">'Administración, respaldo y mantenimiento de bases de datos internas.'</span>,
    <br />&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">'Desarrollo de herramientas internas para optimización de procesos y teletrabajo.'</span>,
    <br />&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">'Gestión y soporte de la red interna (LAN, conectividad y servicios).'</span>,
    <br />&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">'Soporte técnico a usuarios finales.'</span>
    <br />&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">'Mantención preventiva y correctiva de equipos informáticos.'</span>
    <br />&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">'Diagnóstico y resolución de incidencias de software y hardware.'</span>
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
