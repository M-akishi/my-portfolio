<template>
  <pre class="main-block">
<span class="keyword">def</span> <span class="function-name">main</span>():
  <br />&nbsp;&nbsp;<span class="comment"># Información de contacto</span>
  <br />&nbsp;&nbsp;<span class="builtin">name</span> = <span class="string">"Maximiliano Campos"</span>
  <br />&nbsp;&nbsp;<span class="builtin">phone</span> = <span class="string">"+569 4080 2695"</span>
  <br />&nbsp;&nbsp;<span class="builtin">email</span> = <span class="string">"maximiliano.campos@outlook.cl"</span>
  <br />&nbsp;&nbsp;<span class="builtin">links</span> = {
  <br />&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"LinkedIn"</span>: <a href="https://www.linkedin.com/in/maximiliano-campos-055a921a9/" class="string">"https://www.linkedin.com/in/maximiliano-campos-055a921a9/"</a>,
  <br />&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"GitHub"</span>: <a href="https://github.com/M-akishi" class="string">"https://github.com/M-akishi"</a>
  <br />&nbsp;&nbsp;}

  <br /><br />&nbsp;&nbsp;<span class="comment"># Perfil Profesional</span>
  <br />&nbsp;&nbsp;<span class="builtin">profile</span> = <span class="string">"""
  Analista Programador titulado, orientado al desarrollo backend y administración de bases de datos,
  con experiencia en soporte informático, redes y automatización de procesos.
  Capaz de diseñar soluciones eficientes, mantener sistemas productivos y adaptarse rápidamente a nuevas tecnologías.
  Interés en posiciones backend junior, bases de datos y sistemas.
  """</span>
  <br />&nbsp;&nbsp;<span class="builtin">print</span>(profile)

  <br /><br /><span class="function-call">main</span>()
</pre>
</template>

<style scoped>
.main-block {
  background-color: #1e1e1e;
  color: #d4d4d4;
  padding: 1.2rem;
  border-radius: 8px;
  max-width: 100%;
  margin-left: 1%;
  margin-right: 1%;
  font-family: 'Fira Code', 'Courier New', monospace;
  white-space: pre-wrap;
}

.keyword {
  color: #569cd6;
}

.function-name {
  color: #dcdcaa;
}

.function-call {
  color: #dcdcaa;
}

.comment {
  color: #6a9955;
  font-style: italic;
}

.builtin {
  color: #9cdcfe;
}

.string {
  color: #ce9178;
}

a {
  text-decoration: none;
}
</style>
