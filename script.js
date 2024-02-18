
function toggleRespuesta(id) {
    var respuesta = document.getElementById("respuesta" + id);
    var icono = document.getElementById("icono" + id);
    
    // Cerrar respuestas anteriores
    var respuestasAbiertas = document.querySelectorAll(".respuesta");
    respuestasAbiertas.forEach(function(respuestaAbierta) {
      if (respuestaAbierta.id !== "respuesta" + id && respuestaAbierta.style.display === "block") {
        respuestaAbierta.style.display = "none";
        var preguntaId = respuestaAbierta.id.replace("respuesta", "");
        var iconoAnterior = document.getElementById("icono" + preguntaId);
        iconoAnterior.classList.remove("bi-dash-circle-fill");
        iconoAnterior.classList.add("bi-plus-circle-fill");
      }
    });
  
    // Abrir o cerrar la respuesta actual
    if (respuesta.style.display === "block") {
      respuesta.style.display = "none";
      icono.classList.remove("bi-dash-circle-fill");
      icono.classList.add("bi-plus-circle-fill");
    } else {
      respuesta.style.display = "block";
      icono.classList.remove("bi-plus-circle-fill");
      icono.classList.add("bi-dash-circle-fill");
    }
  }
  
  