window.onload = function() {
    // Obtén los datos de la URL
    var urlParams = new URLSearchParams(window.location.search);
  
    // Obtén los valores de 'nombre', 'apellido', 'email', 'numero' y 'comentario'
    var nombre = urlParams.get('Nombre');
    var apellido = urlParams.get('Aellidos');
    var email = urlParams.get('email');
    var numero = urlParams.get('telefono');
    var comentario = urlParams.get('textarea');
  
    // Ahora puedes usar estos valores en tu página HTML
    // Por ejemplo, podrías insertarlos en un elemento con id 'resultado'
    document.getElementById('resultado').innerHTML = 'Nombre: ' + nombre + '<br>Apellido: ' + apellido + '<br>Email: ' + email + '<br>Número: ' + numero + '<br>Comentario: ' + comentario;
  };
  