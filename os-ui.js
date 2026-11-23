(function(){
function $(s,c){return (c||document).querySelector(s)}function $$(s,c){return [].slice.call((c||document).querySelectorAll(s))}
function txt(e){return (e.textContent||'').replace(/\s+/g,' ').trim()}
function run(){
 /* 안정된 화면 높이 (모바일 주소창 때문에 흔들리지 않게) */
 if(!window.__VHW){var co=matchMedia('(pointer:coarse)').matches;window.__VHW=innerWidth;window.__VH=innerHeight;addEventListener('resize',function(){if(!co||Math.abs(innerWidth-window.__VHW)>40){window.__VHW=innerWidth;window.__VH=innerHeight}else if(innerHeight>window.__VH){window.__VH=innerHeight}},{passive:true})}
 document.documentElement.style.setProperty('--os-vh',(window.__VH/100)+'px');
 /* 모바일 사이드 메뉴 */
 var nav=$('#aside .navigation-menu');
 if(nav&&!$('#os-side')){var ul=document.createElement('ul');ul.id='os-side';
  ul.innerHTML='<li><a href="/#p1">기능 소개</a></li><li><a href="/#os-start">가격</a></li><li><a href="/about.html">1053studio</a></li><li><a href="/board/상품-qa/6/">문의</a></li><li class="os-cta-li"><a class="os-cta" href="/trial.html">30일 무료 체험</a></li>';
  nav.insertBefore(ul,nav.firstChild);
  $$('#os-side a').forEach(function(a){a.addEventListener('click',function(){var c=$('#aside .btnClose');if(c&&location.pathname==='/'&&a.getAttribute('href').indexOf('/#')===0)c.click()})})}
 $$('a').forEach(function(a){var h=decodeURIComponent(a.getAttribute('href')||'');if(/\(중분류\)/.test(h)||/\(중분류\)/.test(txt(a))||/cate_no=(29|30|31)(&|$)/.test(h)||/\/board\/(자유게시판|갤러리)\//.test(h)){var li=a.closest('li');(li||a).style.display='none'}});
 /* 모바일 헤더 장바구니 */
 var box=$('#top_nav_box');
 if(box&&!$('#os-mcart')){var cnt=$('.xans-layout-orderbasketcount .count, .bottom-nav .count');var n=cnt?txt(cnt).replace(/\D/g,''):'';
  var a=document.createElement('a');a.id='os-mcart';a.href='/order/basket.html';a.setAttribute('aria-label','장바구니');
  a.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M5 8h14l-1.2 12.2a1 1 0 0 1-1 .8H7.2a1 1 0 0 1-1-.8L5 8z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></svg><b data-n="'+(n||0)+'">'+(n&&n!=='0'?n:'')+'</b>';box.appendChild(a)}
 /* 장바구니: 배송 문구 · 안내 */
 if(/\/order\/basket/.test(location.pathname)){
  $$('#contents .prdBox .description li, #contents .info li').forEach(function(li){if(/^배송\s*:/.test(txt(li)))li.style.display='none'});
  $$('#contents .prdBox .description li, #contents .description .info li').forEach(function(li){if(/^-?$/.test(txt(li)))li.style.display='none'});
  $$('#contents .totalSummary li, #contents .summary li, #contents .ec-base-table tr, #contents dl, #contents .total li, #contents [class*=total] > div').forEach(function(r){var t=txt(r);if(/배송비/.test(t)&&t.length<30)r.style.display='none'});
  var g=$('#contents .xans-order-basketguide');var so=$('#contents .xans-order-selectorder');if(g&&!$('#contents .os-guide')){var d=document.createElement('div');d.className='os-guide';d.innerHTML='<h3>구매 안내</h3><ul><li>결제가 끝나면 주문할 때 입력한 이메일로 라이선스 키가 바로 발송돼요.</li><li>키 1개는 컴퓨터 1대에서 쓸 수 있고, 이용 기간은 키를 처음 입력한 날부터 시작돼요.</li><li>키를 입력하기 전이라면 받은 날부터 7일 안에 전액 환불받을 수 있어요.</li><li>구매 전에 30일 무료 체험으로 먼저 써 볼 수 있어요.</li></ul>';if(so&&so.parentNode)so.parentNode.insertBefore(d,so.nextSibling);else g.parentNode.insertBefore(d,g)}}
 /* 할인 없는 상품의 줄 그은 가격 숨김 */
 $$('#contents .description, #contents .prdBox, #contents .xans-record-').forEach(function(box){var s=$$('del, strike, .strike, [style*="line-through"]',box);s.forEach(function(el){var v=txt(el).replace(/\D/g,'');if(!v)return;var others=$$('li,span,strong,p,div',box).filter(function(o){return o!==el&&!o.contains(el)&&!el.contains(o)&&o.children.length===0&&txt(o).replace(/\D/g,'')===v});if(others.length)el.classList.add('os-same')})});
 $$('#contents .ec-base-paginate').forEach(function(p){if($$('ol li',p).length<=1)p.style.display='none'});
 /* 마이쇼핑 주문 단계 이름 (디지털 상품) */
 var map={'입금전':'결제 대기','배송준비중':'결제 완료','배송중':'처리 중','배송완료':'완료'};
 $$('#contents .state__order li').forEach(function(li){$$('*',li).forEach(function(e){if(e.children.length===0){var t=txt(e);if(map[t])e.textContent=map[t]}})});
 $$('#contents .state__cs li').forEach(function(li){if(/교환/.test(txt(li)))li.style.display='none'});
}
if(document.readyState!=='loading')run();else document.addEventListener('DOMContentLoaded',run);
addEventListener('load',run);setTimeout(run,1200);
})();
