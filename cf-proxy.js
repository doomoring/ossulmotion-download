// 1053studio.co.kr -> 카페24(ossulmo.cafe24.com) https 중계. 주소창은 1053studio.co.kr 그대로.
// 카페24가 이 도메인용 SSL 을 못 줘서(네임서버가 Cloudflare) Flexible(http) 로는 POST 내용이 사라지던 문제 해결용.
const ORIGIN = 'ossulmo.cafe24.com';

function swapOut(s, host) {
  // 응답 안의 카페24 주소 -> 손님이 들어온 주소
  return s.split('https://' + ORIGIN).join('https://' + host)
          .split('http://' + ORIGIN).join('https://' + host)
          .split('//' + ORIGIN).join('//' + host);
}
function swapIn(s, host) {
  return s.split('https://' + host).join('https://' + ORIGIN)
          .split('http://' + host).join('https://' + ORIGIN);
}
function stripDomfix(t) {
  // 레이아웃에 남아 있는 임시 이동 스크립트(os-domfix) 제거
  const a = t.indexOf('<script id="os-domfix">');
  if (a < 0) return t;
  const b = t.indexOf('</script>', a);
  if (b < 0) return t;
  return t.slice(0, a) + t.slice(b + 9);
}

export default {
  async fetch(req) {
    const url = new URL(req.url);
    const host = url.host;
    const target = new URL(req.url);
    target.protocol = 'https:';
    target.hostname = ORIGIN;
    target.port = '';

    const h = new Headers(req.headers);
    for (const k of ['origin', 'referer']) {
      const v = h.get(k);
      if (v) h.set(k, swapIn(v, host));
    }
    h.delete('host');
    h.set('x-forwarded-host', host);
    const ip = req.headers.get('cf-connecting-ip');
    if (ip) h.set('x-forwarded-for', ip);
    h.delete('accept-encoding'); // 본문 바꿔치기를 위해 압축 없이 받기

    const method = req.method.toUpperCase();
    const init = { method, headers: h, redirect: 'manual' };
    if (method !== 'GET' && method !== 'HEAD') init.body = await req.arrayBuffer();

    const res = await fetch(target.toString(), init);
    const rh = new Headers(res.headers);

    const loc = rh.get('location');
    if (loc) rh.set('location', swapOut(loc, host));

    const cookies = typeof res.headers.getSetCookie === 'function' ? res.headers.getSetCookie() : [];
    if (cookies.length) {
      rh.delete('set-cookie');
      for (const c of cookies) {
        const kept = c.split(';').filter(p => p.trim().toLowerCase().indexOf('domain=') !== 0).join(';');
        rh.append('set-cookie', kept);
      }
    }
    rh.delete('strict-transport-security');

    const ct = (rh.get('content-type') || '').toLowerCase();
    const textual = ct.indexOf('text/html') >= 0 || ct.indexOf('javascript') >= 0 || ct.indexOf('json') >= 0 || ct.indexOf('text/css') >= 0 || ct.indexOf('text/plain') >= 0 || ct.indexOf('xml') >= 0;
    if (textual && method !== 'HEAD' && res.status !== 204 && res.status !== 304) {
      let t = await res.text();
      t = swapOut(t, host);
      if (ct.indexOf('text/html') >= 0) t = stripDomfix(t);
      rh.delete('content-length');
      rh.delete('content-encoding');
      return new Response(t, { status: res.status, statusText: res.statusText, headers: rh });
    }
    return new Response(res.body, { status: res.status, statusText: res.statusText, headers: rh });
  }
};
