import{g as D,c as l,e as c,a as f,f as T,b as y,d as N}from"./utils-6DRn2Q3b.js";const h=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=D(l.wedding.date),k=new Date(l.wedding.date).getTime(),x=new Date(Date.UTC(r.year,r.month-1,r.day)).getUTCDay(),C=["SUN","MON","TUE","WED","THU","FRI","SAT"][x],M=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"][r.month-1],w=`${r.year}.${String(r.month).padStart(2,"0")}.${String(r.day).padStart(2,"0")}`,A=`${r.year}-${String(r.month).padStart(2,"0")}-${String(r.day).padStart(2,"0")}`,S=`${r.hour>12?r.hour-12:r.hour}:${String(r.minute).padStart(2,"0")} ${r.hour<12?"AM":"PM"}`,u=(l.groom.enName||"groom").toLowerCase(),b=(l.bride.enName||"bride").toLowerCase();function q(s){return{장남:"sons[0]",차남:"sons[1]",삼남:"sons[2]",장녀:"daughters[0]",차녀:"daughters[1]",삼녀:"daughters[2]"}[s]||"children[0]"}function I(s){return[s.father?.name,s.mother?.name].filter(Boolean)}function g(s){let i=0;for(const a of s)i=i*31+a.charCodeAt(0)>>>0;return i.toString(16).padStart(7,"0").slice(0,7)}function E(s,i,a){const n=I(s);return`
    <div class="yaml-card ${i} rv ${i==="groom"?"d1":"d2"}">
      <span class="who">${a.en}</span>
      <div><span class="key">${i}</span>:</div>
      <div>&nbsp;&nbsp;<span class="key">name</span>: <span class="big-name">${c(s.name)}</span></div>
      <div>&nbsp;&nbsp;<span class="key">name_en</span>: <span class="str">"${c(s.enName)}"</span></div>
      <div>&nbsp;&nbsp;<span class="key">birth</span>: <span class="str">"${c(s.birth)}"</span></div>
      <div>&nbsp;&nbsp;<span class="key">parents</span>: [${n.map(e=>`<span class="str">"${c(e)}"</span>`).join(", ")}]</div>
      <div>&nbsp;&nbsp;<span class="key">rank</span>: <span class="str">${q(s.order)}</span>  <span class="cmt"># ${c(s.order)}</span></div>
      <div class="contact-row">
        <a href="tel:${c(s.phone)}">$ call --${i}</a>
        <a href="sms:${c(s.phone)}">$ sms --${i}</a>
      </div>
    </div>
  `}function R(){const s=l.timeline?.items||[],i=s[0],a=s.slice(1,-1),n=s.at(-1);return`<pre class="gitlog rv d1">${['<span class="dim">$ git log --graph --date=short</span>',"",`*   <span class="h">${g(w)}</span> <span class="head">(HEAD -&gt; main, </span><span class="tag">tag: v1.0.0</span><span class="head">)</span>`,`<span class="g">|</span><span class="b">\\</span>  <span class="date">${A}</span> <span class="msg">Merge pull request #1: 평생을 함께하기로 하다</span>`,`<span class="g">|</span> <span class="b">*</span> <span class="h">${g(b)}</span> <span class="msg">feat(${b}): "yes" 반환 — LGTM, approve</span>`,`<span class="g">*</span> <span class="b">|</span> <span class="h">${g(u)}</span> ${n?`<span class="date">${n.date}</span> `:""}<span class="msg">feat(${u}): ${n?c(n.title):"프러포즈"} PR open</span>`,'<span class="g">|</span><span class="b">/</span>',...a.map(t=>`<span class="g">*</span>   <span class="h">${g(t.date)}</span> <span class="date">${t.date}</span> <span class="msg">chore(${u},${b}): ${c(t.title)} — ${c(t.desc)}</span>`),i?`<span class="g">*</span>   <span class="h">${g(i.date)}</span> <span class="date">${i.date}</span> <span class="msg">init: ${c(i.title)} — repository 생성</span>`:""].join(`
`)}</pre>`}function U(){const s=new Date(Date.UTC(r.year,r.month-1,1)).getUTCDay(),i=new Date(Date.UTC(r.year,r.month,0)).getUTCDate(),a=[];for(let e=0;e<s;e+=1)a.push('<td class="empty">0</td>');for(let e=1;e<=i;e+=1){const t=(s+e-1)%7===0;a.push(e===r.day?`<td class="wd"><i>${e}</i></td>`:`<td${t?' class="sun"':""}>${e}</td>`)}for(;a.length%7!==0;)a.push('<td class="empty">0</td>');const n=[];for(let e=0;e<a.length;e+=7)n.push(`<tr>${a.slice(e,e+7).join("")}</tr>`);return`
    <table aria-label="예식 달력">
      <thead><tr>${["S","M","T","W","T","F","S"].map(e=>`<th>${e}</th>`).join("")}</tr></thead>
      <tbody>${n.join("")}</tbody>
    </table>
  `}function O(){const s=l.wedding.venue,i=N(s),a=l.notices?.find(e=>e.title.includes("주차")),n=l.gallery?.images||[];return`
    <div class="phone">
      <header class="editor-bar">
        <div class="dots"><i></i><i></i><i></i></div>
        <div class="tab"><b>${u}</b> ♥ <em>${b}</em><span class="fname"> — invitation.md</span></div>
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
          <h1>${c(l.groom.name)}<span class="amp">&amp;&amp;</span>${c(l.bride.name)}</h1>
          <div class="eng">${c(l.groom.enName)} &amp; ${c(l.bride.enName)}</div>
          <div class="date-line"><b>${w} ${C} ${S}</b></div>
        </div>

        <div class="venue-banner rv d2">
          <div class="vb-label">LOCATION</div>
          <div class="vb-name">${c(s.name)}</div>
          <div class="vb-addr">${c(s.address)}</div>
          ${l.transport?.subway?`<div class="vb-sub">${c(l.transport.subway)}</div>`:""}
        </div>

        <div class="photo-frame rv d3">
          <div class="ph-head"><span>cover.jpg — preview</span><span>1080 × 1350</span></div>
          <img src="${c(f(l.cover.image))}" alt="" fetchpriority="high" />
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
        ${E(l.groom,"groom",{en:"GROOM"})}
        ${E(l.bride,"bride",{en:"BRIDE"})}
      </section>

      <section id="gallery-sec">
        <div class="sec-label rv">section: gallery — photos/*.jpg</div>
        <div class="gallery rv d1" id="dev-gallery">
          ${n.map((e,t)=>`
                <button type="button" data-index="${t}" aria-label="사진 ${t+1} 크게 보기">
                  <span class="g-head">${c(e.split("/").pop())}</span>
                  <img src="${c(f(e))}" alt="웨딩 사진 ${t+1}" loading="lazy" decoding="async" />
                </button>
              `).join("")}
        </div>
        <div class="gallery-hint rv d2">// click to zoom, swipe to scroll</div>
      </section>

      <section id="timeline">
        <div class="sec-label rv">section: our-history — git log --graph</div>
        ${R()}
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
          <div class="cal-title">${M} ${r.year}</div>
          ${U()}
        </div>
      </section>

      <section id="info">
        <div class="sec-label rv">section: wedding-info — production.env</div>
        <div class="envblock rv d1">
          <div><span class="c"># 예식 안내</span></div>
          <div><span class="k">WEDDING_DATETIME</span>=<span class="v">"${c(T(l.wedding.date))}"</span></div>
          <div><span class="k">VENUE_NAME</span>=<span class="v">"${c(s.name)}"</span></div>
          <div><span class="k">VENUE_ADDR</span>=<span class="v">"${c(s.address)}"</span></div>
          ${s.tel?`<div><span class="k">VENUE_TEL</span>=<span class="v">"${c(s.tel)}"</span></div>`:""}
        </div>
      </section>

      <section id="location">
        <div class="sec-label rv">section: location — curl</div>
        <div class="envblock rv d1">
          <div><span class="p">$</span> curl -s wedding.local/api/venue | jq .</div>
          <div>{</div>
          <div>&nbsp;&nbsp;<span class="k">"name"</span>: <span class="v">"${c(s.name)}"</span>,</div>
          <div>&nbsp;&nbsp;<span class="k">"address"</span>: <span class="v">"${c(s.address)}"</span>,</div>
          <div>&nbsp;&nbsp;<span class="k">"lat"</span>: <span class="v">${s.lat}</span>,</div>
          <div>&nbsp;&nbsp;<span class="k">"lng"</span>: <span class="v">${s.lng}</span></div>
          <div>}</div>
        </div>

        <div class="btn-row rv d2">
          <a class="btn mint" href="${c(i.naver)}" target="_blank" rel="noreferrer">네이버 지도</a>
          <a class="btn rose" href="${c(i.kakao)}" target="_blank" rel="noreferrer">카카오맵</a>
          <button class="btn" id="copy-addr" type="button">주소 복사</button>
        </div>

        <div class="envblock rv d3">
          ${l.transport?.subway?`<div><span class="c"># subway</span></div><div class="v wrap">${c(l.transport.subway)}</div>`:""}
          ${l.transport?.bus?`<div><span class="c"># bus</span></div><div class="v wrap">${c(l.transport.bus)}</div>`:""}
          ${l.transport?.car?`<div><span class="c"># car</span></div><div class="v wrap">${c(l.transport.car)}</div>`:""}
          ${a?`<div><span class="c"># parking</span></div><div class="v wrap">${c(a.desc)}</div>`:""}
        </div>
      </section>

      <section id="gift">
        <div class="sec-label rv">section: gift — 마음 전하실 곳</div>
        <p class="gift-note rv">참석이 어려우신 분들을 위해 기재했습니다.<br />전해주시는 따뜻한 마음, 소중히 간직하겠습니다.</p>
        ${["groom","bride"].map((e,t)=>{const p=l.accounts?.[e]||[];return p.length?`
              <details class="gift rv d${t+1}">
                <summary><span style="color: var(--${e==="groom"?"mint":"rose"})">❯</span> ${e==="groom"?"신랑":"신부"} 측 마음 전하실 곳 <span class="arrow">›</span></summary>
                ${p.map(d=>`
                      <div class="acc-row">
                        <span class="who-name">${c(d.holder)}</span>
                        <span class="num">${c(d.bank)} ${c(d.number)}</span>
                        <button class="copy" type="button" data-copy="${c(`${d.bank} ${d.number}`)}">copy</button>
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
        <div class="ft-line"><span class="sys">marriage:</span> ${u} ♥ ${b} linked, refcount = <span class="num">∞</span></div>
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
  `}function $(s){const i=document.querySelector("#toast-root"),a=document.createElement("div");a.className="toast",a.textContent=s,i.replaceChildren(a),window.setTimeout(()=>a.remove(),2400)}function H(){const s=document.querySelector("#term-body"),i=[{html:'<span class="p">$</span> git checkout -b marriage',type:!0},{html:`<span class="out">Switched to a new branch 'marriage'</span>`},{html:`<span class="p">$</span> git merge ${u} ${b}`,type:!0},{html:`<span class="out">Merge made by the <span class="hi">'love'</span> strategy.</span>`},{html:'<span class="out"> 2 lives changed, <span class="hi">∞ insertions(+)</span>, 0 deletions(-)</span>'},{html:'<span class="p">$</span> npm run wedding',type:!0},{html:`<span class="out">&gt; ${w} ${S} — ${c(l.wedding.venue.name)}</span>`}];if(h){s.innerHTML=i.map(t=>`<div>${t.html}</div>`).join("");return}let a=0;const n=document.createElement("span");n.className="cursor";const e=()=>{if(a>=i.length){s.append(n);return}const t=i[a];a+=1;const p=document.createElement("div");if(s.append(p),!t.type){p.innerHTML=t.html,window.setTimeout(e,240);return}const d=document.createElement("template");d.innerHTML=t.html;const m=[...d.content.textContent];let v=0;p.append(n);const o=window.setInterval(()=>{v+=1,n.remove(),p.textContent=m.slice(0,v).join(""),p.append(n),v>=m.length&&(window.clearInterval(o),p.innerHTML=t.html,window.setTimeout(e,320))},42)};window.setTimeout(e,500)}function j(){const s=document.querySelectorAll(".rv");if(h){s.forEach(a=>a.classList.add("on"));return}const i=new IntersectionObserver(a=>{a.forEach(n=>{n.isIntersecting&&(n.target.classList.add("on"),i.unobserve(n.target))})},{rootMargin:"0px 0px -60px 0px"});s.forEach(a=>i.observe(a))}function P(){const s=document.querySelector("#dday-num"),i=["#cd-d","#cd-h","#cd-m","#cd-s"].map(n=>document.querySelector(n)),a=()=>{const n=k-Date.now();if(n<=0){s.textContent="DEPLOYED 🎉",i.forEach(v=>{v.textContent="00"});return}const e=Math.floor(n/864e5),t=Math.floor(n%864e5/36e5),p=Math.floor(n%36e5/6e4),d=Math.floor(n%6e4/1e3);s.textContent=`D-${e+(t+p+d>0?1:0)}`;const m=[e,t,p,d];i.forEach((v,o)=>{v.textContent=String(m[o]).padStart(2,"0")})};a(),window.setInterval(a,1e3)}function G(){const s=document.querySelector("#pipeline"),i=[...s.querySelectorAll(".pl-step")],a=()=>{i.forEach((e,t)=>{window.setTimeout(()=>{const d=!e.hasAttribute("data-deploy")||Date.now()>=k;e.classList.add(d?"ok":"run"),e.querySelector(".ic").textContent=d?"✓":"◌",e.querySelector(".st").textContent=d?"SUCCESS":"RUNNING"},h?0:450*(t+1))})},n=new IntersectionObserver(e=>{e.some(t=>t.isIntersecting)&&(n.disconnect(),a())},{threshold:.4});n.observe(s)}function B(){const s=(l.gallery?.images||[]).map(f),i=(l.gallery?.images||[]).map(o=>o.split("/").pop()),a=document.querySelector("#dev-lightbox"),n=document.querySelector("#lightbox-img"),e=document.querySelector("#lightbox-cap");let t=0,p=null;const d=o=>{t=(o+s.length)%s.length,n.src=s[t],n.alt=`웨딩 사진 ${t+1}`,e.textContent=`${i[t]} — ${t+1} / ${s.length}`},m=(o,L)=>{d(o),p=L,a.classList.add("is-open"),a.setAttribute("aria-hidden","false"),document.body.classList.add("is-locked"),requestAnimationFrame(()=>{a.offsetWidth,a.querySelector(".lb-close").focus({preventScroll:!0})})},v=()=>{a.classList.remove("is-open"),a.setAttribute("aria-hidden","true"),document.body.classList.remove("is-locked"),n.removeAttribute("src"),p?.isConnected&&p.focus({preventScroll:!0}),p=null};document.querySelectorAll("#dev-gallery button").forEach(o=>{o.addEventListener("click",()=>m(Number(o.dataset.index),o))}),a.querySelector(".lb-close").addEventListener("click",v),a.querySelector(".lb-prev").addEventListener("click",()=>d(t-1)),a.querySelector(".lb-next").addEventListener("click",()=>d(t+1)),a.addEventListener("click",o=>{o.target===a&&v()}),a.addEventListener("gesturestart",o=>o.preventDefault()),window.addEventListener("keydown",o=>{a.classList.contains("is-open")&&(o.key==="Escape"&&v(),o.key==="ArrowLeft"&&d(t-1),o.key==="ArrowRight"&&d(t+1))})}function W(){document.querySelector("#theme-toggle").addEventListener("click",a=>{const n=document.body.classList.toggle("light");a.currentTarget.textContent=n?"☀":"☾"}),document.querySelector("#copy-addr").addEventListener("click",async()=>{await y(l.wedding.venue.address),$("주소가 복사되었습니다")}),document.querySelectorAll("[data-copy]").forEach(a=>{a.addEventListener("click",async()=>{await y(a.dataset.copy),$("계좌번호가 복사되었습니다")})}),document.querySelector("#share-btn").addEventListener("click",async()=>{if(navigator.share)try{await navigator.share({title:document.title,url:window.location.href});return}catch(a){if(a.name==="AbortError")return}await y(window.location.href),$("청첩장 주소가 복사되었습니다")});const s=document.querySelector("#approve-btn"),i=document.querySelector("#deploy-log");s.addEventListener("click",()=>{s.disabled=!0,["$ approve --deploy wedding","→ blessing received from guest","→ packaging happiness ... done",'<span class="ok">✓ deploy approved — 감사합니다, 예식장에서 뵙겠습니다 ♥</span>'].forEach((n,e)=>{window.setTimeout(()=>{const t=document.createElement("div");t.innerHTML=n,i.append(t)},h?0:420*e)})})}document.querySelector("#dev-app").innerHTML=O();H();j();P();G();B();W();
