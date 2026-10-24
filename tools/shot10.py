import asyncio,os
from playwright.async_api import async_playwright
async def m():
    async with async_playwright() as p:
        b=await p.chromium.launch(); pg=await b.new_page(viewport={'width':390,'height':844})
        errs=[];pg.on('pageerror',lambda e:errs.append(str(e)))
        await pg.goto('file://'+os.getcwd()+'/n2.html'); await pg.wait_for_timeout(300)
        await pg.evaluate("()=>document.getElementById('go').click()")
        for lv in range(10):
            await pg.evaluate(f"()=>{{lv={lv};start()}}"); await pg.wait_for_timeout(300)
            await pg.screenshot(path=f'a{lv}.png',clip={'x':0,'y':0,'width':390,'height':250})
        print(errs); await b.close()
asyncio.run(m())
