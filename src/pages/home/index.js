function irPara(objetoNome) {
    var principal = document.getElementById("principal");
    var objetoObj = document.getElementById(objetoNome);
    principal.scrollTo({ top: objetoObj.offsetTop, behavior: 'smooth' });
}

var grid = document.querySelector(".grid");
var emptyTile = document.querySelector(".tile--empty");
var tiles = Array.from(document.querySelectorAll(".tile"));
tiles.map(tile => {
    tile.addEventListener("click", event => {
      var tileArea = tile.style.getPropertyValue("--area");
      var emptyTileArea = emptyTile.style.getPropertyValue("--area");
  
      emptyTile.style.setProperty("--area", tileArea);
      tile.style.setProperty("--area", emptyTileArea);

      var atual = tile.className;
      var vazio = emptyTile.className;
      emptyTile.className = atual;
      tile.className = vazio;
      emptyTile = document.querySelector(".tile--empty");
      tiles = Array.from(document.querySelectorAll(".tile"));
    });

  });