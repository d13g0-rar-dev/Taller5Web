$(document).ready(function() {

  $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      type: "GET",
      dataType: "json",
      success: function(data) {
          
          var tabla = $("#grilla").jqGrid({
              datastr: data,
              datatype: "jsonstring",
              jsonReader: {
                repeatitems: false
              },
              colModel: [
                { label: "Id", name: "id", width: 300 },
                { label: "Nombre", name: "name", width: 300 },
                { label: "Usuario", name: "username", width: 300 },
                { label: "Email", name: "email", width: 300 },
                { label: "Calle", name: "address.street", width: 300 },
                { label: "Suite", name: "address.suite", width: 300 },
                { label: "Ciudad", name: "address.city", width: 300 },
                { label: "Codigo ZIP", name: "address.zipcode", width: 300 },
                { label: "Latitud", name: "address.geo.lat", width: 300 },
                { label: "Longitud", name: "address.geo.lng", width: 300 },
                { label: "Telefono", name: "phone", width: 300 },
                { label: "Sitio web", name: "website", width: 300 },
                { label: "Nombre compania", name: "company.name", width: 300 },
                { label: "Catch Phrase", name: "company.catchPhrase", width: 300 },
                { label: "Bs", name: "company.bs", width: 300 }
              ],
              height: 3000,
              width: 4000
            });

                    
            $("#filtrarNombre").click(function() {
              tabla.jqGrid('filterToolbar', { defaultSearch: 'cn' });
          });
      }
  
  });

});

  
