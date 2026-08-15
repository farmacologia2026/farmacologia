"use strict";

const AUTHORIZED_TEACHER_EMAIL="julian.eportilla25@gmail.com";
const config=window.SUPABASE_CONFIG;
const client=config && window.supabase ? window.supabase.createClient(
    config.projectUrl,config.publishableKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}}
) : null;

const loginSection=document.getElementById("teacherLogin");
const dashboard=document.getElementById("teacherDashboard");
const loginStatus=document.getElementById("teacherLoginStatus");
const dashboardStatus=document.getElementById("dashboardStatus");
const btnSend=document.getElementById("btnEnviarEnlace");
const btnLogout=document.getElementById("btnCerrarSesion");
const btnRefresh=document.getElementById("btnActualizar");
const btnExport=document.getElementById("btnExportar");
const summaryCards=document.getElementById("summaryCards");
const topicBody=document.getElementById("topicTableBody");
const studentBody=document.getElementById("studentTableBody");
const dailyChart=document.getElementById("dailyChart");
const updatedAt=document.getElementById("teacherUpdatedAt");
const studentSearch=document.getElementById("studentSearch");
let studentRows=[];

function setStatus(element,message,isError=false){element.textContent=message;element.classList.toggle("error",isError)}
function formatNumber(value){return Number(value||0).toLocaleString("es-PE")}
function formatPercent(value){return value===null||value===undefined ? "—" : Number(value).toFixed(1)+"%"}
function formatDate(value){return value?new Date(value).toLocaleString("es-PE",{dateStyle:"medium",timeStyle:"short"}):"Sin actividad"}

async function sendMagicLink(){
    if(!client){setStatus(loginStatus,"No se encontró la configuración de Supabase.",true);return}
    btnSend.disabled=true;setStatus(loginStatus,"Enviando enlace seguro…");
    const redirectTo=new URL("docente.html",location.href).href.split("#")[0].split("?")[0];
    const {error}=await client.auth.signInWithOtp({email:AUTHORIZED_TEACHER_EMAIL,options:{emailRedirectTo:redirectTo,shouldCreateUser:true}});
    btnSend.disabled=false;
    if(error){setStatus(loginStatus,"No se pudo enviar el enlace: "+error.message,true);return}
    setStatus(loginStatus,"Revisa tu correo. El enlace de acceso puede tardar unos minutos.");
}

async function checkSession(){
    if(!client){setStatus(loginStatus,"No se pudo iniciar el servicio de autenticación.",true);return}
    const {data}=await client.auth.getSession();
    const session=data.session;
    if(!session){showLogin();return}
    if((session.user.email||"").toLowerCase()!==AUTHORIZED_TEACHER_EMAIL){
        await client.auth.signOut();setStatus(loginStatus,"Esta cuenta no está autorizada para el panel.",true);showLogin();return
    }
    showDashboard();await loadDashboard();
}

function showLogin(){loginSection.hidden=false;dashboard.hidden=true;btnLogout.hidden=true}
function showDashboard(){loginSection.hidden=true;dashboard.hidden=false;btnLogout.hidden=false}

async function rpc(name,args={}){const {data,error}=await client.rpc(name,args);if(error)throw error;return data||[]}

async function loadDashboard(){
    btnRefresh.disabled=true;setStatus(dashboardStatus,"Actualizando estadísticas…");
    try{
        const [summary,topics,students,daily]=await Promise.all([
            rpc("teacher_summary"),rpc("teacher_topic_stats"),rpc("teacher_student_stats"),rpc("teacher_daily_stats",{p_days:30})
        ]);
        renderSummary(summary[0]||{});renderTopics(topics);studentRows=students;renderStudents(students);renderDaily(daily);
        updatedAt.textContent="Actualizado "+new Date().toLocaleString("es-PE",{dateStyle:"medium",timeStyle:"short"});
        setStatus(dashboardStatus,"");
    }catch(error){
        const unauthorized=String(error.message||"").toLowerCase().includes("no autorizado");
        setStatus(dashboardStatus,unauthorized?"Tu sesión no tiene autorización docente.":"No fue posible cargar las estadísticas: "+error.message,true);
    }finally{btnRefresh.disabled=false}
}

function renderSummary(data){
    const cards=[
        [formatNumber(data.total_students),"Estudiantes registrados"],
        [formatNumber(data.active_students_7d),"Activos en 7 días"],
        [formatNumber(data.answered_questions),"Preguntas respondidas"],
        [formatPercent(data.accuracy_percent),"Acierto global"],
        [data.average_response_seconds==null?"—":Number(data.average_response_seconds).toFixed(1)+" s","Tiempo promedio"]
    ];
    summaryCards.replaceChildren(...cards.map(([value,label])=>{const card=document.createElement("article");card.className="summaryCard";const strong=document.createElement("strong");strong.textContent=value;const span=document.createElement("span");span.textContent=label;card.append(strong,span);return card}));
}

function accuracyBadge(value){const span=document.createElement("span");span.className="accuracy"+(Number(value)<60?" low":"");span.textContent=formatPercent(value);return span}
function emptyRow(columns,message){const tr=document.createElement("tr");const td=document.createElement("td");td.colSpan=columns;td.className="emptyCell";td.textContent=message;tr.append(td);return tr}

function renderTopics(rows){topicBody.replaceChildren();if(!rows.length){topicBody.append(emptyRow(4,"Aún no hay respuestas sincronizadas."));return}rows.forEach(row=>{const tr=document.createElement("tr");[row.topic,formatNumber(row.answered_questions),formatNumber(row.participating_students)].forEach(value=>{const td=document.createElement("td");td.textContent=value;tr.append(td)});const td=document.createElement("td");td.append(accuracyBadge(row.accuracy_percent));tr.append(td);topicBody.append(tr)})}

function renderStudents(rows){studentBody.replaceChildren();if(!rows.length){studentBody.append(emptyRow(5,"Aún no hay estudiantes registrados."));return}rows.forEach(row=>{const tr=document.createElement("tr");const name=document.createElement("td");name.textContent=row.display_name+" · #"+row.student_id;tr.append(name);[formatNumber(row.answered_questions),formatNumber(row.correct_answers)].forEach(value=>{const td=document.createElement("td");td.textContent=value;tr.append(td)});const acc=document.createElement("td");acc.append(accuracyBadge(row.accuracy_percent));tr.append(acc);const last=document.createElement("td");last.textContent=formatDate(row.last_activity);tr.append(last);studentBody.append(tr)})}

function renderDaily(rows){dailyChart.replaceChildren();if(!rows.length){const p=document.createElement("p");p.className="emptyCell";p.textContent="La actividad diaria aparecerá cuando los estudiantes respondan preguntas.";dailyChart.append(p);return}const max=Math.max(...rows.map(row=>Number(row.answered_questions)||0),1);rows.forEach(row=>{const column=document.createElement("div");column.className="dayColumn";column.title=`${row.activity_date}: ${row.answered_questions} respuestas`;const bar=document.createElement("div");bar.className="dayBar";bar.style.height=Math.max(2,Math.round(Number(row.answered_questions)*190/max))+"px";const label=document.createElement("small");label.textContent=new Date(row.activity_date+"T12:00:00").toLocaleDateString("es-PE",{day:"2-digit",month:"short"});column.append(bar,label);dailyChart.append(column)})}

function exportCsv(){
    const quote=value=>'"'+String(value??"").replaceAll('"','""')+'"';
    const lines=[["ID","Estudiante","Respuestas","Correctas","Acierto","Última actividad"].map(quote).join(",")];
    studentRows.forEach(row=>lines.push([row.student_id,row.display_name,row.answered_questions,row.correct_answers,row.accuracy_percent||"",row.last_activity||""].map(quote).join(",")));
    const blob=new Blob(["\ufeff"+lines.join("\n")],{type:"text/csv;charset=utf-8"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="farmacologia-estudiantes-"+new Date().toISOString().slice(0,10)+".csv";a.click();URL.revokeObjectURL(url);
}

btnSend.addEventListener("click",sendMagicLink);btnRefresh.addEventListener("click",loadDashboard);btnExport.addEventListener("click",exportCsv);
btnLogout.addEventListener("click",async()=>{await client.auth.signOut();showLogin();setStatus(loginStatus,"Sesión cerrada.")});
studentSearch.addEventListener("input",()=>{const query=studentSearch.value.trim().toLowerCase();renderStudents(studentRows.filter(row=>(row.display_name+" "+row.student_id).toLowerCase().includes(query)))});
checkSession();
