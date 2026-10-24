import sys, asyncio, numpy as np
from PIL import Image, ImageFilter
from playwright.async_api import async_playwright
def passes(lab, bg=None):
    H,W=lab.shape
    cols=[list(lab[::-1,x]) for x in range(W)]   # bottom -> top
    idx=[0]*W; total=H*W; n=0; hist=[]
    while any(idx[x]<H for x in range(W)):
        gain={}
        for x in range(W):
            if idx[x]>=H: continue
            k=cols[x][idx[x]]; r=1
            while idx[x]+r<H and cols[x][idx[x]+r]==k: r+=1
            gain[k]=gain.get(k,0)+r
        k=max(gain,key=gain.get)
        for x in range(W):
            if idx[x]<H and cols[x][idx[x]]==k:
                while idx[x]<H and cols[x][idx[x]]==k: idx[x]+=1
        n+=1; hist.append(gain[k])
    return n, total/n, np.median(hist)
def ref(path,name,box):
    im=Image.open(path).convert('RGB').crop(box).filter(ImageFilter.MedianFilter(5))
    W=130;H=round(W*im.height/im.width)
    q=im.resize((W,H),Image.BOX).quantize(colors=8,method=Image.MEDIANCUT)
    lab=np.array(q); n,avg,med=passes(lab)
    print(f"{name:14s} passes={n:4d} grains/pass avg={avg:6.0f} med={med:5.0f} (size {W}x{H})")
ref('/mnt/user-data/uploads/IMG_1198.PNG','ref bear',(24,190,832,655))
ref('/mnt/user-data/uploads/IMG_1206.PNG','ref butterfly',(24,190,832,630))
async def main(files):
    async with async_playwright() as p:
        b=await p.chromium.launch(); pg=await b.new_page(viewport={'width':390,'height':844})
        for f in files:
            await pg.goto('file://'+f); await pg.wait_for_timeout(300)
            await pg.evaluate("()=>document.getElementById('go').click()")
            for lv in range(10):
                d=await pg.evaluate(f"()=>{{lv={lv};start();return {{W,H,s:sand.map(c=>Object.keys(COL).indexOf(c))}}}}")
                lab=np.array(d['s']).reshape(d['H'],d['W']); n,avg,med=passes(lab)
                print(f"{f.split('/')[-1][:-5]:12s}L{lv+1} passes={n:4d} grains/pass avg={avg:6.0f} med={med:5.0f} colors={len(np.unique(lab))}")
        await b.close()
asyncio.run(main(sys.argv[1:]))
