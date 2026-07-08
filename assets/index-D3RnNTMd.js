const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.esm-GYt-kKFj.js","assets/index.esm-DyCBAnOf.js","assets/index.esm-MqUOEl17.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();const G="modulepreload",H=function(e){return"/"+e},N={},P=function(t,a,n){let o=Promise.resolve();if(a&&a.length>0){let p=function(l){return Promise.all(l.map(g=>Promise.resolve(g).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};var u=p;document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),i=d?.nonce||d?.getAttribute("nonce");o=p(a.map(l=>{if(l=H(l),l in N)return;N[l]=!0;const g=l.endsWith(".css"),b=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${b}`))return;const c=document.createElement("link");if(c.rel=g?"stylesheet":G,g||(c.as="script"),c.crossOrigin="",c.href=l,i&&c.setAttribute("nonce",i),document.head.appendChild(c),g)return new Promise((h,L)=>{c.addEventListener("load",h),c.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(d){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=d,window.dispatchEvent(i),!i.defaultPrevented)throw d}return o.then(d=>{for(const i of d||[])i.status==="rejected"&&s(i.reason);return t().catch(s)})},m={meta:{title:"상민 ♥ 해민 결혼합니다",description:"2027년 3월 21일 일요일 오전 11시, W스퀘어 컨벤션 8층 채플홀",ogImage:"https://sm9171.github.io/images/og-thumbnail.jpg",kakaoJsKey:""},wedding:{date:"2027-03-21T11:00:00+09:00",venue:{name:"W스퀘어 컨벤션 8층 채플홀",address:"경기도 성남시 분당구 판교역로226번길 16",lat:37.4005008,lng:127.1114555,tel:"031-703-0116"}},cover:{phrase:"We're getting Married!",image:"/images/cover.jpg"},groom:{name:"나상민",nickname:"상민",enName:"Sangmin",birth:"1991.07.01",phone:"010-1234-5678",photo:"/images/groom.jpg",father:{name:"나아버지",phone:"010-1111-1111",deceased:!1},mother:{name:"나어머니",phone:"010-2222-2222",deceased:!1},order:"장남",intro:["다정한 사람","요리를 좋아함","잘 웃는 편"]},bride:{name:"장해민",nickname:"해민",enName:"Haemin",birth:"1995.04.17",phone:"010-9876-5432",photo:"/images/bride.jpg",father:{name:"장아버지",phone:"010-3333-3333",deceased:!1},mother:{name:"장어머니",phone:"010-4444-4444",deceased:!1},order:"장녀",intro:["따뜻한 사람","꽃을 좋아함","기록을 사랑함"]},greeting:{quote:`어제보다 오늘 더 사랑하고
내일은 오늘보다 더 사랑하겠습니다.`,quoteFrom:"",message:`서로가 마주보며 다져온 사랑을
이제 함께 한 곳을 바라보며
걸어갈 수 있는 큰 사랑으로 키우고자 합니다.

귀한 걸음으로 축복해 주시면
더없는 기쁨으로 간직하겠습니다.`},interview:{enabled:!0,items:[{q:"결혼을 앞둔 소감은?",a:"오래 기다린 날이라 설레고, 함께해 주실 분들을 떠올리면 마음이 따뜻해집니다."},{q:"서로의 어떤 점에 반했나요?",a:"평범한 하루를 특별하게 만드는 다정함과, 어려운 순간에도 곁을 지키는 단단함에 반했습니다."},{q:"앞으로 어떤 가정을 만들고 싶나요?",a:"작은 약속을 소중히 지키고, 서로의 편이 되어주는 편안한 집을 만들고 싶습니다."}]},gallery:{images:["/images/gallery-01.jpg","/images/gallery-02.jpg","/images/gallery-03.jpg","/images/gallery-04.jpg","/images/gallery-05.jpg","/images/gallery-06.jpg","/images/gallery-07.jpg","/images/gallery-08.jpg"]},timeline:{enabled:!0,items:[{date:"2022.12.24",title:"첫 만남",desc:"차가운 겨울 저녁, 긴 대화가 자연스럽게 이어졌습니다.",image:"/images/gallery-03.jpg"},{date:"2024.05.18",title:"함께한 여행",desc:"서로의 속도를 배워가며 더 가까워졌습니다.",image:"/images/gallery-06.jpg"},{date:"2026.02.14",title:"프러포즈",desc:"가장 익숙한 산책길에서 가장 특별한 약속을 나누었습니다.",image:"/images/gallery-08.jpg"}]},notices:[{icon:"P",title:"주차 안내",desc:"건물 지하 주차장 2시간 무료 이용이 가능합니다."},{icon:"C",title:"포토부스",desc:"식전 12시부터 로비에서 포토부스를 운영합니다."},{icon:"G",title:"답례품 안내",desc:"예식 후 출구에서 작은 선물을 준비했습니다."}],transport:{subway:"신분당선·경강선 판교역 1번 출구 도보 10분",bus:"390번 동안교 하차 / 4000번 테크노육교 하차 / 101, 330, 350, 390, 4000번 차그룹컨소시엄 하차",car:'내비게이션에 "W스퀘어 컨벤션" 또는 "판교역로226번길 16" 검색',shuttle:"셔틀버스 운행 여부는 예식 전 최종 안내 예정"},accounts:{enabled:!0,groom:[{holder:"나상민",bank:"신한은행",number:"110-123-456789",kakaopayLink:""},{holder:"나아버지",bank:"국민은행",number:"123456-00-123456",kakaopayLink:""}],bride:[{holder:"장해민",bank:"하나은행",number:"101-910123-45607",kakaopayLink:""},{holder:"장아버지",bank:"우리은행",number:"1002-123-456789",kakaopayLink:""}]},rsvp:{enabled:!0,mealOption:!0,busOption:!1},guestbook:{enabled:!0},bgm:{enabled:!0,src:"/audio/bgm.mp3",autoplay:!1},firebase:{apiKey:"",authDomain:"",projectId:""}},x=1440*60*1e3;function r(e=""){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function v(e=""){if(!e)return"";if(/^(https?:|data:|blob:|mailto:|tel:)/.test(e))return e;const t="/",a=t.endsWith("/")?t.slice(0,-1):t;return e.startsWith("/")?`${a}${e}`:`${t}${e}`}function S(e=""){return r(e).replaceAll(`
`,"<br />")}function E(e){return e!==!1&&e?.enabled!==!1}function I(e){const t=e.firebase||{};return!!(t.apiKey&&t.authDomain&&t.projectId)}function f(e){return e?.nickname?e.nickname:e?.name?.length>1?e.name.slice(1):e?.name||""}function F(e){const t=String(e).match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);if(!t){const a=new Date(e);return{year:a.getFullYear(),month:a.getMonth()+1,day:a.getDate(),hour:a.getHours(),minute:a.getMinutes()}}return{year:Number(t[1]),month:Number(t[2]),day:Number(t[3]),hour:Number(t[4]),minute:Number(t[5])}}function z(e){const t=F(e),a=new Intl.DateTimeFormat("ko-KR",{weekday:"long",timeZone:"Asia/Seoul"}).format(new Date(`${String(t.year).padStart(4,"0")}-${String(t.month).padStart(2,"0")}-${String(t.day).padStart(2,"0")}T00:00:00+09:00`)),n=t.hour>12?`오후 ${t.hour-12}시`:t.hour===12?"오후 12시":`오전 ${t.hour}시`,o=t.minute?` ${t.minute}분`:"";return`${t.year}년 ${t.month}월 ${t.day}일 ${a} ${n}${o}`}function y(e,t){return`
    <div class="section-heading reveal">
      <p class="section-eyebrow">${r(e)}</p>
      <h2>${r(t)}</h2>
    </div>
  `}function J(e){const t=encodeURIComponent(e.address),a=encodeURIComponent(e.name),n=encodeURIComponent(e.lat),o=encodeURIComponent(e.lng);return{naver:`https://map.naver.com/p/search/${t}`,kakao:`https://map.kakao.com/link/to/${a},${n},${o}`,tmap:`tmap://route?goalname=${a}&goaly=${n}&goalx=${o}`,tmapFallback:"https://www.tmap.co.kr/"}}async function V(e){if(navigator.clipboard?.writeText&&window.isSecureContext)try{await navigator.clipboard.writeText(String(e??""));return}catch{}const t=document.createElement("textarea");t.value=String(e??""),t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="-9999px",document.body.append(t),t.focus(),t.select(),document.execCommand("copy"),t.remove()}async function M(e){const t=new TextEncoder().encode(e),a=await crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(a)].map(n=>n.toString(16).padStart(2,"0")).join("")}function D(e,t){e.textContent=t??""}function X(e){const t=f(e.groom),a=f(e.bride),n=v(e.cover?.image||e.gallery?.images?.[0]||"/images/cover.jpg"),o=e.bgm?.enabled&&e.bgm?.src;return`
    <header class="cover-section" id="top">
      <img class="cover-image" src="${r(n)}" alt="" />
      <div class="cover-overlay"></div>
      ${o?`<audio id="bgm-audio" src="${r(v(e.bgm.src))}" preload="auto" loop></audio>`:""}
      ${o?'<button class="icon-button bgm-toggle" id="bgm-toggle" type="button" aria-label="배경음악 재생" aria-pressed="false">♪</button>':""}
      <div class="cover-content">
        <p class="cover-script">${r(e.cover?.phrase||"Our Wedding Day")}</p>
        <h1>${r(t)} <span>♥</span> ${r(a)}</h1>
        <p class="cover-date">${r(z(e.wedding.date))}</p>
        <p class="cover-place">${r(e.wedding.venue.name)}</p>
      </div>
      <div class="scroll-hint" aria-hidden="true">
        <span>아래로 스크롤하세요</span>
        <i></i>
      </div>
    </header>
  `}function Y(e,t){const a=document.querySelector("#bgm-toggle"),n=document.querySelector("#bgm-audio");if(!a||!n)return;const o=()=>{const d=!n.paused;a.setAttribute("aria-pressed",String(d)),a.setAttribute("aria-label",d?"배경음악 일시정지":"배경음악 재생"),a.textContent=d?"Ⅱ":"♪"};n.load();const s=async()=>{try{n.paused?(n.readyState===0&&n.load(),await n.play()):n.pause(),o()}catch{t.showToast("음악 파일을 재생할 수 없습니다")}};let u=0;a.addEventListener("pointerdown",async d=>{d.preventDefault(),u=Date.now(),await s()}),a.addEventListener("click",async()=>{Date.now()-u<600||await s()}),e.bgm?.autoplay&&window.addEventListener("pointerdown",async()=>{try{await n.play(),o()}catch{o()}},{once:!0}),n.addEventListener("play",o),n.addEventListener("pause",o)}function U(e){return e?.name?`${e.deceased?"故 ":""}${e.name}`:""}function O(e,t){const a=[U(e.father),U(e.mother)].filter(Boolean).join(" · "),n=f(e);return`${a}의 ${e.order||t} ${n}`}function Z(e){return[{group:"신랑",name:e.groom.name,phone:e.groom.phone},{group:"신부",name:e.bride.name,phone:e.bride.phone},{group:"신랑 혼주",name:e.groom.father?.name,phone:e.groom.father?.phone},{group:"신랑 혼주",name:e.groom.mother?.name,phone:e.groom.mother?.phone},{group:"신부 혼주",name:e.bride.father?.name,phone:e.bride.father?.phone},{group:"신부 혼주",name:e.bride.mother?.name,phone:e.bride.mother?.phone}].filter(t=>t.name&&t.phone)}function Q(e){const t=v(e.gallery?.images?.[0]||e.cover?.image||"/images/cover.jpg");return`
    <section class="wedding-section greeting-section" id="greeting">
      ${y("Greeting","소중한 분들을 초대합니다")}
      <div class="greeting-body reveal">
        <blockquote>
          ${S(e.greeting.quote)}
          ${e.greeting.quoteFrom?`<cite>${r(e.greeting.quoteFrom)}</cite>`:""}
        </blockquote>
        <div class="divider"></div>
        <p class="greeting-message">${S(e.greeting.message)}</p>
        <div class="family-lines">
          <p>${r(O(e.groom,"아들"))}</p>
          <p>${r(O(e.bride,"딸"))}</p>
        </div>
        <button class="pill-button primary" id="contact-open" type="button">연락하기</button>
      </div>
      <figure class="greeting-photo reveal">
        <img src="${r(t)}" alt="" loading="lazy" />
      </figure>
    </section>
  `}function ee(e,t){const a=document.querySelector("#contact-open");a&&a.addEventListener("click",()=>{const n=Z(e).map(o=>`
          <article class="contact-card">
            <div>
              <span>${r(o.group)}</span>
              <strong>${r(o.name)}</strong>
            </div>
            <nav aria-label="${r(o.name)} 연락">
              <a class="text-button" href="tel:${r(o.phone)}">전화</a>
              <a class="text-button" href="sms:${r(o.phone)}">문자</a>
            </nav>
          </article>
        `).join("");t.openSheet("연락하기",`<div class="contact-list">${n}</div>`)})}function B(e,t){const a=(e.intro||[]).map(n=>`<li>${r(n)}</li>`).join("");return`
    <article class="couple-card reveal">
      <div class="couple-photo-wrap">
        <img src="${r(v(e.photo))}" alt="${r(e.name)} 사진" loading="lazy" />
      </div>
      <p class="couple-label">${r(t)}</p>
      <p class="couple-en">${r(e.enName)}</p>
      <h3>${r(e.name)}</h3>
      ${e.birth?`<p class="couple-birth">${r(e.birth)}</p>`:""}
      ${a?`<ul>${a}</ul>`:""}
    </article>
  `}function te(e){return`
    <section class="wedding-section alt couple-section" id="couple">
      ${y("Bride & Groom","신랑 · 신부")}
      <div class="couple-grid">
        ${B(e.groom,`Groom ${f(e.groom)}`)}
        ${B(e.bride,`Bride ${f(e.bride)}`)}
      </div>
    </section>
  `}function ae(e){const t=e.interview?.items?.slice(0,4)||[];return!E(e.interview)||t.length===0?"":`
    <section class="wedding-section interview-section" id="interview">
      ${y("Interview","웨딩 인터뷰")}
      <div class="accordion-list reveal">
        ${t.map((a,n)=>`
              <article class="accordion-item">
                <button class="accordion-trigger" type="button" aria-expanded="${n===0?"true":"false"}">
                  <span>Q${n+1}</span>
                  <strong>${r(a.q)}</strong>
                  <i aria-hidden="true"></i>
                </button>
                <div class="accordion-panel" ${n===0?"":"hidden"}>
                  <p>${S(a.a)}</p>
                </div>
              </article>
            `).join("")}
      </div>
    </section>
  `}function ne(){document.querySelectorAll(".accordion-trigger").forEach(e=>{e.addEventListener("click",()=>{const t=e.nextElementSibling,a=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",String(!a)),t.hidden=a})})}const oe=["일","월","화","수","목","금","토"];function re(e){const t=F(e),a=new Date(Date.UTC(t.year,t.month-1,1)).getUTCDay(),n=new Date(Date.UTC(t.year,t.month,0)).getUTCDate(),o=[];for(let s=0;s<a;s+=1)o.push('<span class="empty"></span>');for(let s=1;s<=n;s+=1){const u=s===t.day;o.push(`<span class="${u?"wedding-day":""}">${s}</span>`)}return`
    <div class="calendar-card reveal">
      <div class="calendar-month">${t.year}. ${String(t.month).padStart(2,"0")}</div>
      <div class="calendar-weekdays">${oe.map(s=>`<span>${s}</span>`).join("")}</div>
      <div class="calendar-days">${o.join("")}</div>
    </div>
  `}function se(e){const t=f(e.groom),a=f(e.bride),n=v(e.gallery?.images?.[1]||e.cover?.image||"/images/cover.jpg");return`
    <section class="wedding-section alt calendar-section" id="calendar">
      ${y("Wedding Day","예식 안내")}
      <div class="wedding-info reveal">
        <strong>${r(e.wedding.venue.name)}</strong>
        <span>${r(e.wedding.venue.address)}</span>
      </div>
      <img class="calendar-photo reveal" src="${r(n)}" alt="" loading="lazy" />
      ${re(e.wedding.date)}
      <div class="dday-box reveal" data-wedding-date="${r(e.wedding.date)}" data-groom="${r(t)}" data-bride="${r(a)}">
        <p id="dday-message"></p>
        <strong id="dday-counter">00:00:00:00</strong>
      </div>
    </section>
  `}function ie(){const e=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Seoul",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date),t=Object.fromEntries(e.map(a=>[a.type,a.value]));return Date.UTC(Number(t.year),Number(t.month)-1,Number(t.day))}function le(){const e=document.querySelector(".dday-box");if(!e)return;const t=document.querySelector("#dday-message"),a=document.querySelector("#dday-counter"),n=e.dataset.weddingDate,o=new Date(n).getTime(),s=F(n),u=Date.UTC(s.year,s.month-1,s.day),d=e.dataset.groom,i=e.dataset.bride,p=()=>{const l=o-Date.now(),g=Math.ceil((u-ie())/x);if(l<=0){const w=Math.floor(Math.abs(g))+1;t.textContent=`${d} ♥ ${i}의 결혼을 축하해 주세요`,a.textContent=`D+${String(w).padStart(2,"0")}`;return}const b=Math.floor(l/x),c=Math.floor(l%x/(3600*1e3)),h=Math.floor(l%(3600*1e3)/(60*1e3)),L=Math.floor(l%(60*1e3)/1e3);t.textContent=g===0?`${d} ♥ ${i}의 결혼식이 오늘입니다`:`${d} ♥ ${i}의 결혼식이 ${g}일 남았습니다`,a.textContent=[b,c,h,L].map(w=>String(w).padStart(2,"0")).join(":")};p(),window.setInterval(p,1e3)}function ce(e){const t=e.gallery?.images||[];return t.length===0?"":`
    <section class="wedding-section gallery-section" id="gallery">
      ${y("Gallery","그날의 우리")}
      <div class="gallery-grid reveal">
        ${t.map((a,n)=>`
              <button class="gallery-thumb" type="button" data-gallery-index="${n}" aria-label="사진 ${n+1} 크게 보기">
                <img src="${r(v(a))}" alt="웨딩 사진 ${n+1}" loading="lazy" />
              </button>
            `).join("")}
      </div>
      <div class="lightbox" id="gallery-lightbox" aria-hidden="true">
        <button class="icon-button lightbox-close" type="button" aria-label="닫기">×</button>
        <button class="icon-button lightbox-prev" type="button" aria-label="이전 사진">‹</button>
        <img class="lightbox-image" alt="" />
        <button class="icon-button lightbox-next" type="button" aria-label="다음 사진">›</button>
        <p class="lightbox-count"></p>
      </div>
    </section>
  `}function de(e){const t=(e.gallery?.images||[]).map(v),a=document.querySelector("#gallery-lightbox");if(!t.length||!a)return;const n=a.querySelector(".lightbox-image"),o=a.querySelector(".lightbox-count"),s=a.querySelector(".lightbox-close"),u=a.querySelector(".lightbox-prev"),d=a.querySelector(".lightbox-next");let i=0,p=0;const l=c=>{i=(c+t.length)%t.length,n.src=t[i],n.alt=`웨딩 사진 ${i+1}`,o.textContent=`${i+1} / ${t.length}`},g=c=>{l(c),a.setAttribute("aria-hidden","false"),a.classList.add("is-open"),document.body.classList.add("is-locked")},b=()=>{a.setAttribute("aria-hidden","true"),a.classList.remove("is-open"),document.body.classList.remove("is-locked"),n.removeAttribute("src")};document.querySelectorAll(".gallery-thumb").forEach(c=>{c.addEventListener("click",()=>g(Number(c.dataset.galleryIndex)))}),s.addEventListener("click",b),u.addEventListener("click",()=>l(i-1)),d.addEventListener("click",()=>l(i+1)),a.addEventListener("click",c=>{c.target===a&&b()}),a.addEventListener("touchstart",c=>{p=c.changedTouches[0].clientX},{passive:!0}),a.addEventListener("touchend",c=>{const h=c.changedTouches[0].clientX-p;Math.abs(h)<40||l(h>0?i-1:i+1)},{passive:!0}),window.addEventListener("keydown",c=>{a.classList.contains("is-open")&&(c.key==="Escape"&&b(),c.key==="ArrowLeft"&&l(i-1),c.key==="ArrowRight"&&l(i+1))})}function ue(e){const t=e.timeline?.items||[];return!E(e.timeline)||t.length===0?"":`
    <section class="wedding-section alt timeline-section" id="timeline">
      ${y("Our Story","우리의 시간")}
      <div class="timeline-list">
        ${t.map(a=>`
              <article class="timeline-item reveal">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <time>${r(a.date)}</time>
                  <h3>${r(a.title)}</h3>
                  <p>${S(a.desc)}</p>
                  ${a.image?`<img src="${r(v(a.image))}" alt="" loading="lazy" />`:""}
                </div>
              </article>
            `).join("")}
      </div>
    </section>
  `}function me(e){const t=e.notices||[];return t.length===0?"":`
    <section class="wedding-section notice-section" id="notice">
      ${y("Notice","안내사항")}
      <div class="notice-grid">
        ${t.map(a=>`
              <article class="notice-card reveal">
                <span aria-hidden="true">${r(a.icon||"")}</span>
                <h3>${r(a.title)}</h3>
                <p>${S(a.desc)}</p>
              </article>
            `).join("")}
      </div>
    </section>
  `}function q(e,t){return t?`
    <li>
      <strong>${r(e)}</strong>
      <span>${S(t)}</span>
    </li>
  `:""}function pe(e){const t=e.wedding.venue,a=J(t),n=!!e.meta?.kakaoJsKey;return`
    <section class="wedding-section alt location-section" id="location">
      ${y("Location","오시는 길")}
      <div class="location-card reveal">
        <h3>${r(t.name)}</h3>
        <p>${r(t.address)}</p>
        ${t.tel?`<a class="venue-tel" href="tel:${r(t.tel)}">${r(t.tel)}</a>`:""}
        <button class="text-button" type="button" id="copy-address">주소 복사</button>
      </div>
      ${n?'<div class="map-box reveal" id="kakao-map" aria-label="예식장 지도"></div>':`<div class="map-fallback reveal">
              <strong>${r(t.name)}</strong>
              <span>${r(t.address)}</span>
            </div>`}
      <nav class="nav-buttons reveal" aria-label="길찾기">
        <a class="pill-button" href="${r(a.naver)}" target="_blank" rel="noreferrer">네이버지도</a>
        <a class="pill-button" href="${r(a.kakao)}" target="_blank" rel="noreferrer">카카오맵</a>
        <button class="pill-button" type="button" id="open-tmap" data-href="${r(a.tmap)}" data-fallback="${r(a.tmapFallback)}">티맵</button>
      </nav>
      <ul class="transport-list reveal">
        ${q("지하철",e.transport?.subway)}
        ${q("버스",e.transport?.bus)}
        ${q("자차",e.transport?.car)}
        ${q("셔틀",e.transport?.shuttle)}
      </ul>
    </section>
  `}function ge(e){return new Promise((t,a)=>{const n=document.querySelector(`script[src="${e}"]`);if(n){if(n.dataset.loaded==="true"){t();return}n.addEventListener("load",t,{once:!0}),n.addEventListener("error",a,{once:!0});return}const o=document.createElement("script");o.src=e,o.async=!0,o.addEventListener("load",()=>{o.dataset.loaded="true",t()},{once:!0}),o.addEventListener("error",a,{once:!0}),document.head.append(o)})}function be(e,t){const a=e.wedding.venue,n=document.querySelector("#copy-address"),o=document.querySelector("#open-tmap");if(n?.addEventListener("click",async()=>{await t.copyText(a.address,"주소가 복사되었습니다")}),o?.addEventListener("click",()=>{const u=o.dataset.fallback;window.location.href=o.dataset.href,window.setTimeout(()=>{document.hidden||window.open(u,"_blank","noopener,noreferrer")},900)}),!e.meta?.kakaoJsKey||!document.querySelector("#kakao-map"))return;const s=`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(e.meta.kakaoJsKey)}&autoload=false`;ge(s).then(()=>{window.kakao.maps.load(()=>{const u=document.querySelector("#kakao-map"),d=new window.kakao.maps.LatLng(a.lat,a.lng),i=new window.kakao.maps.Map(u,{center:d,level:3});new window.kakao.maps.Marker({position:d,map:i})})}).catch(()=>t.showToast("지도를 불러오지 못했습니다"))}const R="mobileWedding:rsvp-submitted";function he(e){return!E(e.rsvp)||!I(e)?"":`
    <section class="wedding-section alt rsvp-section" id="rsvp">
      ${y("RSVP","참석 여부")}
      <div class="rsvp-box reveal">
        <p>참석 여부를 전해주시면 정성껏 준비하겠습니다.</p>
        <button class="pill-button primary" id="rsvp-open" type="button">참석 의사 전달하기</button>
      </div>
    </section>
  `}function ye(e){return`
    <form class="form-grid" id="rsvp-form">
      <fieldset class="form-field">
        <legend>구분</legend>
        <div class="radio-group">
          <label><input type="radio" name="side" value="groom" required /> 신랑측</label>
          <label><input type="radio" name="side" value="bride" required /> 신부측</label>
        </div>
      </fieldset>
      <label class="form-field">
        성함
        <input type="text" name="name" autocomplete="name" required maxlength="30" />
      </label>
      <label class="form-field">
        동행 인원
        <input type="number" name="companions" required min="0" max="20" value="0" inputmode="numeric" />
      </label>
      ${e.rsvp?.mealOption?`<fieldset class="form-field">
              <legend>식사 여부</legend>
              <div class="radio-group">
                <label><input type="radio" name="meal" value="yes" required /> 식사 예정</label>
                <label><input type="radio" name="meal" value="no" required /> 식사 안 함</label>
              </div>
            </fieldset>`:""}
      ${e.rsvp?.busOption?`<fieldset class="form-field">
              <legend>버스 이용</legend>
              <div class="radio-group">
                <label><input type="radio" name="bus" value="yes" /> 이용</label>
                <label><input type="radio" name="bus" value="no" /> 이용 안 함</label>
              </div>
            </fieldset>`:""}
      <label class="checkbox-row">
        <input type="checkbox" name="privacy" required />
        개인정보 수집 및 이용에 동의합니다.
      </label>
      <div class="submit-row">
        <button class="pill-button primary" type="submit">제출하기</button>
      </div>
    </form>
  `}function ve(e,t){const a=document.querySelector("#rsvp-open");if(!a)return;const n=()=>{a.textContent="참석 의사 전달 완료",a.disabled=!0};if(localStorage.getItem(R)){n();return}a.addEventListener("click",()=>{t.openSheet("참석 여부",ye(e),(o,s)=>{const u=o.querySelector("#rsvp-form");u.addEventListener("submit",async d=>{d.preventDefault();const i=u.querySelector('button[type="submit"]');i.disabled=!0;try{const p=new FormData(u),l=await t.getFirebase();await l.addDoc(l.collection(l.db,"rsvp"),{side:p.get("side"),name:String(p.get("name")).trim(),companions:Number(p.get("companions")||0),meal:p.get("meal")||null,bus:p.get("bus")||null,privacyAgreed:p.get("privacy")==="on",createdAt:l.serverTimestamp()}),localStorage.setItem(R,"1"),n(),s(),t.showToast("참석 의사가 전달되었습니다")}catch{i.disabled=!1,t.showToast("제출에 실패했습니다")}})})})}function K(e,t,a){return t?.length?`
    <article class="account-group reveal">
      <button class="account-trigger" type="button" aria-expanded="false">
        <span>${r(e)}</span>
        <i aria-hidden="true"></i>
      </button>
      <div class="account-panel" hidden>
        ${t.map((n,o)=>`
              <div class="account-row">
                <div>
                  <strong>${r(n.bank)} ${r(n.number)}</strong>
                  <span>예금주 ${r(n.holder)}</span>
                </div>
                <button class="text-button account-copy" type="button" data-number="${r(n.number)}">복사</button>
                ${n.kakaopayLink?`<a class="text-button pay-button" href="${r(n.kakaopayLink)}" target="_blank" rel="noreferrer">Pay</a>`:""}
              </div>
            `).join("")}
      </div>
    </article>
  `:""}function fe(e){if(!E(e.accounts))return"";const t=K("신랑측 계좌번호",e.accounts.groom),a=K("신부측 계좌번호",e.accounts.bride);return!t&&!a?"":`
    <section class="wedding-section account-section" id="account">
      ${y("Account","마음 전하실 곳")}
      <div class="account-list">
        ${t}
        ${a}
      </div>
    </section>
  `}function we(e){document.querySelectorAll(".account-trigger").forEach(t=>{t.addEventListener("click",()=>{const a=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",String(!a)),t.nextElementSibling.hidden=a})}),document.querySelectorAll(".account-copy").forEach(t=>{t.addEventListener("click",async()=>{await e.copyText(t.dataset.number,"계좌번호가 복사되었습니다")})})}const T=5;function $e(e){return!E(e.guestbook)||!I(e)?"":`
    <section class="wedding-section guestbook-section" id="guestbook">
      ${y("Guestbook","방명록")}
      <div class="guestbook-list reveal" id="guestbook-list"></div>
      <button class="text-button guestbook-more" id="guestbook-more" type="button" hidden>더보기</button>
      <button class="pill-button primary" id="guestbook-open" type="button">방명록 작성하기</button>
    </section>
  `}function ke(){return`
    <form class="form-grid" id="guestbook-form">
      <label class="form-field">
        성함
        <input type="text" name="name" required maxlength="20" autocomplete="name" />
      </label>
      <label class="form-field">
        삭제용 비밀번호 4자리
        <input type="password" name="password" required minlength="4" maxlength="4" pattern="[0-9]{4}" inputmode="numeric" />
      </label>
      <label class="form-field">
        내용
        <textarea name="message" required maxlength="200"></textarea>
      </label>
      <div class="submit-row">
        <button class="pill-button primary" type="submit">등록하기</button>
      </div>
    </form>
  `}function Se(e){return`
    <form class="form-grid" id="guestbook-delete-form" data-id="${r(e)}">
      <label class="form-field">
        삭제용 비밀번호
        <input type="password" name="password" required minlength="4" maxlength="4" pattern="[0-9]{4}" inputmode="numeric" />
      </label>
      <div class="submit-row">
        <button class="pill-button primary" type="submit">삭제하기</button>
      </div>
    </form>
  `}function Ee(e){if(!e)return"";const t=e.toDate?e.toDate():new Date(e);return new Intl.DateTimeFormat("ko-KR",{month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(t)}function W(e,t,a){const n=document.querySelector("#guestbook-list"),o=document.querySelector("#guestbook-more");if(n.innerHTML="",e.length===0){const s=document.createElement("p");s.className="guestbook-empty",s.textContent="아직 남겨진 메시지가 없습니다.",n.append(s)}e.slice(0,t).forEach(s=>{const u=document.createElement("article");u.className="guestbook-card";const d=document.createElement("div"),i=document.createElement("strong"),p=document.createElement("time");D(i,s.name),D(p,Ee(s.createdAt)),d.append(i,p);const l=document.createElement("p");D(l,s.message);const g=document.createElement("button");g.className="text-button",g.type="button",g.textContent="삭제",g.addEventListener("click",()=>a.openDelete(s.id)),u.append(d,l,g),n.append(u)}),o.hidden=e.length<=t}function Le(e,t){const a=document.querySelector("#guestbook-open"),n=document.querySelector("#guestbook-more");if(!a)return;let o=[],s=T;const u=async()=>{try{const i=await t.getFirebase();o=(await i.getDocs(i.query(i.collection(i.db,"guestbook"),i.orderBy("createdAt","desc"),i.limit(50)))).docs.map(l=>({id:l.id,...l.data()})),W(o,s,{openDelete:l=>d(l)})}catch{t.showToast("방명록을 불러오지 못했습니다")}},d=i=>{const p=o.find(l=>l.id===i);p&&t.openSheet("방명록 삭제",Se(i),(l,g)=>{const b=l.querySelector("#guestbook-delete-form");b.addEventListener("submit",async c=>{c.preventDefault();const h=new FormData(b).get("password");if(await M(String(h))!==p.passwordHash){t.showToast("비밀번호가 일치하지 않습니다");return}try{const w=await t.getFirebase();await w.deleteDoc(w.doc(w.db,"guestbook",i)),g(),t.showToast("방명록이 삭제되었습니다"),await u()}catch{t.showToast("삭제에 실패했습니다")}})})};a.addEventListener("click",()=>{t.openSheet("방명록 작성",ke(),(i,p)=>{const l=i.querySelector("#guestbook-form");l.addEventListener("submit",async g=>{g.preventDefault();const b=l.querySelector('button[type="submit"]');b.disabled=!0;try{const c=new FormData(l),h=await t.getFirebase();await h.addDoc(h.collection(h.db,"guestbook"),{name:String(c.get("name")).trim(),passwordHash:await M(String(c.get("password"))),message:String(c.get("message")).trim(),createdAt:h.serverTimestamp()}),p(),t.showToast("방명록이 등록되었습니다"),s=T,await u()}catch{b.disabled=!1,t.showToast("등록에 실패했습니다")}})})}),n?.addEventListener("click",()=>{s+=T,W(o,s,{openDelete:i=>d(i)})}),u()}function qe(e){return new Promise((t,a)=>{const n=document.querySelector(`script[src="${e}"]`);if(n){if(n.dataset.loaded==="true"){t();return}n.addEventListener("load",t,{once:!0}),n.addEventListener("error",a,{once:!0});return}const o=document.createElement("script");o.src=e,o.async=!0,o.addEventListener("load",()=>{o.dataset.loaded="true",t()},{once:!0}),o.addEventListener("error",a,{once:!0}),document.head.append(o)})}function xe(e){const t=f(e.groom),a=f(e.bride);return`
    <footer class="footer-section">
      <div class="footer-actions reveal">
        <button class="pill-button kakao-share" id="kakao-share" type="button">카카오톡 공유</button>
        <button class="pill-button" id="copy-invitation-url" type="button">청첩장 주소 복사</button>
      </div>
      <p>Copyright ${new Date(e.wedding.date).getFullYear()}. ${r(t)} &amp; ${r(a)} All rights reserved.</p>
    </footer>
  `}async function _(e,t){const a=window.location.href;if(navigator.share)try{await navigator.share({title:e.meta.title,text:e.meta.description,url:a});return}catch(n){if(n.name==="AbortError")return}await t.copyText(a,"청첩장 주소가 복사되었습니다")}function De(e,t){const a=document.querySelector("#kakao-share");document.querySelector("#copy-invitation-url")?.addEventListener("click",async()=>{await t.copyText(window.location.href,"청첩장 주소가 복사되었습니다")}),a?.addEventListener("click",async()=>{if(!e.meta?.kakaoJsKey){await _(e,t);return}try{await qe("https://developers.kakao.com/sdk/js/kakao.js"),window.Kakao.isInitialized()||window.Kakao.init(e.meta.kakaoJsKey),window.Kakao.Share.sendDefault({objectType:"feed",content:{title:e.meta.title,description:e.meta.description,imageUrl:new URL(v(e.meta.ogImage),window.location.origin).href,link:{mobileWebUrl:window.location.href,webUrl:window.location.href}},buttons:[{title:"청첩장 보기",link:{mobileWebUrl:window.location.href,webUrl:window.location.href}}]})}catch{await _(e,t)}})}const Te=document.querySelector("#app"),k=document.querySelector("#modal-root"),Ae=document.querySelector("#toast-root");let A;function je(){document.title=m.meta.title;const e={description:m.meta.description,"og:title":m.meta.title,"og:description":m.meta.description,"og:image":new URL(v(m.meta.ogImage),window.location.origin).href};Object.entries(e).forEach(([t,a])=>{const n=t.startsWith("og:")?`meta[property="${t}"]`:`meta[name="${t}"]`;document.querySelector(n)?.setAttribute("content",a)})}function j(e){const t=document.createElement("div");t.className="toast",t.textContent=e,Ae.replaceChildren(t),window.setTimeout(()=>t.remove(),2600)}function C(){k.querySelector(".modal-layer")?.classList.remove("is-open"),document.body.classList.remove("is-locked"),window.setTimeout(()=>k.replaceChildren(),260)}function Ce(e,t,a){k.innerHTML=`
    <div class="modal-layer" role="dialog" aria-modal="true" aria-labelledby="sheet-title">
      <div class="bottom-sheet">
        <div class="sheet-header">
          <h3 id="sheet-title">${e}</h3>
          <button class="icon-button" type="button" data-close-sheet aria-label="닫기">×</button>
        </div>
        <div class="sheet-body">${t}</div>
      </div>
    </div>
  `;const n=k.querySelector(".modal-layer"),o=k.querySelector(".sheet-body");document.body.classList.add("is-locked"),requestAnimationFrame(()=>n.classList.add("is-open")),n.addEventListener("click",s=>{(s.target===n||s.target.closest("[data-close-sheet]"))&&C()}),a?.(o,C)}async function Ie(){if(!I(m))throw new Error("Firebase is not configured.");return A||(A=Promise.all([P(()=>import("./index.esm-GYt-kKFj.js"),__vite__mapDeps([0,1])),P(()=>import("./index.esm-MqUOEl17.js"),__vite__mapDeps([2,1]))]).then(([e,t])=>{const a=e.initializeApp(m.firebase);return{...t,app:a,db:t.getFirestore(a)}})),A}async function Fe(e,t){try{await V(e),j(t)}catch{j("복사에 실패했습니다")}}function Ne(){const e=document.querySelectorAll(".reveal");if(!("IntersectionObserver"in window)){e.forEach(a=>a.classList.add("is-visible"));return}const t=new IntersectionObserver(a=>{a.forEach(n=>{n.isIntersecting&&(n.target.classList.add("is-visible"),t.unobserve(n.target))})},{threshold:.16});e.forEach(a=>t.observe(a))}function Pe(){window.addEventListener("keydown",e=>{e.key==="Escape"&&k.children.length&&C()})}const $={openSheet:Ce,showToast:j,getFirebase:Ie,copyText:Fe};je();Te.innerHTML=[X(m),Q(m),te(m),ae(m),se(m),ce(m),ue(m),me(m),pe(m),he(m),fe(m),$e(m),xe(m)].join("");Y(m,$);ee(m,$);ne();le();de(m);be(m,$);ve(m,$);we($);Le(m,$);De(m,$);Ne();Pe();
