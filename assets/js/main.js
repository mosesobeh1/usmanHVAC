(()=>{const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const bg=$('.bg'),mn=$('.mn'),G={installation:'services',servicing:'services',repair:'services',commercial:'services'};
bg.onclick=()=>{const o=mn.classList.toggle('open');bg.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''};
mn.addEventListener('click',e=>{if(e.target.closest('a')){mn.classList.remove('open');document.body.style.overflow=''}});
addEventListener('resize',()=>{if(innerWidth>960){mn.classList.remove('open');document.body.style.overflow=''}});
addEventListener('scroll',()=>$('header').classList.toggle('sc',scrollY>20),{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
const obs=()=>$$('.rv:not(.in)').forEach(x=>io.observe(x));
const act=p=>{p=G[p]||p;$$('.mn a[data-p]').forEach(a=>a.classList.toggle('act',a.dataset.p===p))};
if(window.IMG)$$('img[data-k]').forEach(i=>i.src=IMG[i.dataset.k]);
if(window.SINGLE){const route=()=>{const h=(location.hash||'#home').slice(1),pg=$('.pg[data-page="'+h+'"]')?h:'home';$$('.pg').forEach(x=>x.classList.toggle('on',x.dataset.page===pg));act(pg);document.title=T[pg];scrollTo(0,0);obs()};addEventListener('hashchange',route);route()}
else{act(document.body.dataset.p);obs()}
$$('form.bk').forEach(f=>{const msg=()=>{const d=new FormData(f);return 'Hello Usman HVAC Tech, I would like to book a service.\nName: '+d.get('n')+'\nPhone: '+d.get('p')+'\nService: '+d.get('s')+'\nEmail: '+d.get('e')+'\nDetails: '+d.get('m')};
f.onsubmit=e=>{e.preventDefault();window.open('https://wa.me/2348154779262?text='+encodeURIComponent(msg()),'_blank')};
f.querySelector('.em').onclick=()=>{if(f.reportValidity())location.href='mailto:info@usmanhvactech.com?subject='+encodeURIComponent('Service booking request')+'&body='+encodeURIComponent(msg())}});
const lb=$('.lb');document.addEventListener('click',e=>{const i=e.target.closest('.gl img');if(i){lb.querySelector('img').src=i.src;lb.hidden=false}else if(e.target.closest('.lb'))lb.hidden=true});
addEventListener('keydown',e=>{if(e.key==='Escape')lb.hidden=true});
const y=$('#yr');if(y)y.textContent=new Date().getFullYear()})();
