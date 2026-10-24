// 레벨 16+ 에 쓰이는 이전 그림(과일 바구니, 무지개, 물고기)
const ART=[
{n:'과일 바구니',k:'croygpe',d:(g,C)=>{const E=(x,y,a,b,f,r=0)=>{g.fillStyle=f;g.beginPath();g.ellipse(x,y,a,b,r,0,7);g.fill()};
 g.fillStyle=C.c;g.fillRect(0,0,260,200);
 E(130,205,190,52,C.g);E(48,34,38,16,C.e);E(78,26,28,14,C.e);E(24,40,22,10,C.e);
 E(105,84,34,34,C.r);E(160,86,28,22,C.y);E(205,78,13,13,C.p);E(222,92,13,13,C.p);E(196,96,13,13,C.p);E(214,108,13,13,C.p);
 E(114,48,16,8,C.g,-.5);
 g.fillStyle=C.o;g.beginPath();g.moveTo(40,112);g.lineTo(220,112);g.bezierCurveTo(214,170,180,190,130,190);g.bezierCurveTo(80,190,46,170,40,112);g.fill();
 E(130,112,90,14,C.o)}},
{n:'무지개',k:'croygbp',d:(g,C)=>{const E=(x,y,a,b,f,r=0)=>{g.fillStyle=f;g.beginPath();g.ellipse(x,y,a,b,r,0,7);g.fill()};
 g.fillStyle=C.c;g.fillRect(0,0,260,200);
 [C.r,C.o,C.y,C.g,C.b,C.p].forEach((f,i)=>{g.fillStyle=f;g.beginPath();g.arc(130,170,130-i*17,Math.PI,2*Math.PI);g.fill()});
 g.fillStyle=C.c;g.beginPath();g.arc(130,170,28,Math.PI,2*Math.PI);g.fill();g.fillRect(102,170,56,40);
 E(14,200,70,34,C.g);E(246,200,70,34,C.g);
 E(222,34,18,18,C.y)}},
{n:'물고기',k:'croygbp',d:(g,C)=>{const E=(x,y,a,b,f,r=0)=>{g.fillStyle=f;g.beginPath();g.ellipse(x,y,a,b,r,0,7);g.fill()};
 g.fillStyle=C.c;g.fillRect(0,0,260,200);g.fillStyle=C.b;g.fillRect(0,128,260,72);
 g.fillStyle=C.y;g.beginPath();g.moveTo(0,172);g.bezierCurveTo(70,156,160,190,260,164);g.lineTo(260,200);g.lineTo(0,200);g.fill();
 g.fillStyle=C.g;[[34,172,44],[54,176,66],[222,170,50]].forEach(p=>{g.beginPath();g.moveTo(p[0]-7,p[1]+8);g.lineTo(p[0]+7,p[1]+8);g.lineTo(p[0]+3,p[2]);g.lineTo(p[0]-3,p[2]+6);g.fill()});
 g.fillStyle=C.r;g.beginPath();g.moveTo(170,92);g.lineTo(236,54);g.lineTo(236,130);g.fill();
 E(112,92,64,40,C.o);g.fillStyle=C.y;g.beginPath();g.moveTo(84,60);g.lineTo(140,60);g.lineTo(122,82);g.fill();
 g.save();g.beginPath();g.ellipse(112,92,64,40,0,0,7);g.clip();g.fillStyle=C.p;g.fillRect(40,104,140,40);g.restore();E(76,84,9,9,C.b);E(40,26,30,12,C.e);E(66,20,22,10,C.e)}}
];
