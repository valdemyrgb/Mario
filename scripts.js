
const form = document.querySelector(".formulario-Fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
const area = document.querySelector("mascara-formulario")

function Cliquedebotao(){
    // console.log(form)
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}
function clique(){
    mascara.style.visibility = "hidden"
    form.style.left = "-150px"
}