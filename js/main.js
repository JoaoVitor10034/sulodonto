
/* ===== DADOS: substituir pelos oficiais. [Placeholder] não é fato. ===== */

const $=s=>document.querySelector(s),D=DATA,C=D.company;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
window.dataLayer=window.dataLayer||[];
let utm={};try{const q=new URLSearchParams(location.search);q.forEach((v,k)=>{if(k.startsWith("utm_"))utm[k]=v});if(Object.keys(utm).length)sessionStorage.setItem("utm",JSON.stringify(utm));else utm=JSON.parse(sessionStorage.getItem("utm")||"{}")}catch(e){}
const track=(e,p={})=>dataLayer.push({event:e,...utm,...p});
const ICO='<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-4.500-7-10a4 4 0 0 1 7-2.600A4 4 0 0 1 19 11c0 5.500-7 10-7 10z"/></svg>';
/* ===== RENDER ===== */
$("#h-title").textContent=D.hero.title;$("#h-sub").textContent=D.hero.sub;$("#h-micro").textContent=D.hero.micro;
$("#seals").innerHTML=D.hero.seals.map(([k,t])=>`<span class="seal ${k}">${esc(t)}</span>`).join("");
const chips=(id,name,arr)=>$(id).innerHTML=arr.map(t=>`<label class="chip"><input type="radio" name="${name}" value="${esc(t)}"><span>${esc(t)}</span></label>`).join("");
chips("#c-reason","reason",D.builder.reasons);chips("#c-period","period",D.builder.periods);
$("#trust").innerHTML=D.trustItems.map(t=>`<li>${esc(t)}</li>`).join("");
$("#a-title").textContent=D.about.title;$("#a-copy").textContent=D.about.copy;$("#a-more").textContent=D.about.more;$("#a-note").textContent=D.about.note;
$("#steps").innerHTML=D.steps.map(([b,p])=>`<li><b>${esc(b)}</b>${esc(p)}</li>`).join("");
$("#treatments").innerHTML=D.treatments.map(t=>`<article class="card"><div class="ico">${ICO}</div><h3>${esc(t.name)}</h3><p>${esc(t.desc)}</p><a class="btn ghost" data-wa="treatment" data-t="${esc(t.name)}" href="#">Quero saber mais</a></article>`).join("");
$("#benefits").innerHTML=D.benefits.map(([h,p])=>`<div class="benefit"><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join("");
$("#i-title").textContent=D.inclusion.title;$("#i-copy").textContent=D.inclusion.copy;
$("#testimonials").innerHTML=D.testimonials.map(t=>`<figure class="quote"><span class="tag">Placeholder</span><blockquote>${esc(t.text)}</blockquote><figcaption>${esc(t.who)}<br><small>${esc(t.src)}</small></figcaption></figure>`).join("");
$("#addr").textContent=C.address;$("#hours").textContent=C.hours;
$("#faqs").innerHTML=D.faq.map(([q,a])=>`<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("");
$("#f-sum").textContent="Odontologia com atendimento humano, respeito e acolhimento em Sapucaia do Sul.";
$("#f-addr").textContent=C.address;$("#f-wa").textContent="WhatsApp (51) 99146-5694";$("#f-wa").dataset.wa="footer";$("#f-hours").textContent=C.hours;
$("#yr").textContent=new Date().getFullYear();
$(".links").innerHTML=$("#menu").innerHTML=D.navigation.map(([t,h])=>`<a href="${h}">${t}</a>`).join("");
$("#menu").insertAdjacentHTML("beforeend",'<a class="btn wa" data-wa="menu" href="#">Agendar Consulta</a>');
const rt="https://www.google.com/maps/dir/?api=1&destination="+encodeURIComponent(C.address);
$("#route").href=rt;$("#bar-route").href=rt;
if(C.phone){const c=$("#call");c.hidden=false;c.href="tel:"+C.phone}
/* ===== CONSTRUTOR DE MENSAGEM ===== */
const val=n=>(document.querySelector(`input[name=${n}]:checked`)||{}).value||"";
function build(extra){
let m=C.msg;const n=$("#nm").value.trim(),r=val("reason"),p=val("period");
if(n)m+=" Prefiro ser chamado(a) de "+n+".";
if(r)m+=" Motivo: "+r.toLowerCase()+".";
if(p&&p!=="Sem preferência")m+=" Prefiro atendimento no período: "+p.toLowerCase()+".";
if(extra)m+=" Tenho interesse em: "+extra+".";
return m}
const upd=()=>$("#pv").textContent=build();
$("#builder").addEventListener("input",upd);upd();
const wa=x=>"https://wa.me/"+C.wa+"?text="+encodeURIComponent(build(x));
/* ===== EVENTOS ===== */
document.addEventListener("click",e=>{
const a=e.target.closest("[data-wa]");
if(a){e.preventDefault();const w=a.dataset.wa,t=a.dataset.t;
const pos={header:"hero",menu:"hero",location:"final",footer:"final"}[w]||w;
track(w==="treatment"?"appointment_whatsapp_treatment":"appointment_whatsapp_"+pos,{position:w,treatment:t});
if(t)track("treatment_click",{treatment:t});
window.open(wa(t),"_blank","noopener")}
if(e.target.closest("#route,#bar-route"))track("route_click");
if(e.target.closest("#call"))track("phone_click");
if(e.target.closest("#menu a"))tg(false)});
/* ===== MENU, TEMA, SCROLL, REVEAL, MAPA ===== */
const b=$("#burger"),m=$("#menu");
function tg(o){m.classList.toggle("open",o);document.body.classList.toggle("lock",o);b.setAttribute("aria-expanded",o);b.setAttribute("aria-label",o?"Fechar menu":"Abrir menu")}
b.onclick=()=>tg(!m.classList.contains("open"));
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&m.classList.contains("open")){tg(false);b.focus()}});
matchMedia("(min-width:980px)").addEventListener("change",e=>e.matches&&tg(false));
const setTheme=t=>{document.documentElement.dataset.theme=t;try{localStorage.setItem("theme",t)}catch(e){}};
try{const t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}
$("#theme").onclick=()=>{const d=document.documentElement,cur=d.dataset.theme||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light");setTheme(cur==="dark"?"light":"dark")};
const sent={};
addEventListener("scroll",()=>{$("header").classList.toggle("s",scrollY>10);
const p=(scrollY+innerHeight)/document.documentElement.scrollHeight*100;
[50,90].forEach(n=>{if(p>=n&&!sent[n]){sent[n]=1;track("scroll_"+n)}})},{passive:true});
const io="IntersectionObserver"in window?new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12}):null;
document.querySelectorAll(".rv").forEach(el=>io?io.observe(el):el.classList.add("in"));
$("#loadmap").onclick=()=>{$("#map").innerHTML='<iframe title="Mapa da Sulodonto" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q='+encodeURIComponent(C.address)+'&output=embed"></iframe>'};

/* ===== EQUIPE, HORÁRIOS E REDES ===== */
const AV='<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-6 8-6s8 2 8 6"/></svg>';
$("#team").innerHTML=D.team.map(p=>`<article class="person"><div class="avatar">${AV}</div><h3>${esc(p.name)}</h3><p>${esc(p.role)}</p><p><b>${esc(p.cro)}</b></p></article>`).join("");
$("#hours-list").innerHTML=D.hoursList.map(([d,h])=>`<li><b>${esc(d)}</b><span>${esc(h)}</span></li>`).join("");
$("#social").innerHTML=D.social.map(([n,u,ph])=>u?`<a href="${esc(u)}" target="_blank" rel="noopener">${esc(n)}</a>`:`<span>${esc(n)}: ${esc(ph)}</span>`).join("");
