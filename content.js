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
            let provinciaUsuario = cliente.provincia;
            let cantonUsuario = cliente.canton;
            let distritoUsuario = cliente.distrito;
            let direccionCliente = cliente.direccion;
            let detalleCliente = cliente.detalle;

                                
            const infoProvincias={provincias:[{nombreProvincia:"san jose",idProvincia:"1",cantones:[{nombreCanton:"san jose",idcanton:1,distritos:[{nombreDistrito:"carmen",idDistrito:1},{nombreDistrito:"merced",idDistrito:2},{nombreDistrito:"hospital",idDistrito:3},{nombreDistrito:"catedral",idDistrito:4},{nombreDistrito:"zapote",idDistrito:5},{nombreDistrito:"san francisco de dos rios",idDistrito:6},{nombreDistrito:"uruca",idDistrito:7},{nombreDistrito:"mata redonda",idDistrito:8},{nombreDistrito:"pavas",idDistrito:9},{nombreDistrito:"hatillo",idDistrito:10},{nombreDistrito:"san sebastian",idDistrito:11}]},{nombreCanton:"escazu",idcanton:2,distritos:[{nombreDistrito:"escazu",idDistrito:12},{nombreDistrito:"san antonio",idDistrito:13},{nombreDistrito:"san rafael",idDistrito:14}]},{nombreCanton:"desamparados",idcanton:3,distritos:[{nombreDistrito:"desamparados",idDistrito:15},{nombreDistrito:"san miguel",idDistrito:16},{nombreDistrito:"san juan de dios",idDistrito:17},{nombreDistrito:"san rafael arriba",idDistrito:18},{nombreDistrito:"san antonio",idDistrito:19},{nombreDistrito:"frailes",idDistrito:20},{nombreDistrito:"patarra",idDistrito:21},{nombreDistrito:"san cristobal",idDistrito:22},{nombreDistrito:"rosario",idDistrito:23},{nombreDistrito:"damas",idDistrito:24},{nombreDistrito:"san rafael abajo",idDistrito:25},{nombreDistrito:"gravilias",idDistrito:26},{nombreDistrito:"los guido",idDistrito:27}]},{nombreCanton:"puriscal",idcanton:4,distritos:[{nombreDistrito:"santiago",idDistrito:28},{nombreDistrito:"mercedes sur",idDistrito:29},{nombreDistrito:"barbacoas",idDistrito:30},{nombreDistrito:"grifo alto",idDistrito:31},{nombreDistrito:"san rafael",idDistrito:32},{nombreDistrito:"candelaria",idDistrito:33},{nombreDistrito:"desamparaditos",idDistrito:34},{nombreDistrito:"san antonio",idDistrito:35},{nombreDistrito:"chires",idDistrito:36}]},{nombreCanton:"tarrazu",idcanton:5,distritos:[{nombreDistrito:"san marcos",idDistrito:37},{nombreDistrito:"san lorenzo",idDistrito:38},{nombreDistrito:"san carlos",idDistrito:39}]},{nombreCanton:"aserri",idcanton:6,distritos:[{nombreDistrito:"aserri",idDistrito:40},{nombreDistrito:"tarbaca",idDistrito:41},{nombreDistrito:"vuelta de jorco",idDistrito:42},{nombreDistrito:"san gabriel",idDistrito:43},{nombreDistrito:"legua",idDistrito:44},{nombreDistrito:"monterrey",idDistrito:45},{nombreDistrito:"salitrillos",idDistrito:46}]},{nombreCanton:"mora",idcanton:7,distritos:[{nombreDistrito:"colon",idDistrito:47},{nombreDistrito:"guayabo",idDistrito:48},{nombreDistrito:"tabarcia",idDistrito:49},{nombreDistrito:"piedras negras",idDistrito:50},{nombreDistrito:"picagres",idDistrito:51},{nombreDistrito:"jaris",idDistrito:474},{nombreDistrito:"quitirrisi",idDistrito:475}]},{nombreCanton:"goicoechea",idcanton:8,distritos:[{nombreDistrito:"guadalupe",idDistrito:52},{nombreDistrito:"san francisco",idDistrito:53},{nombreDistrito:"calle blancos",idDistrito:54},{nombreDistrito:"mata de platano",idDistrito:55},{nombreDistrito:"ipis",idDistrito:56},{nombreDistrito:"rancho redondo",idDistrito:57},{nombreDistrito:"purral",idDistrito:58}]},{nombreCanton:"santa ana",idcanton:9,distritos:[{nombreDistrito:"santa ana",idDistrito:59},{nombreDistrito:"salitral",idDistrito:60},{nombreDistrito:"pozos",idDistrito:61},{nombreDistrito:"uruca",idDistrito:62},{nombreDistrito:"piedades",idDistrito:63},{nombreDistrito:"brasil",idDistrito:64}]},{nombreCanton:"alajuelita",idcanton:10,distritos:[{nombreDistrito:"alajuelita",idDistrito:65},{nombreDistrito:"san josecito",idDistrito:66},{nombreDistrito:"san antonio",idDistrito:67},{nombreDistrito:"concepcion",idDistrito:68},{nombreDistrito:"san felipe",idDistrito:69}]},{nombreCanton:"vazquez de coronado",idcanton:11,distritos:[{nombreDistrito:"san isidro",idDistrito:70},{nombreDistrito:"san rafael",idDistrito:71},{nombreDistrito:"dulce nombre de jesus",idDistrito:72},{nombreDistrito:"patalillo",idDistrito:73},{nombreDistrito:"cascajal",idDistrito:74}]},{nombreCanton:"acosta",idcanton:12,distritos:[{nombreDistrito:"san ignacio de acosta",idDistrito:75},{nombreDistrito:"guaitil",idDistrito:76},{nombreDistrito:"palmichal",idDistrito:77},{nombreDistrito:"cangrejal",idDistrito:78},{nombreDistrito:"sabanillas",idDistrito:79}]},{nombreCanton:"tibas",idcanton:13,distritos:[{nombreDistrito:"san juan",idDistrito:80},{nombreDistrito:"cinco esquinas",idDistrito:81},{nombreDistrito:"anselmo llorente",idDistrito:82},{nombreDistrito:"leon xiii",idDistrito:83},{nombreDistrito:"colima",idDistrito:84}]},{nombreCanton:"moravia",idcanton:14,distritos:[{nombreDistrito:"san vicente",idDistrito:85},{nombreDistrito:"san jeronimo",idDistrito:86},{nombreDistrito:"trinidad",idDistrito:87}]},{nombreCanton:"montes de oca",idcanton:15,distritos:[{nombreDistrito:"san pedro",idDistrito:88},{nombreDistrito:"sabanilla",idDistrito:89},{nombreDistrito:"mercedes",idDistrito:90},{nombreDistrito:"san rafael",idDistrito:91}]},{nombreCanton:"turrubares",idcanton:16,distritos:[{nombreDistrito:"san pablo",idDistrito:92},{nombreDistrito:"san pedro",idDistrito:93},{nombreDistrito:"san juan de mata",idDistrito:94},{nombreDistrito:"san luis",idDistrito:95},{nombreDistrito:"carara",idDistrito:96}]},{nombreCanton:"dota",idcanton:17,distritos:[{nombreDistrito:"san pablo",idDistrito:92},{nombreDistrito:"san pedro",idDistrito:93},{nombreDistrito:"san juan de mata",idDistrito:94},{nombreDistrito:"san luis",idDistrito:95},{nombreDistrito:"carara",idDistrito:96}]},{nombreCanton:"curridabat",idcanton:18,distritos:[{nombreDistrito:"curridabat",idDistrito:100},{nombreDistrito:"granadilla",idDistrito:101},{nombreDistrito:"sanchez",idDistrito:102},{nombreDistrito:"tirrases",idDistrito:103}]},{nombreCanton:"perez zeledon",idcanton:19,distritos:[{nombreDistrito:"san isidro del general",idDistrito:104},{nombreDistrito:"general",idDistrito:105},{nombreDistrito:"daniel flores",idDistrito:106},{nombreDistrito:"rivas",idDistrito:107},{nombreDistrito:"san pedro",idDistrito:108},{nombreDistrito:"platanares",idDistrito:109},{nombreDistrito:"pejibaye",idDistrito:110},{nombreDistrito:"cajon",idDistrito:111},{nombreDistrito:"baru",idDistrito:112},{nombreDistrito:"rio nuevo",idDistrito:113},{nombreDistrito:"paramo",idDistrito:114},{nombreDistrito:"la amistad",idDistrito:476}]},{nombreCanton:"leon cortes",idcanton:20,distritos:[{nombreDistrito:"san pablo",idDistrito:115},{nombreDistrito:"san andres",idDistrito:116},{nombreDistrito:"llano bonito",idDistrito:117},{nombreDistrito:"san isidro",idDistrito:118},{nombreDistrito:"santa cruz",idDistrito:119},{nombreDistrito:"san antonio",idDistrito:120}]}]},{nombreProvincia:"alajuela",idProvincia:"2",cantones:[{nombreCanton:"alajuela",idcanton:21,distritos:[{nombreDistrito:"alajuela",idDistrito:121},{nombreDistrito:"san jose",idDistrito:122},{nombreDistrito:"carrizal",idDistrito:123},{nombreDistrito:"san antonio",idDistrito:124},{nombreDistrito:"guacima",idDistrito:125},{nombreDistrito:"san isidro",idDistrito:126},{nombreDistrito:"sabanilla",idDistrito:127},{nombreDistrito:"san rafael",idDistrito:128},{nombreDistrito:"rio segundo",idDistrito:129},{nombreDistrito:"desamparados",idDistrito:130},{nombreDistrito:"turrucares",idDistrito:131},{nombreDistrito:"tambor",idDistrito:132},{nombreDistrito:"garita",idDistrito:133},{nombreDistrito:"sarapiqui",idDistrito:134}]},{nombreCanton:"san ramon",idcanton:22,distritos:[{nombreDistrito:"san ramon",idDistrito:135},{nombreDistrito:"santiago",idDistrito:136},{nombreDistrito:"san juan",idDistrito:137},{nombreDistrito:"piedades norte",idDistrito:138},{nombreDistrito:"piedades sur",idDistrito:139},{nombreDistrito:"san rafael",idDistrito:140},{nombreDistrito:"san isidro",idDistrito:141},{nombreDistrito:"angeles",idDistrito:142},{nombreDistrito:"alfaro",idDistrito:143},{nombreDistrito:"volio",idDistrito:144},{nombreDistrito:"concepcion",idDistrito:145},{nombreDistrito:"zapotal",idDistrito:146},{nombreDistrito:"pe\xf1as blancas",idDistrito:147}]},{nombreCanton:"grecia",idcanton:23,distritos:[{nombreDistrito:"grecia",idDistrito:148},{nombreDistrito:"san isidro",idDistrito:149},{nombreDistrito:"san jose",idDistrito:150},{nombreDistrito:"san roque",idDistrito:151},{nombreDistrito:"tacares",idDistrito:152},{nombreDistrito:"rio cuarto",idDistrito:153},{nombreDistrito:"puente de piedra",idDistrito:154},{nombreDistrito:"bolivar",idDistrito:155}]},{nombreCanton:"san mateo",idcanton:24,distritos:[{nombreDistrito:"san mateo",idDistrito:156},{nombreDistrito:"desmonte",idDistrito:157},{nombreDistrito:"jesus maria",idDistrito:158},{nombreDistrito:"labrador",idDistrito:477}]},{nombreCanton:"atenas",idcanton:25,distritos:[{nombreDistrito:"atenas",idDistrito:159},{nombreDistrito:"jesus",idDistrito:160},{nombreDistrito:"mercedes",idDistrito:161},{nombreDistrito:"san isidro",idDistrito:162},{nombreDistrito:"concepcion",idDistrito:163},{nombreDistrito:"san jose",idDistrito:164},{nombreDistrito:"santa eulalia",idDistrito:165},{nombreDistrito:"escobal",idDistrito:166}]},{nombreCanton:"naranjo",idcanton:26,distritos:[{nombreDistrito:"naranjo",idDistrito:167},{nombreDistrito:"san miguel",idDistrito:168},{nombreDistrito:"san jose",idDistrito:169},{nombreDistrito:"cirri sur",idDistrito:170},{nombreDistrito:"san jeronimo",idDistrito:171},{nombreDistrito:"san juan",idDistrito:172},{nombreDistrito:"rosario",idDistrito:173},{nombreDistrito:"palmitos",idDistrito:478}]},{nombreCanton:"palmares",idcanton:27,distritos:[{nombreDistrito:"buenos aires",idDistrito:176},{nombreDistrito:"santiago",idDistrito:177},{nombreDistrito:"candelaria",idDistrito:178},{nombreDistrito:"esquipulas",idDistrito:179},{nombreDistrito:"palmares",idDistrito:471},{nombreDistrito:"la granja",idDistrito:472},{nombreDistrito:"zaragoza",idDistrito:473}]},{nombreCanton:"poas",idcanton:28,distritos:[{nombreDistrito:"granja",idDistrito:180},{nombreDistrito:"san pedro",idDistrito:181},{nombreDistrito:"san juan",idDistrito:182},{nombreDistrito:"san rafael",idDistrito:183},{nombreDistrito:"carrillos",idDistrito:184},{nombreDistrito:"sabana redonda",idDistrito:185}]},{nombreCanton:"orotina",idcanton:29,distritos:[{nombreDistrito:"orotina",idDistrito:186},{nombreDistrito:"mastate",idDistrito:187},{nombreDistrito:"hacienda vieja",idDistrito:188},{nombreDistrito:"coyolar",idDistrito:189},{nombreDistrito:"ceiba",idDistrito:190}]},{nombreCanton:"san carlos",idcanton:30,distritos:[{nombreDistrito:"quesada",idDistrito:191},{nombreDistrito:"florencia",idDistrito:192},{nombreDistrito:"buenavista",idDistrito:193},{nombreDistrito:"aguas zarcas",idDistrito:194},{nombreDistrito:"venecia",idDistrito:195},{nombreDistrito:"pital",idDistrito:196},{nombreDistrito:"fortuna",idDistrito:197},{nombreDistrito:"tigra",idDistrito:198},{nombreDistrito:"palmera",idDistrito:199},{nombreDistrito:"venado",idDistrito:200},{nombreDistrito:"cutris",idDistrito:201},{nombreDistrito:"monterrey",idDistrito:202},{nombreDistrito:"pocosol",idDistrito:203}]},{nombreCanton:"alfaro ruiz",idcanton:31,distritos:[{nombreDistrito:"zarcero",idDistrito:204},{nombreDistrito:"laguna",idDistrito:205},{nombreDistrito:"tapezco",idDistrito:206},{nombreDistrito:"guadalupe",idDistrito:207},{nombreDistrito:"palmira",idDistrito:208},{nombreDistrito:"zapote",idDistrito:209},{nombreDistrito:"brisas",idDistrito:210}]},{nombreCanton:"valverde vega",idcanton:32,distritos:[{nombreDistrito:"sarchi norte",idDistrito:211},{nombreDistrito:"sarchi sur",idDistrito:212},{nombreDistrito:"toro amarillo",idDistrito:213},{nombreDistrito:"san pedro",idDistrito:214},{nombreDistrito:"rodriguez",idDistrito:215}]},{nombreCanton:"upala",idcanton:33,distritos:[{nombreDistrito:"upala",idDistrito:216},{nombreDistrito:"aguas claras",idDistrito:217},{nombreDistrito:"san jose (pizote)",idDistrito:218},{nombreDistrito:"bijagua",idDistrito:219},{nombreDistrito:"delicias",idDistrito:220},{nombreDistrito:"dos rios",idDistrito:221},{nombreDistrito:"yoliyllal",idDistrito:222},{nombreDistrito:"canalete",idDistrito:479}]},{nombreCanton:"los chiles",idcanton:34,distritos:[{nombreDistrito:"los chiles",idDistrito:223},{nombreDistrito:"ca\xf1o negro",idDistrito:224},{nombreDistrito:"el amparo",idDistrito:225},{nombreDistrito:"san jorge",idDistrito:226}]},{nombreCanton:"guatuso",idcanton:35,distritos:[{nombreDistrito:"san rafael",idDistrito:227},{nombreDistrito:"buenavista",idDistrito:228},{nombreDistrito:"cote",idDistrito:229},{nombreDistrito:"katira",idDistrito:480}]},{nombreCanton:"rio cuarto",idcanton:84,distritos:[{nombreDistrito:"rio cuarto",idDistrito:490},{nombreDistrito:"santa rita",idDistrito:491},{nombreDistrito:"santa isabel",idDistrito:492}]}]},{nombreProvincia:"cartago",idProvincia:"3",cantones:[{nombreCanton:"cartago",idcanton:36,distritos:[{nombreDistrito:"oriental",idDistrito:230},{nombreDistrito:"occidental",idDistrito:231},{nombreDistrito:"carmen",idDistrito:232},{nombreDistrito:"san nicolas",idDistrito:233},{nombreDistrito:"aguacaliente (san francisco)",idDistrito:234},{nombreDistrito:"guadalupe (arenilla)",idDistrito:235},{nombreDistrito:"corralillo",idDistrito:236},{nombreDistrito:"tierra blanca",idDistrito:237},{nombreDistrito:"dulce nombre",idDistrito:238},{nombreDistrito:"llano grande",idDistrito:239},{nombreDistrito:"quebradilla",idDistrito:240}]},{nombreCanton:"paraiso",idcanton:37,distritos:[{nombreDistrito:"paraiso",idDistrito:241},{nombreDistrito:"santiago",idDistrito:242},{nombreDistrito:"orosi",idDistrito:243},{nombreDistrito:"cachi",idDistrito:244},{nombreDistrito:"llanos de santa lucia",idDistrito:245}]},{nombreCanton:"la union",idcanton:38,distritos:[{nombreDistrito:"tres rios",idDistrito:246},{nombreDistrito:"san diego",idDistrito:247},{nombreDistrito:"san juan",idDistrito:248},{nombreDistrito:"san rafael",idDistrito:249},{nombreDistrito:"concepcion",idDistrito:250},{nombreDistrito:"dulce nombre",idDistrito:251},{nombreDistrito:"san ramon",idDistrito:252},{nombreDistrito:"rio azul",idDistrito:253}]},{nombreCanton:"jimenez",idcanton:39,distritos:[{nombreDistrito:"juan vi\xf1as",idDistrito:254},{nombreDistrito:"tucurrique",idDistrito:255},{nombreDistrito:"pejibaye",idDistrito:256}]},{nombreCanton:"turrialba",idcanton:40,distritos:[{nombreDistrito:"turrialba",idDistrito:257},{nombreDistrito:"la suiza",idDistrito:258},{nombreDistrito:"peralta",idDistrito:259},{nombreDistrito:"santa cruz",idDistrito:260},{nombreDistrito:"santa teresita",idDistrito:261},{nombreDistrito:"pavones",idDistrito:262},{nombreDistrito:"tuis",idDistrito:263},{nombreDistrito:"tayutic",idDistrito:264},{nombreDistrito:"santa rosa",idDistrito:265},{nombreDistrito:"tres equis",idDistrito:266},{nombreDistrito:"la isabel",idDistrito:267},{nombreDistrito:"chirripo",idDistrito:268}]},{nombreCanton:"alvarado",idcanton:41,distritos:[{nombreDistrito:"pacayas",idDistrito:269},{nombreDistrito:"cervantes",idDistrito:270},{nombreDistrito:"capellades",idDistrito:271}]},{nombreCanton:"oreamuno",idcanton:42,distritos:[{nombreDistrito:"san rafael",idDistrito:272},{nombreDistrito:"cote",idDistrito:273},{nombreDistrito:"potrero cerrado",idDistrito:274},{nombreDistrito:"cipreses",idDistrito:275},{nombreDistrito:"santa rosa",idDistrito:276}]},{nombreCanton:"el guarco",idcanton:43,distritos:[{nombreDistrito:"tejar",idDistrito:277},{nombreDistrito:"san isidro",idDistrito:278},{nombreDistrito:"tobosi",idDistrito:279},{nombreDistrito:"patio de agua",idDistrito:280}]}]},{nombreProvincia:"heredia",idProvincia:"4",cantones:[{nombreCanton:"heredia",idcanton:44,distritos:[{nombreDistrito:"heredia",idDistrito:281},{nombreDistrito:"mercedes",idDistrito:282},{nombreDistrito:"san francisco",idDistrito:283},{nombreDistrito:"ulloa",idDistrito:284},{nombreDistrito:"varablanca",idDistrito:285}]},{nombreCanton:"barva",idcanton:45,distritos:[{nombreDistrito:"barva",idDistrito:286},{nombreDistrito:"san pedro",idDistrito:287},{nombreDistrito:"san pablo",idDistrito:288},{nombreDistrito:"san roque",idDistrito:289},{nombreDistrito:"santa lucia",idDistrito:290},{nombreDistrito:"san jose de la monta\xf1a",idDistrito:291}]},{nombreCanton:"santo domingo",idcanton:46,distritos:[{nombreDistrito:"santo domingo",idDistrito:292},{nombreDistrito:"san vicente",idDistrito:293},{nombreDistrito:"san miguel",idDistrito:294},{nombreDistrito:"paracito",idDistrito:295},{nombreDistrito:"santo tomas",idDistrito:296},{nombreDistrito:"santa rosa",idDistrito:297},{nombreDistrito:"tures",idDistrito:298},{nombreDistrito:"para",idDistrito:299}]},{nombreCanton:"santa barbara",idcanton:47,distritos:[{nombreDistrito:"santa barbara",idDistrito:300},{nombreDistrito:"san pedro",idDistrito:301},{nombreDistrito:"san juan",idDistrito:302},{nombreDistrito:"jesus",idDistrito:303},{nombreDistrito:"santo domingo",idDistrito:304},{nombreDistrito:"puraba",idDistrito:305}]},{nombreCanton:"san rafael",idcanton:48,distritos:[{nombreDistrito:"san rafael",idDistrito:306},{nombreDistrito:"san josecito",idDistrito:307},{nombreDistrito:"santiago",idDistrito:308},{nombreDistrito:"angeles",idDistrito:309},{nombreDistrito:"concepcion",idDistrito:310}]},{nombreCanton:"san isidro",idcanton:49,distritos:[{nombreDistrito:"san isidro",idDistrito:311},{nombreDistrito:"san jose",idDistrito:312},{nombreDistrito:"concepcion",idDistrito:313},{nombreDistrito:"san francisco",idDistrito:314}]},{nombreCanton:"belen",idcanton:50,distritos:[{nombreDistrito:"san antonio",idDistrito:315},{nombreDistrito:"ribera",idDistrito:316},{nombreDistrito:"asuncion",idDistrito:317}]},{nombreCanton:"flores",idcanton:51,distritos:[{nombreDistrito:"san joaquin de flores",idDistrito:318},{nombreDistrito:"barrantes",idDistrito:319},{nombreDistrito:"llorente",idDistrito:320}]},{nombreCanton:"san pablo",idcanton:52,distritos:[{nombreDistrito:"san pablo",idDistrito:321},{nombreDistrito:"rincon de sabanilla",idDistrito:481}]},{nombreCanton:"sarapiqui",idcanton:53,distritos:[{nombreDistrito:"puerto viejo",idDistrito:322},{nombreDistrito:"la virgen",idDistrito:323},{nombreDistrito:"horquetas",idDistrito:324},{nombreDistrito:"llanuras del gaspar",idDistrito:325},{nombreDistrito:"cure\xf1a",idDistrito:326}]}]},{nombreProvincia:"guanacaste",idProvincia:"5",cantones:[{nombreCanton:"liberia",idcanton:54,distritos:[{nombreDistrito:"liberia",idDistrito:327},{nombreDistrito:"ca\xf1as dulces",idDistrito:328},{nombreDistrito:"mayorga",idDistrito:329},{nombreDistrito:"nacascolo",idDistrito:330},{nombreDistrito:"curubande",idDistrito:331}]},{nombreCanton:"nicoya",idcanton:55,distritos:[{nombreDistrito:"nicoya",idDistrito:332},{nombreDistrito:"mansion",idDistrito:333},{nombreDistrito:"san antonio",idDistrito:334},{nombreDistrito:"quebrada honda",idDistrito:335},{nombreDistrito:"samara",idDistrito:336},{nombreDistrito:"nosara",idDistrito:337},{nombreDistrito:"belen de nosarita",idDistrito:338}]},{nombreCanton:"santa cruz",idcanton:56,distritos:[{nombreDistrito:"santa cruz",idDistrito:339},{nombreDistrito:"bolson",idDistrito:340},{nombreDistrito:"veintisiete de abril",idDistrito:341},{nombreDistrito:"tempate",idDistrito:342},{nombreDistrito:"cartagena",idDistrito:343},{nombreDistrito:"cuajiniquil",idDistrito:344},{nombreDistrito:"diria",idDistrito:345},{nombreDistrito:"cabo velas",idDistrito:346},{nombreDistrito:"tamarindo",idDistrito:347}]},{nombreCanton:"bagaces",idcanton:57,distritos:[{nombreDistrito:"bagaces",idDistrito:348},{nombreDistrito:"fortuna",idDistrito:349},{nombreDistrito:"mogote",idDistrito:350},{nombreDistrito:"rio naranjo",idDistrito:351}]},{nombreCanton:"carrillo",idcanton:58,distritos:[{nombreDistrito:"filadelfia",idDistrito:352},{nombreDistrito:"palmira",idDistrito:353},{nombreDistrito:"sardinal",idDistrito:354},{nombreDistrito:"belen",idDistrito:355}]},{nombreCanton:"ca\xf1as",idcanton:59,distritos:[{nombreDistrito:"ca\xf1as",idDistrito:356},{nombreDistrito:"palmira",idDistrito:357},{nombreDistrito:"san miguel",idDistrito:358},{nombreDistrito:"bebedero",idDistrito:359},{nombreDistrito:"porozal",idDistrito:360}]},{nombreCanton:"abangares",idcanton:60,distritos:[{nombreDistrito:"juntas",idDistrito:361},{nombreDistrito:"sierra",idDistrito:362},{nombreDistrito:"san juan",idDistrito:363},{nombreDistrito:"colorado",idDistrito:364}]},{nombreCanton:"tilaran",idcanton:61,distritos:[{nombreDistrito:"tilaran",idDistrito:365},{nombreDistrito:"quebrada grande",idDistrito:366},{nombreDistrito:"tronadora",idDistrito:367},{nombreDistrito:"santa rosa",idDistrito:368},{nombreDistrito:"libano",idDistrito:369},{nombreDistrito:"tierras morenas",idDistrito:370},{nombreDistrito:"arenal",idDistrito:371},{nombreDistrito:"cabeceras",idDistrito:487}]},{nombreCanton:"nandayure",idcanton:62,distritos:[{nombreDistrito:"carmona",idDistrito:372},{nombreDistrito:"santa rita",idDistrito:373},{nombreDistrito:"zapotal",idDistrito:374},{nombreDistrito:"san pablo",idDistrito:375},{nombreDistrito:"porvenir",idDistrito:376},{nombreDistrito:"bejuco",idDistrito:377}]},{nombreCanton:"la cruz",idcanton:63,distritos:[{nombreDistrito:"la cruz",idDistrito:378},{nombreDistrito:"santa cecilia",idDistrito:379},{nombreDistrito:"garita",idDistrito:380},{nombreDistrito:"santa elena",idDistrito:381}]},{nombreCanton:"hojancha",idcanton:64,distritos:[{nombreDistrito:"hojancha",idDistrito:382},{nombreDistrito:"monte romo",idDistrito:383},{nombreDistrito:"puerto carrillo",idDistrito:384},{nombreDistrito:"huacas",idDistrito:385},{nombreDistrito:"matambu",idDistrito:488}]}]},{nombreProvincia:"puntarenas",idProvincia:"6",cantones:[{nombreCanton:"puntarenas",idcanton:65,distritos:[{nombreDistrito:"puntarenas",idDistrito:386},{nombreDistrito:"pitahaya",idDistrito:387},{nombreDistrito:"chomes",idDistrito:388},{nombreDistrito:"lepanto",idDistrito:389},{nombreDistrito:"paquera",idDistrito:390},{nombreDistrito:"manzanillo",idDistrito:391},{nombreDistrito:"guacimal",idDistrito:392},{nombreDistrito:"barranca",idDistrito:393},{nombreDistrito:"isla del coco",idDistrito:395},{nombreDistrito:"cobano",idDistrito:396},{nombreDistrito:"chacarita",idDistrito:397},{nombreDistrito:"chira",idDistrito:398},{nombreDistrito:"acapulco",idDistrito:399},{nombreDistrito:"el roble",idDistrito:400},{nombreDistrito:"arancibia",idDistrito:401}]},{nombreCanton:"esparza",idcanton:66,distritos:[{nombreDistrito:"espiritu santo",idDistrito:402},{nombreDistrito:"san juan grande",idDistrito:403},{nombreDistrito:"macacona",idDistrito:404},{nombreDistrito:"san rafael",idDistrito:405},{nombreDistrito:"san jeronimo",idDistrito:406},{nombreDistrito:"caldera",idDistrito:482}]},{nombreCanton:"buenos aires",idcanton:67,distritos:[{nombreDistrito:"buenos aires",idDistrito:407},{nombreDistrito:"volcan",idDistrito:408},{nombreDistrito:"potrero grande",idDistrito:409},{nombreDistrito:"boruca",idDistrito:410},{nombreDistrito:"pilas",idDistrito:411},{nombreDistrito:"colinas",idDistrito:412},{nombreDistrito:"changena",idDistrito:413},{nombreDistrito:"briolley",idDistrito:414},{nombreDistrito:"brunka",idDistrito:415}]},{nombreCanton:"montes de oro",idcanton:68,distritos:[{nombreDistrito:"miramar",idDistrito:416},{nombreDistrito:"union",idDistrito:417},{nombreDistrito:"san isidro",idDistrito:418}]},{nombreCanton:"osa",idcanton:69,distritos:[{nombreDistrito:"puerto cortes",idDistrito:419},{nombreDistrito:"palmar",idDistrito:420},{nombreDistrito:"sierpe",idDistrito:421},{nombreDistrito:"bahia ballena",idDistrito:422},{nombreDistrito:"piedras blancas",idDistrito:423},{nombreDistrito:"bahia drake",idDistrito:483}]},{nombreCanton:"aguirre",idcanton:70,distritos:[{nombreDistrito:"quepos",idDistrito:424},{nombreDistrito:"savegre",idDistrito:425},{nombreDistrito:"naranjito",idDistrito:426}]},{nombreCanton:"golfito",idcanton:71,distritos:[{nombreDistrito:"golfito",idDistrito:427},{nombreDistrito:"puerto jimenez",idDistrito:428},{nombreDistrito:"guaycara",idDistrito:429},{nombreDistrito:"pavon",idDistrito:430}]},{nombreCanton:"coto brus",idcanton:72,distritos:[{nombreDistrito:"san vito",idDistrito:431},{nombreDistrito:"sabalito",idDistrito:432},{nombreDistrito:"aguabuena",idDistrito:433},{nombreDistrito:"limoncito",idDistrito:434},{nombreDistrito:"pittier",idDistrito:435},{nombreDistrito:"gutierrez brown",idDistrito:484}]},{nombreCanton:"parrita",idcanton:73,distritos:[{nombreDistrito:"parrita",idDistrito:436}]},{nombreCanton:"corredores",idcanton:74,distritos:[{nombreDistrito:"corredor",idDistrito:437},{nombreDistrito:"la cuesta",idDistrito:438},{nombreDistrito:"canoas",idDistrito:439},{nombreDistrito:"laurel",idDistrito:440}]},{nombreCanton:"garabito",idcanton:75,distritos:[{nombreDistrito:"jaco",idDistrito:441},{nombreDistrito:"tarcoles",idDistrito:442}]},{nombreCanton:"monte verde",idcanton:82,distritos:[{nombreDistrito:"jaco",idDistrito:441},{nombreDistrito:"tarcoles",idDistrito:442}]}]},{nombreProvincia:"limon",idProvincia:"7",cantones:[{nombreCanton:"limon",idcanton:76,distritos:[{nombreDistrito:"limon",idDistrito:443},{nombreDistrito:"valle la estrella",idDistrito:444},{nombreDistrito:"rio blanco",idDistrito:445},{nombreDistrito:"matama",idDistrito:446}]},{nombreCanton:"pococi",idcanton:77,distritos:[{nombreDistrito:"guapiles",idDistrito:447},{nombreDistrito:"jimenez",idDistrito:448},{nombreDistrito:"rita",idDistrito:449},{nombreDistrito:"roxana",idDistrito:450},{nombreDistrito:"cariari",idDistrito:451},{nombreDistrito:"colorado",idDistrito:452},{nombreDistrito:"la colonia",idDistrito:485}]},{nombreCanton:"siquirres",idcanton:78,distritos:[{nombreDistrito:"siquirres",idDistrito:453},{nombreDistrito:"pacuarito",idDistrito:454},{nombreDistrito:"florida",idDistrito:455},{nombreDistrito:"germania",idDistrito:456},{nombreDistrito:"cairo",idDistrito:457},{nombreDistrito:"alegria",idDistrito:458},{nombreDistrito:"reventazon",idDistrito:489}]},{nombreCanton:"talamanca",idcanton:79,distritos:[{nombreDistrito:"bratsi",idDistrito:459},{nombreDistrito:"sixaola",idDistrito:460},{nombreDistrito:"cahuita",idDistrito:461},{nombreDistrito:"telire",idDistrito:462}]},{nombreCanton:"matina",idcanton:80,distritos:[{nombreDistrito:"matina",idDistrito:463},{nombreDistrito:"battan",idDistrito:464},{nombreDistrito:"carrandi",idDistrito:465}]},{nombreCanton:"guacimo",idcanton:81,distritos:[{nombreDistrito:"guacimo",idDistrito:466},{nombreDistrito:"mercedes",idDistrito:467},{nombreDistrito:"pocora",idDistrito:468},{nombreDistrito:"rio jimenez",idDistrito:469},{nombreDistrito:"duacari",idDistrito:470}]}]}]};




            let nuevaVentana = () =>{

                let win = window.open('https://sucursal.correos.go.cr/web/guiaWeb');

                


                win.test = function () {

                    let compararProvincia = (provinciaUsuario, infoProvincias) => {
                        for (j = 0; j < infoProvincias.provincias.length; j++) {
                            let nombreProvincia = infoProvincias.provincias[j].nombreProvincia;
                            if (nombreProvincia == provinciaUsuario) {
                                let provinciaSeleccionada = infoProvincias.provincias[j];
                                return provinciaSeleccionada;
                            }
                        }

                    }

                    let compararCanton = (provinciaRetornado, cantonUsuario) => {
                        for (k = 0; k < provinciaRetornado.cantones.length; k++) {
                            let nombreCanton = provinciaRetornado.cantones[k].nombreCanton;
                            if (nombreCanton == cantonUsuario) {
                                let cantonSeleccionado = provinciaRetornado.cantones[k];
                                return cantonSeleccionado;
                            }
                        }

                    }

                    let compararDistrito = (cantonRetornado, distritoUsuario) => {
                        for (l = 0; l < cantonRetornado.distritos.length; l++) {
                            let nombreDistrito = cantonRetornado.distritos[l].nombreDistrito;

                            if (nombreDistrito == distritoUsuario) {
                                let distritoSeleccionado = cantonRetornado.distritos[l];
                                return distritoSeleccionado;
                            }
                        }
                    }


    
                    let provinciaRetornado = compararProvincia(provinciaUsuario, infoProvincias);
                    let cantonRetornado = compararCanton(provinciaRetornado, cantonUsuario);
                    let distritoRetornado = compararDistrito(cantonRetornado, distritoUsuario);


                    function llenarCosas(){
                        win.document.getElementById('sender_identification_type').value = "1";
                        win.document.getElementById('sender_id').value = "115470624";
                        win.document.getElementById('sender_name').value = "Adrian Blanco Cordero";
                        win.document.getElementById('sender_phone').value = "83182887";
                        win.document.getElementById('sender_mail').value = "amtatres@gmail.com"
                        win.document.getElementById('provincia_sender').value = "2"
                        win.document.getElementById('sender_direction').value = "300 mts sur del supercoop"
            
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
                        win.document.getElementById('destination_direction').value = direccionCliente;
                    }
                    
                    function llenarProvinciaDestinatario(){
                        win.document.getElementById('provincia').value = provinciaRetornado.idProvincia
                    }

                    function llenarCantonDestinatario(){
                        win.document.getElementById('canton').value = cantonRetornado.idcanton
                    }
            
                    function llenarDistritoDestinatario(){
                        win.document.getElementById('distrito').value = distritoRetornado.idDistrito
                    }
            
            
                    //talvez se puede llenar el codigo postal corriendo la funcion??
                    function llenarcodigoPostalDestinatario(){
                        win.document.getElementById('postal_code').value = "20706"
                    }
            
            
            
            
                    const llenarDetalleEnvio = () => {
            
                        let cajaTexto = win.document.querySelector('#box_detail');
            
                        cajaTexto.innerHTML = detalleCliente;
                    
                    };
            
                    
                    const habilitarBoton = (botonCrearGuia) => {

            
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
                        llenarCosasDestinatario();
                        await delay(1);
                        llenarProvinciaDestinatario();
                        await delay(2);
                        let event4 = new Event('change');
                        win.document.getElementById('provincia').dispatchEvent(event4);
                        await delay(2);
                        llenarCantonDestinatario();
                        await delay(2);
                        let event5 = new Event('change');
                        win.document.getElementById('canton').dispatchEvent(event5);
                        await delay(2);
                        llenarDistritoDestinatario();
                        await delay(2);
                        let event6 = new Event('change');
                        win.document.getElementById('distrito').dispatchEvent(event6);

                        let botonCrearGuia = win.document.querySelector('#search');

                        habilitarBoton(botonCrearGuia);
                        await delay(1);
                        clickearBoton(botonCrearGuia);
                        await delay(45);
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

            await timer(3000);
            
            nuevaVentana();

        };
        
    }
    load();


})
