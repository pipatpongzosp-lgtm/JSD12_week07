const pokeContainer = document.getElementById("pokemon-container");

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const newDiv = document.createElement("div");
        const pokeName = document.createElement("h1");
        // pokeName.textContent = data.name;

        // const pokeImg = document.createElement("img")
        // pokeImg.src = data.sprites.front_default;
        // pokeContainer.appendChild(pokeName);

    })
    .catch(error=> console.error(error));
