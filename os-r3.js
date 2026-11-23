(function(){
function $(s){return document.querySelector(s)}function $$(s){return [].slice.call(document.querySelectorAll(s))}
function r3(){
 var h=document.documentElement,p=location.pathname;
 if(/\/order\/basket/.test(p))h.classList.add('os-p-basket');
 if(/\/member\/(join|agreement)/.test(p))h.classList.add('os-p-member');
 if(/\/board\//.test(p))h.classList.add('os-p-board');
 if(/\/shopinfo\/guide/.test(p))h.classList.add('os-p-guide');
 /* 빈 장바구니 */
 var em=$('#contents .xans-order-empty');
 if(em){
  if(em&&!em.classList.contains('displaynone')){h.classList.add('os-cart-empty');
  if(!em.querySelector('.os-empty-t')){em.insertAdjacentHTML('beforeend','<span class="os-empty-ico"><svg viewBox="0 0 24 24" fill="none" stroke="#2FD36B" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l-1 12.2a1.6 1.6 0 0 1-1.6 1.5H8.6A1.6 1.6 0 0 1 7 19.2L6 7z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg></span><strong class="os-empty-t">장바구니가 비어 있어요</strong><span class="os-empty-d">월 이용권을 담거나 30일 무료 체험부터 시작해 보세요.</span><span class="os-empty-b"><a class="p" href="/#os-start">이용권 보기</a><a class="s" href="/trial.html">30일 무료 체험</a></span><span class="os-empty-n"><span>결제 후 이메일로 키 발송</span><span>키 입력 전 7일 안 전액 환불</span><span>언제든 해지</span></span>');
   em.insertBefore(em.querySelector('.os-empty-ico'),em.firstChild)}}}
 $$('#contents .ec-base-box.typeThin .agree, #contents .ec-base-box.typeThin').forEach(function(e){if(e.classList.contains('agree'))e.style.setProperty('background-color','transparent','important')});
 if(/\/board\//.test(p)&&/(board_no=6|\/6\/)/.test(location.href)){var bc=$('#contents .path li:last-child strong');if(bc)bc.textContent='문의'}
 /* 푸터: 비어 있는 CS운영시간 숨김 */
 $$('#footer .bt_cscenter [data-ez-item]').forEach(function(e){var v=e.querySelector('[data-ez-role="value"]');var t=e.textContent.replace(/\s+/g,'');if(/CS운영시간/.test(t)&&(!v||!v.textContent.trim()))e.classList.add('os-hide')});
 $$('#footer .bt_cscenter strong, #footer .bt_cscenter div').forEach(function(e){if(e.children.length<3&&e.textContent.trim()==='CS운영시간'){var n=e.nextElementSibling;if(!n||!n.textContent.trim())e.classList.add('os-hide')}});
 /* 로그인 문구 */
 var lu=$('#contents .login__util');if(lu&&lu.children[1]&&/다양하고/.test(lu.children[1].textContent))lu.children[1].innerHTML='가입하면 주문 내역과 라이선스 키를<br>한곳에서 확인할 수 있어요.';
 /* 아이디/비번 찾기 안내 */
 var fb=$('#contents .xans-member-findid, #contents .xans-member-findpasswd');
 if(fb&&!$('#contents .os-findnote')){var n=document.createElement('p');n.className='os-findnote';n.textContent='가입할 때 입력한 이름과 이메일(또는 휴대폰 번호)을 입력해 주세요.';fb.insertBefore(n,fb.firstChild)}
 /* 문의 게시판 */
 if(/\/board\//.test(p)&&/(board_no=6|\/6\/)/.test(location.href)&&!/write|read/.test(p)){
  var ta=$('#contents .titleArea');if(ta&&!$('#contents .os-qa-head')){var hh=ta.querySelector('h2');if(hh)hh.textContent='문의';
   var d=document.createElement('div');d.className='os-qa-head';d.innerHTML='<p>설치, 라이선스 키, 결제처럼 궁금한 점을 남겨 주시면 확인 후 답변드려요.<br>메일 문의: <a href="mailto:help@1053studio.co.kr">help@1053studio.co.kr</a></p><a class="b" href="/board/free/write.html?board_no=6">문의 남기기</a>';ta.parentNode.insertBefore(d,ta.nextSibling)}
  var rows=$$('#contents .ec-base-table tbody tr').filter(function(r){return !r.classList.contains('displaynone')&&r.offsetParent});
  var msg=$('#contents .ec-base-table .message');if(msg&&!msg.classList.contains('displaynone')&&msg.offsetParent){h.classList.add('os-board-empty');if(/검색결과/.test(msg.textContent))msg.textContent='아직 등록된 문의가 없어요.'}
 }
 /* 이용안내 */
 if(/\/shopinfo\/guide/.test(p)&&!$('#contents .os-gd')){var f=$('#contents .xans-mall-faq');var g=document.createElement('div');g.className='os-gd';
  g.innerHTML='<section><h3>구매 방법</h3><ol><li>월 이용권(월 7,900원, 정기결제)을 장바구니에 담거나 바로 구매하세요. 먼저 30일 무료 체험(카드 등록 없음)으로 써 볼 수도 있어요.</li><li>주문서에 키를 받을 <b>이메일 주소</b>를 정확히 입력하세요. 회원이 아니어도 주문할 수 있어요.</li><li>결제가 끝나면 그 이메일로 라이선스 키가 바로 발송돼요. 다음 달부터는 결제될 때마다 같은 키의 기간이 30일씩 자동으로 늘어나요.</li><li>프리미어 프로에서 오쓸모션을 열고 키를 입력하면 바로 쓸 수 있어요.</li></ol></section>'
  +'<section><h3>라이선스 키 사용</h3><ul><li>실물 배송이 없는 디지털 상품이라 배송비가 없어요.</li><li>키 1개는 컴퓨터 1대에서 쓸 수 있어요.</li><li>이용 기간은 키를 <b>처음 입력한 날</b>부터 시작돼요. 키는 받은 날부터 1년 안에 입력해 주세요.</li><li>다른 컴퓨터로 옮기려면 플러그인에서 키를 해제한 뒤 새 컴퓨터에서 입력하세요. 해제는 30일에 2번까지 할 수 있어요.</li><li>다음 달부터는 정기결제가 될 때마다 같은 키의 기간이 30일씩 자동으로 늘어나요. 새 키를 넣을 필요 없어요.</li><li>매달 7,900원이 자동 결제되고, 마이쇼핑 &gt; 정기배송 관리에서 언제든 해지할 수 있어요. 해지하면 다음 결제부터 멈추고 위약금은 없어요.</li></ul></section>'
  +'<section><h3>환불</h3><ul><li>키를 입력하기 전이라면 받은 날부터 7일 안에 전액 환불받을 수 있어요.</li><li>키를 입력한 뒤에는 디지털 콘텐츠 특성상 청약철회가 제한돼요(전자상거래법 제17조 제2항 제5호). 대신 구매 전에 30일 무료 체험을 제공해요.</li><li>정기결제 다음 회차는 결제일부터 7일 안이고 늘어난 30일이 아직 시작되기 전이면 그 회차 금액을 환불받을 수 있어요.</li><li>설명과 다르거나 해결되지 않는 결함이 있으면 관련 법에 따라 환불해 드려요.</li></ul></section>'
  +'<section><h3>문의</h3><ul><li>이메일 <a href="mailto:help@1053studio.co.kr">help@1053studio.co.kr</a></li><li>전화 010-3020-1053</li><li>사이트의 <a href="/board/상품-qa/6/">문의</a> 게시판에 남겨 주셔도 돼요.</li></ul></section>';
  if(f)f.parentNode.insertBefore(g,f);else{var c=$('#contents');c&&c.appendChild(g)}}
}
if(document.readyState!=='loading')r3();document.addEventListener('DOMContentLoaded',r3);window.addEventListener('load',r3);setTimeout(r3,1200);
})();
(function(){function f(){[].slice.call(document.querySelectorAll('#contents .xans-myshop-orderhistorytab, #contents .xans-myshop-orderhistorytab ul, #contents .xans-myshop-orderhistorytab li')).forEach(function(e){e.style.setProperty('background-color','transparent','important');e.style.setProperty('border-color','transparent','important')});
[].slice.call(document.querySelectorAll('#contents .xans-myshop-orderhistoryhead fieldset')).forEach(function(e){e.style.setProperty('background-color','#1D1E22','important');e.style.setProperty('border-color','#2A2B31','important')})}
if(document.readyState!=='loading')f();document.addEventListener('DOMContentLoaded',f);window.addEventListener('load',f);setTimeout(f,1200)})();
(function(){function f(){[].slice.call(document.querySelectorAll('#contents .ec-base-tab.typeNav, #contents .ec-base-tab.typeNav ul, #contents .ec-base-tab.typeNav li, #contents .ec-base-help, #contents .ec-base-help *, #contents .detail_tab, #contents .detail_tab *')).forEach(function(e){e.style.removeProperty('background-color');e.style.removeProperty('border-color')})}
if(document.readyState!=='loading')f();document.addEventListener('DOMContentLoaded',f);window.addEventListener('load',f);setTimeout(f,1200);setTimeout(f,2500)})();
