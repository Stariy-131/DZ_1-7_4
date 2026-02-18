const beerBlock = document.querySelector(".beer-block");

const get = async () => {
    try {
        const response = await fetch("https://6995c58ab081bc23e9c466e8.mockapi.io/beers");
        const data = await response.json();
        const {img, title, body, id} = data
        data.forEach((beer) => beerCard(beer));

    } catch (error) {
        console.log(error);
    }
}

get(); // на стиль не смотрите, я над ним особо не парился так как, мне еще нужно доделывать свой проект. 

function beerCard(beer) {
    const div = document.createElement("div");
    div.className = "beer-card";

    const img = document.createElement("img")
    img.className = "beer-img";
    img.src = beer.img;
    img.alt = "beer";

    const title = document.createElement("h2");
    title.className = "title";
    title.textContent = beer.title;

    const info = document.createElement("p");
    info.className = "info"
    info.textContent = beer.body;

    const id = document.createElement("span");
    id.className = "indef-id"
    id.textContent = beer.id;

    div.append(img, title, info, id);
    beerBlock.appendChild(div)
}
