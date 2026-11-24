/* 가격 카드: 스크롤하면 '모든 기능 포함' 항목이 하나씩 나오고, 다 나올 때까지 카드가 화면에 멈춰 있음 (PC). 모바일은 멈춤 없이 하나씩 나옴 */
(function(){
var S=document.getElementById('os-start');if(!S)return;var C=S.querySelector('.plan1');if(!C||C.getAttribute('data-pp'))return;C.setAttribute('data-pp','1');
var LT=C.querySelector('.p1-lt'),L=[].slice.call(C.querySelectorAll('.p1-list li'));if(!L.length)return;var PL=S.querySelector('.pln');
var IT=[LT].concat(L).filter(Boolean);
var st=document.createElement('style');
st.textContent='#os-landing .pp-track{position:relative}#os-landing .pp-stick{position:sticky}'+
'#os-landing .plan1 .pp-i{opacity:0;transform:translateY(22px);transition:opacity .5s ease,transform .7s cubic-bezier(.16,.84,.24,1)}'+
'#os-landing .plan1 .pp-i.on{opacity:1;transform:none}'+
'#os-landing .plan1 li.pp-i::before{transform:scale(.2);transition:transform .55s cubic-bezier(.34,1.7,.5,1) .08s,box-shadow .6s ease}'+
'#os-landing .plan1 li.pp-i.on::before{transform:scale(1)}'+
'#os-landing .plan1 li.pp-i.on.pp-new::before{box-shadow:0 0 0 6px rgba(47,211,107,.16)}'+
'#os-landing .pp-dots{display:flex;gap:6px;margin:0 0 18px}#os-landing .pp-dots i{width:18px;height:3px;border-radius:2px;background:var(--ln);transition:background .3s}#os-landing .pp-dots i.on{background:var(--ac)}'+
'@media (prefers-reduced-motion:reduce){#os-landing .plan1 .pp-i{opacity:1;transform:none;transition:none}}';
document.head.appendChild(st);
IT.forEach(function(e){e.classList.add('pp-i')});
var RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
if(RM){IT.forEach(function(e){e.classList.add('on')});return}
/* 멈춤 구조 */
var TR=document.createElement('div');TR.className='pp-track';var SK=document.createElement('div');SK.className='pp-stick';
C.parentNode.insertBefore(TR,C);TR.appendChild(SK);SK.appendChild(C);if(PL&&PL.parentNode===S)SK.appendChild(PL);
var STEP=110,HOLD=160,pin=false,last=-2;
function vh(){return window.__VH||innerHeight}
function hh(){var h=document.getElementById('header');if(!h)return 0;var r=h.getBoundingClientRect();return r.bottom>0&&r.top<=1?r.bottom:0}
function layout(){var ch=SK.offsetHeight,H=vh(),top=hh();
 pin=innerWidth>820&&ch+top+40<H;
 if(pin){var t=Math.max(top+20,Math.round(top+(H-top-ch)/2));SK.style.top=t+'px';TR.style.height=(ch+IT.length*STEP+HOLD)+'px'}
 else{SK.style.top='';TR.style.height=''}
 last=-2;tick()}
function tick(){var n;
 if(pin){var r=TR.getBoundingClientRect(),t=parseFloat(SK.style.top)||0,d=t-r.top;n=d<-120?-1:Math.floor(d/STEP)}
 else{n=-1;var H=vh();IT.forEach(function(e,i){if(e.getBoundingClientRect().top<H*.88)n=i})}
 if(n===last)return;var prev=last;last=n;
 IT.forEach(function(e,i){var on=i<=n;if(on!==e.classList.contains('on')){e.classList.toggle('on',on)}e.classList.toggle('pp-new',on&&i===n&&n>prev)})}
var raf=0;function q(){if(!raf)raf=requestAnimationFrame(function(){raf=0;tick()})}
addEventListener('scroll',q,{passive:true});addEventListener('resize',function(){layout()});addEventListener('load',layout);
layout();setTimeout(layout,800);setTimeout(layout,2500);
})();
