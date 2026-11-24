/* PG 심사용: 정기결제 문구를 1개월 단건 결제로 바꿔 보여 줌. 원래 문구는 스킨·관리자에 그대로 있음 → 이 스크립트 한 줄만 빼면 원래대로 돌아감 */
(function(){
window.OS_PG=1;var H='__HIDE__';var HT={'30일 무료로 써 보고, 마음에 들면 월 이용권으로 계속 쓰세요.':'<b style="color:#2FD36B;font-weight:600">30일 무료,</b> 마음에 들면 이용권으로 계속 쓰세요.'};
var R=[
['eq','정기결제','1회 결제'],
['eq','월 정기결제','1개월 이용권 (1회 결제)'],
['eq','오쓸모션 월 이용권','오쓸모션 1개월 이용권'],
['eq','/ 월','/ 1개월'],
['eq','매달 자동 결제 · 언제든 해지 · 위약금 없음','30일 이용 · 자동 결제 없음'],
['eq','매달 자동 결제 · 언제든 해지 · 키 1개 = 컴퓨터 1대','1회 결제 · 30일 이용 · 키 1개 = 컴퓨터 1대'],
['eq','월 7,900원 · 매달 자동 결제 · 언제든 해지','7,900원 · 1개월(30일) 이용 · 자동 결제 없음'],
['eq','월 이용권 구매','1개월 이용권 구매'],
['eq','언제든 해지','자동 결제 없음'],
['eq','체험은 카드 등록 없이 이메일로 시작해요','카드 등록 없이 무료 체험을 시작하세요.'],
['pre','키는 첫 결제 때 한 번만 와요 · 다음 달부터','결제하면 이메일로 키가 바로 와요 · 키를 처음 입력한 날부터 30일 · 자동 결제 없음 · 키 입력 전 7일 안 전액 환불'],
['eq','첫 결제 때 키 발송 · 다음 달부터 같은 키 30일씩 자동 연장','결제 즉시 이메일로 키 발송 · 키 입력한 날부터 30일'],
['eq','마이쇼핑 > 정기배송 관리에서 언제든 해지','자동 결제 없이 한 번만 결제돼요'],
['eq','다음 달부터 같은 키가 30일씩 자동 연장돼요','키를 처음 입력한 날부터 30일 동안 쓸 수 있어요'],
['pre','첫 결제 후 1개월마다 7,900원이 자동 결제돼요.','7,900원을 한 번 결제하면 30일 동안 모든 기능을 쓸 수 있어요. 자동으로 다시 결제되지 않아요. 키는 결제 즉시 이메일로 오고, 키를 처음 입력한 날부터 30일이 시작돼요. 키 1개는 컴퓨터 1대에서 쓸 수 있어요(패널의 [이 컴퓨터 해제]로 30일에 2번까지 이전). 기간이 끝난 뒤 계속 쓰려면 이용권을 다시 구매하면 돼요.'],
['eq','라이선스 키 입력 후: 디지털 콘텐츠 특성상 해당 회차 환불 불가','라이선스 키 입력 후: 디지털 콘텐츠 특성상 환불 불가'],
['eq','정기결제는 언제든 해지할 수 있고, 해지하면 다음 결제부터 청구되지 않습니다.','1회 결제 상품이라 자동으로 다시 결제되지 않습니다.'],
['pre','정기결제: 첫 결제 후 1개월마다','1회 결제: 7,900원(부가세 포함)을 한 번 결제하면 30일 이용. 자동 결제 없음. 라이선스 키는 결제 즉시 주문 시 입력한 이메일로 발송됩니다.'],
['pre','해지: 마이쇼핑 > 정기배송 관리','자동 결제: 없음 (기간이 끝나면 다시 구매해서 이용)'],
['sub','+ 첫 결제 완료 즉시 주문 시 입력한 이메일로 라이선스 키 자동 발송, 다음 회차부터는 같은 키의 이용 기간 30일 자동 연장','+ 결제 완료 즉시 주문 시 입력한 이메일로 라이선스 키 자동 발송'],
['sub',' 정기결제 다음 회차: 결제일부터 7일 이내이고 늘어난 30일이 시작되기 전이면 그 회차 환불.',''],
['pre','상품이에요. 첫 결제 후 1개월마다','상품이에요. 7,900원(부가세 포함)을 한 번 결제하면 30일 동안 쓸 수 있고, 자동으로 다시 결제되지 않아요.'],
['pre','다음 결제 예정일과 금액은',H],
['pre',': [마이쇼핑 > 정기배송 관리]',H],
['pre','카드 한도 초과 등으로 자동 결제가 실패하면',H],
['pre',': 첫 결제 직후 이메일로 키 자동 발송',': 결제 직후 이메일로 키 자동 발송'],
['pre',': 월 정기결제(30일 단위)',': 1개월(30일) 이용권 · 1회 결제 · 라이선스 키 1개 = 컴퓨터 1대 · 키를 처음 입력한 날부터 기간 시작'],
['pre',': 매달 7,900원 자동 결제',H],
['sub','월 이용권(월 7,900원, 정기결제)','1개월 이용권(7,900원, 1회 결제)'],
['eq','다음 달 이용은 어떻게 되나요?',H],
['pre','월 이용권은 매달 자동으로 결제되고',H],
['pre','③ "이용권"이란 소프트웨어를','③ "이용권"이란 소프트웨어를 정해진 기간 동안 사용할 수 있는 권리를 말하며, 30일(1개월) 이용권을 1회 결제 방식으로 제공합니다.'],
['eq','제7조 (결제방법과 정기결제)','제7조 (결제방법)'],
['pre','② 이용권은 정기결제 상품입니다.','② 이용권은 1회 결제 상품입니다. 이용자는 이용 요금(7,900원, 부가가치세 포함)을 한 번 결제하며, 자동으로 다시 결제되지 않습니다.'],
['pre','③ 이용자는 언제든지 [마이쇼핑 > 정기배송 관리]','③ 이용 기간이 끝난 뒤 계속 이용하려면 이용권을 다시 구매해야 합니다.'],
['pre','④ 회사는 정기결제 금액을 올리거나','④ 회사가 이용 요금을 변경하더라도 이미 구매한 이용권에는 영향을 주지 않습니다.'],
['pre','⑤ 결제수단의 한도 초과 등으로 자동 결제가',H],
['pre','① 첫 결제가 완료되면 회사는','① 결제가 완료되면 회사는 주문 시 입력한 전자우편주소로 라이선스 키를 자동 발송합니다. 시스템 장애 등으로 발송이 지연되는 경우 회사는 지체 없이 그 사유를 알리고 재발송합니다.'],
['pre','③ 정기결제의 다음 회차 결제가 완료될 때마다','③ 이용 기간이 끝난 뒤 이용권을 다시 구매하면 그 구매에 대해 30일의 이용 기간이 제공됩니다.'],
['pre','⑤ 정기결제의 다음 회차 결제분은',H],
['sub',' 다음 달부터는 결제될 때마다 같은 키의 기간이 30일씩 자동으로 늘어나요.',''],
['pre','다음 달부터는 정기결제가 될 때마다',H],
['pre','매달 7,900원이 자동 결제되고','한 번 결제하면 30일 동안 쓸 수 있고, 자동으로 다시 결제되지 않아요.'],
['pre','정기결제 다음 회차는',H],
['pre','3. 결제수단을 등록하고 첫 결제를 해요.','3. 결제수단을 선택하고 결제해요. 한 번만 결제돼요.'],
['pre','5. 다음 달부터는 정기결제가',H],
['pre','2. 정기결제 다음 회차 결제분은',H],
['pre','6. 정기결제 해지는',H],
['sub','환불·해지 신청','환불 신청'],
['sub','월 이용권을 담거나','1개월 이용권을 담거나'],
['sub','오쓸모션 · 월 이용권 (1개월)','오쓸모션 · 1개월 이용권']
];
function hideFor(n){var p=n.parentElement;if(!p)return;var d=p.closest('details');if(d){d.style.display='none';return}var b=p.closest('li,p,tr,dl,dd,dt')||p;if(b.tagName==='DD'||b.tagName==='DT'){var dl=b.parentElement;if(dl&&dl.children.length<=2)b=dl}b.style.display='none';b.setAttribute('data-os-pg','h')}
function fix(n){var v=n.nodeValue;if(!v)return;var t=v.trim();if(!t)return;var p=n.parentElement;if(!p||/^(SCRIPT|STYLE|TEXTAREA|NOSCRIPT)$/.test(p.tagName))return;
 if(HT[t]&&p.childNodes.length===1){p.innerHTML=HT[t];return}
 for(var i=0;i<R.length;i++){var r=R[i];
  if(r[0]==='eq'&&t===r[1]){if(r[2]===H){hideFor(n);return}n.nodeValue=v.replace(t,r[2]);return}
  if(r[0]==='pre'&&t.indexOf(r[1])===0){if(r[2]===H){hideFor(n);return}n.nodeValue=v.replace(t,r[2]);return}
 }
 var nv=v;for(var j=0;j<R.length;j++){var q=R[j];if(q[0]==='sub'&&nv.indexOf(q[1])>-1&&!(q[2]&&nv.indexOf(q[2])>-1))nv=nv.split(q[1]).join(q[2])}
 if(nv!==v)n.nodeValue=nv}
function scan(root){if(!root)return;if(root.nodeType===3){fix(root);return}var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),n,a=[];while(n=w.nextNode())a.push(n);a.forEach(fix)}
function attrs(){[].forEach.call(document.querySelectorAll('[title*="정기"],[alt*="정기"]'),function(e){['title','alt'].forEach(function(k){var v=e.getAttribute(k);if(v&&v.indexOf('정기')>-1)e.setAttribute(k,v.split('정기결제').join('1회 결제'))})})}
var st=document.createElement('style');st.textContent='html.os-pg-w body{opacity:0!important}html.os-pg body{transition:opacity .15s}';(document.head||document.documentElement).appendChild(st);
var de=document.documentElement;de.classList.add('os-pg-w');
function reveal(){de.classList.remove('os-pg-w');de.classList.add('os-pg')}
setTimeout(reveal,1200);
function start(){scan(document.body);attrs();reveal();
 var q=[],tm=0;new MutationObserver(function(ms){ms.forEach(function(m){if(m.type==='characterData')q.push(m.target);else [].forEach.call(m.addedNodes,function(x){q.push(x)})});if(!tm)tm=setTimeout(function(){tm=0;var a=q;q=[];a.forEach(scan)},0)}).observe(document.body,{childList:true,subtree:true,characterData:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
