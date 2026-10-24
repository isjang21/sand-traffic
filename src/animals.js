// 레벨 1~15 동물 그림 (260x200 캔버스 코드). index.html 안의 ANIM 블록과 동일
const ANIM=(()=>{
const H=(g,C)=>{
 const E=(x,y,a,b,f,r=0)=>{g.fillStyle=f;g.beginPath();g.ellipse(x,y,a,b,r,0,7);g.fill()};
 const O=(x,y,a,b,f,r=0)=>{g.beginPath();g.ellipse(x,y,a,b,r,0,7);g.fillStyle=f;g.fill();g.lineWidth=5;g.strokeStyle=C.k;g.stroke()};
 const T=(pts,f,ol=1)=>{g.beginPath();g.moveTo(pts[0],pts[1]);for(let i=2;i<pts.length;i+=2)g.lineTo(pts[i],pts[i+1]);g.closePath();g.fillStyle=f;g.fill();if(ol){g.lineWidth=5;g.lineJoin='round';g.strokeStyle=C.k;g.stroke()}};
 const L=(pts,w=4,s=C.k)=>{g.beginPath();g.moveTo(pts[0],pts[1]);for(let i=2;i<pts.length;i+=2)g.lineTo(pts[i],pts[i+1]);g.lineWidth=w;g.lineCap='round';g.strokeStyle=s;g.stroke()};
 const sm=(x,y,w,t=3.6)=>{g.beginPath();g.arc(x,y,w,.12*Math.PI,.88*Math.PI);g.lineWidth=t;g.lineCap='round';g.strokeStyle=C.k;g.stroke()};
 const cloud=(x,y,s=1)=>{E(x,y,28*s,11*s,C.m);E(x+18*s,y-6*s,16*s,9*s,C.m);E(x-16*s,y-4*s,14*s,8*s,C.m)};
 const sky=(ground=1)=>{g.fillStyle=C.c;g.fillRect(0,0,260,200);cloud(52,30);cloud(214,38,.8);if(ground){E(60,226,190,62,C.g);E(220,224,150,56,C.g)}};
 const eye=(x,y,r=8)=>{E(x,y,r,r+1,C.m);E(x,y+1,r*.55,r*.75,C.k);E(x-r*.15,y-r*.2,r*.22,r*.22,C.m)};
 const eyes=(y,dx,r=8)=>{eye(130-dx,y,r);eye(130+dx,y,r)};
 const collar=(y)=>{O(130,y,32,8,C.r);T([130,y,106,y-12,106,y+10],C.r);T([130,y,154,y-12,154,y+10],C.r);O(130,y,7,7,C.r);O(130,y+14,8,8,C.y);L([124,y+14,136,y+14],3);L([130,y+14,130,y+20],3)};
 const bell=(y)=>{L([108,y,152,y],7);L([108,y,152,y],3.5,C.r);O(130,y+8,8,8,C.y);L([124,y+8,136,y+8],3);L([130,y+8,130,y+14],3)};
 const bow=(y)=>{T([130,y,106,y-12,106,y+10],C.r);T([130,y,154,y-12,154,y+10],C.r);O(130,y,7,7,C.r)};
 return{E,O,T,L,sm,cloud,sky,eyes,eye,collar,bell,bow}};
const mk=(n,k,f)=>({n,k,fx:1,d:(g,C)=>f(g,C,H(g,C))});
return[
mk('고양이','ckmoniyrg',(g,C,h)=>{const{E,O,T,L,sm,sky,eyes,bell}=h;sky();
 O(238,164,36,28,C.g);O(196,182,28,20,C.g);L([232,156,236,166],3);L([250,158,252,168],3);
 g.lineCap='round';const tp=()=>{g.beginPath();g.moveTo(176,172);g.bezierCurveTo(222,188,254,150,226,106)};tp();g.lineWidth=20;g.strokeStyle=C.k;g.stroke();tp();g.lineWidth=11;g.strokeStyle=C.o;g.stroke();tp();g.lineWidth=11;g.strokeStyle=C.k;g.setLineDash([2.5,16]);g.lineDashOffset=-18;g.stroke();g.setLineDash([]);
 O(130,160,50,44,C.o);E(130,168,26,30,C.m);
 L([84,134,100,140]);L([82,150,98,154]);L([84,166,98,166]);L([176,134,160,140]);L([178,150,162,154]);L([176,166,162,166]);
 T([84,74,88,28,122,54],C.o);T([176,74,172,28,138,54],C.o);T([94,64,95,42,110,56],C.y,0);T([166,64,165,42,150,56],C.y,0);
 O(130,94,52,44,C.o);L([130,56,130,68],4);L([114,60,116,70],4);L([146,60,144,70],4);
 eyes(90,19,9);E(130,106,20,13,C.m);T([124,98,136,98,130,105],C.i,0);L([130,105,130,108]);sm(122,108,8);sm(138,108,8);
 E(96,104,7,4,C.i);E(164,104,7,4,C.i);
 L([60,102,92,106]);L([60,114,92,112]);L([200,102,168,106]);L([200,114,168,112]);
 bell(140);O(104,196,17,10,C.o);O(156,196,17,10,C.o);
 O(40,182,22,12,C.y);T([60,182,76,170,76,194],C.y);E(32,178,3,3,C.k);L([40,174,40,190],2.5);L([30,186,34,190],0);
 L([34,160,30,152,36,144,32,136],3,C.m);L([46,160,42,152,48,144,44,136],3,C.m)}),
mk('강아지','ckmoniyrg',(g,C,h)=>{const{E,O,T,L,sm,sky,eyes,bow}=h;sky();
 O(130,162,50,44,C.y);E(130,172,26,28,C.m);
 O(74,92,20,40,C.n,.3);O(186,92,20,40,C.n,-.3);
 O(130,92,50,44,C.y);E(130,108,28,20,C.m);E(130,98,12,8,C.k);E(127,96,3,2,C.m);
 eyes(80,19,8);E(100,70,9,5,C.o);E(130,126,10,9,C.i);sm(120,110,10);sm(140,110,10);L([130,106,130,110]);L([130,120,130,128],2,C.k);
 E(98,100,7,4,C.i);E(162,100,7,4,C.i);
 bow(144);O(102,196,18,10,C.y);O(158,196,18,10,C.y);
 g.lineCap='round';const tp=()=>{g.beginPath();g.moveTo(176,172);g.bezierCurveTo(220,186,244,150,216,112)};tp();g.lineWidth=16;g.strokeStyle=C.k;g.stroke();tp();g.lineWidth=8;g.strokeStyle=C.y;g.stroke();
 O(36,176,8,8,C.m);O(36,190,8,8,C.m);O(76,176,8,8,C.m);O(76,190,8,8,C.m);O(56,183,22,9,C.m);E(56,183,20,7,C.m);
 O(226,184,13,13,C.r);g.save();g.beginPath();g.arc(226,184,13,0,7);g.clip();E(226,184,18,3,C.m,.7);g.restore();g.beginPath();g.arc(226,184,13,0,7);g.lineWidth=4;g.strokeStyle=C.k;g.stroke()}),
mk('토끼','ckmoniyrg',(g,C,h)=>{const{E,O,T,L,sm,sky,eyes}=h;sky();
 O(100,36,16,42,C.m,-.15);O(160,36,16,42,C.m,.15);E(100,38,7,28,C.i,-.15);E(160,38,7,28,C.i,.15);
 O(130,164,50,42,C.m);O(130,98,48,42,C.m);
 eyes(90,17,8);T([124,100,136,100,130,107],C.i,0);L([130,107,130,110]);sm(123,110,7);sm(137,110,7);
 E(100,106,9,6,C.i);E(160,106,9,6,C.i);
 [[116,156],[144,156]].forEach(p=>{g.save();g.translate(p[0],p[1]);T([-9,-14,9,-14,0,24],C.o);T([-6,-16,-9,-30,0,-22,9,-30,6,-16],C.g);g.restore()});
 O(130,184,30,14,C.n);L([104,180,156,180],3);
 O(104,196,17,10,C.m);O(156,196,17,10,C.m);O(230,176,14,10,C.g);L([226,168,228,160],3);L([238,170,242,162],3)}),
mk('햄스터','ckmoniygn',(g,C,h)=>{const{E,O,T,L,sm,sky,eye}=h;sky();
 O(78,66,18,18,C.o);O(182,66,18,18,C.o);E(78,68,9,9,C.i);E(182,68,9,9,C.i);
 O(130,132,76,58,C.o);E(130,152,50,34,C.m);O(130,100,68,50,C.o);E(130,114,46,30,C.m);
 [100,160].forEach(x=>{E(x,92,8,9,C.k);E(x-2,89,2.5,2.5,C.m)});
 E(130,103,6,4.5,C.i);sm(122,110,7);sm(138,110,7);E(130,118,4,5,C.m);
 E(86,112,12,9,C.i);E(174,112,12,9,C.i);
 O(130,152,18,10,C.n,.15);L([122,150,138,154],2.5);O(106,154,11,9,C.o);O(154,154,11,9,C.o);
 O(102,196,18,9,C.i);O(158,196,18,9,C.i);
 O(40,184,10,5.5,C.n,.5);O(60,190,9,5,C.n,-.3);
 L([226,172,226,198],7);L([226,172,226,198],3,C.g);
 for(let i=0;i<8;i++){const a=i*Math.PI/4;O(226+Math.cos(a)*13,150+Math.sin(a)*13,7,7,C.y)}O(226,150,9,9,C.n)}),
mk('앵무새','ckmoygbrni',(g,C,h)=>{const{E,O,T,L,sm,sky,eye}=h;sky();
 L([14,178,246,172],16);L([14,178,246,172],8,C.n);O(36,166,16,7,C.g,-.5);O(224,162,16,7,C.g,.5);
 O(118,170,10,28,C.r,.15);O(142,172,10,26,C.b,-.12);
 O(130,112,46,62,C.g);E(130,128,28,38,C.y);O(92,118,14,36,C.b,.12);O(168,118,14,36,C.b,-.12);
 T([116,44,122,22,129,42],C.r);T([127,40,134,14,141,40],C.r);T([139,42,146,24,152,46],C.r);
 O(130,66,36,32,C.g);E(104,78,8,6,C.i);E(156,78,8,6,C.i);
 eye(112,60,8);eye(148,60,8);O(130,76,13,11,C.o);sm(130,75,7);
 O(118,178,10,5,C.o);O(142,178,10,5,C.o)}),
mk('금붕어','ckmoygbrnie',(g,C,h)=>{const{E,O,T,L,sm,eye}=h;g.fillStyle=C.c;g.fillRect(0,0,260,200);E(130,236,250,74,C.y);
 O(22,150,10,34,C.g,.15);O(44,164,9,26,C.g,-.2);O(246,168,9,24,C.g,-.1);O(204,188,15,9,C.e);O(76,190,12,8,C.n);
 g.beginPath();g.moveTo(168,98);g.bezierCurveTo(198,64,230,54,238,70);g.bezierCurveTo(222,92,222,106,238,126);g.bezierCurveTo(226,138,196,128,168,98);g.fillStyle=C.r;g.fill();g.lineWidth=5;g.lineJoin='round';g.strokeStyle=C.k;g.stroke();
 T([104,80,128,40,152,78],C.r);O(116,100,58,40,C.o);E(112,118,38,15,C.y);T([128,102,154,112,128,122],C.r);
 eye(86,90,9);sm(66,104,7);E(90,106,7,4,C.i);L([132,84,136,96],3);L([148,86,150,98],3);
 g.lineWidth=3;g.strokeStyle=C.m;[[40,60,8],[56,38,5],[28,34,4]].forEach(p=>{g.beginPath();g.arc(p[0],p[1],p[2],0,7);g.stroke()})}),
mk('거북이','ckmoygbnie',(g,C,h)=>{const{E,O,T,L,sm,cloud,eye}=h;g.fillStyle=C.c;g.fillRect(0,0,260,200);cloud(52,30);cloud(214,38,.8);g.fillStyle=C.b;g.fillRect(0,108,260,40);E(130,240,250,90,C.y);
 g.beginPath();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?7:16;g.lineTo(38+Math.cos(a)*r,178+Math.sin(a)*r)}g.closePath();g.fillStyle=C.i;g.fill();g.lineWidth=4;g.lineJoin='round';g.strokeStyle=C.k;g.stroke();
 O(80,170,16,12,C.g);O(152,174,16,12,C.g);T([52,152,38,150,52,162],C.g);
 O(118,152,72,10,C.m);
 g.beginPath();g.ellipse(118,150,72,58,0,Math.PI,2*Math.PI);g.closePath();g.fillStyle=C.n;g.fill();g.lineWidth=5;g.strokeStyle=C.k;g.stroke();
 O(118,116,20,15,C.o);O(80,136,14,12,C.o);O(156,136,14,12,C.o);O(118,142,16,10,C.o);
 O(200,140,15,24,C.g);O(210,120,28,23,C.g);eye(214,114,6);sm(212,127,9);E(196,126,6,4,C.i)}),
mk('고슴도치','ckmoniygr',(g,C,h)=>{const{E,O,T,L,sm,sky}=h;sky();
 g.beginPath();for(let i=0;i<=26;i++){const a=Math.PI*.92+i/26*Math.PI*1.16,r=i%2?64:80;g.lineTo(130+Math.cos(a)*r,126+Math.sin(a)*r*.82)}g.closePath();g.fillStyle=C.n;g.fill();g.lineWidth=5;g.lineJoin='round';g.strokeStyle=C.k;g.stroke();
 O(92,98,11,13,C.m);O(168,98,11,13,C.m);
 O(130,136,46,40,C.m);E(130,126,9,7,C.k);E(127,124,2.5,2,C.m);
 [112,148].forEach(x=>{E(x,112,6,7,C.k);E(x-1.5,109,2,2,C.m)});
 sm(121,138,8);sm(139,138,8);E(100,128,8,5,C.i);E(160,128,8,5,C.i);
 O(106,196,16,9,C.i);O(154,196,16,9,C.i);
 O(220,180,16,16,C.r);L([220,164,222,158],3);O(228,158,9,4,C.g,-.4)}),
mk('병아리','ckmoniyrg',(g,C,h)=>{const{E,O,T,L,sm,sky,eyes}=h;sky();
 O(130,140,70,62,C.y);O(66,134,18,32,C.y,.5);O(194,134,18,32,C.y,-.5);E(130,160,40,30,C.m);
 L([116,76,112,56]);L([130,74,130,50]);L([144,76,148,56]);
 eyes(110,26,8);T([118,122,142,122,130,134],C.o);sm(130,138,9);
 E(84,124,9,6,C.i);E(176,124,9,6,C.i);
 O(106,194,20,8,C.o);O(154,194,20,8,C.o);
 [[40,186],[62,178],[196,184],[222,178],[236,190]].forEach(p=>{E(p[0],p[1],6,3.5,C.o,.4)});}),
mk('개구리','ckmgribyc',(g,C,h)=>{const{E,O,T,L,sm,cloud}=h;g.fillStyle=C.c;g.fillRect(0,0,260,200);cloud(50,30);cloud(210,36,.8);
 E(130,200,200,70,C.b);O(130,186,76,16,C.g);L([128,186,130,198],3);
 O(130,160,64,42,C.g);E(130,168,40,26,C.m);
 O(76,176,24,12,C.g);O(184,176,24,12,C.g);
 O(130,110,66,44,C.g);O(98,64,22,22,C.g);O(162,64,22,22,C.g);
 [98,162].forEach(x=>{E(x,64,12,12,C.m);E(x,66,6,7,C.k);E(x-2,62,2.5,2.5,C.m)});
 g.beginPath();g.arc(130,108,34,.12,Math.PI-.12);g.fillStyle=C.r;g.fill();g.lineWidth=5;g.strokeStyle=C.k;g.stroke();
 E(130,128,14,7,C.i);E(110,104,3,2,C.k);E(150,104,3,2,C.k);E(92,114,8,5,C.y);E(168,114,8,5,C.y);
 g.lineWidth=3;g.strokeStyle=C.m;[[40,196,24,5],[214,194,22,5]].forEach(p=>{g.beginPath();g.ellipse(p[0],p[1],p[2],p[3],0,0,7);g.stroke()})}),
mk('판다','ckmigr',(g,C,h)=>{const{E,O,T,L,sm,sky}=h;sky();
 O(130,166,54,44,C.m);O(74,162,22,30,C.k,.5);O(186,162,22,30,C.k,-.5);
 O(78,64,20,20,C.k);O(182,64,20,20,C.k);O(130,96,54,46,C.m);
 E(106,90,17,13,C.k);E(154,90,17,13,C.k);L([123,88,137,88],4);E(100,86,4,3,C.m);E(148,86,4,3,C.m);
 E(130,106,10,7,C.k);E(127,104,3,2,C.m);L([130,112,130,114]);sm(122,114,8);sm(138,114,8);
 E(88,110,8,5,C.i);E(172,110,8,5,C.i);
 O(104,196,18,10,C.k);O(156,196,18,10,C.k);
 T([208,192,222,148,236,192],C.g);L([212,176,232,176],3);L([215,164,229,164],3);T([218,150,222,140,226,150],C.g,0)}),
mk('펭귄','ckmori',(g,C,h)=>{const{E,O,T,L,sm,cloud,eyes}=h;g.fillStyle=C.c;g.fillRect(0,0,260,200);cloud(52,30);cloud(214,38,.8);
 E(130,224,200,56,C.m);L([40,178,70,176],3,C.c);L([190,180,220,176],3,C.c);
 O(130,112,56,70,C.k);E(130,128,38,50,C.m);O(66,124,14,36,C.k,.3);O(194,124,14,36,C.k,-.3);
 O(130,60,42,38,C.k);E(130,70,31,26,C.m);[-1,1].forEach(q=>{E(130+q*15,60,5,7,C.k);E(130+q*15-1.5,57,1.8,2,C.m)});T([120,66,140,66,130,76],C.o);sm(130,79,10);
 E(106,74,6,4,C.i);E(154,74,6,4,C.i);
 O(130,94,36,9,C.r);[104,122,140].forEach(x=>L([x,90,x,98],6,C.m));O(154,108,8,18,C.r);L([154,102,154,114],5,C.m);
 O(108,188,22,10,C.o);O(152,188,22,10,C.o)}),
mk('사자','ckmoniyrg',(g,C,h)=>{const{E,O,T,L,sm,sky,eyes}=h;sky();
 O(130,166,48,42,C.y);O(130,96,70,64,C.n);
 O(130,102,46,40,C.y);O(86,64,14,14,C.y);O(174,64,14,14,C.y);
 eyes(94,17,8);E(130,114,18,12,C.m);T([123,105,137,105,130,112],C.k,0);L([130,112,130,115]);sm(122,115,8);sm(138,115,8);
 E(96,108,7,4,C.i);E(164,108,7,4,C.i);
 O(104,196,17,10,C.y);O(156,196,17,10,C.y);
 T([212,196,212,176,224,186,232,170,240,186,252,176,252,196],C.y);E(232,189,3,3,C.i);E(220,190,2.5,2.5,C.i);E(244,190,2.5,2.5,C.i)}),
mk('코끼리','ckegirby',(g,C,h)=>{const{E,O,T,L,sm,sky,eyes}=h;sky();
 O(130,160,62,46,C.e);O(60,100,34,46,C.e,.2);O(200,100,34,46,C.e,-.2);E(60,100,18,30,C.i,.2);E(200,100,18,30,C.i,-.2);
 O(130,98,48,46,C.e);
 g.lineCap='round';g.beginPath();g.moveTo(130,108);g.bezierCurveTo(130,150,160,172,176,150);g.lineWidth=30;g.strokeStyle=C.k;g.stroke();g.lineWidth=20;g.strokeStyle=C.e;g.stroke();
 eyes(84,20,8);E(98,106,8,5,C.i);E(162,106,8,5,C.i);sm(112,124,7);sm(148,124,7);
 O(98,196,18,10,C.e);O(162,196,18,10,C.e);
 O(226,182,16,16,C.r);g.save();g.beginPath();g.arc(226,182,16,0,7);g.clip();g.fillStyle=C.y;g.fillRect(226,166,20,16);g.fillStyle=C.b;g.fillRect(210,182,16,20);g.restore();g.beginPath();g.arc(226,182,16,0,7);g.lineWidth=4;g.strokeStyle=C.k;g.stroke()}),
mk('문어','ckmgbpiry',(g,C,h)=>{const{E,O,T,L,sm,cloud,eyes}=h;g.fillStyle=C.c;g.fillRect(0,0,260,200);g.fillStyle=C.b;g.fillRect(0,110,260,90);
 cloud(52,30);cloud(214,38,.8);
 g.fillStyle=C.g;g.beginPath();g.moveTo(0,200);g.lineTo(0,160);g.quadraticCurveTo(30,150,60,200);g.fill();
 g.lineCap='round';[[70,150,50,184],[96,160,92,194],[130,166,130,196],[164,160,168,194],[190,150,200,184]].forEach(s=>{g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.lineWidth=26;g.strokeStyle=C.k;g.stroke();g.lineWidth=17;g.strokeStyle=C.p;g.stroke()});
 O(130,100,62,56,C.p);eyes(100,24,11);E(100,126,9,5,C.i);E(160,126,9,5,C.i);
 g.beginPath();g.arc(130,116,16,.1,Math.PI-.1);g.fillStyle=C.r;g.fill();g.lineWidth=4;g.strokeStyle=C.k;g.stroke();E(106,76,10,6,C.m,-.5);
 O(226,168,22,22,C.r);O(226,168,10,10,C.b);[0,1,2,3].forEach(i=>{const a=i*Math.PI/2+.7;L([226+Math.cos(a)*14,168+Math.sin(a)*14,226+Math.cos(a)*17,168+Math.sin(a)*17],7,C.m)});
 g.lineWidth=3;g.strokeStyle=C.m;[[40,60,6],[28,40,4],[52,38,3]].forEach(p=>{g.beginPath();g.arc(p[0],p[1],p[2],0,7);g.stroke()})})
]})();