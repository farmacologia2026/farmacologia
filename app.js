//=====================================================
// PLATAFORMA DE FARMACOLOGÍA v2.0
// APP.JS
// PARTE 1/5
//=====================================================

//===============================
// VARIABLES
//===============================

let preguntasExamen = [];
let preguntasIncorrectas = [];

let indicePregunta = 0;
let puntaje = 0;

let modoRevision = false;
let respuestasSesion = [];
let inicioPreguntaActual = 0;
let temaSesion = "";
let cursoSeleccionado = "";

const CLAVE_ESTADISTICAS = "bankmed_estadisticas_v1";
const CLAVE_NOMBRE_USUARIO = "bankmed_nombre_usuario";
const CLAVE_PREGUNTAS_RECIENTES = "bankmed_preguntas_recientes_v1";
const CLAVE_AVISO_LEGAL = "bankmed_aviso_legal_v1";
const CLAVE_ACCESO_ESTUDIANTE = "farmacologia_acceso_estudiante_v1";
const CLAVE_COLA_RESPUESTAS = "farmacologia_cola_respuestas_v1";
const DURACION_SESION_ESTUDIANTE_MS = 7*24*60*60*1000;

let clienteSupabase=null;

// Organización de los 26 temas del sílabo de Farmacología 2026-II.
const GRUPOS_SUBTEMAS_FARMACOLOGIA = [
    {
        nombre:"Módulo 1 · Farmacología general y neurofarmacología",
        subtemas:[
            "1. Farmacocinética",
            "2. Farmacodinámica",
            "3. Fármacos colinérgicos",
            "4. Anticonvulsivantes y ansiolíticos",
            "5. Fármacos adrenérgicos",
            "6. Anestésicos locales y generales",
            "7. Antiinflamatorios y analgésicos"
        ]
    },
    {
        nombre:"Módulo 2 · Farmacología cardiovascular y hematológica",
        subtemas:[
            "8. Fármacos antihipertensivos",
            "9. Fármacos vasoactivos",
            "10. Fármacos antiarrítmicos",
            "11. Fármacos en la insuficiencia cardíaca",
            "12. Fármacos en la hemostasia",
            "13. Fármacos antidislipidémicos"
        ]
    },
    {
        nombre:"Módulo 3 · Farmacología respiratoria, digestiva y endocrina",
        subtemas:[
            "14. Antiasmáticos y antihistamínicos",
            "15. Fármacos en EPOC",
            "16. Farmacología digestiva",
            "17. Fármacos antiosteoporóticos",
            "18. Fármacos antidiabéticos",
            "19. Fármacos hematínicos"
        ]
    },
    {
        nombre:"Módulo 4 · Farmacología antimicrobiana",
        subtemas:[
            "20. Antibacterianos inhibidores de la síntesis de pared",
            "21. Antibacterianos inhibidores de proteínas y metabolitos esenciales",
            "22. Fármacos antifímicos",
            "23. Fármacos antiparasitarios",
            "24. Fármacos antimicóticos",
            "25. Fármacos antivirales y antirretrovirales",
            "26. Fármacos contra infecciones metaxénicas"
        ]
    }
];

// Liberación progresiva del contenido: actualmente corresponde a la semana 1.
const TEMAS_HABILITADOS_SEMANA = new Set([
    "1. Farmacocinética",
    "2. Farmacodinámica"
]);

function temaHabilitadoEstaSemana(tema){
    return TEMAS_HABILITADOS_SEMANA.has(tema);
}

//===============================
// PANTALLAS
//===============================

const pantallaInicio =
document.getElementById("pantallaInicio");

const pantallaSeleccion =
document.getElementById("pantallaSeleccion");

const pantallaPregunta =
document.getElementById("pantallaPregunta");

const pantallaResultados =
document.getElementById("pantallaResultados");

const pantallaEstadisticas =
document.getElementById("pantallaEstadisticas");

const pantallaQuienSoy =
document.getElementById("pantallaQuienSoy");

const pantallaTablasApuntes =
document.getElementById("pantallaTablasApuntes");

const pantallaBanqueo =
document.getElementById("pantallaBanqueo");

//===============================
// BOTONES
//===============================

const btnEstadisticas =
document.getElementById("btnEstadisticas");

const btnPreguntasCursos =
document.getElementById("btnPreguntasCursos");

const btnInstalarPWA =
document.getElementById("btnInstalarPWA");

const botonesNavegacionPrincipal =
document.querySelectorAll(".navegacionHeader .botonQuienSoy:not(.botonInstalarPWA)");

const btnVolverQuienSoy =
document.getElementById("btnVolverQuienSoy");

const btnTablasApuntes =
document.getElementById("btnTablasApuntes");

const btnVolverTablasApuntes =
document.getElementById("btnVolverTablasApuntes");

const catalogoMaterial =
document.getElementById("catalogoMaterial");

const materialAntimicrobianos =
document.getElementById("materialAntimicrobianos");

const materialFarmacodinamica =
document.getElementById("materialFarmacodinamica");

const materialMetabolismo =
document.getElementById("materialMetabolismo");

const materialAntiarritmicos =
document.getElementById("materialAntiarritmicos");

const materialAntiagregantes =
document.getElementById("materialAntiagregantes");

const materialAnticoagulantes =
document.getElementById("materialAnticoagulantes");

const materialVasoactivos =
document.getElementById("materialVasoactivos");

const materialReceptoresAdrenergicos =
document.getElementById("materialReceptoresAdrenergicos");

const materialReceptoresMuscarinicos =
document.getElementById("materialReceptoresMuscarinicos");

const selectTemaMaterial =
document.getElementById("selectTemaMaterial");

const btnVerMaterial =
document.getElementById("btnVerMaterial");

const btnVolverCatalogoMaterial =
document.getElementById("btnVolverCatalogoMaterial");

const btnVolverCatalogoFarmacodinamica =
document.getElementById("btnVolverCatalogoFarmacodinamica");

const btnVolverCatalogoMetabolismo =
document.getElementById("btnVolverCatalogoMetabolismo");

const btnVolverCatalogoAntiarritmicos =
document.getElementById("btnVolverCatalogoAntiarritmicos");

const btnVolverCatalogoAntiagregantes =
document.getElementById("btnVolverCatalogoAntiagregantes");

const btnVolverCatalogoAnticoagulantes =
document.getElementById("btnVolverCatalogoAnticoagulantes");

const btnVolverCatalogoVasoactivos =
document.getElementById("btnVolverCatalogoVasoactivos");

const btnVolverCatalogoReceptoresAdrenergicos =
document.getElementById("btnVolverCatalogoReceptoresAdrenergicos");

const btnVolverCatalogoReceptoresMuscarinicos =
document.getElementById("btnVolverCatalogoReceptoresMuscarinicos");

const btnBanqueo =
document.getElementById("btnBanqueo");

const btnVolverBanqueo =
document.getElementById("btnVolverBanqueo");

const btnIniciarBanqueo =
document.getElementById("btnIniciarBanqueo");

const btnIniciar =
document.getElementById("btnIniciar");

const btnResponder =
document.getElementById("btnResponder");

const btnSalirExamen =
document.getElementById("btnSalirExamen");

const btnRevisar =
document.getElementById("btnRevisar");

const btnReintentar =
document.getElementById("btnReintentar");

const btnNuevoExamen =
document.getElementById("btnNuevoExamen");

const btnVolverInicio =
document.getElementById("btnVolverInicio");

const btnVolverEstadisticas =
document.getElementById("btnVolverEstadisticas");

const btnBorrarEstadisticas =
document.getElementById("btnBorrarEstadisticas");

const btnVolverCursos =
document.getElementById("btnVolverCursos");

const botonesCurso =
document.querySelectorAll(".cursoDisponible");

const opcionesSubtemasBanqueo =
document.getElementById("opcionesSubtemasBanqueo");

const descripcionBanqueo =
document.getElementById("descripcionBanqueo");

const personalizarBanqueo =
document.getElementById("personalizarBanqueo");

const opcionesModalidadBanqueo =
document.querySelectorAll('input[name="modalidadBanqueo"]');

const mascotaSaludo =
document.getElementById("mascotaSaludo");

const mensajeMascota =
document.getElementById("mensajeMascota");

const btnMascota =
document.getElementById("btnMascota");

const modalNombre =
document.getElementById("modalNombre");

const inputNombre =
document.getElementById("inputNombre");

const btnGuardarNombre =
document.getElementById("btnGuardarNombre");

const btnOmitirNombre =
document.getElementById("btnOmitirNombre");

const mensajeAccesoEstudiante =
document.getElementById("mensajeAccesoEstudiante");

const modalAvisoLegal =
document.getElementById("modalAvisoLegal");

const btnCerrarAvisoLegal =
document.getElementById("btnCerrarAvisoLegal");

const btnAceptarAvisoLegal =
document.getElementById("btnAceptarAvisoLegal");

const btnAbrirAvisoLegal =
document.getElementById("btnAbrirAvisoLegal");

const saludoUsuario =
document.getElementById("saludoUsuario");

const controlesSesionEstudiante=document.getElementById("controlesSesionEstudiante");
const nombreSesionEstudiante=document.getElementById("nombreSesionEstudiante");
const vencimientoSesionEstudiante=document.getElementById("vencimientoSesionEstudiante");
const btnCambiarEstudiante=document.getElementById("btnCambiarEstudiante");
const btnCerrarSesionEstudiante=document.getElementById("btnCerrarSesionEstudiante");

//===============================
// CONTROLES
//===============================

const selectTema =
document.getElementById("sistema");

const listaSubtemas=
document.getElementById("listaSubtemas");

const selectCantidad =
document.getElementById("cantidad");

const grupoSubtema =
document.getElementById("grupoSubtema");

const grupoCantidadPractica =
document.getElementById("grupoCantidadPractica");

const accionesPractica =
document.getElementById("accionesPractica");

const descripcionModalidad =
document.getElementById("descripcionModalidad");

const tituloSeleccion =
document.getElementById("tituloSeleccion");

//===============================
// PREGUNTA
//===============================

const progreso =
document.getElementById("progreso");

const textoPregunta =
document.getElementById("textoPregunta");

const opciones =
document.getElementById("opciones");

const barra =
document.getElementById("barraProgreso");

//===============================
// EXPLICACIÓN
//===============================

const cuadroExplicacion =
document.getElementById("explicacion");

const textoExplicacion =
document.getElementById("textoExplicacion");

//===============================
// RESULTADOS
//===============================

const resultadoPuntaje =
document.getElementById("resultadoPuntaje");

const resultadoPorcentaje =
document.getElementById("resultadoPorcentaje");

const resultadoCorrectas =
document.getElementById("resultadoCorrectas");

const resultadoIncorrectas =
document.getElementById("resultadoIncorrectas");

const mensajeResultado =
document.getElementById("mensajeResultado");

const contenidoEstadisticas =
document.getElementById("contenidoEstadisticas");

const totalPreguntasBanco =
document.getElementById("totalPreguntasBanco");

const TEMAS_MATERIAL={
    farmacologia:[
        {grupo:"Semana 1",valor:"farmacocinetica",nombre:"1. Farmacocinética",habilitado:true},
        {grupo:"Semana 1",valor:"farmacodinamica",nombre:"2. Farmacodinámica",habilitado:true},
        {grupo:"Próximas semanas",valor:"paredBacteriana",nombre:"Inhibidores de la pared bacteriana",habilitado:false},
        {grupo:"Próximas semanas",valor:"metabolismo",nombre:"Inhibidores del metabolismo",habilitado:false},
        {grupo:"Próximas semanas",valor:"receptoresAdrenergicos",nombre:"Receptores adrenérgicos",habilitado:false},
        {grupo:"Próximas semanas",valor:"receptoresMuscarinicos",nombre:"Receptores muscarínicos",habilitado:false},
        {grupo:"Próximas semanas",valor:"antiarritmicos",nombre:"Antiarrítmicos",habilitado:false},
        {grupo:"Próximas semanas",valor:"antiagregantes",nombre:"Antiagregantes plaquetarios",habilitado:false},
        {grupo:"Próximas semanas",valor:"anticoagulantes",nombre:"Anticoagulantes orales y parenterales",habilitado:false},
        {grupo:"Próximas semanas",valor:"vasoactivos",nombre:"Inodilatadores e inoconstrictores",habilitado:false}
    ]
};

//===============================
// INICIO
//===============================

window.onload = iniciarAplicacion;

function iniciarAplicacion(){

    cargarTemas();

    cargarSubtemasBanqueo();

    opcionesModalidadBanqueo.forEach(function(opcion){

        opcion.addEventListener("change",actualizarConfiguracionBanqueo);

    });

    actualizarConfiguracionBanqueo();

    actualizarTotalPreguntasBanco();

    cargarTemasMaterial();

    prepararTablasResponsivas();

    mostrarPantalla("inicio");

    configurarMascota();

    sincronizarColaRespuestas();

    configurarAvisoLegal();

    actualizarVisibilidadBotonInstalacion();

    btnPreguntasCursos.onclick=function(){

        abrirPreguntasFarmacologia();

    };

    btnVolverQuienSoy.onclick=function(){

        mostrarPantalla("inicio");

    };

    btnTablasApuntes.onclick=function(){

        mostrarCatalogoMaterial();

        mostrarPantalla("tablasApuntes");

    };

    btnVolverTablasApuntes.onclick=function(){

        mostrarPantalla("inicio");

    };

    btnVerMaterial.onclick=function(){

        mostrarMaterialSeleccionado();

    };

    selectCantidad.onchange=actualizarDescripcionModalidad;

    selectTema.onchange=function(){
        actualizarSeleccionVisualSubtema();
        actualizarDescripcionModalidad();
    };

    btnVolverCatalogoMaterial.onclick=function(){

        mostrarCatalogoMaterial();

    };

    btnVolverCatalogoFarmacodinamica.onclick=function(){

        mostrarCatalogoMaterial();

    };

    btnVolverCatalogoMetabolismo.onclick=function(){

        mostrarCatalogoMaterial();

    };

    btnVolverCatalogoAntiarritmicos.onclick=function(){

        mostrarCatalogoMaterial();

    };

    btnVolverCatalogoAntiagregantes.onclick=function(){

        mostrarCatalogoMaterial();

    };

    btnVolverCatalogoAnticoagulantes.onclick=function(){

        mostrarCatalogoMaterial();

    };

    btnVolverCatalogoVasoactivos.onclick=function(){

        mostrarCatalogoMaterial();

    };

    btnVolverCatalogoReceptoresAdrenergicos.onclick=function(){

        mostrarCatalogoMaterial();

    };

    btnVolverCatalogoReceptoresMuscarinicos.onclick=function(){

        mostrarCatalogoMaterial();

    };

    btnBanqueo.onclick=function(){

        mostrarPantalla("banqueo");

    };

    btnVolverBanqueo.onclick=function(){

        mostrarPantalla("inicio");

    };

}

function configurarAvisoLegal(){

    btnCerrarAvisoLegal.onclick=cerrarAvisoLegal;

    btnAceptarAvisoLegal.onclick=cerrarAvisoLegal;

    btnAbrirAvisoLegal.onclick=abrirAvisoLegal;

    modalAvisoLegal.onclick=function(evento){

        if(evento.target===modalAvisoLegal){

            cerrarAvisoLegal();

        }

    };

    document.addEventListener("keydown",function(evento){

        if(evento.key==="Escape" && !modalAvisoLegal.hidden){

            cerrarAvisoLegal();

        }

    });

    if(localStorage.getItem(CLAVE_AVISO_LEGAL)!=="visto"){

        abrirAvisoLegal();

    }

}

function abrirAvisoLegal(){

    modalAvisoLegal.hidden=false;
    document.body.classList.add("modalAbierto");

    btnAceptarAvisoLegal.focus();

}

function cerrarAvisoLegal(){

    modalAvisoLegal.hidden=true;
    document.body.classList.remove("modalAbierto");
    localStorage.setItem(CLAVE_AVISO_LEGAL,"visto");

}

function actualizarTotalPreguntasBanco(){

    totalPreguntasBanco.textContent=bancoPreguntas.length;

}

function cargarTemasMaterial(){

    const temas=TEMAS_MATERIAL.farmacologia || [];

    selectTemaMaterial.innerHTML="";

    [...new Set(temas.map(tema=>tema.grupo))].forEach(function(nombreGrupo){

        const grupo=document.createElement("optgroup");
        grupo.label=nombreGrupo;

        temas.filter(tema=>tema.grupo===nombreGrupo).forEach(function(tema){

            const opcion=document.createElement("option");
            opcion.value=tema.valor;
            opcion.textContent=tema.habilitado ? tema.nombre : "🔒 "+tema.nombre;
            opcion.dataset.habilitado=String(tema.habilitado);
            grupo.appendChild(opcion);

        });

        selectTemaMaterial.appendChild(grupo);

    });

}

function prepararTablasResponsivas(){

    document.querySelectorAll(".tablaEstudio").forEach(function(tabla){

        const encabezados=[...tabla.querySelectorAll("thead th")].map(function(encabezado){

            return encabezado.textContent.trim();

        });

        tabla.querySelectorAll("tbody tr").forEach(function(fila){

            [...fila.cells].forEach(function(celda,indice){

                celda.dataset.etiqueta=encabezados[indice] || "Información";

            });

        });

    });

}

function mostrarMaterialSeleccionado(){

    const temaMaterial=(TEMAS_MATERIAL.farmacologia || []).find(
        tema=>tema.valor===selectTemaMaterial.value
    );

    if(!temaMaterial || !temaMaterial.habilitado){
        mostrarAvisoGuilbert("🔒 Este material corresponde a una próxima semana. ¡Muy pronto desbloquearemos este tema para tu repaso!");
        return;
    }

    if(selectTemaMaterial.value==="farmacocinetica"){
        mostrarAvisoGuilbert("📚 Este es un tema de la primera semana. Su material de estudio estará disponible muy pronto.");
        return;
    }

    catalogoMaterial.style.display="none";
    materialFarmacodinamica.style.display="none";
    materialAntimicrobianos.style.display="none";
    materialMetabolismo.style.display="none";
    materialAntiarritmicos.style.display="none";
    materialAntiagregantes.style.display="none";
    materialAnticoagulantes.style.display="none";
    materialVasoactivos.style.display="none";
    materialReceptoresAdrenergicos.style.display="none";
    materialReceptoresMuscarinicos.style.display="none";

    if(selectTemaMaterial.value==="farmacodinamica"){

        materialFarmacodinamica.style.display="block";

        return;

    }

    if(selectTemaMaterial.value==="paredBacteriana"){

        materialAntimicrobianos.style.display="block";

        return;

    }

    if(selectTemaMaterial.value==="receptoresMuscarinicos"){

        materialReceptoresMuscarinicos.style.display="block";

        return;

    }

    if(selectTemaMaterial.value==="receptoresAdrenergicos"){

        materialReceptoresAdrenergicos.style.display="block";

        return;

    }

    if(selectTemaMaterial.value==="metabolismo"){

        materialMetabolismo.style.display="block";

        return;

    }

    if(selectTemaMaterial.value==="antiarritmicos"){

        materialAntiarritmicos.style.display="block";

        return;

    }

    if(selectTemaMaterial.value==="antiagregantes"){

        materialAntiagregantes.style.display="block";

        return;

    }

    if(selectTemaMaterial.value==="anticoagulantes"){

        materialAnticoagulantes.style.display="block";

        return;

    }

    if(selectTemaMaterial.value==="vasoactivos"){

        materialVasoactivos.style.display="block";

        return;

    }

    mostrarCatalogoMaterial();

}

function mostrarCatalogoMaterial(){

    catalogoMaterial.style.display="block";
    materialFarmacodinamica.style.display="none";
    materialAntimicrobianos.style.display="none";
    materialMetabolismo.style.display="none";
    materialAntiarritmicos.style.display="none";
    materialAntiagregantes.style.display="none";
    materialAnticoagulantes.style.display="none";
    materialVasoactivos.style.display="none";
    materialReceptoresAdrenergicos.style.display="none";
    materialReceptoresMuscarinicos.style.display="none";

}

function configurarMascota(){

    const accesoGuardado=leerAccesoEstudiante();
    const nombreGuardado=accesoGuardado ? accesoGuardado.displayName : "";

    actualizarSaludoMascota(nombreGuardado);
    actualizarControlesSesion(accesoGuardado);

    inicializarClienteSupabase();

    if(!accesoGuardado && accesoPorCodigoRequerido()){

        mostrarModalNombre();

    }

    btnMascota.onclick=function(){
        const acceso=leerAccesoEstudiante();
        if(acceso){
            mostrarAvisoGuilbert("👋 Sesión activa de "+acceso.displayName+". Usa los controles superiores si deseas cambiar de estudiante.");
        }else{
            mostrarModalNombre();
        }

    };

    btnGuardarNombre.onclick=validarCodigoEstudiante;

    btnOmitirNombre.onclick=function(){

        if(!accesoPorCodigoRequerido()){
            cerrarModalNombre();
        }

    };

    inputNombre.addEventListener("keydown",function(evento){

        if(evento.key==="Enter"){

            validarCodigoEstudiante();

        }

    });

    btnCambiarEstudiante.onclick=function(){ cerrarSesionEstudiante(true); };
    btnCerrarSesionEstudiante.onclick=function(){ cerrarSesionEstudiante(false); };

    setInterval(function(){
        const acceso=leerAccesoEstudiante();
        actualizarControlesSesion(acceso);
        if(!acceso && accesoPorCodigoRequerido()){
            mostrarModalNombre();
        }
    },60000);

}

function actualizarSaludoMascota(nombre){

    mensajeMascota.textContent=nombre
        ? "¡Hola, "+nombre+"! Soy Guilbert. ¿Listo para aprender hoy?"
        : "¡Hola! Soy Guilbert. ¿Cómo te llamas?";

    saludoUsuario.textContent=nombre
        ? "¡Hola, "+nombre+"! ¿Qué te gustaría estudiar hoy?"
        : "";

}

function mostrarAvisoGuilbert(mensaje){

    mensajeMascota.textContent=mensaje;
    mascotaSaludo.classList.add("mascotaAbierta");

    clearTimeout(mostrarAvisoGuilbert.temporizador);
    mostrarAvisoGuilbert.temporizador=setTimeout(function(){

        mascotaSaludo.classList.remove("mascotaAbierta");
        const acceso=leerAccesoEstudiante();
        actualizarSaludoMascota(acceso ? acceso.displayName : "");

    },7000);

}

function mostrarModalNombre(){

    inputNombre.value="";
    mensajeAccesoEstudiante.textContent="";
    mensajeAccesoEstudiante.className="mensajeAccesoEstudiante";
    modalNombre.style.display="flex";
    mascotaSaludo.classList.add("mascotaAbierta");

    setTimeout(function(){

        inputNombre.focus();
        inputNombre.select();

    },100);

}

function cerrarModalNombre(){

    modalNombre.style.display="none";

}

function accesoPorCodigoRequerido(){
    return Boolean(window.SUPABASE_CONFIG && window.SUPABASE_CONFIG.requireStudentCode);
}

function inicializarClienteSupabase(){
    const configuracion=window.SUPABASE_CONFIG;

    if(!configuracion || !window.supabase || !configuracion.projectUrl || !configuracion.publishableKey){
        return null;
    }

    if(!clienteSupabase){
        clienteSupabase=window.supabase.createClient(
            configuracion.projectUrl,
            configuracion.publishableKey,
            {auth:{persistSession:false,autoRefreshToken:false}}
        );
    }

    return clienteSupabase;
}

function leerAccesoEstudiante(){
    try{
        const acceso=JSON.parse(localStorage.getItem(CLAVE_ACCESO_ESTUDIANTE));

        if(!acceso || !acceso.studentId || !acceso.sessionToken || !acceso.displayName){
            return null;
        }

        const vencimiento=acceso.expiresAt ? new Date(acceso.expiresAt).getTime() :
            new Date(acceso.accessedAt).getTime()+DURACION_SESION_ESTUDIANTE_MS;

        if(!Number.isFinite(vencimiento) || vencimiento<=Date.now()){
            limpiarDatosSesionLocal();
            return null;
        }

        acceso.expiresAt=new Date(vencimiento).toISOString();

        return acceso;
    }catch(error){
        return null;
    }
}

async function validarCodigoEstudiante(){
    const codigo=inputNombre.value.trim().toUpperCase().slice(0,32);

    if(codigo.length<4){
        mostrarEstadoAcceso("Ingresa un código institucional válido.",true);
        inputNombre.focus();
        return;
    }

    const cliente=inicializarClienteSupabase();

    if(!cliente){
        mostrarEstadoAcceso("No se pudo conectar con el servicio. Revisa tu conexión e inténtalo nuevamente.",true);
        return;
    }

    btnGuardarNombre.disabled=true;
    inputNombre.disabled=true;
    mostrarEstadoAcceso("Verificando código…",false);

    try{
        const resultado=await cliente.rpc("student_login",{p_code:codigo});

        if(resultado.error){
            throw resultado.error;
        }

        const acceso=Array.isArray(resultado.data) ? resultado.data[0] : null;

        if(!acceso){
            mostrarEstadoAcceso("Código no registrado o inactivo. Verifica el dato con tu docente.",true);
            return;
        }

        const sesion={
            studentId:acceso.student_id,
            displayName:acceso.display_name,
            sessionToken:acceso.session_token,
            accessedAt:new Date().toISOString(),
            expiresAt:new Date(Date.now()+DURACION_SESION_ESTUDIANTE_MS).toISOString()
        };

        localStorage.setItem(CLAVE_ACCESO_ESTUDIANTE,JSON.stringify(sesion));
        localStorage.setItem(CLAVE_NOMBRE_USUARIO,sesion.displayName);
        actualizarSaludoMascota(sesion.displayName);
        actualizarControlesSesion(sesion);
        mostrarEstadoAcceso("Acceso correcto. Preparando la plataforma…",false);
        setTimeout(cerrarModalNombre,350);
    }catch(error){
        console.error("No se pudo validar el código institucional:",error);
        mostrarEstadoAcceso("No fue posible validar el código. Inténtalo nuevamente en unos momentos.",true);
    }finally{
        btnGuardarNombre.disabled=false;
        inputNombre.disabled=false;
    }
}

function mostrarEstadoAcceso(mensaje,esError){
    mensajeAccesoEstudiante.textContent=mensaje;
    mensajeAccesoEstudiante.className="mensajeAccesoEstudiante"+(esError ? " mensajeAccesoError" : "");
}

function actualizarControlesSesion(acceso){
    controlesSesionEstudiante.hidden=!acceso;
    if(!acceso){
        nombreSesionEstudiante.textContent="";
        vencimientoSesionEstudiante.textContent="";
        return;
    }

    nombreSesionEstudiante.textContent=acceso.displayName;
    vencimientoSesionEstudiante.textContent="Sesión válida hasta "+new Date(acceso.expiresAt).toLocaleString("es-PE",{
        day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"
    });
}

function limpiarDatosSesionLocal(){
    localStorage.removeItem(CLAVE_ACCESO_ESTUDIANTE);
    localStorage.removeItem(CLAVE_NOMBRE_USUARIO);
    localStorage.removeItem(CLAVE_ESTADISTICAS);
    localStorage.removeItem(CLAVE_PREGUNTAS_RECIENTES);
    actualizarSaludoMascota("");
    actualizarControlesSesion(null);
}

async function cerrarSesionEstudiante(cambiarEstudiante){
    const acceso=leerAccesoEstudiante();
    if(!acceso){
        limpiarDatosSesionLocal();
        mostrarModalNombre();
        return;
    }

    if(leerColaRespuestas().length>0 && !navigator.onLine){
        alert("Hay respuestas pendientes de sincronización. Conéctate a Internet antes de cerrar o cambiar la sesión.");
        return;
    }

    btnCambiarEstudiante.disabled=true;
    btnCerrarSesionEstudiante.disabled=true;
    await sincronizarColaRespuestas();

    if(leerColaRespuestas().length>0){
        alert("Aún no fue posible sincronizar todas las respuestas. Inténtalo nuevamente en unos momentos.");
        btnCambiarEstudiante.disabled=false;
        btnCerrarSesionEstudiante.disabled=false;
        return;
    }

    const cliente=inicializarClienteSupabase();
    if(!cliente){
        alert("No fue posible conectar con el servicio para cerrar la sesión.");
        btnCambiarEstudiante.disabled=false;
        btnCerrarSesionEstudiante.disabled=false;
        return;
    }

    const resultado=await cliente.rpc("close_student_session",{p_session_token:acceso.sessionToken});
    if(resultado.error){
        alert("No fue posible cerrar la sesión de forma segura. Inténtalo nuevamente.");
        btnCambiarEstudiante.disabled=false;
        btnCerrarSesionEstudiante.disabled=false;
        return;
    }

    limpiarDatosSesionLocal();
    respuestasSesion=[];
    preguntasExamen=[];
    preguntasIncorrectas=[];
    mostrarPantalla("inicio");
    mostrarModalNombre();
    mostrarEstadoAcceso(cambiarEstudiante ? "Ingresa el código del nuevo estudiante." : "Sesión cerrada correctamente.",false);
    btnCambiarEstudiante.disabled=false;
    btnCerrarSesionEstudiante.disabled=false;
}

function leerColaRespuestas(){
    try{
        const cola=JSON.parse(localStorage.getItem(CLAVE_COLA_RESPUESTAS));
        return Array.isArray(cola) ? cola : [];
    }catch(error){
        return [];
    }
}

function encolarRespuestaRemota(respuesta){
    const acceso=leerAccesoEstudiante();
    if(!acceso){ return; }

    const cola=leerColaRespuestas();
    cola.push({
        ...respuesta,
        sessionToken:acceso.sessionToken,
        queuedAt:new Date().toISOString()
    });
    localStorage.setItem(CLAVE_COLA_RESPUESTAS,JSON.stringify(cola.slice(-500)));
    sincronizarColaRespuestas();
}

async function sincronizarColaRespuestas(){
    if(sincronizarColaRespuestas.enCurso || !navigator.onLine){ return; }

    const cliente=inicializarClienteSupabase();
    const pendientes=leerColaRespuestas();
    if(!cliente || pendientes.length===0){ return; }

    sincronizarColaRespuestas.enCurso=true;
    try{
        while(pendientes.length){
            const respuesta=pendientes[0];
            const resultado=await cliente.rpc("record_student_answer",{
                p_session_token:respuesta.sessionToken,
                p_question_id:respuesta.questionId,
                p_topic:respuesta.topic,
                p_is_correct:respuesta.isCorrect,
                p_response_time_seconds:respuesta.responseTimeSeconds
            });
            if(resultado.error){ throw resultado.error; }
            pendientes.shift();
            localStorage.setItem(CLAVE_COLA_RESPUESTAS,JSON.stringify(pendientes));
        }
    }catch(error){
        console.warn("La respuesta se conservará para sincronizarla después:",error.message || error);
    }finally{
        sincronizarColaRespuestas.enCurso=false;
    }
}

window.addEventListener("online",sincronizarColaRespuestas);

//===============================
// CAMBIAR PANTALLAS
//===============================

function mostrarPantalla(nombre){

    if(accesoPorCodigoRequerido() && !leerAccesoEstudiante()){
        nombre="inicio";
        mostrarModalNombre();
    }

    pantallaInicio.style.display="none";
    pantallaSeleccion.style.display="none";
    pantallaPregunta.style.display="none";
    pantallaResultados.style.display="none";
    pantallaEstadisticas.style.display="none";
    pantallaQuienSoy.style.display="none";
    pantallaTablasApuntes.style.display="none";
    pantallaBanqueo.style.display="none";

    switch(nombre){

        case "inicio":

            pantallaInicio.style.display="block";
            break;

        case "seleccion":

            pantallaSeleccion.style.display="block";
            break;

        case "pregunta":

            pantallaPregunta.style.display="block";
            break;

        case "resultado":

            pantallaResultados.style.display="block";
            break;

        case "estadisticas":

            pantallaEstadisticas.style.display="block";
            break;

        case "quienSoy":

            pantallaQuienSoy.style.display="block";
            break;

        case "tablasApuntes":

            pantallaTablasApuntes.style.display="block";
            break;

        case "banqueo":

            pantallaBanqueo.style.display="block";
            break;

    }

    actualizarPestanaActiva(nombre);

}

function actualizarPestanaActiva(nombre){

    const botonActivo = nombre==="tablasApuntes" ? btnTablasApuntes :
    nombre==="banqueo" ? btnBanqueo :
    nombre==="estadisticas" ? btnEstadisticas :
    ["seleccion","pregunta","resultado"].includes(nombre) ? btnPreguntasCursos : null;

    botonesNavegacionPrincipal.forEach(function(boton){

        const estaActivo=boton===botonActivo;
        boton.classList.toggle("pestanaActiva",estaActivo);

        if(estaActivo){
            boton.setAttribute("aria-current","page");
        }else{
            boton.removeAttribute("aria-current");
        }

    });

}

//===============================
// CARGAR TEMAS
//===============================

function clasificarTemaFarmacologia(pregunta){

    const id=pregunta.id;

    // Los temas 1 y 2 se reservan para futuras preguntas teóricas específicas.
    if(id>=433 && id<=462) return "1. Farmacocinética";
    if(id>=403 && id<=432) return "2. Farmacodinámica";
    if([1,63,70,165,245,247,249,391,402].includes(id)) return "3. Fármacos colinérgicos";
    if((id>=2 && id<=5) || [59,154,155,256,257,392,401].includes(id)) return "4. Anticonvulsivantes y ansiolíticos";
    if([58,66,73,248,300,394,396].includes(id)) return "5. Fármacos adrenérgicos";
    if([156,254].includes(id)) return "6. Anestésicos locales y generales";
    if([6,7,74,76,157,158,255,260,393].includes(id)) return "7. Antiinflamatorios y analgésicos";

    if([8,65,72,162,244,259,298,299].includes(id)) return "8. Fármacos antihipertensivos";
    if([9,10,164].includes(id)) return "9. Fármacos vasoactivos";
    if([11,395].includes(id)) return "10. Fármacos antiarrítmicos";
    if([12,13,14,64].includes(id)) return "11. Fármacos en la insuficiencia cardíaca";
    if((id>=15 && id<=18) || [246,389,390].includes(id)) return "12. Fármacos en la hemostasia";
    if([19,20,159].includes(id)) return "13. Fármacos antidislipidémicos";

    if((id>=21 && id<=26) || [57,69,160].includes(id)) return "14. Antiasmáticos y antihistamínicos";
    if((id>=27 && id<=30) || id===62) return "16. Farmacología digestiva";
    if([31,32,75].includes(id)) return "17. Fármacos antiosteoporóticos";
    if((id>=33 && id<=38) || [60,61,67,68,71,161,163,258,321,399,400].includes(id)) return "18. Fármacos antidiabéticos";
    if([39,40].includes(id)) return "19. Fármacos hematínicos";

    if((id>=41 && id<=44) || [151,251,398].includes(id)) return "20. Antibacterianos inhibidores de la síntesis de pared";
    if((id>=45 && id<=47) || [252,397].includes(id)) return "21. Antibacterianos inhibidores de proteínas y metabolitos esenciales";
    if([153,253].includes(id)) return "22. Fármacos antifímicos";
    if([51,52].includes(id)) return "23. Fármacos antiparasitarios";
    if((id>=48 && id<=50) || id===152) return "24. Fármacos antimicóticos";
    if([53,54,250].includes(id)) return "25. Fármacos antivirales y antirretrovirales";
    if([55,56].includes(id)) return "26. Fármacos contra infecciones metaxénicas";

    return pregunta.tema;

}

function obtenerTemaPregunta(pregunta){

    return cursoSeleccionado==="Farmacología" ?
    clasificarTemaFarmacologia(pregunta) : pregunta.tema;

}

function perteneceACurso(pregunta,curso){
    return curso==="Farmacología";

}

function obtenerCursoDePregunta(pregunta){
    return "Farmacología";

}

function obtenerSubtemaDePregunta(pregunta,curso){

    if(curso==="Farmacología"){

        return clasificarTemaFarmacologia(pregunta);

    }

    const prefijo=curso+":";

    return pregunta.tema.startsWith(prefijo) ?
    pregunta.tema.slice(prefijo.length).trim() : pregunta.tema;

}

function cargarTemas(){

    selectTema.innerHTML="";

    listaSubtemas.innerHTML="";

    const preguntasDelCurso=bancoPreguntas.filter(function(pregunta){

        return perteneceACurso(pregunta,cursoSeleccionado);

    });

    const temasAgregados=new Set();

    GRUPOS_SUBTEMAS_FARMACOLOGIA.forEach(function(grupo){

        const optgroup=document.createElement("optgroup");
        optgroup.label=grupo.nombre;

        const bloque=crearBloqueSubtemas(grupo.nombre);
        const opciones=bloque.querySelector(".opcionesSubtemas");

        grupo.subtemas.forEach(function(tema){

            const total=preguntasDelCurso.filter(
                p=>obtenerTemaPregunta(p)===tema
            ).length;

            const option=document.createElement("option");
            option.value=tema;
            option.disabled=!temaHabilitadoEstaSemana(tema);
            option.textContent=!temaHabilitadoEstaSemana(tema) ?
                "🔒 "+tema+" · Próxima semana" : tema+" ("+total+")";
            optgroup.appendChild(option);
            temasAgregados.add(tema);

            const botonTema=crearBotonSubtema(tema,total);
            if(!temaHabilitadoEstaSemana(tema)){
                botonTema.classList.add("subtemaBloqueado");
                botonTema.title="Contenido programado para una próxima semana.";
            }else if(total===0){
                botonTema.classList.add("subtemaVacio");
                botonTema.title="Este tema está habilitado, pero aún no tiene preguntas.";
            }
            opciones.appendChild(botonTema);

        });

        if(optgroup.children.length>0){
            selectTema.appendChild(optgroup);
            listaSubtemas.appendChild(bloque);
        }

    });

    const temasSinClasificar=[...new Set(preguntasDelCurso.map(obtenerTemaPregunta))]
    .filter(tema=>!temasAgregados.has(tema));

    if(temasSinClasificar.length>0){

        temasSinClasificar.sort().forEach(function(tema){

            const total=preguntasDelCurso.filter(
                p=>obtenerTemaPregunta(p)===tema
            ).length;

            const optgroup=document.createElement("optgroup");
            optgroup.label=tema;

            const option=document.createElement("option");
            option.value=tema;
            option.textContent=tema+" ("+total+")";
            optgroup.appendChild(option);

            const bloque=crearBloqueSubtemas(tema);
            bloque.querySelector(".opcionesSubtemas")
            .appendChild(crearBotonSubtema(tema,total));

            selectTema.appendChild(optgroup);
            listaSubtemas.appendChild(bloque);

        });

    }

    actualizarSeleccionVisualSubtema();
    actualizarDescripcionModalidad();

}

function crearBloqueSubtemas(nombreGrupo){

    const bloque=document.createElement("details");
    bloque.className="bloqueSubtemas";

    const titulo=document.createElement("summary");
    titulo.textContent=nombreGrupo;
    bloque.appendChild(titulo);

    const opciones=document.createElement("div");
    opciones.className="opcionesSubtemas";
    bloque.appendChild(opciones);

    bloque.addEventListener("toggle",function(){

        if(!bloque.open){
            return;
        }

        listaSubtemas.querySelectorAll(".bloqueSubtemas[open]").forEach(function(otroBloque){

            if(otroBloque!==bloque){
                otroBloque.open=false;
            }

        });

    });

    return bloque;

}

function crearBotonSubtema(tema,total){

    const boton=document.createElement("button");
    boton.type="button";
    boton.className="botonSubtema";
    boton.dataset.tema=tema;
    boton.setAttribute("aria-pressed","false");

    const nombre=document.createElement("span");
    nombre.className="nombreSubtema";
    nombre.textContent=tema;

    const cantidad=document.createElement("span");
    cantidad.className="cantidadSubtema";
    cantidad.textContent=temaHabilitadoEstaSemana(tema) ? total : "🔒";
    cantidad.setAttribute("aria-label",temaHabilitadoEstaSemana(tema) ? total+" preguntas" : "Tema bloqueado");

    boton.append(nombre,cantidad);
    boton.addEventListener("click",function(){

        if(!temaHabilitadoEstaSemana(tema)){
            mostrarAvisoGuilbert("🔒 ¡Hola! Soy Guilbert. Muy pronto se desbloqueará este tema para que puedas repasarlo.");
            return;
        }

        selectTema.value=tema;
        actualizarSeleccionVisualSubtema();
        actualizarDescripcionModalidad();

    });

    return boton;

}

function actualizarSeleccionVisualSubtema(){

    listaSubtemas.querySelectorAll(".botonSubtema").forEach(function(boton){

        const seleccionado=boton.dataset.tema===selectTema.value;
        boton.classList.toggle("subtemaSeleccionado",seleccionado);
        boton.setAttribute("aria-pressed",String(seleccionado));

    });

}

function cargarSubtemasBanqueo(){

    opcionesSubtemasBanqueo.innerHTML="";

    GRUPOS_SUBTEMAS_FARMACOLOGIA.forEach(function(grupo){

        const subtemasDisponibles=grupo.subtemas.map(function(subtema){

            return {
                nombre:subtema,
                total:bancoPreguntas.filter(
                    pregunta=>clasificarTemaFarmacologia(pregunta)===subtema
                ).length
            };

        }).filter(subtema=>temaHabilitadoEstaSemana(subtema.nombre) && subtema.total>0);

        if(subtemasDisponibles.length===0){
            return;
        }

        const bloque=document.createElement("section");
        bloque.className="grupoSubtemasBanqueo";

        const titulo=document.createElement("h4");
        titulo.textContent=grupo.nombre;
        bloque.appendChild(titulo);

        subtemasDisponibles.forEach(function(subtema){

            const etiqueta=document.createElement("label");
            const casilla=document.createElement("input");
            const texto=document.createElement("span");

            casilla.type="checkbox";
            casilla.name="subtemaBanqueo";
            casilla.value=subtema.nombre;
            casilla.addEventListener("change",actualizarDescripcionBanqueo);

            texto.textContent=subtema.nombre+" ("+subtema.total+")";
            etiqueta.append(casilla,texto);
            bloque.appendChild(etiqueta);

        });

        opcionesSubtemasBanqueo.appendChild(bloque);

    });

}

function actualizarDescripcionBanqueo(){

    const modalidad=document.querySelector('input[name="modalidadBanqueo"]:checked').value;
    const seleccionados=document.querySelectorAll('input[name="subtemaBanqueo"]:checked').length;

    if(modalidad==="general"){

        descripcionBanqueo.textContent="Se utilizarán únicamente preguntas de Farmacocinética y Farmacodinámica, correspondientes a la primera semana.";
        return;

    }

    descripcionBanqueo.textContent=seleccionados===0 ?
    "Los subtemas de la primera semana aparecerán aquí cuando tengan preguntas disponibles." :
    "Se seleccionarán hasta 20 preguntas de forma aleatoria de los "+seleccionados+" subtemas elegidos.";

}

function actualizarConfiguracionBanqueo(){

    const modalidad=document.querySelector('input[name="modalidadBanqueo"]:checked').value;
    personalizarBanqueo.hidden=modalidad!=="personalizado";
    actualizarDescripcionBanqueo();

}

function actualizarDescripcionModalidad(){

    grupoSubtema.style.display="block";
    grupoCantidadPractica.style.display="block";
    accionesPractica.style.display="block";

    const totalSubtema=bancoPreguntas.filter(function(pregunta){

        return perteneceACurso(pregunta,cursoSeleccionado) &&
        obtenerTemaPregunta(pregunta)===selectTema.value;

    }).length;

    const cantidadElegida=selectCantidad.value==="todas" ?
    totalSubtema : Math.min(parseInt(selectCantidad.value),totalSubtema);

    descripcionModalidad.textContent=totalSubtema>0 ?
    "📚 Responderás "+cantidadElegida+" de las "+totalSubtema+" preguntas disponibles en este subtema." :
    "📚 Tema habilitado para la primera semana. Las preguntas estarán disponibles muy pronto.";

    btnIniciar.textContent="▶ Iniciar práctica por subtema";
    btnIniciar.disabled=totalSubtema===0 || !temaHabilitadoEstaSemana(selectTema.value);

}

function obtenerModalidadPractica(){
    return "subtema";

}

//===============================
// BOTONES
//===============================

function abrirPreguntasFarmacologia(){

    cursoSeleccionado="Farmacología";
    tituloSeleccion.textContent=cursoSeleccionado;

    cargarTemas();
    actualizarDescripcionModalidad();
    mostrarPantalla("seleccion");

}

botonesCurso.forEach(function(boton){

    boton.onclick=function(){

        abrirPreguntasFarmacologia();

    }

});

function iniciarBanqueo(){

    const modalidad=document.querySelector('input[name="modalidadBanqueo"]:checked').value;
    const subtemasElegidos=[...document.querySelectorAll('input[name="subtemaBanqueo"]')]
    .filter(opcion=>opcion.checked)
    .map(opcion=>opcion.value);

    if(modalidad==="personalizado" && subtemasElegidos.length===0){

        alert("Selecciona al menos un subtema para iniciar el banqueo personalizado.");
        return;

    }

    const subtemasAplicados=modalidad==="personalizado" ? subtemasElegidos : [];

    indicePregunta=0;
    puntaje=0;
    preguntasIncorrectas=[];
    respuestasSesion=[];
    modoRevision=false;

    temaSesion=subtemasAplicados.length===0 ?
    "Banqueo general · Todos los subtemas" : "Banqueo personalizado · "+subtemasAplicados.join(", ");

    preguntasExamen=bancoPreguntas.filter(function(pregunta){

        const tema=clasificarTemaFarmacologia(pregunta);
        return temaHabilitadoEstaSemana(tema) &&
        (subtemasAplicados.length===0 || subtemasAplicados.includes(tema));

    });

    if(preguntasExamen.length===0){
        mostrarAvisoGuilbert("📝 El banqueo de la primera semana estará disponible cuando se incorporen las preguntas de Farmacocinética y Farmacodinámica.");
        return;
    }

    preguntasExamen=seleccionarPreguntasSinRepetir(preguntasExamen,20);

    prepararExamen();

    mostrarPantalla("pregunta");

    mostrarPregunta();

}

btnEstadisticas.onclick=function(){

    mostrarEstadisticas();

    mostrarPantalla("estadisticas");

}

btnIniciar.onclick=function(){

    iniciarExamen();

}

btnIniciarBanqueo.onclick=function(){

    iniciarBanqueo();

}

//===============================
// CREAR EXAMEN
//===============================

function iniciarExamen(){

    if(!temaHabilitadoEstaSemana(selectTema.value)){
        mostrarAvisoGuilbert("🔒 Muy pronto se desbloqueará este tema para que puedas repasarlo.");
        return;
    }

    indicePregunta=0;

    puntaje=0;

    preguntasIncorrectas=[];

    modoRevision=false;

    respuestasSesion=[];

    temaSesion=selectTema.value;

    preguntasExamen=bancoPreguntas.filter(function(p){

        return perteneceACurso(p,cursoSeleccionado) &&
        obtenerTemaPregunta(p)===selectTema.value;

    });

    if(preguntasExamen.length===0){

        alert("Este subtema aún no tiene preguntas disponibles.");

        return;

    }

    const cantidadSolicitada=selectCantidad.value==="todas" ?
    preguntasExamen.length : parseInt(selectCantidad.value);

    preguntasExamen=seleccionarPreguntasSinRepetir(
        preguntasExamen,
        cantidadSolicitada
    );

    prepararExamen();

    mostrarPantalla("pregunta");

    mostrarPregunta();

}

//===============================
// MEZCLAR
//===============================

function mezclarPreguntas(){

    preguntasExamen=mezclarArreglo(preguntasExamen);

}

function leerPreguntasRecientes(){

    try{

        const recientes=JSON.parse(localStorage.getItem(CLAVE_PREGUNTAS_RECIENTES));

        return Array.isArray(recientes) ? recientes : [];

    }

    catch(error){

        return [];

    }

}

function seleccionarPreguntasSinRepetir(candidatas,cantidad){

    const recientes=leerPreguntasRecientes();
    const idsRecientes=new Set(recientes);
    const nuevas=candidatas.filter(pregunta=>!idsRecientes.has(pregunta.id));
    const repetidas=candidatas.filter(pregunta=>idsRecientes.has(pregunta.id));
    const seleccion=mezclarArreglo(nuevas)
    .concat(mezclarArreglo(repetidas))
    .slice(0,cantidad);
    const idsSeleccionados=new Set(seleccion.map(pregunta=>pregunta.id));
    const historialActualizado=[
        ...seleccion.map(pregunta=>pregunta.id),
        ...recientes.filter(id=>!idsSeleccionados.has(id))
    ].slice(0,80);

    localStorage.setItem(CLAVE_PREGUNTAS_RECIENTES, JSON.stringify(historialActualizado));

    return seleccion;

}

btnSalirExamen.onclick=function(){

    const deseaSalir=confirm("¿Deseas abandonar este examen? Las respuestas de esta práctica no se guardarán.");

    if(!deseaSalir){

        return;

    }

    reiniciarExamen();
    preguntasExamen=[];
    preguntasIncorrectas=[];
    respuestasSesion=[];
    modoRevision=false;
    temaSesion="";

    mostrarPantalla("inicio");

};

btnVolverCursos.onclick=function(){

    mostrarPantalla("inicio");

}

function mezclarArreglo(arreglo){

    const copia=[...arreglo];

    for(let i=copia.length-1;i>0;i--){

        const indiceAleatorio=Math.floor(Math.random()*(i+1));

        [copia[i],copia[indiceAleatorio]]=
        [copia[indiceAleatorio],copia[i]];

    }

    return copia;

}

//=====================================================
// PARTE 2/5
// MOSTRAR PREGUNTA Y CORREGIR
//=====================================================

function mostrarPregunta(){

    cuadroExplicacion.style.display="none";
    textoExplicacion.innerHTML="";

    btnResponder.disabled=false;
    btnResponder.innerHTML="✅ Responder";
    btnResponder.onclick=corregirPregunta;

    const pregunta=preguntasExamen[indicePregunta];
    inicioPreguntaActual=performance.now();

    progreso.innerHTML=
    "Pregunta "+
    (indicePregunta+1)+
    " de "+
    preguntasExamen.length;

    // Barra de progreso

    barra.style.width=
    (
        (indicePregunta+1)
        /
        preguntasExamen.length
    )*100+"%";

    textoPregunta.innerHTML=
    pregunta.pregunta;

    opciones.innerHTML="";

    pregunta.opciones.forEach(function(opcion,i){

        opciones.innerHTML+=`

<label
class="opcion"
id="opcion${i}">

<input
type="radio"
name="respuesta"
value="${i}">

<strong>${String.fromCharCode(65+i)}.</strong>

${opcion}

</label>

`;

    });

    // Toda la tarjeta selecciona el radio

    document
    .querySelectorAll(".opcion")
    .forEach(function(card){

        card.onclick=function(){

            this.querySelector("input").checked=true;

        }

    });

}

//=====================================================

function corregirPregunta(){

    const seleccion=

    document.querySelector(

        'input[name="respuesta"]:checked'

    );

    if(!seleccion){

        alert("Seleccione una respuesta.");

        return;

    }

    const respuesta=

    parseInt(seleccion.value);

    const pregunta=

    preguntasExamen[indicePregunta];

    // Bloquear respuestas

    document
    .querySelectorAll(

        'input[name="respuesta"]'

    )
    .forEach(function(r){

        r.disabled=true;

    });

    // Pintar correcta

    document
    .getElementById(

        "opcion"+pregunta.correcta

    )
    .classList.add("correcta");

    // Si falló

    if(respuesta!=pregunta.correcta){

        document
        .getElementById(

            "opcion"+respuesta

        )
        .classList.add("incorrecta");

        preguntasIncorrectas.push(

            pregunta

        );

    }

    else{

        puntaje++;

    }

    // La revisión de errores no altera el historial de rendimiento.
    if(!modoRevision){

        const cursoPregunta=obtenerCursoDePregunta(pregunta);
        const subtemaPregunta=obtenerSubtemaDePregunta(pregunta,cursoPregunta);

        respuestasSesion.push({
            id:pregunta.id,
            tema:subtemaPregunta,
            curso:cursoPregunta,
            subtema:subtemaPregunta,
            correcta:respuesta===pregunta.correcta
        });

        encolarRespuestaRemota({
            questionId:String(pregunta.id),
            topic:subtemaPregunta,
            isCorrect:respuesta===pregunta.correcta,
            responseTimeSeconds:Math.max(0,Math.round((performance.now()-inicioPreguntaActual)/1000))
        });

    }

    // Mostrar explicación

    cuadroExplicacion.style.display="block";

    if(pregunta.explicacion){

        textoExplicacion.innerHTML=

        pregunta.explicacion;

    }

    else{

        textoExplicacion.innerHTML=

        "No existe explicación disponible para esta pregunta.";

    }

    // Cambiar botón

    btnResponder.innerHTML="➡️ Siguiente";

    btnResponder.onclick=siguientePregunta;

}

//=====================================================

function siguientePregunta(){

    indicePregunta++;

    if(indicePregunta>=preguntasExamen.length){

        finalizarExamen();

        return;

    }

    mostrarPregunta();

}

//=====================================================
// PARTE 3/5
// RESULTADOS
//=====================================================

function finalizarExamen(){

    if(!modoRevision){

        guardarSesionEnEstadisticas();

    }

    mostrarPantalla("resultado");

    const total = preguntasExamen.length;

    const porcentaje =
    Math.round((puntaje/total)*100);

    resultadoPuntaje.innerHTML =
    puntaje + " / " + total;

    resultadoPorcentaje.innerHTML =
    porcentaje + "%";

    resultadoCorrectas.innerHTML =
    "✅ Correctas: " + puntaje;

    resultadoIncorrectas.innerHTML =
    "❌ Incorrectas: " + (total-puntaje);

    if(porcentaje==100){

        mensajeResultado.innerHTML =
        "🏆 ¡Excelente!";

    }

    else if(porcentaje>=80){

        mensajeResultado.innerHTML =
        "🎯 Muy buen desempeño";

    }

    else if(porcentaje>=60){

        mensajeResultado.innerHTML =
        "👍 Buen trabajo";

    }

    else{

        mensajeResultado.innerHTML =
        "📚 Necesitas reforzar el tema";

    }

}

//=====================================================
// REVISAR EQUIVOCADAS
//=====================================================

btnRevisar.onclick=function(){

    if(preguntasIncorrectas.length==0){

        alert("No existen preguntas incorrectas.");

        return;

    }

    preguntasExamen=[...preguntasIncorrectas];

    indicePregunta=0;

    modoRevision=true;

    mostrarPantalla("pregunta");

    mostrarPregunta();

}

//=====================================================
// REINTENTAR EQUIVOCADAS
//=====================================================

btnReintentar.onclick=function(){

    if(preguntasIncorrectas.length==0){

        alert("No existen preguntas incorrectas.");

        return;

    }

    preguntasExamen=[...preguntasIncorrectas];

    preguntasIncorrectas=[];

    indicePregunta=0;

    puntaje=0;

    modoRevision=false;

    mezclarPreguntas();

    mostrarPantalla("pregunta");

    mostrarPregunta();

}

//=====================================================
// NUEVO EXAMEN
//=====================================================

btnNuevoExamen.onclick=function(){

    mostrarPantalla("seleccion");

}

//=====================================================
// VOLVER AL INICIO
//=====================================================

btnVolverInicio.onclick=function(){

    mostrarPantalla("inicio");

}

//=====================================================
// PARTE 4/5
// MEJORAS DEL EXAMEN
//=====================================================

//===============================
// MEZCLAR ALTERNATIVAS
//===============================

function mezclarOpciones(pregunta){

    const opciones = pregunta.opciones.map(function(texto,indice){

        return{

            texto:texto,
            correcta:(indice===pregunta.correcta)

        };

    });

    const opcionesMezcladas=mezclarArreglo(opciones);

    return{
        ...pregunta,
        opciones:opcionesMezcladas.map(o=>o.texto),
        correcta:opcionesMezcladas.findIndex(o=>o.correcta)
    };

}

//=====================================================
// PREPARAR EXAMEN
//=====================================================

function prepararExamen(){

    preguntasExamen=preguntasExamen.map(mezclarOpciones);

}

//=====================================================
// MODIFICAR iniciarExamen()
//=====================================================
//
// Dentro de iniciarExamen(),
// justo después de:
//
// mezclarPreguntas();
//
// agrega:
//
// prepararExamen();
//
//=====================================================


//=====================================================
// MENSAJE CORRECTO / INCORRECTO
//=====================================================

function mostrarMensajeResultado(acerto){

    let mensaje =
    document.getElementById("mensajePregunta");

    if(!mensaje){

        mensaje =
        document.createElement("div");

        mensaje.id="mensajePregunta";

        mensaje.style.fontSize="26px";
        mensaje.style.fontWeight="bold";
        mensaje.style.marginBottom="20px";
        mensaje.style.textAlign="center";

        textoPregunta.parentNode.insertBefore(

            mensaje,

            textoPregunta

        );

    }

    if(acerto){

        mensaje.innerHTML="✅ ¡Correcto!";

        mensaje.style.color="#198754";

    }

    else{

        mensaje.innerHTML="❌ Incorrecto";

        mensaje.style.color="#dc3545";

    }

}

//=====================================================
// OCULTAR MENSAJE
//=====================================================

function ocultarMensaje(){

    const mensaje=

    document.getElementById(

        "mensajePregunta"

    );

    if(mensaje){

        mensaje.innerHTML="";

    }

}

//=====================================================
// MODIFICAR mostrarPregunta()
//=====================================================
//
// Al inicio de mostrarPregunta()
// agrega:
//
// ocultarMensaje();
//
//=====================================================


//=====================================================
// MODIFICAR corregirPregunta()
//=====================================================
//
// Donde tienes:
//
// puntaje++;
//
// agrega:
//
// mostrarMensajeResultado(true);
//
//
//
// y donde agregas la pregunta incorrecta:
//
// preguntasIncorrectas.push(pregunta);
//
// agrega:
//
// mostrarMensajeResultado(false);
//
//=====================================================


//=====================================================
// DESHABILITAR TARJETAS
//=====================================================

function bloquearTarjetas(){

    document
    .querySelectorAll(".opcion")
    .forEach(function(card){

        card.style.pointerEvents="none";

    });

}

function habilitarTarjetas(){

    document
    .querySelectorAll(".opcion")
    .forEach(function(card){

        card.style.pointerEvents="auto";

    });

}

//=====================================================
//
// En corregirPregunta()
// después de deshabilitar los radios:
//
// bloquearTarjetas();
//
//
//
// En mostrarPregunta()
// al final:
//
// habilitarTarjetas();
//
//=====================================================


//=====================================================
// PARTE 5/5
// FUNCIONES FINALES
//=====================================================

//===============================
// REINICIAR EXAMEN
//===============================

function reiniciarExamen(){

    indicePregunta = 0;

    puntaje = 0;

    preguntasIncorrectas = [];

    barra.style.width = "0%";

    cuadroExplicacion.style.display = "none";

    textoExplicacion.innerHTML = "";

}

//===============================
// BOTÓN NUEVO EXAMEN
//===============================

btnNuevoExamen.onclick = function(){

    reiniciarExamen();

    mostrarPantalla("seleccion");

}

//===============================
// BOTÓN VOLVER AL INICIO
//===============================

btnVolverInicio.onclick = function(){

    reiniciarExamen();

    mostrarPantalla("inicio");

}

//===============================
// BOTÓN REVISAR EQUIVOCADAS
//===============================

btnRevisar.onclick = function(){

    if(preguntasIncorrectas.length==0){

        alert("No existen preguntas incorrectas.");

        return;

    }

    preguntasExamen=[...preguntasIncorrectas];

    indicePregunta=0;

    modoRevision=true;

    mostrarPantalla("pregunta");

    mostrarPregunta();

}

//===============================
// BOTÓN REINTENTAR
//===============================

btnReintentar.onclick=function(){

    if(preguntasIncorrectas.length==0){

        alert("No existen preguntas incorrectas.");

        return;

    }

    preguntasExamen=[...preguntasIncorrectas];

    preguntasIncorrectas=[];

    indicePregunta=0;

    puntaje=0;

    modoRevision=false;

    respuestasSesion=[];

    mezclarPreguntas();

    prepararExamen();

    mostrarPantalla("pregunta");

    mostrarPregunta();

}

//===============================
// ATAJOS DE TECLADO
//===============================

document.addEventListener("keydown",function(e){

    if(pantallaPregunta.style.display!="block"){

        return;

    }

    switch(e.key){

        case "1":

            seleccionarOpcion(0);

            break;

        case "2":

            seleccionarOpcion(1);

            break;

        case "3":

            seleccionarOpcion(2);

            break;

        case "4":

            seleccionarOpcion(3);

            break;

        case "Enter":

            btnResponder.click();

            break;

    }

});

//===============================
// SELECCIONAR OPCIÓN
//===============================

function seleccionarOpcion(numero){

    const radios=document.querySelectorAll(
        'input[name="respuesta"]'
    );

    if(radios[numero]){

        radios[numero].checked=true;

    }

}

//===============================
// EVITAR ERRORES DE EXPLICACIÓN
//===============================

function obtenerExplicacion(pregunta){

    if(
        pregunta.explicacion===undefined ||
        pregunta.explicacion===null ||
        pregunta.explicacion==""
    ){

        return "No existe explicación disponible para esta pregunta.";

    }

    return pregunta.explicacion;

}

//===============================
// REEMPLAZAR EN corregirPregunta()
//===============================
//
// Cambia:
//
// textoExplicacion.innerHTML =
// pregunta.explicacion;
//
//
//
// por:
//
// textoExplicacion.innerHTML =
// obtenerExplicacion(pregunta);
//
//===============================

//=====================================================
// ESTADÍSTICAS LOCALES
//=====================================================

function leerEstadisticas(){

    try{

        const datos=JSON.parse(localStorage.getItem(CLAVE_ESTADISTICAS));

        return Array.isArray(datos) ? datos : [];

    }

    catch(error){

        return [];

    }

}

function guardarSesionEnEstadisticas(){

    if(respuestasSesion.length===0){

        return;

    }

    const historial=leerEstadisticas();

    historial.push({
        fecha:new Date().toISOString(),
        tema:temaSesion || selectTema.value,
        puntaje:puntaje,
        total:preguntasExamen.length,
        respuestas:respuestasSesion
    });

    // Limita el historial para no llenar el almacenamiento del navegador.
    localStorage.setItem(CLAVE_ESTADISTICAS, JSON.stringify(historial.slice(-200)));

}

function escaparHTML(texto){

    const elemento=document.createElement("div");

    elemento.textContent=texto;

    return elemento.innerHTML;

}

function mostrarEstadisticas(){

    const historial=leerEstadisticas();

    if(historial.length===0){

        contenidoEstadisticas.innerHTML=`
            <div class="estadoVacio">
                <div>📚</div>
                <h3>Aún no tienes exámenes registrados</h3>
                <p>Completa un examen para ver tu rendimiento por tema y tus preguntas más difíciles.</p>
            </div>`;

        return;

    }

    const respuestas=historial.flatMap(sesion=>
        Array.isArray(sesion.respuestas) ? sesion.respuestas : []
    );

    if(respuestas.length===0){

        contenidoEstadisticas.innerHTML=`
            <div class="estadoVacio">
                <div>📈</div>
                <h3>Aún no hay respuestas para analizar</h3>
                <p>Completa al menos un examen para ver tu rendimiento por tema y subtema.</p>
            </div>`;

        return;

    }

    const correctas=respuestas.filter(respuesta=>respuesta.correcta).length;
    const porcentaje=respuestas.length ? Math.round((correctas/respuestas.length)*100) : 0;
    const porCurso={};
    const porSubtema={};
    const erroresPorPregunta={};

    respuestas.forEach(function(respuesta){

        const pregunta=bancoPreguntas.find(p=>String(p.id)===String(respuesta.id));
        const curso=respuesta.curso || (pregunta ? obtenerCursoDePregunta(pregunta) : "Farmacología");
        const subtema=respuesta.subtema || (pregunta ?
            obtenerSubtemaDePregunta(pregunta,curso) : respuesta.tema || "Sin clasificar");
        const claveSubtema=curso+"|"+subtema;

        if(!porCurso[curso]){

            porCurso[curso]={total:0,correctas:0};

        }

        if(!porSubtema[claveSubtema]){

            porSubtema[claveSubtema]={curso:curso,subtema:subtema,total:0,correctas:0};

        }

        porCurso[curso].total++;
        porSubtema[claveSubtema].total++;

        if(respuesta.correcta){

            porCurso[curso].correctas++;
            porSubtema[claveSubtema].correctas++;

        }

        else{

            erroresPorPregunta[respuesta.id]=
            (erroresPorPregunta[respuesta.id] || 0)+1;

        }

    });

    const crearFilaRendimiento=function(nombre,datos){

        const rendimiento=Math.round((datos.correctas/datos.total)*100);

        return `<div class="filaTema">
            <div class="temaFila"><strong>${escaparHTML(nombre)}</strong><span>${datos.correctas}/${datos.total} correctas</span></div>
            <div class="miniBarra"><span style="width:${rendimiento}%"></span></div>
            <strong>${rendimiento}%</strong>
        </div>`;

    };

    const filasCursos=Object.entries(porCurso)
    .sort((a,b)=>(a[1].correctas/a[1].total)-(b[1].correctas/b[1].total))
    .map(function([curso,datos]){

        return crearFilaRendimiento(curso,datos);

    }).join("");

    const subtemasOrdenados=Object.values(porSubtema)
    .sort((a,b)=>(a.correctas/a.total)-(b.correctas/b.total));

    const filasSubtemas=subtemasOrdenados.map(function(datos){

        return crearFilaRendimiento(datos.curso+" · "+datos.subtema,datos);

    }).join("");

    const subtemaPrioritario=subtemasOrdenados[0];
    const rendimientoPrioritario=Math.round(
        (subtemaPrioritario.correctas/subtemaPrioritario.total)*100
    );

    const preguntasDificiles=Object.entries(erroresPorPregunta)
    .sort((a,b)=>b[1]-a[1])
    .slice(0,5)
    .map(function([id,fallos]){

        const pregunta=bancoPreguntas.find(p=>String(p.id)===String(id));

        if(!pregunta){

            return "";

        }

        return `<li><strong>${escaparHTML(pregunta.tema)}</strong><br>${escaparHTML(pregunta.pregunta)}<span>${fallos} fallo${fallos===1 ? "" : "s"}</span></li>`;

    }).join("");

    const ultimasSesiones=historial.slice(-5).reverse().map(function(sesion){

        const fecha=new Date(sesion.fecha).toLocaleDateString("es-PE", {
            day:"2-digit", month:"short", year:"numeric"
        });
        const nota=Math.round((sesion.puntaje/sesion.total)*100);

        return `<li><strong>${escaparHTML(sesion.tema)}</strong><span>${fecha} · ${sesion.puntaje}/${sesion.total} (${nota}%)</span></li>`;

    }).join("");

    contenidoEstadisticas.innerHTML=`
        <div class="resumenEstadisticas">
            <div class="datoEstadistica"><strong>${historial.length}</strong><span>exámenes</span></div>
            <div class="datoEstadistica"><strong>${porcentaje}%</strong><span>acierto global</span></div>
            <div class="datoEstadistica"><strong>${correctas}/${respuestas.length}</strong><span>respuestas correctas</span></div>
        </div>
        <section class="bloqueEstadistica">
            <h3>Rendimiento general de Farmacología</h3>
            ${filasCursos}
        </section>
        <section class="bloqueEstadistica alertaRendimiento">
            <h3>🎯 Tu área para reforzar</h3>
            <p>Conviene repasar <strong>${escaparHTML(subtemaPrioritario.curso)} · ${escaparHTML(subtemaPrioritario.subtema)}</strong>: llevas ${rendimientoPrioritario}% de aciertos (${subtemaPrioritario.correctas}/${subtemaPrioritario.total}).</p>
        </section>
        <section class="bloqueEstadistica">
            <h3>Rendimiento por subtema</h3>
            ${filasSubtemas}
        </section>
        <section class="bloqueEstadistica">
            <h3>Preguntas para reforzar</h3>
            ${preguntasDificiles ? `<ul class="listaEstadistica">${preguntasDificiles}</ul>` : "<p>¡No has fallado preguntas todavía!</p>"}
        </section>
        <section class="bloqueEstadistica">
            <h3>Últimos exámenes</h3>
            <ul class="listaEstadistica">${ultimasSesiones}</ul>
        </section>`;

}

btnVolverEstadisticas.onclick=function(){

    mostrarPantalla("inicio");

}

btnBorrarEstadisticas.onclick=function(){

    if(confirm("¿Deseas borrar todo tu historial de estadísticas?")){

        localStorage.removeItem(CLAVE_ESTADISTICAS);

        mostrarEstadisticas();

    }

}

//===============================
// INSTALACIÓN PWA
//===============================

let eventoInstalacionPWA=null;

const esDispositivoIOS=/iphone|ipad|ipod/i.test(navigator.userAgent);

function actualizarVisibilidadBotonInstalacion(){

    const instalada=window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone===true;

    btnInstalarPWA.hidden=instalada;

}

function mostrarControlesInstalacion(){

    btnInstalarPWA.hidden=false;

}

async function solicitarInstalacionPWA(){

    if(eventoInstalacionPWA){

        eventoInstalacionPWA.prompt();

        const resultado=await eventoInstalacionPWA.userChoice;

        if(resultado.outcome==="accepted"){

            btnInstalarPWA.hidden=true;

        }

        eventoInstalacionPWA=null;

        return;
    }

    if(esDispositivoIOS){

        const instrucciones="Para instalar la plataforma en iPhone o iPad: toca Compartir y luego Agregar a pantalla de inicio.";

        alert(instrucciones);

        return;

    }

    alert("Puedes instalar la plataforma desde el icono de instalación de la barra de direcciones o desde el menú del navegador.");

}

window.addEventListener("beforeinstallprompt",function(event){
    event.preventDefault();
    eventoInstalacionPWA=event;
    mostrarControlesInstalacion();
});

btnInstalarPWA.onclick=solicitarInstalacionPWA;

window.addEventListener("appinstalled",function(){
    btnInstalarPWA.hidden=true;
    eventoInstalacionPWA=null;
});

if("serviceWorker" in navigator && (location.protocol==="https:" || location.hostname==="localhost")){
    window.addEventListener("load",function(){
        navigator.serviceWorker.register("./service-worker.js")
            .catch(function(error){
                console.error("No se pudo registrar el modo sin conexión de la plataforma:",error);
            });
    });
}

