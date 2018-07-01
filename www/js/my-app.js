var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'SignIn',
  // App id
  id: 'es.lesytec',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');
var $$=Dom7;
$('#fecha').val(fechaActual());
// captura datos formulario
console.log (fechaActual());
/*$$('.convert-form-to-data').on('click', function(){
  var formData = app.form.convertToData('#formulario');
  alert(JSON.stringify(formData));
});*/
//incializar el pad
  $("#signature").jSignature({'height':290, 'width':270});
  $("#clear").click (function(){
  				$("#signature").jSignature("clear");
                  });
  //capturar en una variable la firma.
  $("#captura").click (function(){
          firma = $("#signature").jSignature("getData", "base30");
          operario = $('#operario').val();
          dni= $('#dni').val();
          fecha= $('#fecha').val();
          h_i= $('#hinicio').val();
          h_f= $('#hfin').val();
          observaciones= $('#observaciones').val();
          
  		var formData = app.form.convertToData('#formulario');
 		alert(JSON.stringify(formData));
          if (firma[1]==="")
          {
          	alert (" Firma vacia.");
          	return;
          }
                  });

 

  function fechaActual ()
  {
  	var dt = new Date();

	// Display the month, day, and year. getMonth() returns a 0-based number.
	var month = dt.getMonth()+1;
	var day = dt.getDate();
	var year = dt.getFullYear();
	fecha= (year + '-' + month + '-' + day);
	console.log (fecha);
	return fecha;

	// Output: current month, day, year
  }