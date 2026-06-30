<template>
  <pre
    class="sql-block"
  ><span class="sql">INSERT INTO</span> experiencia (empresa, rol, desde, hasta, responsabilidades)
<span class="sql">VALUES</span> (
    <span class="string">'Constructora Campos y Pérez Ltda.'</span>,
    <span class="string">'Soporte de Base de Datos y Redes'</span>,
    <span class="string">'06/2019'</span>,
    <span class="string">'Actual'</span>,
    <span class="json">JSON_ARRAY</span>(
        <span class="string">'Administración, respaldo y mantenimiento de bases de datos corporativas.'</span>,
        <span class="string">'Desarrollo de herramientas internas para automatización y optimización de procesos.'</span>,
        <span class="string">'Administración y soporte de infraestructura de red (LAN, VPN y servicios asociados).'</span>,
        <span class="string">'Administración y soporte de sistemas Windows y Linux.'</span>,
        <span class="string">'Mantención preventiva y correctiva de equipos e infraestructura informática.'</span>,
        <span class="string">'Diagnóstico y resolución de incidencias de hardware, software y conectividad.'</span>
    )
);
</pre>
</template>

<style scoped>
.sql-block {
  padding: 1.2rem;
  margin-left: 1%;
  margin-right: 1%;
  background-color: #1e1e1e;
  color: #d4d4d4;
  border-radius: 8px;
  max-width: 100%;
  font-family: 'Fira Code', 'Courier New', monospace;
  overflow-x: auto;
  line-height: 1.5;
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
