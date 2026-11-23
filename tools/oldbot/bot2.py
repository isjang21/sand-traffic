import asyncio,sys,json,statistics,os
from playwright.async_api import async_playwright
HTML=os.environ.get('BOT_HTML','/mnt/user-data/outputs/car-puzzle.html')
BOT="""([ai,pos,seed])=>{
window.requestAnimationFrame=()=>0;
['drawPic','drawRoad','drawFx','hud','drawSea'].forEach(n=>{try{window[n]=()=>{}}catch(e){}});
const orig=window.__orig||(window.__orig=ANIM.slice());
ANIM[pos]=orig[ai];lv=pos;
let sd=seed*9301+49297;Math.random=()=>{sd=(sd*9301+49297)%233280;return sd/233280};
start();
let t=1e6;last=t;let stuck=0,steps=0,launched=0;
const free=c=>{const occ=new Set(cars.filter(x=>x.s==0).flatMap(cells));return ahead(c).every(j=>!occ.has(j))};
const exposed=k=>{for(let x=0;x<W;x++)if(matchY(x,k)>=0)return true;return false};
const qc={};
for(steps=0;steps<9000&&!won;steps++){
 t+=50;loop(t);
 if(paused&&$("ev").style.display=='flex'){stuck++;resume();continue}
 if(steps%6==0&&!paused){
  const idle=cars.filter(c=>c.s==0);const fr=idle.filter(free);
  if(fr.length&&used()<MAXS){
   const inq={};[...queue,...pend,...cars.filter(c=>c.s==1)].forEach(c=>{if(c.got<c.cap||c.s==1)inq[c.k]=(inq[c.k]||0)+1});
   const ex={};let cand=fr.filter(c=>{if(ex[c.k]===undefined)ex[c.k]=exposed(c.k);return ex[c.k]&&!(inq[c.k]>=1)});
   if(!cand.length&&used()<=MAXS-2)cand=fr.filter(c=>!(inq[c.k]>=1));
   if(!cand.length&&used()<=MAXS-3)cand=fr;
   if(cand.length){
    const occ2=new Map();cars.filter(x=>x.s==0).forEach(x=>cells(x).forEach(j=>occ2.set(j,x)));
    const blk=new Map();idle.forEach(x=>{new Set(ahead(x).map(j=>occ2.get(j)).filter(Boolean)).forEach(y=>blk.set(y,(blk.get(y)||0)+1))});
    // 가장 아래층에 드러난 색 우선: 색별 가장 낮은 노출 y
    const lowY={};Object.keys(px).forEach(k=>{let m=-1;for(let x=0;x<W;x++){const y=matchY(x,k);if(y>m)m=y}lowY[k]=m});
    cand.sort((p,q)=>(lowY[q.k]-lowY[p.k])*1+((blk.get(q)||0)-(blk.get(p)||0))*40+(Math.random()-.5)*10);
    const c=cand[0];c.s=1;launched++}
  }
 }
}
return {name:orig[ai].n,won,stuck,steps,simsec:steps*.05,cars:cars.length,colors:Object.keys(px).length}}"""
async def run(ai,pos,seeds,sem,b):
    async with sem:
        ctx=await b.new_context(viewport={'width':308,'height':555}); pg=await ctx.new_page()
        await pg.add_init_script("localStorage.setItem('sandTraffic.v1',JSON.stringify({lv:0,coins:100,items:{t:0,m:0,s:0},got:{},att:{n:0,last:'2099-01-01'}}))")
        await pg.goto('file://'+HTML); await pg.wait_for_timeout(1500)
        await pg.mouse.click(150,300); await pg.wait_for_timeout(300)
        await pg.evaluate("()=>{document.getElementById('at').style.display='none';document.getElementById('go').click()}")
        out=[]
        for s in seeds:
            out.append(await pg.evaluate(BOT,[ai,pos,s]))
        await ctx.close(); return out
async def main():
    ais=[int(x) for x in sys.argv[1].split(',')];n=int(sys.argv[2])
    async with async_playwright() as p:
        b=await p.chromium.launch(); sem=asyncio.Semaphore(5)
        res=await asyncio.gather(*[run(ai,ai,range(1,n+1),sem,b) for ai in ais])
        for r in res:
            nm=r[0]['name'];st=[x['stuck'] for x in r];w=sum(x['won'] for x in r)
            print(f"{nm:6s} stuck평균={statistics.mean(st):4.1f} 클리어={w}/{len(r)} 평균시간={statistics.mean(x['simsec'] for x in r):5.0f}s 배={r[0]['cars']} 색={r[0]['colors']}")
        await b.close()
asyncio.run(main())
