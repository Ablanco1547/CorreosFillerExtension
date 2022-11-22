chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

    let clientesRecibidos;
    clientesRecibidos = JSON.parse(request)[0];

    clientesRecibidos.forEach(cliente => {
        nombreCliente = cliente.nombre;
        telefonoCliente = cliente.telefono;
        provinciaCliente = cliente.provincia;
        cantonCliente = cliente.canton;
        distritoCliente = cliente.distrito;
        direccionCliente = cliente.direccion;
        detalleCliente = cliente.detalle;

        
                    
    async function main(){
        console.log("Hola1");
        await delay(5);
        console.log("Hola2");
        llenarCosas();
        await delay(2);
        canton_sender(); 
        //canton();
        await delay(4);
        llenarCanton();
        await delay(2);
        console.log("Hola3")
        distrito_sender();
        await delay(0.4);
        llenarDistrito();
        llenarcodigoPostal();
        await delay(0.4);
        siguiente(1);
        await delay(0.4);
        llenarDetalleEnvio();
        await delay(0.4);
        siguiente(2);
        await delay(0.4);
        llenarCosasDestinatario()
        await delay(0.2);
        canton(); 
        await delay(0.4);
        llenarCantonDestinatario();
        await delay(0.2);
        distrito();
        await delay(0.4);
        //llenarDistritoDestinatario();
        //llenarcodigoPostalDestinatario();
        await delay(0.4);
        habilitarBoton();
        await delay(0.4);
        //clickearBoton();



    }
    function llenarCanton(){
        document.getElementById('canton_sender').value = "27"
    }

    function llenarDistrito(){
        document.getElementById('distrito_sender').value = "179"
    }

    function llenarcodigoPostal(){
        document.getElementById('sender_postal_code').value = "20706"
    }

    function llenarCosas(){
        document.getElementById('sender_identification_type').value = "1";
        document.getElementById('sender_id').value = "1111111";
        document.getElementById('sender_name').value = "Pinta Prueba";
        document.getElementById('sender_phone').value = "88888888";
        document.getElementById('sender_mail').value = "thisandthat@gmail.com"
        document.getElementById('provincia_sender').value = "2"
        document.getElementById('sender_direction').value = "300 mts sur de algun lugar"

    }

    function llenarCosasDestinatario(){
        document.getElementById('destination_name').value = nombreCliente;
        document.getElementById('destination_phone').value = telefonoCliente;
        document.getElementById('provincia').value = "2"
        document.getElementById('destination_direction').value = direccionCliente;
    }

    function llenarCantonDestinatario(){
        document.getElementById('canton').value = "27"
    }

    function llenarDistritoDestinatario(){
        document.getElementById('distrito').value = "179"
    }


    //talvez se puede llenar el codigo postal corriendo la funcion??
    function llenarcodigoPostalDestinatario(){
        document.getElementById('postal_code').value = "20706"
    }




    const llenarDetalleEnvio = () => {

        let cajaTexto = document.querySelector('#box_detail');

        cajaTexto.innerHTML = detalleCliente;
    
    };

    
    const habilitarBoton = () => {
        let botonCrearGuia = document.querySelector('#search');

        botonCrearGuia.removeAttribute("disabled")
        
    
    };

    const clickearBoton = () => {
        let botonCrearGuia = document.querySelector('#search');

        botonCrearGuia.click();
        
    
    };



    const delay = (n) => {
        return new Promise(resolve => {
            setTimeout(() => {
            resolve();
            }, n * 1000);
        });
    };

    
    
    const nuevoFormulario = () => {

        window.addEventListener('load', (event) => {
            console.log('page is fully loaded');
            main()
        });
        
    };


//para traer la lista de cantones



// para traer la lista de distritos




            console.log(nombreCliente)
            
        main()
        });


})
