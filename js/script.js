alert("Hotel Time Machine por Arthur Meneghin Nery")

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
  "img/drive-in.jpg",
  "img/lobby-entrada.jpg",
  "img/lobby-recepcao.jpg",
  "img/lobby-elevadores.jpg",
  "img/lobby-corredor.jpg"
];
const F=[
 {
  "n": "T",
  "s": "Lobby",
  "t": "Térreo",
  "sel": "",
  "c": "#f6f1e8",
  "fg": "#f6f1e8",
  "bg": "#0e1628",
  "p": 0,
  "parts": [
   {
    "d": "Lobby",
    "sub": "Térreo",
    "txt": "A viagem começa antes mesmo de você subir. O lobby recebe os hóspedes com relógios, engrenagens e uma linha do tempo das décadas que dá o tom de todo o hotel.",
    "tg": [
     "Recepção",
     "Concierge",
     "Chrono Bar"
    ],
    "ft": [
     "Fachada: letreiro Time Machine e portal em forma de relógio na entrada",
     "Recepção e Concierge: balcão iluminado sob o grande relógio com o logo do hotel",
     "Chrono Bar: bar do lobby em ambiente de lounge",
     "Elevadores: portais com relógios e painéis com a linha do tempo das décadas",
     "Corredor: arcos luminosos que atravessam as décadas",
     "Piso: mármore com bússola e numeração em algarismos romanos"
    ],
    "im": [
     16,
     17,
     18,
     19
    ]
   }
  ]
 },
 {
  "n": "1",
  "s": "Jazz",
  "t": "1º andar",
  "sel": "Suíte Salão de Jazz",
  "c": "#e0b252",
  "fg": "#e0b252",
  "bg": "#17120a",
  "p": 690,
  "parts": [
   {
    "d": "Salão de Jazz",
    "sub": "Anos 20",
    "txt": "Uma experiência sofisticada inspirada nos antigos clubes de jazz e na elegância do Art Déco. Um espaço pensado para aproveitar a noite ao som de música ao vivo.",
    "tg": [
     "Jazz ao vivo",
     "Art Déco",
     "Bar"
    ],
    "ft": [
     "Decoração: veludo bordô, detalhes dourados e lustres de cristal",
     "Arquitetura: formas geométricas e elementos inspirados no Art Déco",
     "Palco: apresentações de jazz ao vivo",
     "Pista: piso de mármore para momentos de dança",
     "Bar: coquetéis clássicos em um ambiente intimista",
     "Suíte exclusiva: quarto com vista privilegiada para o salão"
    ],
    "im": [
     8
    ],
    "p": 690
   }
  ]
 },
 {
  "n": "2",
  "s": "Anos 60",
  "t": "2º andar",
  "sel": "Suíte Rock’n’Roll",
  "c": "#ff3b4e",
  "fg": "#ff3b4e",
  "bg": "#1c0d11",
  "p": 480,
  "parts": [
   {
    "d": "Drive-In Anos 60",
    "sub": "Anos 60 · Drive-In",
    "txt": "É aqui que a viagem no tempo começa. Inspirado nos clássicos drive-ins americanos, o espaço combina cinema, gastronomia e a atmosfera nostálgica dos anos 60.",
    "tg": [
     "Cinema",
     "Snack Bar",
     "Recepção 24h"
    ],
    "ft": [
     "Cinema ao ar livre: sessões todas as noites em uma grande tela externa",
     "Recepção 24 horas: o primeiro ponto de chegada ao hotel",
     "Letreiro de neon: elemento central da identidade visual do espaço",
     "Snack Bar: pipoca, refrigerantes, sorvetes e hot dogs",
     "Área externa: mesas com guarda-sóis listrados para aproveitar as sessões",
     "Atmosfera: iluminação de neon, referências vintage e clima de cinema americano"
    ],
    "im": [
     15,
     10,
     11,
     3
    ],
    "free": true
   },
   {
    "d": "Diner Anos 60",
    "sub": "Anos 60 · Diner e suíte",
    "txt": "Um clássico diner americano recriado para transportar os hóspedes diretamente para os anos 60, unindo gastronomia, música e uma decoração cheia de personalidade.",
    "tg": [
     "Jukebox",
     "Rock’n’Roll",
     "Milk-shakes"
    ],
    "ft": [
     "Jukebox: música e entretenimento no coração do diner",
     "Balcão: acabamento cromado com bancos altos",
     "Boxes: bancos de couro vermelho para refeições e encontros",
     "Piso: clássico padrão xadrez",
     "Cardápio: hambúrgueres, batatas fritas e milk-shakes",
     "Suíte Rock’n’Roll: decoração inspirada na música da época e uma grande bola de espelhos"
    ],
    "im": [
     6,
     4,
     7,
     14
    ],
    "p": 480
   }
  ]
 },
 {
  "n": "3",
  "s": "Anos 70",
  "t": "3º andar",
  "sel": "Suíte Anos 70",
  "c": "#ff8a1f",
  "fg": "#ff8a1f",
  "bg": "#1c1006",
  "p": 520,
  "parts": [
   {
    "d": "Suíte Anos 70",
    "sub": "Anos 70",
    "txt": "Entre na atmosfera vibrante da era disco. A suíte combina tons quentes, formas marcantes e uma decoração sofisticada inspirada na estética dos anos 70.",
    "tg": [
     "Era disco",
     "Laranja",
     "Retrô"
    ],
    "ft": [
     "Paleta: o laranja é o grande protagonista do ambiente",
     "Decoração: formas, texturas e elementos característicos da década",
     "Atmosfera: sofisticada, vibrante e inspirada nas pistas de dança",
     "Banheiro: azulejos, iluminação quente e detalhes em tons alaranjados",
     "Espelho: iluminação ao redor do espelho reforçando a estética retrô",
     "Banheira: integrada ao box, unindo conforto e design"
    ],
    "im": [
     9,
     13
    ],
    "p": 520
   }
  ]
 },
 {
  "n": "4",
  "s": "Anos 90",
  "t": "4º andar",
  "sel": "Suíte Anos 90",
  "c": "#ff2fb3",
  "fg": "#ff2fb3",
  "bg": "#180a20",
  "p": 560,
  "parts": [
   {
    "d": "Suíte Anos 90",
    "sub": "Anos 90",
    "txt": "Uma viagem direto para a cultura pop dos anos 90. Inspirada nos quartos adolescentes da época, a suíte combina cores vibrantes, música e nostalgia em um ambiente descontraído e cheio de personalidade.",
    "tg": [
     "Cultura pop",
     "Nostalgia",
     "LED roxo"
    ],
    "ft": [
     "Decoração: pôsteres, estampas, cortinas e edredom coloridos",
     "Mobiliário: elementos inspirados nos quartos adolescentes da década",
     "Entretenimento: televisão de época",
     "Banheiro: box amplo e banheira confortável",
     "Iluminação: LEDs roxos de baixa intensidade no quarto e no banheiro",
     "Atmosfera: uma verdadeira cápsula do tempo da cultura pop dos anos 90"
    ],
    "im": [
     1,
     2
    ],
    "p": 560
   }
  ]
 },
 {
  "n": "5",
  "s": "Futuro",
  "t": "Cobertura",
  "sel": "Suíte Futurista",
  "c": "#29e6ff",
  "fg": "#29e6ff",
  "bg": "#07141d",
  "p": 890,
  "parts": [
   {
    "d": "Suíte Futurista",
    "sub": "Futuro",
    "txt": "Uma experiência que parece ter vindo diretamente do futuro. A suíte combina tecnologia, sofisticação e conforto em um ambiente inspirado na arquitetura de naves espaciais.",
    "tg": [
     "Tecnologia",
     "Naves espaciais",
     "Lounge com piscina"
    ],
    "ft": [
     "Estética: tons de azul, cinza, branco e acabamentos metálicos",
     "Iluminação: linhas de LED integradas às paredes e ao mobiliário",
     "Atmosfera: paredes com formas e detalhes tecnológicos e claraboia com céu estrelado",
     "Conforto: cama, escrivaninha, televisão e lareira",
     "Banheiro inteligente: privada com assento aquecido, jatos de higienização e painel de controle",
     "Chuveiro tecnológico: controle de temperatura e intensidade, com iluminação integrada",
     "Lounge privativo: espaço confortável integrado a uma piscina de design futurista"
    ],
    "im": [
     12,
     5,
     0
    ],
    "p": 890
   }
  ]
 }
];
const $=i=>document.getElementById(i),R=document.documentElement.style;
let cts=[];
function block(x,i,p,k){
const cta=p.p?`<div class="price">R$ ${p.p} <small style="font:.8rem Montserrat">/noite</small></div><a class="btn" href="#reservas" onclick="$('fl').value=${i}">Reservar este andar</a>`:`${p.free?'<div class="price">Entrada livre</div>':''}<a class="btn" href="#reservas"${x.p?` onclick="$('fl').value=${i}"`:''}>${p.free?'Fazer reserva':'Reservar'}</a>`;
return `<div class="floor${k%2?' rev':''}"><div><h2>${p.d}</h2><p style="color:var(--mut);margin-bottom:10px">${p.sub}</p>${p.tg.map(a=>`<span class="tag">${a}</span>`).join('')}<p style="margin-top:10px">${p.txt}</p><ul class="ft">${p.ft.map(a=>`<li>${a.replace(/^([^:]+):/,'<b>$1:</b>')}</li>`).join('')}</ul><div class="cta">${cta}</div></div><div class="car"><div class="track">${p.im.map(j=>`<img src="${IMG[j]}" alt="${p.d}">`).join('')}</div>${p.im.length>1?`<button class="nx pv" aria-label="Anterior">‹</button><button class="nx nt" aria-label="Próxima">›</button><div class="dots">${p.im.map((_,j)=>`<i data-k="${j}"></i>`).join('')}</div>`:''}</div></div>`}
function show(i){const x=F[i];R.setProperty('--ac',x.c);R.setProperty('--fg',x.fg);R.setProperty('--bg',x.bg);
document.querySelectorAll('#lift button').forEach((b,k)=>b.classList.toggle('on',k==i));
cts.forEach(clearInterval);cts=[];
$('floor').innerHTML=x.parts.map((p,k)=>block(x,i,p,k)).join('');
document.querySelectorAll('#floor .car').forEach((c,k)=>carousel(c,x.parts[k].im.length))}
F.forEach((x,i)=>{$('lift').insertAdjacentHTML('beforeend',`<button onclick="show(${i})"><b>${x.n}</b>${x.s}</button>`);if(x.p)$('fl').insertAdjacentHTML('beforeend',`<option value="${i}">${x.t} · ${x.sel} (R$ ${x.p})</option>`)});
const today=new Date().toISOString().slice(0,10);$('ci').min=$('co').min=today;
$('f').onsubmit=e=>{e.preventDefault();const a=new Date($('ci').value),b=new Date($('co').value),d=Math.round((b-a)/864e5);const m=$('msg');m.style.display='block';
if(d<1){m.textContent='O check-out precisa ser depois do check-in.';return}
const x=F[$('fl').value];m.innerHTML=`Pedido recebido, ${$('n').value}! ${d} noite(s) na <b>${x.sel}</b> (${x.t}): total <b>R$ ${d*x.p}</b>. Enviaremos a confirmação para ${$('e').value}. (Simulação: nenhum dado é enviado.)`};
show(0);

function carousel(car,n){
  const tr=car.querySelector('.track'),dots=[...car.querySelectorAll('.dots i')];
  let i=0,sx=null,id;
  const go=k=>{i=(k+n)%n;tr.style.transform=`translateX(-${i*100}%)`;dots.forEach((d,j)=>d.classList.toggle('on',j==i))};
  const stop=()=>clearInterval(id);
  const play=()=>{stop();if(n>1){id=setInterval(()=>go(i+1),4000);cts.push(id)}};
  go(0);play();
  if(n<2)return;
  car.querySelector('.pv').onclick=()=>{go(i-1);play()};
  car.querySelector('.nt').onclick=()=>{go(i+1);play()};
  dots.forEach(d=>d.onclick=()=>{go(+d.dataset.k);play()});
  car.onmouseenter=stop;car.onmouseleave=play;
  car.ontouchstart=e=>{sx=e.touches[0].clientX;stop()};
  car.ontouchend=e=>{if(sx!==null){const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>40)go(i+(d<0?1:-1));sx=null}play()};
}
