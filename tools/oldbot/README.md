# oldbot (bot → bot1 → bot2 → bot3)
Reconstructed from chat history (bot.py first written at turn 439; patches at turns 612, 769, 795).
Usage: `BOT_HTML=/path/game.html python3 bot3.py <idx,idx,...> <runs> [out.jsonl]` (html path may also be 4th arg).
idx = level-1. Seeds 1..runs. Viewport 308x555. Results jsonl: name/won/simsec/stuck/cars/colors/idx/seed.
Verified on gold_v360.html idx 81 (피사의 사탑): 4/4 wins, 252-341 simsec (old record 229-370).
bot3 auto-detects new game (LM/NLV) and sets lv=idx; old game path uses ANIM[pos].
