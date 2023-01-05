chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    
    let clientesRecibidos;
    clientesRecibidos = JSON.parse(request)[0];



    let botonCrearGuia = document.querySelector('#search');

    const timer = ms => new Promise(res => setTimeout(res, ms));
    async function load () {
        for(let i = 0; i< clientesRecibidos.length; i++){
            
            let botones;

            let botonSiguiente1;
            let botonSiguiente2;
            //clientesRecibidos.forEach(cliente => {
            let cliente = clientesRecibidos[i];

            let nombreCliente = cliente.nombre;
            
            let telefonoCliente = cliente.telefono;
            let provinciaCliente = cliente.provincia;
            let cantonCliente = cliente.canton;
            let distritoCliente = cliente.distrito;
            let direccionCliente = cliente.direccion;
            let detalleCliente = cliente.detalle;


            const nuevaVentana = () =>{

        
                var win = window.open('https://sucursal.correos.go.cr/web/guiaWeb');
    

                win.test = function () {


                    function llenarCosas(){
                        win.document.getElementById('sender_identification_type').value = "1";
                        win.document.getElementById('sender_id').value = "115470624";
                        win.document.getElementById('sender_name').value = "Prueba";
                        win.document.getElementById('sender_phone').value = "88888888";
                        win.document.getElementById('sender_mail').value = "prueba@gmail.com"
                        win.document.getElementById('provincia_sender').value = "2"
                        win.document.getElementById('sender_direction').value = "300 mts sur de algun lugar"
            
                    };


                    function llenarCanton(){
                        win.document.getElementById('canton_sender').value = "27"
                    }
            
                    function llenarDistrito(){
                        win.document.getElementById('distrito_sender').value = "179"
                    }
            
                    function llenarcodigoPostal(){
                        document.getElementById('sender_postal_code').value = "20706"
                    }
            
                    function llenarCosasDestinatario(){
                        win.document.getElementById('destination_name').value = nombreCliente;
                        win.document.getElementById('destination_phone').value = telefonoCliente;
                        win.document.getElementById('provincia').value = "2"
                        win.document.getElementById('destination_direction').value = direccionCliente;
                    }
            
                    function llenarCantonDestinatario(){
                        win.document.getElementById('canton').value = "27"
                    }
            
                    function llenarDistritoDestinatario(){
                        win.document.getElementById('distrito').value = "179"
                    }
            
            
                    //talvez se puede llenar el codigo postal corriendo la funcion??
                    function llenarcodigoPostalDestinatario(){
                        win.document.getElementById('postal_code').value = "20706"
                    }
            
            
            
            
                    const llenarDetalleEnvio = () => {
            
                        let cajaTexto = win.document.querySelector('#box_detail');
            
                        cajaTexto.innerHTML = detalleCliente;
                    
                    };
            
                    
                    const habilitarBoton = () => {
                        let botonCrearGuia = win.document.querySelector('#search');
            
                        botonCrearGuia.removeAttribute("disabled")
                        
                    
                    };
            
                    const clickearBoton = (boton) => {

                        boton.click();
                    };
            
            
                    const dispararEvento = (id) => {
                        var event = new Event('change');
                        id.dispatchEvent(event);
                    };
                    
                    
                    const agregarClaseBoton = (boton,nombreClase) => {
                        boton.classList.add(nombreClase);
                    };
            
                    const delay = (n) => {
                        return new Promise(resolve => {
                            setTimeout(() => {
                            resolve();
                            }, n * 1000);
                        });
                    };
            

                    async function main(){
                        

                        botonSiguiente1 = win.document.querySelector('.siguiente1');

                        await delay(1);
                        //await delay(1);

                        //await delay(1);
                        llenarCosas();
                        await delay(1);

                        //dispararEvento(idProvinciaSender); 
                        let event = new Event('change');
                        win.document.getElementById('provincia_sender').dispatchEvent(event);
                        //canton();
                        await delay(1);

                        llenarCanton();
                        await delay(1);

                        //dispararEvento(idCantonSender);
                        let event2 = new Event('change');
                        win.document.getElementById('canton_sender').dispatchEvent(event2);
                        await delay(1);
                        llenarDistrito();
                        //await delay(1);

                        //dispararEvento(idDistritoSender);
                        let event3 = new Event('change');
                        win.document.getElementById('distrito_sender').dispatchEvent(event3);

                        await delay(0.5);

                        clickearBoton(botonSiguiente1);

                        await delay(0.5);
                        let nombreClase2 = 'siguiente2';
                        agregarClaseBoton(botones[2],nombreClase2)
                        botonSiguiente2 = win.document.querySelector('.siguiente2');
                        llenarDetalleEnvio();
                        await delay(0.5);
                        clickearBoton(botonSiguiente2);
                        await delay(0.5);
                        llenarCosasDestinatario()
                        await delay(1);
                        //dispararEvento(idProvinciaClient); 
                        let event4 = new Event('change');
                        win.document.getElementById('provincia').dispatchEvent(event4);

                        await delay(1);
                        llenarCantonDestinatario();


                        await delay(2);
                        //dispararEvento(idCantonClient); 
                        let event5 = new Event('change');
                        win.document.getElementById('canton').dispatchEvent(event5);

                        await delay(1);
                        llenarDistritoDestinatario();


                        //llenarcodigoPostalDestinatario();

                        await delay(2);

                        //dispararEvento(idDistritoClient);
                        let event6 = new Event('change');
                        win.document.getElementById('distrito_sender').dispatchEvent(event6);

                        habilitarBoton();
;
                        await delay(1);
                        win.close();
                        console.log('se ha creado la guia de ' + cliente.nombre)

                        
                    }
                    win.addEventListener('load',() => {

                        botones = win.document.querySelectorAll('.btn-success');

                        let nombreClase1 = 'siguiente1';




                        agregarClaseBoton(botones[0],nombreClase1);

                        main();
                    });
                    
                }
                win.test();

            }

            nuevaVentana();

            await timer(3000);
        };
    }
    load();


})
