/* 심사 통과 후 구독 버전 문구 (아직 사이트에 안 넣음). 켜는 법: layout.html 에서 os-pg.js 줄을 이 파일 줄로 바꾸기 */
(function(){
var HT={'30일 무료로 써 보고, 마음에 들면 월 이용권으로 계속 쓰세요.':'<b style="color:#2FD36B;font-weight:600">30일 무료,</b> 마음에 들면 구독하세요.'};
var EQ={'정기결제':'월간 구독','오쓸모션 월 이용권':'오쓸모션 월간 플랜','매달 자동 결제 · 언제든 해지 · 위약금 없음':'30일 이용 · 매월 자동 결제','이용권 구매하기':'구독하기','체험은 카드 등록 없이 이메일로 시작해요':'카드 등록 없이 무료 체험을 시작하세요.','월 이용권 구매':'구독하기'};
function fix(n){var v=n.nodeValue;if(!v)return;var t=v.trim();if(!t)return;var p=n.parentElement;if(!p||/^(SCRIPT|STYLE|TEXTAREA|NOSCRIPT)$/.test(p.tagName))return;
 if(HT[t]&&p.childNodes.length===1){p.innerHTML=HT[t];return}
 if(EQ[t])n.nodeValue=v.replace(t,EQ[t])}
function scan(r){if(!r)return;if(r.nodeType===3){fix(r);return}var w=document.createTreeWalker(r,NodeFilter.SHOW_TEXT),n,a=[];while(n=w.nextNode())a.push(n);a.forEach(fix)}
function start(){scan(document.body);new MutationObserver(function(ms){ms.forEach(function(m){if(m.type==='characterData')scan(m.target);else [].forEach.call(m.addedNodes,scan)})}).observe(document.body,{childList:true,subtree:true,characterData:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
