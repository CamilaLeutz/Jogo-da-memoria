const grid = document.querySelector(".grid")

const characters = [
    "beth",
    "jerry",
    "jessica",
    "morty",
    "pessoa-passaro",
    "pickle-rick",
    "rick",
    "summer",
    "meeseeks",
    "scroopy"
]


const createElement = (tag, className) => {  
     const element = document.createElement(tag)
     element.className = className
     return element
}


const creatCards = (character) => {
    const card = createElement("div", "card")
    const front = createElement("div", "face front")
    const back = createElement("div", "face back")

    front.style.backgroundImage = `url('../assets/${character}.png')`

    card.appendChild(front)
    card.appendChild(back)
    return card

}

const loadGame = () => {
    characters.forEach((character) => {
        
        const card = creatCards(character)
        grid.appendChild(card)


    })
}
loadGame()