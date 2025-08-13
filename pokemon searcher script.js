async function fetchData() {
    try {
        const pokemonName = document.getElementById("PokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imageElement = document.getElementById("PokemonSprite");
        
        if (pokemonSprite) {
            imageElement.src = pokemonSprite;
            imageElement.style.display = "block";
        } else {
            imageElement.style.display = "none";
            alert("Pokemon sprite not found!");
        }
    }
    catch(error) {
        console.error(error);
        alert("Pokemon not found! Please try another name.");
    }
}