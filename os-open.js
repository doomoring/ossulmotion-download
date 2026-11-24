(function(){var sec=document.getElementById('os-open');if(!sec)return;
function cl(v,a,b){return v<a?a:v>b?b:v}function seg(p,a,b){return cl((p-a)/(b-a),0,1)}function eo(t){return 1-Math.pow(1-t,3)}function eio(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}
function Q(i){return document.getElementById(i)}
function spr(u,k,w){if(u<=0)return 0;if(u>=2)return 1;k=k||6;w=w||9;return 1-Math.exp(-k*u)*Math.cos(w*u)}
function lerp(a,b,u){return a+(b-a)*u}
var CDN='https://cdn.jsdelivr.net/gh/doomoring/ossulmotion-download@ae7e61b/';
var FL=[["o",22,257,231,238],["s",246,260,194,237],["s",435,261,192,236],["u",625,261,204,235],["l",829,189,107,308],["m",935,259,304,235],["o",1234,258,231,238],["t",1446,197,178,300],["i",1615,191,101,306],["o",1709,258,226,238],["n",1930,258,220,235]];
var SL=[["o",176,176,377,380],["s",533,177,310,375],["s",832,177,304,375],["m",1132,177,488,375],["o",1617,175,379,381]];
var KEEP=[0,1,2,3,4,5,6],DROP=[7,8,9,10];
var RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var css=[
'#os-landing .op-lg{position:relative;transform-style:preserve-3d;will-change:transform;cursor:pointer}',
'#os-landing .op-lg img{position:absolute;left:0;top:0;display:block;max-width:none;pointer-events:none;user-select:none;-webkit-user-drag:none;will-change:transform,opacity,filter;backface-visibility:hidden}',
'#os-landing .op-lg .op-gh{opacity:0}',
'#os-landing .op-lg .op-sh{position:absolute;pointer-events:none;opacity:0;background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,.45) 47%,rgba(255,255,255,.7) 50%,rgba(255,255,255,.45) 53%,transparent 70%);background-size:260% 100%;background-repeat:no-repeat;-webkit-mask-image:url('+CDN+'hm_logo_ossulmo_big.png);mask-image:url('+CDN+'hm_logo_ossulmo_big.png);-webkit-mask-size:100% 100%;mask-size:100% 100%;mix-blend-mode:overlay}',
'#os-landing .op-pt{position:absolute;left:0;top:0;width:10px;height:10px;margin:-5px 0 0 -5px;pointer-events:none;border-radius:50%}',
'#os-landing .op-pt.st{width:18px;height:18px;margin:-9px 0 0 -9px;border-radius:0;clip-path:polygon(50% 0,61% 39%,100% 50%,61% 61%,50% 100%,39% 61%,0 50%,39% 39%)}',
'#os-landing .op-pt.ln{width:4px;height:26px;margin:-13px 0 0 -2px;border-radius:2px}',
'#os-landing .op-vid{display:none!important}',
'html.os-op-hl #header .xans-layout-logotop img{opacity:var(--os-hl,1);transition:none}'
].join('');
var stEl=document.createElement('style');stEl.textContent=css;document.head.appendChild(stEl);
document.documentElement.classList.add('os-op-hl');
var LG=Q('opLogo');LG.className='op-lg';LG.setAttribute('aria-label','ossulmotion');LG.innerHTML='';LG.style.opacity=1;
var SP=[];
function mk(src,cls){var im=new Image();im.src=src;im.alt='';im.decoding='async';if(cls)im.className=cls;LG.appendChild(im);return im}
FL.forEach(function(L,i){var s={i:i,el:mk(CDN+'hm_lf'+i+'.webp'),gh:[mk(CDN+'hm_lf'+i+'.webp','op-gh'),mk(CDN+'hm_lf'+i+'.webp','op-gh')],L:L};var j=KEEP.indexOf(i);if(j>-1){s.j=j}SP.push(s)});
var SH=document.createElement('div');SH.className='op-sh';LG.appendChild(SH);
var GLOW=Q('opGlow');
var K=1,MOB=false,UW=2128,UH=308,SR=.937,G=1;
function layout(){var vw=innerWidth;MOB=vw<=700;
 if(MOB){UW=1215;UH=640;K=Math.min(vw*.86,520)/UW;G=(UW*.96)/1441}else{UW=2128;UH=308;K=Math.min(vw*.8,1180)/UW;G=(UW*.8)/1441}
 LG.style.width=(UW*K).toFixed(1)+'px';LG.style.height=(UH*K).toFixed(1)+'px';
 SP.forEach(function(s){var L=s.L,ux,uy;
  if(!MOB){ux=L[1]-22;uy=L[2]-189}else if(s.i<5){ux=L[1]-22+(1215-914)/2;uy=L[2]-189}else{ux=L[1]-935;uy=L[2]-189+330}
  s.bx=ux+L[3]/2;s.by=uy+L[4]/2;s.bw=L[3];s.bh=L[4];
  [s.el].concat(s.gh).forEach(function(im){im.style.width=(L[3]*K).toFixed(1)+'px';im.style.height=(L[4]*K).toFixed(1)+'px';im.style.left=((s.bx-L[3]/2)*K).toFixed(1)+'px';im.style.top=((s.by-L[4]/2)*K).toFixed(1)+'px'});
  if(s.j!==undefined){s.tx=UW/2+(L[1]+L[3]/2-743.5)*G;s.ty=UH/2+(L[2]+L[4]/2-343)*G}
 });
 var ow=1441*G,oh=306*G;OB={x:UW/2-ow/2,y:UH/2-oh/2,w:ow,h:oh};
 SH.style.left=(OB.x*K).toFixed(1)+'px';SH.style.top=(OB.y*K).toFixed(1)+'px';SH.style.width=(OB.w*K).toFixed(1)+'px';SH.style.height=(OB.h*K).toFixed(1)+'px';
}
var OB={x:0,y:0,w:1,h:1};
layout();addEventListener('resize',layout);
function tf(im,x,y,r,sx,sy,ry,o,b,org){im.style.transformOrigin=org||'50% 50%';im.style.transform='translate('+(x*K).toFixed(2)+'px,'+(y*K).toFixed(2)+'px) rotate('+r.toFixed(2)+'deg) rotateY('+(ry||0).toFixed(2)+'deg) scale('+sx.toFixed(4)+','+sy.toFixed(4)+')';im.style.opacity=cl(o,0,1).toFixed(3);im.style.filter=b>.3?'blur('+(b*K*3).toFixed(1)+'px)':'none'}
function enter(i,u){var v={x:0,y:0,r:0,sx:1,sy:1,ry:0,o:1,b:0,org:'50% 50%'};if(u<=0){v.o=0;return v}var s,e=Math.exp;
 switch(i){
 case 0:s=spr(u*1.4,5.5,10);v.sx=v.sy=Math.max(0,s);v.o=cl(u*5,0,1);break;
 case 1:s=spr(u*1.3,6,9);v.y=-420*(1-s);var l=e(-Math.pow((u-.28)/.07,2));v.sx=1+.2*l;v.sy=1-.22*l;v.org='50% 100%';v.o=cl(u*6,0,1);v.b=(1-cl(u*3,0,1))*6;break;
 case 2:s=spr(u*1.3,6,9);v.y=360*(1-s);v.r=-28*(1-s);v.o=cl(u*5,0,1);v.b=(1-cl(u*3,0,1))*5;break;
 case 3:v.r=-380*(1-eo(cl(u*1.2,0,1)));s=spr(u*1.3,6,9);v.sx=v.sy=.15+.85*s;v.o=cl(u*5,0,1);v.b=(1-cl(u*2.4,0,1))*7;break;
 case 4:s=spr(u*1.25,5,11);v.sy=s;v.sx=1+.35*(1-cl(u*2,0,1))*(1-s);v.org='50% 100%';v.o=cl(u*6,0,1);break;
 case 5:s=spr(u*1.2,5,9);var w=e(-3.6*u)*Math.sin(16*u)*.38;v.sx=s*(1+w);v.sy=s*(1-w);v.org='50% 100%';v.o=cl(u*5,0,1);break;
 case 6:var q=eo(cl(u*1.15,0,1));v.x=520*(1-q);v.r=400*(1-q);v.o=cl(u*4,0,1);v.b=(1-q)*8;break;
 case 7:v.org='50% 0%';v.r=85*e(-4.2*u)*Math.cos(10*u);v.y=-90*(1-eo(cl(u*2,0,1)));v.o=cl(u*5,0,1);break;
 case 8:s=spr(u*1.2,6,10);v.y=420*(1-s);var l2=e(-Math.pow((u-.34)/.07,2));v.sx=1+.25*l2;v.sy=1-.2*l2;v.org='50% 100%';v.o=cl(u*5,0,1);v.b=(1-cl(u*3,0,1))*5;break;
 case 9:var z=eo(cl(u*1.1,0,1));v.sx=v.sy=1+3.4*(1-z);v.b=16*(1-z);v.o=cl(u*2.5,0,1);break;
 case 10:s=spr(u*1.25,5,9);v.ry=100*(1-s);v.o=cl(u*4,0,1);break}
 return v}
function leave(i,u){var v={x:0,y:0,r:0,sx:1,sy:1,ry:0,o:1,b:0,org:'50% 50%'};if(u<=0)return v;var q=eo(u);
 switch(i){
 case 3:v.y=-560*q;v.r=-220*u;v.o=1-u*u;v.b=u*8;break;
 case 4:v.y=520*u*u;v.r=48*u;v.o=1-u*u;break;
 case 7:v.x=140*u;v.y=-460*q;v.r=210*u;v.o=1-u*u;v.b=u*6;break;
 case 8:var p=u<.28?1+.4*(u/.28):1.4*(1-(u-.28)/.72);v.sx=v.sy=Math.max(0,p);v.o=u<.6?1:1-(u-.6)/.4;break;
 case 9:v.x=700*q;v.r=330*u;v.o=1-u*u;v.b=u*7;break;
 case 10:v.ry=-95*q;v.x=220*u;v.o=1-u;break}
 return v}
function burst(x,y,n,big){var cols=['#2FD36B','#FFFFFF','#8CFFB4','#FFE14D'];for(var k=0;k<n;k++){var d=document.createElement('span');var t=k%3;d.className='op-pt'+(t===1?' st':t===2?' ln':'');d.style.background=cols[k%cols.length];d.style.left=(x*K).toFixed(1)+'px';d.style.top=(y*K).toFixed(1)+'px';LG.appendChild(d);
 var a=Math.random()*Math.PI*2,R=(big?260:150)*(0.55+Math.random()*.6)*K,dx=Math.cos(a)*R,dy=Math.sin(a)*R,rot=(a*180/Math.PI)+90;
 var sc=t===1?(1+Math.random()*.8):(.6+Math.random()*.7);
 try{var an=d.animate([{transform:'translate(0,0) rotate('+rot+'deg) scale(0)',opacity:1},{transform:'translate('+(dx*.7).toFixed(1)+'px,'+(dy*.7).toFixed(1)+'px) rotate('+rot+'deg) scale('+sc+')',opacity:1,offset:.45},{transform:'translate('+dx.toFixed(1)+'px,'+dy.toFixed(1)+'px) rotate('+(rot+(t===1?90:0))+'deg) scale(0)',opacity:0}],{duration:700+Math.random()*400,easing:'cubic-bezier(.2,.7,.2,1)',fill:'forwards'});an.onfinish=(function(el){return function(){el.remove()}})(d)}catch(e){d.remove()}}}
var T0=1e15,FIRED={},IDN=false,READY=false;var ALLI=[].slice.call(LG.querySelectorAll('img'));ALLI.forEach(function(im){im.style.opacity=0});Promise.all(ALLI.map(function(im){return im.decode?im.decode().catch(function(){}):Promise.resolve()})).then(function(){READY=true;T0=performance.now()+120});setTimeout(function(){if(!READY){READY=true;T0=performance.now()}},4000);
function replay(){T0=performance.now();FIRED={};SCT=[]}
var CU=document.createElement('div');CU.className='op-cu';CU.innerHTML='<div class="g gh1"></div><div class="g gh2"></div><div class="g gv1"></div><div class="g gv2"></div><div class="g gx1"></div><div class="g gx2"></div><i class="hd h1"></i><i class="hd h2"></i><i class="hd h3"></i><i class="hd h4"></i><img alt=""><span class="lb lw"></span><span class="lb lh"></span>';
var S1E=Q('opS1');S1E.appendChild(CU);
var CUI=CU.querySelector('img'),CG=[].slice.call(CU.querySelectorAll('.g')),CH=[].slice.call(CU.querySelectorAll('.hd')),LBW=CU.querySelector('.lw'),LBH=CU.querySelector('.lh');
var cst=document.createElement('style');cst.textContent=[
'#os-landing .op-cu{position:absolute;inset:0;pointer-events:none;z-index:5;opacity:0}',
'#os-landing .op-cu img{position:absolute;left:0;top:0;max-width:none;transform-origin:50% 50%;will-change:transform}',
'#os-landing .op-cu .g{position:absolute;background:rgba(245,245,247,.38)}',
'#os-landing .op-cu .gh1,#os-landing .op-cu .gh2,#os-landing .op-cu .gx1{left:0;right:0;height:1px}',
'#os-landing .op-cu .gv1,#os-landing .op-cu .gv2,#os-landing .op-cu .gx2{top:0;bottom:0;width:1px}',
'#os-landing .op-cu .gx1,#os-landing .op-cu .gx2{background:rgba(245,245,247,.12)}',
'#os-landing .op-cu .hd{position:absolute;width:9px;height:9px;margin:-5px 0 0 -5px;background:#17181B;border:1.5px solid #F5F5F7;box-sizing:border-box}',
'#os-landing .op-cu .lb{position:absolute;font:500 13px/1 ui-monospace,SFMono-Regular,Menlo,monospace;color:#F5F5F7;letter-spacing:.02em;white-space:nowrap}',
'#os-landing .op-gr{position:absolute;inset:-50%;pointer-events:none;z-index:6;opacity:0;background-image:url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%27220%27 height=%27220%27><filter id=%27n%27><feTurbulence type=%27fractalNoise%27 baseFrequency=%27.85%27 numOctaves=%272%27 stitchTiles=%27stitch%27/></filter><rect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%27.55%27/></svg>");mix-blend-mode:soft-light}'
].join('');document.head.appendChild(cst);
var GR=document.createElement('div');GR.className='op-gr';S1E.appendChild(GR);
var CUL=[[0,1.0,1.38,.78],[1,1.32,1.32,1.18],[4,1.0,1.9,.62],[5,.7,.7,1.3],[7,1.45,1.0,1.0],[8,1.0,.55,1.6]];
var TYD=75,POP=220,SC0=1150,SCD=560,CU0=1760,CUD=380,RG0=CU0+CUD*CUL.length,RGD=700;
var EX0=RG0+RGD+700,MG0=EX0+250,MGD=820,FIN=MG0+MGD+180;
var SCT=[];
function scatter(){SCT=[];var lr=LG.getBoundingClientRect(),vw=innerWidth,vh=(window.__VH||innerHeight);SP.forEach(function(s,i){var vx=vw*(.1+.8*Math.random()),vy=vh*(.14+.66*Math.random());var ux=(vx-lr.left)/K,uy=(vy-lr.top)/K;SCT.push({x:ux-s.bx,y:uy-s.by,r:(Math.random()*2-1)*35,s:.7+Math.random()*.9})})}
function cuBox(j,u){var c=CUL[j],L=FL[c[0]],vw=innerWidth,vh=(window.__VH||innerHeight),q=Math.min(vh*.5,vw*.62)/308,w=L[3]*q,h=L[4]*q;
 var a=eo(seg(u,.06,.42)),b=eo(seg(u,.5,.9));var sx=lerp(lerp(1,c[1],a),c[2],b),sy=lerp(1,c[3],b);
 if(c[0]===0){sy=lerp(1,c[3],a)*lerp(1,1/c[3]*.95,b)}
 var W=w*sx,H=h*sy,cx=vw/2,cy=vh*.47;return {src:SP[c[0]].el.src,w:w,h:h,sx:sx,sy:sy,x0:cx-W/2,y0:cy-H/2,x1:cx+W/2,y1:cy+H/2,cx:cx,cy:cy}}
function showCU(j,u){var B=cuBox(j,u);if(CUI.getAttribute('src')!==B.src)CUI.src=B.src;CUI.style.width=B.w.toFixed(1)+'px';CUI.style.height=B.h.toFixed(1)+'px';CUI.style.left=(B.cx-B.w/2).toFixed(1)+'px';CUI.style.top=(B.cy-B.h/2).toFixed(1)+'px';CUI.style.transform='scale('+B.sx.toFixed(4)+','+B.sy.toFixed(4)+')';
 var g=CG;g[0].style.top=B.y0.toFixed(1)+'px';g[1].style.top=B.y1.toFixed(1)+'px';g[2].style.left=B.x0.toFixed(1)+'px';g[3].style.left=B.x1.toFixed(1)+'px';g[4].style.top=(B.cy).toFixed(1)+'px';g[5].style.left=(B.cx).toFixed(1)+'px';
 var P=[[B.x0,B.y0],[B.x1,B.y0],[B.x0,B.y1],[B.x1,B.y1]];CH.forEach(function(h,k){h.style.left=P[k][0].toFixed(1)+'px';h.style.top=P[k][1].toFixed(1)+'px'});
 LBW.textContent=Math.round(B.x1-B.x0)+'px';LBW.style.left=(B.x0+2).toFixed(1)+'px';LBW.style.top=(B.y0-20).toFixed(1)+'px';
 LBH.textContent=Math.round(B.y1-B.y0)+'px';LBH.style.left=(B.x1-LBH.offsetWidth-2).toFixed(1)+'px';LBH.style.top=(B.y1+9).toFixed(1)+'px';
 var fl=u<.05?.35:1;CG.forEach(function(e,k){e.style.opacity=(k>3?.8:1)*fl});}
function intro(it,now){
 if(it<RG0&&!SCT.length)scatter();
 var inCU=it>=CU0&&it<RG0;CU.style.opacity=inCU?1:0;GR.style.opacity=(it>SC0&&it<RG0+RGD)?(.16+.05*Math.sin(now/40)).toFixed(3):0;GR.style.transform='translate('+((now/23)%60-30).toFixed(0)+'px,'+((now/31)%60-30).toFixed(0)+'px)';
 if(inCU){var j=Math.floor((it-CU0)/CUD),u=((it-CU0)%CUD)/CUD;showCU(j,u)}
 SP.forEach(function(s){var i=s.i,v={x:0,y:0,r:0,sx:1,sy:1,ry:0,o:1,b:0,org:'50% 50%'};
  s.gh.forEach(function(g){g.style.opacity=0});
  if(it<EX0){
   var tu=cl((it-i*TYD)/POP,0,1);
   if(it<SC0){if(tu<=0){v.o=0}else{var sp=spr(tu*1.3,6,11);v.sx=v.sy=.55+.45*sp;v.y=(1-sp)*30;v.o=1}
    if(!FIRED['t'+i]&&tu>0){FIRED['t'+i]=1;if(it-i*TYD<200&&i%3===0)burst(s.bx,s.by,3,false)}}
   else{var T=SCT[i]||{x:0,y:0,r:0,s:1};var su=eo(seg(it,SC0+i*18,SC0+SCD)),ru=it>=RG0?spr(seg(it,RG0+i*25,RG0+RGD)*1.3,5.5,9):0,m=su*(1-ru);
    v.x=T.x*m;v.y=T.y*m;v.r=T.r*m;v.sx=v.sy=lerp(1,T.s,m);v.b=(it<SC0+SCD?(1-su)*su*14:0)+(it>=RG0&&it<RG0+RGD?(1-ru)*ru*10:0);
    if(inCU)v.o=0;
    if(!FIRED['r'+i]&&it>=RG0+RGD*.55){FIRED['r'+i]=1;if(it-RG0<RGD+300&&i%2===0)burst(s.bx,s.by+s.bh*.3,4,false)}}
   if(it>RG0+RGD&&it<EX0){var hp=cl((it-RG0-RGD-120-i*40)/300,0,1);v.y+=-26*Math.sin(Math.PI*hp)}
   tf(s.el,v.x,v.y,v.r,v.sx,v.sy,v.ry,v.o,v.b,v.org);return}
  if(DROP.indexOf(i)>-1){var di=DROP.indexOf(i),lu=cl((it-EX0-di*55)/650,0,1);v=leave(i,lu);if(!FIRED['x'+i]&&lu>0){FIRED['x'+i]=1;if(lu<.5)burst(s.bx,s.by,7,true)}tf(s.el,v.x,v.y,v.r,v.sx,v.sy,v.ry,v.o,v.b,v.org);return}
  var mu=cl((it-MG0-s.j*30)/MGD,0,1),m2=spr(mu*1.25,5.2,8.5),dx=(s.tx-s.bx)*m2,dy=(s.ty-s.by)*m2-Math.sin(Math.PI*cl(mu*1.3,0,1))*36,sc=lerp(1,G,cl(m2,0,1.2));
  var fin=seg(it,FIN-350,FIN+250),pu=Math.sin(Math.PI*fin)*.06;
  var bob=it>FIN+250?Math.sin(now/650+s.j*.9)*5:0;
  tf(s.el,dx,dy+bob,0,sc*(1+pu),sc*(1+pu),0,1,0)
 });
 if(!FIRED.f&&it>=MG0+MGD-80){FIRED.f=1;if(it-(MG0+MGD)<500){burst(OB.x+OB.w*.5,OB.y+OB.h*.5,16,true);burst(OB.x+OB.w*.15,OB.y+OB.h*.2,6,false);burst(OB.x+OB.w*.85,OB.y+OB.h*.8,6,false)}}
 var sw=seg(it,FIN-200,FIN+900);SH.style.opacity=(sw>0&&sw<1)?1:0;SH.style.backgroundPosition=(130-sw*160).toFixed(1)+'% 0';
 if(GLOW){var gp=Math.exp(-Math.pow((it-(MG0+MGD))/420,2));GLOW.style.opacity=((it<SC0||it>RG0?1:.25)*(.55+.45*gp+.15*Math.sin(now/900))).toFixed(3);GLOW.style.transform='translate(-50%,-50%) scale('+(1+.25*gp).toFixed(3)+')'}
}

var S1=Q('opS1'),S2=Q('opS2'),S3=Q('opS3'),S4=Q('opS4'),LW=Q('opLW'),H=Q('opH'),E=Q('opE'),SC=Q('opSc');
LG.addEventListener('click',function(e){if(mv>6)return;replay()});
var txt='오쓸모션은 프리미어 프로를 위한 | 모션 패널이에요. | *키프레임 *대신 *클릭 *한 *번으로, | 효과도 자막도 효과음도 *한곳에서.';
var parts=txt.split(' '),wh='';
parts.forEach(function(w){if(w==='|'){wh+='<br>';return}var a=false;if(w.charAt(0)==='*'){a=true;w=w.slice(1)}wh+='<span class="w'+(a?' a':'')+'">'+w+' </span>'});
Q('opSt').innerHTML=wh;var W=[].slice.call(Q('opSt').querySelectorAll('.w'));
var ON=window.OSN||function(k,d){return d};
var LST=[['즐겨찾기','','자주 쓰는 효과는','즐겨찾기에 모아 두고'],['내 프리셋','','직접 만든 모션은','내 프리셋으로 저장해 두고'],['콤보','','등장 · 유지 · 강조 · 퇴장을','콤보 하나로 한 번에'],['트랜지션',ON('transition','32'),'클립과 클립 사이를','부드럽게 넘기는 트랜지션'],['등장·퇴장',ON('inout','19'),'자연스럽게 나타나고','깔끔하게 사라지는 모션'],['강조',ON('emphasis','11'),'보여 주고 싶은 순간을','눈에 확 띄게'],['확대·축소',ON('zoom','4'),'천천히, 혹은 확','다가오는 확대 · 축소'],['반복',ON('loop','8'),'반복되는 움직임으로','영상에 리듬을 더하고'],['예능·추천',ON('variety','25'),'예능에서 자주 보던','골라 쓰기 좋은 추천 프리셋'],['자막',ON('text','36'),'글자마다 따로 움직이는','자막 효과'],['자막 바',ON('textbar','111'),'글자 길이에 딱 맞춰지는','자막 바'],['꾸밈 자막',ON('funtext','112'),'테마 7종까지','바로 꾸며지는 자막'],['도형',ON('shape','15'),'그려지는 선·화살표','동그라미 애니메이션'],['이징 곡선','','딱딱한 키프레임을','부드러운 움직임으로'],['효과음',ON('sfx','152'),'직접 만든 로열티 프리','효과음 152종'],['비트 싱크','','음악 박자에 맞춰','컷을 맞추는 비트 싱크'],['사운드 밸런스','','배경음악과 목소리를','클릭 한 번에 분리'],['무음 구간 제거','','지루한 무음 구간 편집도','한 번에 끝'],['자동 자막','','클릭 한 번이면','자막이 자동으로 생성'],['데드존 가이드','','SNS마다 다른 데드존도','가이드를 보며 바로 배치']];
var CY=Q('opCyl'),ih='';LST.forEach(function(x){ih+='<div class="op-it">'+x[0]+'</div>'});CY.innerHTML=ih;var IT=[].slice.call(CY.querySelectorAll('.op-it'));
var N=Q('opN'),D=Q('opD'),lastI=-1;
var PN=['키프레임 네 개 찍고 이징 잡고, 다음 클립에서 또 똑같이… 같은 걸 몇 번째 하는지 모르겠어요.','프리셋을 어디에 저장했더라. 찾는 시간이 만드는 시간보다 길어요.','자막 하나 넣을 때마다 바 크기 맞추고 등장 모션을 다시 만들어요.','효과음 폴더를 매번 뒤지고, 컷 타이밍에 맞추는 데 또 시간이 가요.'];
var GG=Q('opG'),gh='';PN.forEach(function(t,i){gh+='<div class="op-c"><small>'+['편집자 최00','편집자 박00','편집자 김00','편집자 이00'][i]+'</small>'+t+'</div>'});GG.innerHTML=gh;var C=[].slice.call(GG.querySelectorAll('.op-c'));
var drag=0,vel=0,down=false,lx=0,mv=0,pid=null,mx=0,my=0,tmx=0,tmy=0;addEventListener('pointermove',function(e){tmx=e.clientX/innerWidth*2-1;tmy=e.clientY/(window.__VH||innerHeight)*2-1},{passive:true});
S1.addEventListener('pointerdown',function(e){if(e.target.closest('a'))return;down=true;lx=e.clientX;mv=0;vel=0;pid=e.pointerId});
S1.addEventListener('pointermove',function(e){if(!down)return;var dx=e.clientX-lx;lx=e.clientX;mv+=Math.abs(dx);if(mv>3){try{S1.setPointerCapture(pid)}catch(_){}}drag+=dx*.45;vel=dx*.45});
['pointerup','pointercancel'].forEach(function(n){S1.addEventListener(n,function(){down=false})});
var HL=[];function hl(){HL=[].slice.call(document.querySelectorAll('#header .xans-layout-logotop img')).filter(function(im){var r=im.getBoundingClientRect();return r.width>0&&r.height>0})}
var KO=[].slice.call(S1.querySelectorAll('.op-kick,.op-cta,.op-hint'));
var SCX=Q('opSc');function frame(now){var r=sec.getBoundingClientRect(),vh=(window.__VH||innerHeight);
var root=document.documentElement;
if(r.bottom>-60&&r.top<vh+60){var p=cl(-r.top/(sec.offsetHeight-vh),0,1);
if(!down){drag+=vel;vel*=.93;drag*=.992}
if(!READY){requestAnimationFrame(frame);return}var it=now-T0;if(RM&&it<FIN+1600){T0=now-(FIN+1600);it=FIN+1600}
if(!IDN&&p>.012){IDN=true;if(it<FIN){T0=now-FIN;it=FIN;FIRED.f=1}}
intro(it,now);
var f1=seg(p,.01,.1);mx+=(tmx-mx)*.05;my+=(tmy-my)*.05;var tg=seg(it,FIN,FIN+900);var ry=(drag+mx*9+Math.sin(now/1900)*2)*(1-eo(f1))*tg,rx=(-my*6+Math.cos(now/2300)*1.2)*(1-eo(f1))*tg;
LG.style.transform='perspective(1400px) rotateX('+rx.toFixed(2)+'deg) rotateY('+ry.toFixed(2)+'deg)';
if(!HL.length||now%1000<20)hl();
var fl=eio(seg(p,.012,.11));var lr=LG.getBoundingClientRect();
var ocx=lr.left+(OB.x+OB.w/2)*K,ocy=lr.top+(OB.y+OB.h/2)*K,oh=OB.h*K;
var tx=0,ty=0,ts=1,h0=HL[0];
if(h0&&fl>0){var hr=h0.getBoundingClientRect();if(hr.height>0){ts=hr.height/oh;tx=(hr.left+hr.width/2)-ocx;ty=(hr.top+hr.height/2)-ocy}}
LW.style.transformOrigin='50% 50%';
LW.style.transform='translate('+(tx*fl).toFixed(1)+'px,'+(ty*fl).toFixed(1)+'px) scale('+(1+(ts-1)*fl).toFixed(4)+')';
LW.style.opacity=(1-seg(fl,.92,1)).toFixed(3);LW.style.filter='none';
root.style.setProperty('--os-hl',(p<.002?0:seg(fl,.9,1)).toFixed(3));
var kin=seg(it,FIN-300,FIN+500);var o1=(1-eo(seg(p,.02,.08)))*kin;
S1.style.opacity=p<.16?1:0;S1.style.pointerEvents=p<.12?'auto':'none';
KO.forEach(function(el){el.style.opacity=o1.toFixed(3)});
if(SC)SC.style.opacity=(kin*(1-cl(p/.02,0,1))).toFixed(3);
var ex=eo(seg(p,.38,.46));S2.style.opacity=(p>.1&&p<.48)?1:0;S2.style.transform='translateY('+(-50*ex).toFixed(1)+'px)';
W.forEach(function(w,i){var a=.14+i*(.15/W.length),t=eo(seg(p,a,a+.05)),o=t*(1-ex);w.style.opacity=o.toFixed(3);w.style.transform='translateY('+((1-t)*42).toFixed(1)+'px)';w.style.filter='blur('+((1-t)*10+ex*8).toFixed(1)+'px)'});
var o3=eo(seg(p,.47,.51))*(1-eo(seg(p,.7,.74)));S3.style.opacity=o3.toFixed(3);
var pos=(LST.length-1)*eio(seg(p,.5,.7)),R=cl((window.__VH||innerHeight)*.5,220,420),st=13;
IT.forEach(function(el,i){var a=-(i-pos)*st,ab=Math.abs(a);var op=cl(1-ab/80,0,1);el.style.opacity=op.toFixed(3);el.style.transform='rotateX('+a.toFixed(2)+'deg) translateZ('+R.toFixed(0)+'px)';el.style.color=Math.abs(i-pos)<.5?'#2FD36B':'#F5F5F7'});
var ci=cl(Math.round(pos),0,LST.length-1);if(ci!==lastI){lastI=ci;N.textContent=LST[ci][1]||'';N.style.display=LST[ci][1]?'block':'none';D.innerHTML='<i>'+LST[ci][2]+'</i><i>'+LST[ci][3]+'</i>'}
var o4=eo(seg(p,.74,.78));S4.style.opacity=o4.toFixed(3);H.style.opacity=o4.toFixed(3);
C.forEach(function(c,i){var t=eo(seg(p,.78+i*.04,.84+i*.04));c.style.opacity=t.toFixed(3);c.style.transform='translateY('+((1-t)*40).toFixed(1)+'px)';c.style.filter='blur('+((1-t)*8).toFixed(1)+'px)'});
var te=eo(seg(p,.95,.99));E.style.opacity=te.toFixed(3);E.style.transform='translateY('+((1-te)*20).toFixed(1)+'px)'}
else{root.style.setProperty('--os-hl','1');if(SCX)SCX.style.opacity=0}
requestAnimationFrame(frame)}
requestAnimationFrame(frame)})();
