let favoritos = [
  "oshawott", "leavanny", "pikachu", "haxorus", "feraligatr",
  "dragonite", "dragapult","gengar", "scolipid", "gliscor"
];
let datosPokemon = [];

async function llamarPokemon() {
  for (let i = 0; i < favoritos.length; i++) {
    let nombre = favoritos[i];
    try {
      let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
      if (!respuesta.ok) {
        throw new Error("Error de la solicitud");
      }
      let data = await respuesta.json();
      datosPokemon.push(data); 
    } catch (error) {
      console.error(`Ocurrio un error con ${nombre}`, error);
    }
  }
  mostrarPokemon("all");
}
function mostrarPokemon(tipo) {
  let contenedor = document.getElementById("pokemon");
  contenedor.innerHTML = "";

  datosPokemon.forEach(p => {
    let tipos = p.types.map(t => t.type.name);
    if (tipo === "all" || tipos.includes(tipo)) {
      let columna = document.createElement('div'); 
      columna.classList.add('col-12','col-md-6','mb-5');

      columna.innerHTML = `
        <div class="card text-center shadow-sm h-100">
          <img src="${p.sprites.front_default}" class="card-img-top p-1">
          <div class="card-body">
            <h2 class="card-title">${p.name}</h2>
            <h5 class="card-text mb-0"><strong>Tipos:</strong> ${tipos.join("/")}</h5>
          </div>
        </div>
      `;
      contenedor.appendChild(columna);
    }
  });
}
document.getElementById('filtroTipos').addEventListener('change', (e) => {
  mostrarPokemon(e.target.value);
});
llamarPokemon();

let pokeFavorito= "https://pokeapi.co/api/v2/pokemon/krokorok"
async function llamarAlPokemon(){
    try{
        let llamada = await fetch(pokeFavorito);
        if(!llamada.ok){
            throw new Error ("No te quiere (error)")
        }
        let uno = await llamada.json();
        let tipos = uno.types.map(t => t.type.name).join("/");
        document.getElementById("pokeFav").innerHTML =
      "<div class='col-12 col-md-6 mb-5 m-auto'>" +
        "<div class='card text-center h-100'>" +
          "<img src='" + uno.sprites.front_default + "' class='card-img-top p-1'>" +
          "<div class='card-body'>" +
            "<h2 class='card-title'>" + uno.name + "</h2>" +
            "<h5 class='card-text mb-0'><strong>Tipos:</strong> " + tipos + "</h5>" +
          "</div>" +
        "</div>" +
      "</div>";
    }catch(error){
        console.error('Hay un problema o hiciste algo mal 2', error);
    }
}
llamarAlPokemon();