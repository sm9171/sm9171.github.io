(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const l={meta:{title:"상민 ♥ 해민 결혼합니다",description:"2027년 3월 21일 일요일 오전 11시, W스퀘어 컨벤션 8층 채플홀",ogImage:"/images/og-thumbnail.jpg",kakaoShareImage:{src:"/images/kakao-share.jpg",width:900,height:1200},kakaoJsKey:"6a208bd09a02fc4942f6b299d5ae8867"},headings:{greeting:"저희 결혼합니다",couple:"신랑 & 신부",interview:"웨딩 인터뷰",calendar:"예식 안내",gallery:"갤러리",timeline:"우리의 시간",notice:"안내사항",location:"오시는 길",rsvp:"참석 여부 전달",account:"마음 전하실 곳",guestbook:"방명록"},wedding:{date:"2027-03-21T11:00:00+09:00",venue:{name:"W스퀘어 컨벤션 8층 채플홀",address:"경기도 성남시 분당구 판교역로226번길 16",lat:37.4005008,lng:127.1114555,tel:"031-703-0116"}},cover:{phrase:"our wedding day",image:"/images/cover.jpg"},groom:{name:"나상민",nickname:"상민",enName:"Sangmin",birth:"1991.07.01",phone:"010-1234-5678",photo:"/images/groom.jpg",father:{name:"나아버지",phone:"010-1111-1111",deceased:!1},mother:{name:"나어머니",phone:"010-2222-2222",deceased:!1},order:"장남",intro:["다정한 사람","요리를 좋아함","잘 웃는 편"]},bride:{name:"장해민",nickname:"해민",enName:"Haemin",birth:"1995.04.17",phone:"010-9876-5432",photo:"/images/bride.jpg",father:{name:"장아버지",phone:"010-3333-3333",deceased:!1},mother:{name:"장어머니",phone:"010-4444-4444",deceased:!1},order:"장녀",intro:["따뜻한 사람","꽃을 좋아함","기록을 사랑함"]},greeting:{quote:`어제보다 오늘 더 사랑하고
내일은 오늘보다 더 사랑하겠습니다.`,quoteFrom:"",message:`서로가 마주보며 다져온 사랑을
이제 함께 한 곳을 바라보며
걸어갈 수 있는 큰 사랑으로 키우고자 합니다.

귀한 걸음으로 축복해 주시면
더없는 기쁨으로 간직하겠습니다.`},interview:{enabled:!1,intro:`결혼을 앞두고 저희 두 사람의
진솔한 마음을 담아 보았습니다.`,items:[{q:"결혼을 앞둔 소감은?",a:"오래 기다린 날이라 설레고, 함께해 주실 분들을 떠올리면 마음이 따뜻해집니다."},{q:"서로의 어떤 점에 반했나요?",a:"평범한 하루를 특별하게 만드는 다정함과, 어려운 순간에도 곁을 지키는 단단함에 반했습니다."},{q:"앞으로 어떤 가정을 만들고 싶나요?",a:"작은 약속을 소중히 지키고, 서로의 편이 되어주는 편안한 집을 만들고 싶습니다."}]},gallery:{images:["/images/greeting.jpg","/images/wedding-1626.jpg","/images/wedding-1224.jpg","/images/wedding-0198.jpg","/images/wedding-0721.jpg","/images/wedding-0470.jpg","/images/wedding-0730.jpg","/images/wedding-0992.jpg","/images/wedding-1202.jpg","/images/wedding-1542.jpg","/images/wedding-1773.jpg"]},timeline:{enabled:!1,items:[{date:"2022.12.24",title:"첫 만남",desc:"차가운 겨울 저녁, 긴 대화가 자연스럽게 이어졌습니다."},{date:"2024.05.18",title:"함께한 여행",desc:"서로의 속도를 배워가며 더 가까워졌습니다."},{date:"2026.02.14",title:"프러포즈",desc:"가장 익숙한 산책길에서 가장 특별한 약속을 나누었습니다."}]},transport:{subway:`신분당선 · 경강선 판교역
1번 출구로 나온 후, 직진 도보 6분 거리 (SK주유소 뒷 건물)

야탑역 출발
330번 버스 탑승, 차그룹컨소시엄 정류장 하차 후, 도보 3분 (총 약 20분)`,bus:`390번
동안교 정류장 하차 (도보 2분)

4000번 (수원~성남)
한국무역정보통신 하차 (도보 2분)

101, 330, 350, 390번
차그룹컨소시엄 하차 (도보 3분)`,car:`경부고속도로
판교IC(톨게이트) 차출 후 좌회전 → 약 700m 직진, 사거리에서 우회전 (SK주유소 뒷 건물)

분당·수서간 도시고속도로
성남아트센터방면 지하차도 옆길 → 벌말사거리에서 우회전 → 삼성테크원 삼거리에서 판교역 방면 좌회전`,parking:`웨딩홀 건물 2층부터 6층까지 600대 수용
무제한 무료 주차 가능`},accounts:{enabled:!0,intro:`멀리서도 축하의 마음을
전하고 싶으신 분들을 위해
계좌번호를 안내드립니다.

소중한 축하를 보내주셔서 감사드리며,
따뜻한 마음에 깊이 감사드립니다.`,groom:[{holder:"나상민",bank:"신한은행",number:"110-123-456789",kakaopayLink:""},{holder:"나아버지",bank:"국민은행",number:"123456-00-123456",kakaopayLink:""}],bride:[{holder:"장해민",bank:"하나은행",number:"101-910123-45607",kakaopayLink:""},{holder:"장아버지",bank:"우리은행",number:"1002-123-456789",kakaopayLink:""}]},rsvp:{enabled:!0,intro:`소중한 시간을 내어 결혼식에
참석해주시는 모든 분들께 감사드립니다.
참석 여부를 회신해 주시면
정성껏 준비하겠습니다.`,mealOption:!0,busOption:!1},guestbook:{enabled:!0},bgm:{enabled:!0,src:"/audio/bgm.mp3",autoplay:!0},firebase:{apiKey:"",authDomain:"",projectId:""}},m=1440*60*1e3;function i(t=""){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function u(t=""){if(!t)return"";if(/^(https?:|data:|blob:|mailto:|tel:)/.test(t))return t;const e="/",a=e.endsWith("/")?e.slice(0,-1):e;return t.startsWith("/")?`${a}${t}`:`${e}${t}`}function g(t=""){return i(t).replaceAll(`
`,"<br />")}function p(t=""){return t.split(`

`).map(e=>{const[a,...o]=e.split(`
`);return[`<b>${i(a)}</b>`,...o.map(i)].join("<br />")}).join("<br /><br />")}function f(t){return t!==!1&&t?.enabled!==!1}function b(t){const e=t.firebase||{};return!!(e.apiKey&&e.authDomain&&e.projectId)}function h(t){return t?.nickname?t.nickname:t?.name?.length>1?t.name.slice(1):t?.name||""}function d(t){const e=String(t).match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);if(!e){const a=new Date(t);return{year:a.getFullYear(),month:a.getMonth()+1,day:a.getDate(),hour:a.getHours(),minute:a.getMinutes()}}return{year:Number(e[1]),month:Number(e[2]),day:Number(e[3]),hour:Number(e[4]),minute:Number(e[5])}}function y(t){const e=d(t),a=new Intl.DateTimeFormat("ko-KR",{weekday:"long",timeZone:"Asia/Seoul"}).format(new Date(`${String(e.year).padStart(4,"0")}-${String(e.month).padStart(2,"0")}-${String(e.day).padStart(2,"0")}T00:00:00+09:00`)),o=e.hour>12?`오후 ${e.hour-12}시`:e.hour===12?"오후 12시":`오전 ${e.hour}시`,n=e.minute?` ${e.minute}분`:"";return`${e.year}년 ${e.month}월 ${e.day}일 ${a} ${o}${n}`}function k(t){return`
    <div class="section-heading reveal">
      <h2>${i(t)}</h2>
    </div>
  `}function w(t){const e=encodeURIComponent(t.address),a=encodeURIComponent(t.name),o=encodeURIComponent(t.lat),n=encodeURIComponent(t.lng);return{naver:`https://map.naver.com/p/search/${e}`,kakao:`https://map.kakao.com/link/to/${a},${o},${n}`,tmap:`tmap://route?goalname=${a}&goaly=${o}&goalx=${n}`,tmapFallback:"https://www.tmap.co.kr/"}}async function $(t){if(navigator.clipboard?.writeText&&window.isSecureContext)try{await navigator.clipboard.writeText(String(t??""));return}catch{}const e=document.createElement("textarea");e.value=String(t??""),e.setAttribute("readonly",""),e.style.position="fixed",e.style.top="-9999px",document.body.append(e),e.focus(),e.select(),document.execCommand("copy"),e.remove()}async function S(t){const e=new TextEncoder().encode(t),a=await crypto.subtle.digest("SHA-256",e);return[...new Uint8Array(a)].map(o=>o.toString(16).padStart(2,"0")).join("")}function j(t,e){t.textContent=e??""}let c=0;function v(){document.body.classList.contains("is-locked")||(c=window.scrollY,document.body.style.top=`-${c}px`,document.body.classList.add("is-locked"))}function L(){document.body.classList.contains("is-locked")&&(document.body.classList.remove("is-locked"),document.body.style.top="",window.scrollTo({top:c,behavior:"instant"}))}export{u as a,$ as b,l as c,w as d,i as e,y as f,d as g,f as h,h as i,m as j,v as k,g as l,b as m,S as n,j as o,p as r,k as s,L as u};
