function irPara(objetoNome) {
    var principal = document.getElementById("principal");
    var objetoObj = document.getElementById(objetoNome);
    principal.scrollTo({ top: objetoObj.offsetTop, behavior: 'smooth' });
}