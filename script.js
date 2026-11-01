const menu=document.querySelector('.menu'),links=document.querySelector('.links');menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.textContent=open?'×':'☰'});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));document.getElementById('quoteForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const subject=encodeURIComponent('Trade enquiry — '+(f.get('service')||'New request'));const body=encodeURIComponent(`Name: ${f.get('name')}\nCompany: ${f.get('company')}\nEmail: ${f.get('email')}\nService: ${f.get('service')}\n\nRequirements:\n${f.get('message')}`);window.location.href=`mailto:hello@meridiantrade.example?subject=${subject}&body=${body}`;document.getElementById('formNote').textContent='Your email app should open with the enquiry ready to send.'});

// Fade page sections and key cards into view as the visitor scrolls.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealItems=document.querySelectorAll('main > section, .trustitem, .service, .step, .stat');
  document.body.classList.add('has-scroll-fade');
  const revealObserver=new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
    });
  },{threshold:.12,rootMargin:'0px 0px -24px 0px'});
  revealItems.forEach(item=>{item.classList.add('scroll-fade');revealObserver.observe(item)});
}
const marketLoader = document.getElementById("marketLoader");

if (marketLoader) {
  const hideLoader = () => {
    marketLoader.classList.add("is-done");
    document.body.classList.remove("loading");
  };

  // Keep the intro brief, and hide it even if a resource loads slowly.
  window.addEventListener("load", () => setTimeout(hideLoader, 700), {
    once: true
  });
  setTimeout(hideLoader, 4500);
}
