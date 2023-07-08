fetch('Taller5Web/users.json')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes manipular los datos obtenidos del archivo JSON
    generarTabla(data);
  });


  function generarTabla(data) {
    // Obtén la referencia del elemento HTML donde deseas insertar la tabla
    var tablaContainer = document.getElementById('tabla-container');
  
    // Crea la tabla y su encabezado
    var tabla = document.createElement('table');
    var encabezado = tabla.createTHead();
    var filaEncabezado = encabezado.insertRow();
  
    // Recorre las claves del primer objeto para crear las columnas del encabezado
    for (var key in data[0]) {
      var th = document.createElement('th');
      th.innerHTML = key;
      filaEncabezado.appendChild(th);
    }
  
    // Crea las filas de datos
    var cuerpo = tabla.createTBody();
    data.forEach(function(obj) {
      var fila = cuerpo.insertRow();
      for (var key in obj) {
        var celda = fila.insertCell();
        celda.innerHTML = obj[key];
      }
    });
  
    // Inserta la tabla en el contenedor
    tablaContainer.appendChild(tabla);
  }

  
