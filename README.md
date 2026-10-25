# Sand Pals 🚚

주차장에서 트럭을 탭하면 도로로 나가 위쪽 그림의 모래를 같은 색만 실어 나르는 모래 퍼즐 게임입니다.
HTML 파일 하나로 동작합니다(`index.html`). 서버나 설치가 필요 없습니다.

## 플레이
- GitHub Pages: https://isjang21.github.io/sand-traffic/
- 또는 `index.html`을 브라우저로 열기

## 구성
- `index.html` : 게임 전체(HTML/CSS/JS, 소리, 홈 화면 포함)
- `src/animals.js` : 레벨 1~15 그림(애완동물 10종 + 사파리/바다 후보 5종)
- `src/art-old.js` : 이전 그림 3종
- `tools/` : 시뮬레이션·난이도 측정 스크립트(Playwright)
  - `sim.py` 자동 플레이, `drain.py` 그림별 최소 통과 횟수, `shot10.py` 그림 캡처

## 그림 추가 방법
`index.html`의 `ANIM` 배열에 `mk('이름','쓰는색키',(g,C,h)=>{...})` 항목을 추가합니다.
색 키: r 빨강, o 주황, y 노랑, g 초록, c 하늘, b 파랑, p 보라, e 회색, k 검정, n 갈색, i 분홍, m 크림.
