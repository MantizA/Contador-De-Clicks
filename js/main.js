let contaInicial=0;
const contador = document.querySelector(".contador");
const botones = document.querySelectorAll(".botones");


botones.forEach(boton => {
    boton.addEventListener('click', ()=>{
        if (contador.textContent==="0"){
            if (boton.id==="aumentar"){
                contaInicial++;
            }
            else {
            }
        }
        else if (boton.id==="aumentar"){
            contaInicial++;
        }
        else if (boton.id==="disminuir"){
            contaInicial--;
        }
        contador.textContent=contaInicial;

})
});
