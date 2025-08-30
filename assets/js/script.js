//api
const pokemon = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
async function llamarPokemon() {
    try{
        const llamado = await fetch(pokemon);
        if (!llamado.ok){
            throw new Error ("Pero nadie vino")
        }
        const paseo = await llamado.json();
        console.log(paseo.results)
        for (let i = 0; i < paseo.results.length; i++){
            console.log(paseo.results[i].name);
            let cadaUno = document.createElement("div");
            cadaUno.classList.add('col-md-6')
            cadaUno.innerHTML = '<div class= "card mb-5 text-center"><img src"' + paseo.results[i].sprites + '" class=" w-100">' + "<h3>" + paseo.results[i].name + "</h3></div>"
            document.getElementById('pokemon').appendChild(cadaUno)
        }
    }catch(error){
        console.error('Hay un problema o hiciste algo mal', error);
    }
}
//Si llamo una api de varios pokemon, solo me da el nombre. Hago uno individual aparte para llamar mas datos.
llamarPokemon();
const pokeFavorito= "https://pokeapi.co/api/v2/pokemon/krokorok"
async function llamarAlPokemon(){
    try{
        const llamada = await fetch(pokeFavorito);
        if(!llamada.ok){
            throw new Error ("No te quiere")
        }
        const uno = await llamada.json();
        const tipos = uno.types.map(t => t.type.name).join(", ");
        document.getElementById("pokeFav").innerHTML= "<div class='col-6 m-0 m-auto card text-center'>" +
            "<img src='" + uno.sprites.front_default + "' class= 'w-100'>" +
            "<h3>" + uno.name + "</h3>" +
            "Tipos: " + tipos +
            "</div>"; 
        
    }catch(error){
        console.error('Hay un problema o hiciste algo mal 2', error);
    }
}
llamarAlPokemon();