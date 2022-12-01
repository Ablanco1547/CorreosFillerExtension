chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

    let clientesRecibidos;
    clientesRecibidos = JSON.parse(request)[0];
    let idProvinciaSender = document.getElementById('provincia_sender');
    let idCantonSender = document.getElementById('canton_sender');
    let idDistritoSender = document.getElementById('distrito_sender');
    let idProvinciaClient = document.getElementById('provincia');
    let idCantonClient = document.getElementById('canton');
    let idDistritoClient = document.getElementById('distrito');

    let botones = document.querySelectorAll('.btn-success');
    let nombreClase1 = 'siguiente1';
    let nombreClase2 = 'siguiente2';


    let botonSiguiente1;
    let botonSiguiente2;

    let botonCrearGuia = document.querySelector('#search');

    clientesRecibidos.forEach(cliente => {
        nombreCliente = cliente.nombre;
        telefonoCliente = cliente.telefono;
        provinciaCliente = cliente.provincia;
        cantonCliente = cliente.canton;
        distritoCliente = cliente.distrito;
        direccionCliente = cliente.direccion;
        detalleCliente = cliente.detalle;

        
                    
    async function main(){
        agregarClaseBoton(botones[0],nombreClase1);
        botonSiguiente1 = document.querySelector('.siguiente1');
        console.log("Hola1");
        await delay(1);
        console.log("Hola2");
        llenarCosas();
        await delay(1);
        dispararEvento(idProvinciaSender); 
        //canton();
        await delay(1);
        console.log("Hola3")
        llenarCanton();
        await delay(1);
        console.log("Hola4")
        dispararEvento(idCantonSender);
        await delay(1.5);
        llenarDistrito();
        await delay(1.5);
        console.log("Hola5")
        dispararEvento(idDistritoSender);
        console.log("Hola6")
        await delay(1);
        console.log("Hola7")
        clickearBoton(botonSiguiente1);
        console.log("Hola8")
        await delay(0.5);
        agregarClaseBoton(botones[2],nombreClase2)
        botonSiguiente2 = document.querySelector('.siguiente2');
        llenarDetalleEnvio();
        await delay(0.5);
        clickearBoton(botonSiguiente2);
        await delay(0.5);
        llenarCosasDestinatario()
        await delay(0.2);
        dispararEvento(idProvinciaClient); 
        await delay(1);
        llenarCantonDestinatario();
        await delay(1);
        dispararEvento(idCantonClient); 
        await delay(1);
        llenarDistritoDestinatario();
        //llenarcodigoPostalDestinatario();
        await delay(1);
        dispararEvento(idDistritoClient);
        habilitarBoton();
        await delay(1);
        alert('se ha creado la primer guia')
        //clickearBoton(botonCrearGuia);



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
        document.getElementById('sender_id').value = "115470624";
        document.getElementById('sender_name').value = "Pinta Prueba";
        document.getElementById('sender_phone').value = "88888888";
        document.getElementById('sender_mail').value = "Raquel@gmail.com"
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

    const clickearBoton = (boton) => {
        console.log(boton);
        boton.click();
    };



    const delay = (n) => {
        return new Promise(resolve => {
            setTimeout(() => {
            resolve();
            }, n * 1000);
        });
    };

    const dispararEvento = (id) => {
        var event = new Event('change');
        id.dispatchEvent(event);
    };
    
    
    const nuevoFormulario = () => {

        window.addEventListener('load', (event) => {
            console.log('page is fully loaded');
            main()
        });
        
    };

    const agregarClaseBoton = (boton,nombreClase) => {
        boton.classList.add(nombreClase);
    };

//para traer la lista de cantones



// para traer la lista de distritos




            console.log(nombreCliente)
            
        main()
        });


})
