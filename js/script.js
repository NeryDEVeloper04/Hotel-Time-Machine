let ct;
const IMG=[
  "img/futuro-lounge.jpg",
  "img/90s-quarto.jpg",
  "img/90s-banheiro.jpg",
  "img/snack-bar.jpg",
  "img/diner-disco.jpg",
  "img/futuro-banheiro.jpg",
  "img/diner.jpg",
  "img/diner-box.jpg",
  "img/salao-jazz.jpg",
  "img/70s-quarto.jpg",
  "img/cinema-pateo.jpg",
  "img/casal-conversivel.jpg",
  "img/futuro-quarto.jpg",
  "img/70s-banheiro.jpg",
  "img/diner-balcao.jpg",
  "img/drive-in.jpg"
];
const F=[
{n:'T',t:'Térreo',d:'Drive-In',c:'#f6f1e8',fg:'#f6f1e8',bg:'#0e1628',im:[15,10,11,3],p:0,txt:'Recepção com letreiro de neon, cinema ao ar livre, Snack Bar com pipoca e sorvete, e mesas sob guarda-sóis listrados. É aqui que a viagem no tempo começa.',tg:['Cinema','Snack Bar','Recepção']},
{n:'1',t:'1º andar',d:'Anos 20',fg:'#e0b252',bg:'#17120a',c:'#e0b252',im:[8],p:690,txt:'O salão Art Déco: veludo bordô, lustres de cristal, palco de jazz e pista de mármore. Suíte com vista para o salão.',tg:['Jazz ao vivo','Bar','Art Déco']},
{n:'2',t:'2º andar',d:'Anos 50/60',fg:'#ff3b4e',bg:'#1c0d11',c:'#ff3b4e',im:[6,4,7,14],p:480,txt:'Diner clássico com jukebox, balcão cromado, piso xadrez e boxes de couro vermelho. Suíte Rock’n’Roll com disco ball.',tg:['Diner','Jukebox','Rock’n’Roll']},
{n:'3',t:'3º andar',d:'Anos 70',fg:'#ff8a1f',bg:'#1c1006',c:'#ff8a1f',im:[9,13],p:520,txt:'Laranja, marrom e tapete shag. Vitrola com vinis, abajur de arco, bola de espelhos e banheiro com azulejos geométricos.',tg:['Vinil','Disco','Good Vibes']},
{n:'4',t:'4º andar',d:'Anos 90',fg:'#ff2fb3',bg:'#180a20',c:'#ff2fb3',im:[1,2],p:560,txt:'Pôsteres de Nirvana, Friends e MTV, TV de tubo, neon rosa, edredom colorido e banheira de hidromassagem.',tg:['TV de tubo','Neon','MTV']},
{n:'5',t:'Cobertura',d:'Futuro',fg:'#29e6ff',bg:'#07141d',c:'#29e6ff',im:[12,5,0],p:890,txt:'Suíte-cápsula com claraboia estrelada, painéis holográficos, piso de LED e lounge com piscina entre árvores luminosas.',tg:['Holográfico','Lounge piscina','Smart home']}];
const FT=[
 ['Cinema ao ar livre toda noite','Snack Bar: pipoca, refrigerantes, sorvetes e hot dogs','Recepção 24 horas','Mesas sob guarda-sóis listrados'],
 ['Palco de jazz ao vivo','Bar com coquetéis clássicos','Pista de mármore','Suíte com vista para o salão'],
 ['Diner com jukebox','Balcão cromado e boxes de couro vermelho','Suíte com bola de espelhos','Milk-shakes e hambúrgueres'],
 ['Vitrola e coleção de vinis','Tapete shag e abajur de arco','Bola de espelhos','Banheiro com azulejos geométricos'],
 ['TV de tubo e videogame','Pôsteres de Nirvana, Friends e MTV','Banheira de hidromassagem','Luzes de neon'],
 ['Claraboia com céu estrelado','Painéis holográficos','Banheiro inteligente','Lounge com piscina']];
const $=i=>document.getElementById(i),R=document.documentElement.style;
function show(i){const x=F[i];R.setProperty('--ac',x.c);R.setProperty('--fg',x.fg);R.setProperty('--bg',x.bg);
document.querySelectorAll('#lift button').forEach((b,k)=>b.classList.toggle('on',k==i));
$('floor').innerHTML=`<div><h2>${x.d}</h2><p style="color:var(--mut);margin-bottom:10px">${x.t}</p>${x.tg.map(a=>`<span class="tag">${a}</span>`).join('')}<p style="margin-top:10px">${x.txt}</p><ul class="ft">${FT[i].map(a=>`<li>${a}</li>`).join('')}</ul><div class="cta"><div class="price">${x.p?'R$ '+x.p+' <small style="font:.8rem Montserrat">/noite</small>':'Entrada livre'}</div><a class="btn" href="#reservas" onclick="$('fl').value=${i}">${x.p?'Reservar este andar':'Fazer reserva'}</a></div></div><div class="car" id="car"><div class="track">${x.im.map(k=>`<img src="${IMG[k]}" alt="${x.d}">`).join('')}</div>${x.im.length>1?`<button class="nx pv" aria-label="Anterior">‹</button><button class="nx nt" aria-label="Próxima">›</button><div class="dots">${x.im.map((_,k)=>`<i data-k="${k}"></i>`).join('')}</div>`:''}</div>`;carousel(x.im.length)}
F.forEach((x,i)=>{$('lift').insertAdjacentHTML('beforeend',`<button onclick="show(${i})"><b>${x.n}</b>${x.d}</button>`);if(x.p)$('fl').insertAdjacentHTML('beforeend',`<option value="${i}">${x.t} · ${x.d} (R$ ${x.p})</option>`)});
document.querySelector('.hero').style.setProperty('--hero',`url(${IMG[15]})`);
const today=new Date().toISOString().slice(0,10);$('ci').min=$('co').min=today;
$('f').onsubmit=e=>{e.preventDefault();const a=new Date($('ci').value),b=new Date($('co').value),d=Math.round((b-a)/864e5);const m=$('msg');m.style.display='block';
if(d<1){m.textContent='O check-out precisa ser depois do check-in.';return}
const x=F[$('fl').value];m.innerHTML=`Pedido recebido, ${$('n').value}! ${d} noite(s) no andar <b>${x.d}</b>: total <b>R$ ${d*x.p}</b>. Enviaremos a confirmação para ${$('e').value}. (Simulação: nenhum dado é enviado.)`};
show(0);

function carousel(n){
  clearInterval(ct);
  const car=$('car'),tr=car.querySelector('.track'),dots=[...car.querySelectorAll('.dots i')];
  let i=0,sx=null;
  const go=k=>{i=(k+n)%n;tr.style.transform=`translateX(-${i*100}%)`;dots.forEach((d,j)=>d.classList.toggle('on',j==i))};
  const play=()=>{clearInterval(ct);if(n>1)ct=setInterval(()=>go(i+1),4000)};
  go(0);play();
  if(n<2)return;
  car.querySelector('.pv').onclick=()=>{go(i-1);play()};
  car.querySelector('.nt').onclick=()=>{go(i+1);play()};
  dots.forEach(d=>d.onclick=()=>{go(+d.dataset.k);play()});
  car.onmouseenter=()=>clearInterval(ct);car.onmouseleave=play;
  car.ontouchstart=e=>{sx=e.touches[0].clientX;clearInterval(ct)};
  car.ontouchend=e=>{if(sx!==null){const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>40)go(i+(d<0?1:-1));sx=null}play()};
}
