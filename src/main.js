window.onload= function() {
    allPokemon();
};

function getPokemon (){
    return POKEMON['pokemon'];
    
}

let showPokemon = document.getElementById('show-pokemon');

function allPokemon (){

    showPokemon.innerHTML= `
    ${getPokemon().map((monster) =>`
    <div class='list-pokemon'>
            <img src='${monster['img']}' class= 'pokemon-img'/>
        <div class= text-name> 
            <h3 class='pokemon-name'>${monster['name']}</h3 >
        </div>
        <div class='text-type'>
            <p class='pokemon-type'>${monster['type']}</p>
        </div>
    </div>
       
    `).join('')}
    `
};









