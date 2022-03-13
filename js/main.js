var elList = document.querySelector(".list");

for ( var pokemon of pokemons ){
    
    var newItem = document.createElement("li");
    var newName = document.createElement("h2");
    var newImg = document.createElement("img");
    var newBox = document.createElement("div")
    var newNum = document.createElement("number");
    var newCandy = document.createElement("strong");
    var newSpawnTime = document.createElement("time")

    var newSubList = document.createElement("ul")
    
    for(var weakness of pokemon.weaknesses){
        
        var newSubItem = document.createElement("li")
        newSubItem.textContent = weakness

        newSubItem.setAttribute("class", "sub-item")

        newSubList.appendChild(newSubItem);

    }


    newImg.setAttribute("src", pokemon.img )
    newImg.setAttribute("class", "img")
    newNum.setAttribute("class", "number")
    newName.setAttribute("class", "title")
    newBox.setAttribute("class", "box")
    newItem.setAttribute("class", "item")
    newSubList.setAttribute("class", "sub-list")
    newSpawnTime.setAttribute("class", "time")
    newCandy.setAttribute("class", "candy")

    newNum.textContent = pokemon.num;
    newName.textContent = pokemon.name;
    newCandy.textContent = pokemon.candy;
    newSpawnTime.textContent = pokemon.spawn_time;
    

    newItem.appendChild(newImg);
    newItem.appendChild(newBox);

    newBox.appendChild(newNum);
    newBox.appendChild(newName);
    newBox.appendChild(newCandy);
    newBox.appendChild(newSpawnTime);
    newBox.appendChild(newSubList);

    

    elList.appendChild(newItem)
}

