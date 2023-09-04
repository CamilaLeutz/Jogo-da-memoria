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

const revealCard = ({ target }) => {
    target.parentNode.classList.add("reveal-card")
}

const creatCards = (character) => {
    const card = createElement("div", "card")
    const front = createElement("div", "face front")
    const back = createElement("div", "face back")

    front.style.backgroundImage = `url('../assets/${character}.png')`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener("click", revealCard);


    return card
}

const loadGame = () => {

const duplicateCharacters = [ ... characters, ... characters ]

const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5)

shuffledArray.forEach((character) => {
        const card = creatCards(character)
        grid.appendChild(card)
    })
}

loadGame()