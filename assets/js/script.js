//api
let pokemon = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
let favoritos =["oshawott", "leavanny", "pikachu", "haxorus", "feraligatr", "dragonite"]
async function llamarPokemon() {
    let contenedor = document.getElementById("pokemon");
    for (let i = 0; i < favoritos.length; i++) {
        let nombre= favoritos[i]
        try {
          let llamado = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
          let data = await llamado.json();
          let tipos = data.types.map(t => t.type.name).join(", ");
          contenedor.innerHTML += `
            <div class="col-12 col-sm-6 mb-5">
          <div class="card text-center shadow-sm h-100">
            <img src="${data.sprites.front_default}" class="card-img-top p-1">
            <div class="card-body">
              <h2 class="card-title">${data.name}</h2>
              <h5 class="card-text mb-0"><strong>Tipos:</strong> ${tipos}</h5>
            </div>
          </div>
        </div>`;
        } catch (error) {
          console.error(`Se te a escapado ${nombre}`, error);
        }
      }
    }

    llamarPokemon();

let pokeFavorito= "https://pokeapi.co/api/v2/pokemon/krokorok"
async function llamarAlPokemon(){
    try{
        let llamada = await fetch(pokeFavorito);
        if(!llamada.ok){
            throw new Error ("No te quiere")
        }
        let uno = await llamada.json();
        let tipos = uno.types.map(t => t.type.name).join(", ");
        document.getElementById("pokeFav").innerHTML= 
            "<div class='col-6 m-0 m-auto card text-center'>" +
            "<img src='" + uno.sprites.front_default + "' class= 'w-100'>" +
            "<div='card-body'><h2>" + uno.name + "</h2>" +
            "<h5><strong>Tipos:</strong> " + tipos +
            "</h5></div></div>"; 
        
    }catch(error){
        console.error('Hay un problema o hiciste algo mal 2', error);
    }
}
llamarAlPokemon();