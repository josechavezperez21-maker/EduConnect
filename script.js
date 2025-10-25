(function(){
  const key='edu_metrics_v1';
  function getM(){return JSON.parse(localStorage.getItem(key)||'{"visitas":0,"registros":0,"pagos":0}');}
  function saveM(m){localStorage.setItem(key,JSON.stringify(m));render();}
  function render(){const m=getM();document.getElementById('m_visitas').textContent=m.visitas;
    document.getElementById('m_reg').textContent=m.registros;
    document.getElementById('m_pagos').textContent=m.pagos;}
  let m=getM();m.visitas++;saveM(m);

  // Formularios
  document.querySelectorAll('form').forEach(f=>{
    f.addEventListener('submit',e=>{
      e.preventDefault();
      if(f.id==='formPadres'||f.id==='formInstructores'){m.registros++;alert('✅ Registro exitoso');}
      if(f.id==='formPago'){m.pagos++;document.getElementById('payMsg').textContent='✅ Pago simulado con éxito.';}
      saveM(m);f.reset();
    });
  });

  // Carrusel
  const track=document.getElementById('carouselTrack');
  const prev=document.querySelector('.prev'),next=document.querySelector('.next');
  if(track){let i=0;const imgs=track.children;
    function go(x){i=(x+imgs.length)%imgs.length;track.style.transform=`translateX(-${i*100}%)`;}
    prev.onclick=()=>go(i-1);next.onclick=()=>go(i+1);setInterval(()=>go(i+1),4000);
  }

  render();
})();
