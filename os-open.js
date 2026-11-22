/* 오쓸모션 인트로: 키프레임 → 로고 */
window.OSIntro=function(host,opt){
opt=opt||{};
var B=[0,286,493,702,929,1035,1346,1636],C=[[160,220],[390,232],[597,232],[814,222],[983,192],[1192,222],[1470,220]],VW=1636,VH=388,LY=0.62;
var NS='http://www.w3.org/2000/svg';
function cl(v,a,b){return v<a?a:v>b?b:v}function sg(t,a,b){return cl((t-a)/(b-a),0,1)}
function e3(u){return 1-Math.pow(1-u,3)}function e5(u){return 1-Math.pow(1-u,5)}function eio(u){return u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2}
function spr(u,k,w){if(u<=0)return 0;if(u>=2)return 1;return 1-Math.exp(-k*u)*Math.cos(w*u)}
var order=[3,2,4,1,5,0,6],rank=[];order.forEach(function(i,r){rank[i]=r});
var css=document.createElement('style');css.textContent=
'.osi{position:absolute;inset:0;transform-style:preserve-3d}'+
'.osi-l{position:absolute;top:0;height:100%;transform-style:preserve-3d;will-change:transform,opacity,filter}'+
'.osi-l svg{position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden}'+
'.osi-l svg.x{fill:#0F6B33}.osi-l svg.f{fill:#2FD36B}'+
'.osi-ln{position:absolute;left:-4%;right:-4%;height:1px;top:'+(LY*100)+'%;background:linear-gradient(90deg,transparent,rgba(47,211,107,.85) 12%,rgba(47,211,107,.85) 88%,transparent);transform-origin:50% 50%;will-change:transform,opacity}'+
'.osi-kf{position:absolute;top:'+(LY*100)+'%;width:clamp(10px,1.25vw,18px);aspect-ratio:1;margin:calc(clamp(10px,1.25vw,18px)/-2) 0 0 calc(clamp(10px,1.25vw,18px)/-2);background:#17181B;border:2px solid #2FD36B;box-sizing:border-box;will-change:transform,opacity;box-shadow:0 0 14px rgba(47,211,107,.55)}'+
'.osi-cv{position:absolute;left:0;top:0;width:100%;height:100%;overflow:visible;pointer-events:none}'+
'.osi-cv path{fill:none;stroke:rgba(47,211,107,.55);stroke-width:1.6;vector-effect:non-scaling-stroke}'+
'.osi-tc{position:absolute;left:0;top:calc('+(LY*100)+'% + clamp(14px,1.6vw,24px));font:500 clamp(10px,.8vw,12px)/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.14em;color:#6E6E73;will-change:opacity}'+
'.osi-tc b{color:#2FD36B;font-weight:500}'+
'.osi-sw{position:absolute;inset:-10% -2%;pointer-events:none;mix-blend-mode:overlay;will-change:transform,opacity;background:linear-gradient(105deg,transparent 40%,rgba(255,255,255,.95) 50%,transparent 60%);-webkit-mask:var(--m) center/100% 100% no-repeat;mask:var(--m) center/100% 100% no-repeat}';
document.head.appendChild(css);
var root=document.createElement('div');root.className='osi';host.appendChild(root);
var dref=opt.href||'#opLg';
var L=[];
for(var i=0;i<7;i++){var w=B[i+1]-B[i];var el=document.createElement('div');el.className='osi-l';el.style.left=(B[i]/VW*100)+'%';el.style.width=(w/VW*100)+'%';
 var h='';var DEP=5;for(var k=DEP;k>=0;k--){h+='<svg class="'+(k?'x':'f')+'" viewBox="'+B[i]+' 0 '+w+' '+VH+'" preserveAspectRatio="none" style="transform:translateZ('+(-k*0.0042)+'em)'+(k?';opacity:'+(1-k*.08):'')+'"><use href="'+dref+'"/></svg>'}
 el.innerHTML=h;el.style.transformOrigin='50% '+(C[i][1]/VH*100+12)+'%';root.appendChild(el);L.push(el)}
var ln=document.createElement('div');ln.className='osi-ln';root.appendChild(ln);
var cv=document.createElementNS(NS,'svg');cv.setAttribute('class','osi-cv');cv.setAttribute('viewBox','0 0 '+VW+' '+VH);cv.setAttribute('preserveAspectRatio','none');
var cvh='';for(i=0;i<6;i++){var x0=C[i][0],x1=C[i+1][0],y=LY*VH,up=(i%2?1:-1)*70;cvh+='<path d="M'+x0+' '+y+' C'+(x0+(x1-x0)*.55)+' '+y+' '+(x1-(x1-x0)*.55)+' '+(y+up)+' '+x1+' '+y+'"/>'}
cv.innerHTML=cvh;root.appendChild(cv);var CV=[].slice.call(cv.querySelectorAll('path'));CV.forEach(function(p){var l=p.getTotalLength?p.getTotalLength():600;p.__l=l;p.style.strokeDasharray=l;p.style.strokeDashoffset=l});
var KF=[];for(i=0;i<7;i++){var d=document.createElement('div');d.className='osi-kf';d.style.left=(C[i][0]/VW*100)+'%';root.appendChild(d);KF.push(d)}
var tc=document.createElement('div');tc.className='osi-tc';root.appendChild(tc);
var seed=[];for(i=0;i<7;i++){var s=Math.sin(i*91.7)*43758.5;s=s-Math.floor(s);var s2=Math.sin(i*12.9+4)*9137.3;s2=s2-Math.floor(s2);seed.push([s,s2])}
var lastTC='';
function fmt(f){var fr=f%30,s=Math.floor(f/30);return '00:00:'+(s<10?'0':'')+s+':'+(fr<10?'0':'')+fr}
/* t: ms since start, p: scroll 0..1 (exit), mx,my: pointer -1..1 */
function update(t,p,mx,my){
 p=p||0;mx=mx||0;my=my||0;
 var fs=parseFloat(getComputedStyle(host).width)||1000;root.style.fontSize=fs+'px';
 // line
 var la=e5(sg(t,150,900)),lo=1-e3(sg(t,1500,2200));
 ln.style.transform='scaleX('+la.toFixed(4)+')';ln.style.opacity=(lo*(1-sg(p,0,.02))).toFixed(3);
 // timecode
 var tco=e3(sg(t,100,500))*(1-e3(sg(t,3000,3500)));tc.style.opacity=tco.toFixed(3);
 var f=Math.min(90,Math.floor(sg(t,150,3150)*90));var s='<b>●</b> '+fmt(f);if(s!==lastTC){tc.innerHTML=s;lastTC=s}
 // keyframes
 KF.forEach(function(k,i){var st=500+rank[i]*70,u=sg(t,st,st+520),sc=spr(u*1.4,6,9);var mt=1180+rank[i]*90,m=sg(t,mt,mt+260);
  k.style.opacity=(sg(u,0,.05)*(1-m)).toFixed(3);k.style.transform='rotate('+(45+90*e3(m)).toFixed(1)+'deg) scale('+(sc*(1+1.6*e3(m))).toFixed(3)+')'});
 CV.forEach(function(c,i){var st=700+Math.min(rank[i],rank[i+1])*70,u=e3(sg(t,st,st+600)),o=1-e3(sg(t,1300,1900));c.style.strokeDashoffset=(c.__l*(1-u)).toFixed(1);c.style.opacity=o.toFixed(3)});
 // letters
 var ex=eio(sg(p,.01,.17));
 L.forEach(function(el,i){var st=1200+rank[i]*90,u=sg(t,st,st+1300);var a=spr(u*1.7,5.2,7.2);var rx=(1-a)*-82,ty=(1-a)*34,sc=.55+.45*a,bl=Math.max(0,1-e3(sg(u,0,.45)))*10,op=e3(sg(u,0,.18));
  // idle parallax by depth
  var dp=(i-3)/3;var px=mx*(6+Math.abs(dp)*6)*(1-ex),py=my*4*(1-ex);
  // exit fly-through
  var sd=seed[i],dir=(i-3)||(sd[0]-.5)*2,ez=ex*(900+sd[0]*900),exx=dir*ex*(24+sd[1]*30),exy=(sd[1]-.5)*ex*60,erx=(sd[0]-.5)*ex*120,ery=dir*ex*(30+sd[1]*40);
  el.style.transform='translate3d('+(px+exx).toFixed(2)+'%,'+(ty+py+exy).toFixed(2)+'%,'+ez.toFixed(1)+'px) rotateX('+(rx+erx-my*5*(1-ex)).toFixed(2)+'deg) rotateY('+(ery+mx*8*(1-ex)).toFixed(2)+'deg) scale('+sc.toFixed(4)+')';
  var eb=e3(sg(ex,.25,1))*8;var gw=sg(t,2550+rank[i]*0,3300),bx=Math.exp(-Math.pow((gw*9-i-.5)/1.1,2))*.45*(gw>0&&gw<1?1:0);var fl=[];if(bl+eb>.05)fl.push('blur('+(bl+eb).toFixed(2)+'px)');if(bx>.01)fl.push('brightness('+(1+bx).toFixed(3)+')');el.style.filter=fl.length?fl.join(' '):'none';el.style.opacity=(op*(1-e3(sg(ex,.45,1)))).toFixed(3)});
 return t>3600;
}
return {update:update,el:root};
};


(function(){var sec=document.getElementById('os-open');if(!sec)return;
function cl(v,a,b){return v<a?a:v>b?b:v}function seg(p,a,b){return cl((p-a)/(b-a),0,1)}function eo(t){return 1-Math.pow(1-t,3)}function eio(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}
function Q(i){return document.getElementById(i)}
var LG=Q('opLogo'),h='';
LG.innerHTML='';var INT=window.OSIntro(LG);var SC=document.getElementById('opSc'),T0=null,IDN=false;
var S1=Q('opS1'),S2=Q('opS2'),S3=Q('opS3'),S4=Q('opS4'),LW=Q('opLW'),H=Q('opH'),E=Q('opE');var RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
var txt='오쓸모션은 프리미어 프로를 위한 | 모션 패널이에요. | *키프레임 *대신 *클릭 *한 *번으로, | 효과도 자막도 효과음도 *한곳에서.';
var parts=txt.split(' '),wh='',acc=false;
parts.forEach(function(w){if(w==='|'){wh+='<br>';return}var a=false;if(w.charAt(0)==='*'){a=true;w=w.slice(1)}wh+='<span class="w'+(a?' a':'')+'">'+w+' </span>'});
Q('opSt').innerHTML=wh;var W=[].slice.call(Q('opSt').querySelectorAll('.w'));
var LST=[['즐겨찾기','','자주 쓰는 효과는','즐겨찾기에 모아 두고'],['내 프리셋','','직접 만든 모션은','내 프리셋으로 저장해 두고'],['콤보','','등장 · 유지 · 강조 · 퇴장을','콤보 하나로 한 번에'],['트랜지션',OSN('transition','32'),'클립과 클립 사이를','부드럽게 넘기는 트랜지션'],['등장·퇴장',OSN('inout','19'),'자연스럽게 나타나고','깔끔하게 사라지는 모션'],['강조',OSN('emphasis','11'),'보여 주고 싶은 순간을','눈에 확 띄게'],['확대·축소',OSN('zoom','4'),'천천히, 혹은 확','다가오는 확대 · 축소'],['반복',OSN('loop','8'),'반복되는 움직임으로','영상에 리듬을 더하고'],['예능·추천',OSN('variety','25'),'예능에서 자주 보던','골라 쓰기 좋은 추천 프리셋'],['자막',OSN('text','36'),'글자마다 따로 움직이는','자막 효과'],['자막 바',OSN('textbar','27'),'글자 길이에 딱 맞춰지는','자막 바'],['예능 자막',OSN('funtext','21'),'예능에서 자주 보던','예능 자막 스타일'],['이징 곡선','','딱딱한 키프레임을','부드러운 움직임으로'],['효과음',OSN('sfx','37'),'밋밋한 영상에 딱 맞는','무료 효과음'],['비트 싱크','','음악 박자에 맞춰','컷을 맞추는 비트 싱크'],['사운드 밸런스','','배경음악과 목소리를','클릭 한 번에 분리'],['무음 구간 제거','','지루한 무음 구간 편집도','한 번에 끝'],['자동 자막','','클릭 한 번이면','자막이 자동으로 생성'],['데드존 가이드','','SNS마다 다른 데드존도','가이드를 보며 바로 배치']];
var CY=Q('opCyl'),ih='';LST.forEach(function(x){ih+='<div class="op-it">'+x[0]+'</div>'});CY.innerHTML=ih;var IT=[].slice.call(CY.querySelectorAll('.op-it'));
var N=Q('opN'),D=Q('opD'),lastI=-1;
var PN=['키프레임 네 개 찍고 이징 잡고, 다음 클립에서 또 똑같이… 같은 걸 몇 번째 하는지 모르겠어요.','프리셋을 어디에 저장했더라. 찾는 시간이 만드는 시간보다 길어요.','자막 하나 넣을 때마다 바 크기 맞추고 등장 모션을 다시 만들어요.','효과음 폴더를 매번 뒤지고, 컷 타이밍에 맞추는 데 또 시간이 가요.'];
var G=Q('opG'),gh='';PN.forEach(function(t,i){gh+='<div class="op-c"><small>'+['편집자 최00','편집자 박00','편집자 김00','편집자 이00'][i]+'</small>'+t+'</div>'});G.innerHTML=gh;var C=[].slice.call(G.querySelectorAll('.op-c'));
var drag=0,vel=0,down=false,lx=0,mv=0,pid=null,mx=0,my=0,tmx=0,tmy=0,SHG=document.getElementById('opShine'),GL=Q('opGlow');addEventListener('pointermove',function(e){tmx=e.clientX/innerWidth*2-1;tmy=e.clientY/innerHeight*2-1},{passive:true});
S1.addEventListener('pointerdown',function(e){if(e.target.closest('a'))return;down=true;lx=e.clientX;mv=0;vel=0;pid=e.pointerId});
S1.addEventListener('pointermove',function(e){if(!down)return;var dx=e.clientX-lx;lx=e.clientX;mv+=Math.abs(dx);if(mv>3){try{S1.setPointerCapture(pid)}catch(_){}}drag+=dx*.45;vel=dx*.45});
['pointerup','pointercancel'].forEach(function(n){S1.addEventListener(n,function(){down=false})});
function frame(now){var r=sec.getBoundingClientRect(),vh=innerHeight;
if(r.bottom>-60&&r.top<vh+60){var p=cl(-r.top/(sec.offsetHeight-vh),0,1);
if(!down){drag+=vel;vel*=.93;drag*=.992}
mx+=(tmx-mx)*.06;my+=(tmy-my)*.06;if(T0===null&&(document.readyState==='complete'||now>3500))T0=RM?now-9000:now;var it=T0===null?0:now-T0;if(!IDN&&p>.02){IDN=true;if(it<3600){T0=now-3600;it=3600}}var fin=INT.update(it,p,mx+drag/40,my);LG.style.opacity=1;var gi=eo(cl((it-2200)/1400,0,1));if(GL)GL.style.opacity=(.9*gi).toFixed(3);if(SC)SC.style.opacity=(cl((it-3300)/600,0,1)*(1-cl(p/.025,0,1))).toFixed(3);var f2=eo(seg(p,.05,.21));LW.style.opacity=(1-eo(seg(p,.14,.22))).toFixed(3);LW.style.filter='none';LW.style.transform='translateY('+(-2*f2).toFixed(2)+'vh)';var o1=1-eo(seg(p,.04,.12));S1.style.opacity=p<.22?1:0;S1.style.pointerEvents=p<.16?'auto':'none';
[].slice.call(S1.querySelectorAll('.op-kick,.op-cta,.op-hint')).forEach(function(el,k){var u=eo(cl((it-2700-k*160)/700,0,1));el.style.opacity=(o1*u).toFixed(3);el.style.transform=(k<2?'translateY('+((1-u)*18).toFixed(1)+'px)':'translateX(-50%) translateY('+((1-u)*18).toFixed(1)+'px)')});
var ex=eo(seg(p,.38,.46));S2.style.opacity=(p>.12&&p<.48)?1:0;S2.style.transform='translateY('+(-50*ex).toFixed(1)+'px)';
W.forEach(function(w,i){var a=.16+i*(.15/W.length),t=eo(seg(p,a,a+.05)),o=t*(1-ex);w.style.opacity=o.toFixed(3);w.style.transform='translateY('+((1-t)*42).toFixed(1)+'px)';w.style.filter='blur('+((1-t)*10+ex*8).toFixed(1)+'px)'});
var o3=eo(seg(p,.47,.51))*(1-eo(seg(p,.7,.74)));S3.style.opacity=o3.toFixed(3);
var pos=(LST.length-1)*eio(seg(p,.5,.7)),R=cl(innerHeight*.5,220,420),st=13;
IT.forEach(function(el,i){var a=-(i-pos)*st,ab=Math.abs(a);var op=cl(1-ab/80,0,1);el.style.opacity=op.toFixed(3);el.style.transform='rotateX('+a.toFixed(2)+'deg) translateZ('+R.toFixed(0)+'px)';el.style.color=Math.abs(i-pos)<.5?'#2FD36B':'#F5F5F7'});
var ci=cl(Math.round(pos),0,LST.length-1);if(ci!==lastI){lastI=ci;N.textContent=LST[ci][1]||'';N.style.display=LST[ci][1]?'block':'none';D.innerHTML='<i>'+LST[ci][2]+'</i><i>'+LST[ci][3]+'</i>'}
var o4=eo(seg(p,.74,.78));S4.style.opacity=o4.toFixed(3);H.style.opacity=o4.toFixed(3);
C.forEach(function(c,i){var t=eo(seg(p,.78+i*.04,.84+i*.04));c.style.opacity=t.toFixed(3);c.style.transform='translateY('+((1-t)*40).toFixed(1)+'px)';c.style.filter='blur('+((1-t)*8).toFixed(1)+'px)'});
var te=eo(seg(p,.95,.99));E.style.opacity=te.toFixed(3);E.style.transform='translateY('+((1-te)*20).toFixed(1)+'px)'}else if(SC){SC.style.opacity=0}
requestAnimationFrame(frame)}
requestAnimationFrame(frame)})();
