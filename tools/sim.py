import asyncio, sys, json, statistics as st
from playwright.async_api import async_playwright
INIT="""window.__f=null;window.requestAnimationFrame=f=>{window.__f=f;return 1};
(()=>{let s=12345;Math.random=()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}})();"""
TAP="""()=>{
 const idle=cars.filter(c=>c.s==0),occ=new Set(idle.flatMap(cells));
 const free=idle.filter(c=>ahead(c).every(j=>!occ.has(j)));
 if(!free.length||used()>=MAXS)return 0;
 const good=free.filter(c=>hasEx(c.k)).sort((a,b)=>b.L-a.L);
 const c=(good.length?good:free)[0];
 const cl=cells(c)[0],r=bd.getBoundingClientRect();
 bd.dispatchEvent(new PointerEvent('pointerdown',{clientX:r.left+(cl%C+.5)*cs,clientY:r.top+(Math.floor(cl/C)+.5)*cs,bubbles:true}));return 1}"""
OBS="""()=>{const ex=[];for(let x=0;x<W;x++){const ly=lowY(x);if(ly>=0)ex.push(sand[ly*W+x])}
 const colors=new Set(ex).size;let runs=0,n=0,r=1;for(let i=1;i<ex.length;i++){if(ex[i]==ex[i-1])r++;else{runs+=r;n++;r=1}}if(ex.length){runs+=r;n++}
 const loading=queue.some(c=>c.vis<c.cap&&c.got>0&&false);
 return {colors,run:n?runs/n:0,pc:pc/tot,q:queue.length,won,laps:out.concat([]).map(c=>c.laps||0)}}"""
SPECK="""()=>{let iso=0,tot=0;for(let y=1;y<H-1;y++)for(let x=1;x<W-1;x++){const i=y*W+x,c=sand[i];if(!c)continue;tot++;if(sand[i-1]!=c&&sand[i+1]!=c&&sand[i-W]!=c&&sand[i+W]!=c)iso++}
 let comp=0;const seen=new Uint8Array(W*H);const st=[];for(let i=0;i<W*H;i++){if(!sand[i]||seen[i])continue;comp++;const c=sand[i];st.push(i);seen[i]=1;while(st.length){const j=st.pop(),x=j%W,y=(j/W)|0;for(const[k,ok]of[[j-1,x>0],[j+1,x<W-1],[j-W,y>0],[j+W,y<H-1]]){if(ok&&!seen[k]&&sand[k]==c){seen[k]=1;st.push(k)}}}}
 return {iso:tot?iso/tot*100:0,comp,tot}}"""
async def run_level(pg,lv,maxsec=240):
    await pg.evaluate(f"()=>{{lv={lv};start();paused=false}}")
    await pg.evaluate("()=>{window.__T=1000;window.__step=n=>{for(let i=0;i<n;i++){__T+=16.667;const f=__f;__f=null;if(f)f(__T)}}}")
    await pg.evaluate("()=>__step(3)")
    seenlaps=[];tcolors=[];truns=[];speck=None;t=0;won=False;tfill=None
    done=set()
    while t<maxsec:
        await pg.evaluate(TAP)
        await pg.evaluate("()=>__step(20)"); t+=20/60
        await pg.evaluate("()=>{if($('ev').style.display=='flex')resume();if($('sd').style.display=='flex')closeShop()}")
        o=await pg.evaluate(OBS)
        if int(t*3)%3==0: tcolors.append(o['colors']);truns.append(o['run'])
        if speck is None and o['pc']>=0.35: speck=await pg.evaluate(SPECK)
        if o['won']: won=True;break
    laps=await pg.evaluate("()=>out.map(c=>c.laps||0).concat(queue.map(c=>c.laps||0))")
    pcf=await pg.evaluate("()=>pc/tot")
    return dict(lv=lv+1,won=won,sec=round(t),removed=round(pcf*100),colors=round(st.mean(tcolors),1) if tcolors else 0,run=round(st.mean(truns),1) if truns else 0,speckle=round(speck['iso'],1) if speck else None,comps=speck['comp'] if speck else None,lapsMean=round(st.mean(laps),2) if laps else 0)
async def main(path,levels):
    async with async_playwright() as p:
        b=await p.chromium.launch(); pg=await b.new_page(viewport={'width':390,'height':844})
        errs=[];pg.on('pageerror',lambda e:errs.append(str(e)))
        await pg.add_init_script(INIT)
        await pg.goto('file://'+path); await pg.wait_for_timeout(300)
        await pg.evaluate("()=>document.getElementById('go').click()")
        for lv in levels:
            r=await run_level(pg,lv); print(path.split('/')[-1],json.dumps(r,ensure_ascii=False))
        if errs: print('ERR',errs[:2])
        await b.close()
if __name__=='__main__':
    asyncio.run(main(sys.argv[1],[int(x) for x in sys.argv[2].split(',')]))
