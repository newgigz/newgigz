
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('nav');
if(toggle && nav){toggle.addEventListener('click',()=>{nav.style.display = nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='78px';nav.style.right='4%';nav.style.background='#080808';nav.style.padding='20px';nav.style.flexDirection='column';nav.style.alignItems='flex-start';});}
