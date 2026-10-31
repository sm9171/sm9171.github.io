import{g as D,c as r,e as i,a as y,f as T,r as b,l as N,b as g,d as x}from"./utils-D0PfWn63.js";const m=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o=D(r.wedding.date),E=new Date(r.wedding.date).getTime(),C=new Date(Date.UTC(o.year,o.month-1,o.day)).getUTCDay(),M=["SUN","MON","TUE","WED","THU","FRI","SAT"][C],A=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"][o.month-1],k=`${o.year}.${String(o.month).padStart(2,"0")}.${String(o.day).padStart(2,"0")}`,S=`${o.hour>12?o.hour-12:o.hour}:${String(o.minute).padStart(2,"0")} ${o.hour<12?"AM":"PM"}`,$=(r.groom.enName||"groom").toLowerCase(),f=(r.bride.enName||"bride").toLowerCase();function q(e){return{장남:"sons[0]",차남:"sons[1]",삼남:"sons[2]",장녀:"daughters[0]",차녀:"daughters[1]",삼녀:"daughters[2]"}[e]||"children[0]"}function U(e){return[e.father?.name,e.mother?.name].filter(Boolean)}function w(e,d,s){const n=U(e);return`
    <div class="yaml-card ${d} rv ${d==="groom"?"d1":"d2"}">
      <span class="who">${s.en}</span>
      <div><span class="key">${d}</span>:</div>
      <div>&nbsp;&nbsp;<span class="key">name</span>: <span class="big-name">${i(e.name)}</span></div>
      <div>&nbsp;&nbsp;<span class="key">name_en</span>: <span class="str">"${i(e.enName)}"</span></div>
      <div>&nbsp;&nbsp;<span class="key">birth</span>: <span class="str">"${i(e.birth)}"</span></div>
      <div>&nbsp;&nbsp;<span class="key">parents</span>: [${n.map(a=>`<span class="str">"${i(a)}"</span>`).join(", ")}]</div>
      <div>&nbsp;&nbsp;<span class="key">rank</span>: <span class="str">${q(e.order)}</span>  <span class="cmt"># ${i(e.order)}</span></div>
      <div class="contact-row">
        <a href="tel:${i(e.phone)}">$ call --${d}</a>
        <a href="sms:${i(e.phone)}">$ sms --${d}</a>
      </div>
    </div>
  `}function I(){const e=new Date(Date.UTC(o.year,o.month-1,1)).getUTCDay(),d=new Date(Date.UTC(o.year,o.month,0)).getUTCDate(),s=[];for(let a=0;a<e;a+=1)s.push('<td class="empty">0</td>');for(let a=1;a<=d;a+=1){const t=(e+a-1)%7===0;s.push(a===o.day?`<td class="wd"><i>${a}</i></td>`:`<td${t?' class="sun"':""}>${a}</td>`)}for(;s.length%7!==0;)s.push('<td class="empty">0</td>');const n=[];for(let a=0;a<s.length;a+=7)n.push(`<tr>${s.slice(a,a+7).join("")}</tr>`);return`
    <table aria-label="예식 달력">
      <thead><tr>${["S","M","T","W","T","F","S"].map(a=>`<th>${a}</th>`).join("")}</tr></thead>
      <tbody>${n.join("")}</tbody>
    </table>
  `}function R(){const e=r.wedding.venue,d=x(e),s=r.gallery?.images||[];return`
    <div class="phone">
      <header class="editor-bar">
        <div class="dots"><i></i><i></i><i></i></div>
        <div class="tab"><b>${$}</b> ♥ <em>${f}</em><span class="fname"> — invitation.md</span></div>
        <button class="theme-toggle" id="theme-toggle" type="button" aria-label="테마 전환">☾</button>
      </header>

      <section id="hero">
        <div class="term">
          <div class="term-head"><span>guest@wedding ~</span><span>zsh — 80×24</span></div>
          <div class="term-body" id="term-body"></div>
        </div>

        <svg class="merge-fig rv" viewBox="0 0 220 90" aria-hidden="true">
          <path class="br-g" d="M20 14 C 80 14, 90 45, 110 45 L 200 45" />
          <path class="br-b" d="M20 76 C 80 76, 90 45, 110 45 L 200 45" />
          <circle class="dot-g" cx="20" cy="14" r="4" />
          <circle class="dot-b" cx="20" cy="76" r="4" />
          <circle class="dot-m" cx="200" cy="45" r="5" />
        </svg>

        <div class="hero-names rv d1">
          <div class="ver">WEDDING — RELEASE v1.0.0</div>
          <h1>${i(r.groom.name)}<span class="amp">&amp;&amp;</span>${i(r.bride.name)}</h1>
          <div class="eng">${i(r.groom.enName)} &amp; ${i(r.bride.enName)}</div>
          <div class="date-line"><b>${k} ${M} ${S}</b></div>
        </div>

        <div class="venue-banner rv d2">
          <div class="vb-label">LOCATION</div>
          <div class="vb-name">${i(e.name)}</div>
          <div class="vb-addr">${i(e.address)}</div>
          ${r.transport?.subway?`<div class="vb-sub">${i(r.transport.subway.split(`
`)[0])}</div>`:""}
        </div>

        <div class="photo-frame rv d3">
          <div class="ph-head"><span>cover.jpg — preview</span><span>1080 × 1350</span></div>
          <img src="${i(y(r.cover.image))}" alt="" fetchpriority="high" />
        </div>
      </section>

      <section id="invite">
        <div class="sec-label rv">section: invitation — README.md</div>
        <div class="readme rv d1">
          <p>
            서로 다른 환경에서<br />
            각자의 <span class="hl-g">branch</span>에 삶을 쓰던 두 사람이<br />
            이제 하나의 <span class="hl-g">repository</span>로<br />
            함께 <span class="hl-b">merge</span>하기로 했습니다.
          </p>
          <p>
            버그 같은 날엔 함께 <span class="hl-b">debug</span>하고<br />
            좋은 날엔 <span class="hl-g">git log</span>를 보며 기뻐하고<br />
            서로의 든든한 <span class="hl-g">pair</span>로<br />
            하루하루 정성껏 <span class="hl-b">commit</span>하겠습니다.
          </p>
          <p class="small">
            저희의 첫 <span class="hl-b">deploy</span>에<br />
            귀한 걸음으로 <span class="hl-g">LGTM</span> 남겨주시면<br />
            더없는 기쁨으로 간직하겠습니다.
          </p>
        </div>
      </section>

      <section id="couple">
        <div class="sec-label rv">section: couple — couple.yaml</div>
        ${w(r.groom,"groom",{en:"GROOM"})}
        ${w(r.bride,"bride",{en:"BRIDE"})}
      </section>

      <section id="gallery-sec">
        <div class="sec-label rv">section: gallery — photos/*.jpg</div>
        <div class="gallery rv d1" id="dev-gallery">
          ${s.map((n,a)=>`
                <button type="button" data-index="${a}" aria-label="사진 ${a+1} 크게 보기">
                  <span class="g-head">${i(n.split("/").pop())}</span>
                  <img src="${i(y(n))}" alt="웨딩 사진 ${a+1}" loading="lazy" decoding="async" />
                </button>
              `).join("")}
        </div>
        <div class="gallery-hint rv d2">// click to zoom, swipe to scroll</div>
      </section>

      <section id="dday-sec">
        <div class="sec-label rv">section: ci/cd — marriage-pipeline.yml</div>
        <div class="pipeline rv d1" id="pipeline">
          <div class="pl-step"><span class="ic">✓</span><span class="nm">build: 두 사람의 마음을 하나로 build</span><span class="st">PENDING</span></div>
          <div class="pl-step"><span class="ic">✓</span><span class="nm">test: 연애 전 구간 test 통과</span><span class="st">PENDING</span></div>
          <div class="pl-step"><span class="ic">✓</span><span class="nm">approve: 양가 부모님 승인 완료</span><span class="st">PENDING</span></div>
          <div class="pl-step" data-deploy><span class="ic">✓</span><span class="nm">deploy: 결혼식 — 평생의 시작</span><span class="st">PENDING</span></div>
        </div>

        <div class="dday-wrap rv d2">
          <div class="dday-label">DEPLOY COUNTDOWN — <b id="dday-num">D-000</b></div>
          <div class="dday">
            <div class="dd-cell"><b id="cd-d">00</b><span>DAYS</span></div>
            <div class="dd-sep">:</div>
            <div class="dd-cell"><b id="cd-h">00</b><span>HOURS</span></div>
            <div class="dd-sep">:</div>
            <div class="dd-cell"><b id="cd-m">00</b><span>MIN</span></div>
            <div class="dd-sep">:</div>
            <div class="dd-cell"><b id="cd-s">00</b><span>SEC</span></div>
          </div>
        </div>

        <div class="cal rv d3">
          <div class="cal-title">${A} ${o.year}</div>
          ${I()}
        </div>
      </section>

      <section id="info">
        <div class="sec-label rv">section: wedding-info — production.env</div>
        <div class="envblock rv d1">
          <div><span class="c"># 예식 안내</span></div>
          <div><span class="k">WEDDING_DATETIME</span>=<span class="v">"${i(T(r.wedding.date))}"</span></div>
          <div><span class="k">VENUE_NAME</span>=<span class="v">"${i(e.name)}"</span></div>
          <div><span class="k">VENUE_ADDR</span>=<span class="v">"${i(e.address)}"</span></div>
          ${e.tel?`<div><span class="k">VENUE_TEL</span>=<span class="v">"${i(e.tel)}"</span></div>`:""}
        </div>
      </section>

      <section id="location">
        <div class="sec-label rv">section: location — curl</div>
        <div class="envblock rv d1">
          <div><span class="p">$</span> curl -s wedding.local/api/venue | jq .</div>
          <div>{</div>
          <div>&nbsp;&nbsp;<span class="k">"name"</span>: <span class="v">"${i(e.name)}"</span>,</div>
          <div>&nbsp;&nbsp;<span class="k">"address"</span>: <span class="v">"${i(e.address)}"</span>,</div>
          <div>&nbsp;&nbsp;<span class="k">"lat"</span>: <span class="v">${e.lat}</span>,</div>
          <div>&nbsp;&nbsp;<span class="k">"lng"</span>: <span class="v">${e.lng}</span></div>
          <div>}</div>
        </div>

        <div class="btn-row rv d2">
          <a class="btn mint" href="${i(d.naver)}" target="_blank" rel="noreferrer">네이버 지도</a>
          <a class="btn rose" href="${i(d.kakao)}" target="_blank" rel="noreferrer">카카오맵</a>
          <button class="btn" id="copy-addr" type="button">주소 복사</button>
        </div>

        <div class="envblock rv d3">
          ${r.transport?.subway?`<div><span class="c"># subway</span></div><div class="v wrap">${b(r.transport.subway)}</div>`:""}
          ${r.transport?.bus?`<div><span class="c"># bus</span></div><div class="v wrap">${b(r.transport.bus)}</div>`:""}
          ${r.transport?.car?`<div><span class="c"># car</span></div><div class="v wrap">${b(r.transport.car)}</div>`:""}
          ${r.transport?.parking?`<div><span class="c"># parking</span></div><div class="v wrap">${N(r.transport.parking)}</div>`:""}
        </div>
      </section>

      <section id="gift">
        <div class="sec-label rv">section: gift — 마음 전하실 곳</div>
        <p class="gift-note rv">참석이 어려우신 분들을 위해 기재했습니다.<br />전해주시는 따뜻한 마음, 소중히 간직하겠습니다.</p>
        ${["groom","bride"].map((n,a)=>{const t=r.accounts?.[n]||[];return t.length?`
              <details class="gift rv d${a+1}">
                <summary><span style="color: var(--${n==="groom"?"mint":"rose"})">❯</span> ${n==="groom"?"신랑":"신부"} 측 마음 전하실 곳 <span class="arrow">›</span></summary>
                ${t.map(l=>`
                      <div class="acc-row">
                        <span class="who-name">${i(l.holder)}</span>
                        <span class="num">${i(l.bank)} ${i(l.number)}</span>
                        <button class="copy" type="button" data-copy="${i(`${l.bank} ${l.number}`)}">copy</button>
                      </div>
                    `).join("")}
              </details>
            `:""}).join("")}
      </section>

      <section id="approve">
        <div class="sec-label rv">section: blessing — 마지막 승인</div>
        <p class="readme rv d1">저희 두 사람의 시작을<br />축하의 마음으로 approve해 주세요.</p>
        <button class="deploy-btn rv d2" id="approve-btn" type="button">$ approve --deploy wedding</button>
        <div class="deploy-log" id="deploy-log"></div>
      </section>

      <footer>
        <button class="share-btn" id="share-btn" type="button">$ ./share --invite</button>
        <div class="version-links">
          <a class="version-link" href="/">🤵👰 일반 버전 보기</a>
        </div>
        <div class="ft-line"><span class="p">$</span> sudo insmod marriage.ko</div>
        <div class="ft-line"><span class="p">$</span> dmesg | grep marriage:</div>
        <div class="ft-line"><span class="sys">marriage:</span> module loaded <span class="str">("forever")</span></div>
        <div class="ft-line"><span class="sys">marriage:</span> ${$} ♥ ${f} linked, refcount = <span class="num">∞</span></div>
        <div class="ft-line"><span class="sys">marriage:</span> <span class="str">thank you for blessing us <span class="heart">♥</span></span></div>
        <div class="ft-line"><span class="p">$</span> sudo rmmod marriage</div>
        <div class="ft-line"><span class="err">rmmod: ERROR:</span> marriage is in use — <span class="heart">forever</span></div>
      </footer>
    </div>

    <div class="lightbox" id="dev-lightbox" role="dialog" aria-modal="true" aria-label="사진 크게 보기" aria-hidden="true">
      <img id="lightbox-img" alt="" />
      <div class="lb-cap" id="lightbox-cap"></div>
      <button class="lb-close" type="button" aria-label="닫기">✕</button>
      <button class="lb-prev" type="button" aria-label="이전 사진">‹</button>
      <button class="lb-next" type="button" aria-label="다음 사진">›</button>
    </div>
  `}function h(e){const d=document.querySelector("#toast-root"),s=document.createElement("div");s.className="toast",s.textContent=e,d.replaceChildren(s),window.setTimeout(()=>s.remove(),2400)}function O(){const e=document.querySelector("#term-body"),d=[{html:'<span class="p">$</span> git checkout -b marriage',type:!0},{html:`<span class="out">Switched to a new branch 'marriage'</span>`},{html:`<span class="p">$</span> git merge ${$} ${f}`,type:!0},{html:`<span class="out">Merge made by the <span class="hi">'love'</span> strategy.</span>`},{html:'<span class="out"> 2 lives changed, <span class="hi">∞ insertions(+)</span>, 0 deletions(-)</span>'},{html:'<span class="p">$</span> npm run wedding',type:!0},{html:`<span class="out">&gt; ${k} ${S} — ${i(r.wedding.venue.name)}</span>`}];if(m){e.innerHTML=d.map(t=>`<div>${t.html}</div>`).join("");return}let s=0;const n=document.createElement("span");n.className="cursor";const a=()=>{if(s>=d.length){e.append(n);return}const t=d[s];s+=1;const l=document.createElement("div");if(e.append(l),!t.type){l.innerHTML=t.html,window.setTimeout(a,240);return}const p=document.createElement("template");p.innerHTML=t.html;const u=[...p.content.textContent];let v=0;l.append(n);const c=window.setInterval(()=>{v+=1,n.remove(),l.textContent=u.slice(0,v).join(""),l.append(n),v>=u.length&&(window.clearInterval(c),l.innerHTML=t.html,window.setTimeout(a,320))},42)};window.setTimeout(a,500)}function j(){const e=document.querySelectorAll(".rv");if(m){e.forEach(s=>s.classList.add("on"));return}const d=new IntersectionObserver(s=>{s.forEach(n=>{n.isIntersecting&&(n.target.classList.add("on"),d.unobserve(n.target))})},{rootMargin:"0px 0px -60px 0px"});e.forEach(s=>d.observe(s))}function H(){const e=document.querySelector("#dday-num"),d=["#cd-d","#cd-h","#cd-m","#cd-s"].map(n=>document.querySelector(n)),s=()=>{const n=E-Date.now();if(n<=0){e.textContent="DEPLOYED 🎉",d.forEach(v=>{v.textContent="00"});return}const a=Math.floor(n/864e5),t=Math.floor(n%864e5/36e5),l=Math.floor(n%36e5/6e4),p=Math.floor(n%6e4/1e3);e.textContent=`D-${a+(t+l+p>0?1:0)}`;const u=[a,t,l,p];d.forEach((v,c)=>{v.textContent=String(u[c]).padStart(2,"0")})};s(),window.setInterval(s,1e3)}function P(){const e=document.querySelector("#pipeline"),d=[...e.querySelectorAll(".pl-step")],s=()=>{d.forEach((a,t)=>{window.setTimeout(()=>{const p=!a.hasAttribute("data-deploy")||Date.now()>=E;a.classList.add(p?"ok":"run"),a.querySelector(".ic").textContent=p?"✓":"◌",a.querySelector(".st").textContent=p?"SUCCESS":"RUNNING"},m?0:450*(t+1))})},n=new IntersectionObserver(a=>{a.some(t=>t.isIntersecting)&&(n.disconnect(),s())},{threshold:.4});n.observe(e)}function G(){const e=(r.gallery?.images||[]).map(y),d=(r.gallery?.images||[]).map(c=>c.split("/").pop()),s=document.querySelector("#dev-lightbox"),n=document.querySelector("#lightbox-img"),a=document.querySelector("#lightbox-cap");let t=0,l=null;const p=c=>{t=(c+e.length)%e.length,n.src=e[t],n.alt=`웨딩 사진 ${t+1}`,a.textContent=`${d[t]} — ${t+1} / ${e.length}`},u=(c,L)=>{p(c),l=L,s.classList.add("is-open"),s.setAttribute("aria-hidden","false"),document.body.classList.add("is-locked"),requestAnimationFrame(()=>{s.offsetWidth,s.querySelector(".lb-close").focus({preventScroll:!0})})},v=()=>{s.classList.remove("is-open"),s.setAttribute("aria-hidden","true"),document.body.classList.remove("is-locked"),n.removeAttribute("src"),l?.isConnected&&l.focus({preventScroll:!0}),l=null};document.querySelectorAll("#dev-gallery button").forEach(c=>{c.addEventListener("click",()=>u(Number(c.dataset.index),c))}),s.querySelector(".lb-close").addEventListener("click",v),s.querySelector(".lb-prev").addEventListener("click",()=>p(t-1)),s.querySelector(".lb-next").addEventListener("click",()=>p(t+1)),s.addEventListener("click",c=>{c.target===s&&v()}),s.addEventListener("gesturestart",c=>c.preventDefault()),window.addEventListener("keydown",c=>{s.classList.contains("is-open")&&(c.key==="Escape"&&v(),c.key==="ArrowLeft"&&p(t-1),c.key==="ArrowRight"&&p(t+1))})}function B(){document.querySelector("#theme-toggle").addEventListener("click",s=>{const n=document.body.classList.toggle("light");s.currentTarget.textContent=n?"☀":"☾"}),document.querySelector("#copy-addr").addEventListener("click",async()=>{await g(r.wedding.venue.address),h("주소가 복사되었습니다")}),document.querySelectorAll("[data-copy]").forEach(s=>{s.addEventListener("click",async()=>{await g(s.dataset.copy),h("계좌번호가 복사되었습니다")})}),document.querySelector("#share-btn").addEventListener("click",async()=>{if(navigator.share)try{await navigator.share({title:document.title,url:window.location.href});return}catch(s){if(s.name==="AbortError")return}await g(window.location.href),h("청첩장 주소가 복사되었습니다")});const e=document.querySelector("#approve-btn"),d=document.querySelector("#deploy-log");e.addEventListener("click",()=>{e.disabled=!0,["$ approve --deploy wedding","→ blessing received from guest","→ packaging happiness ... done",'<span class="ok">✓ deploy approved — 감사합니다, 예식장에서 뵙겠습니다 ♥</span>'].forEach((n,a)=>{window.setTimeout(()=>{const t=document.createElement("div");t.innerHTML=n,d.append(t)},m?0:420*a)})})}document.querySelector("#dev-app").innerHTML=R();O();j();H();P();G();B();
