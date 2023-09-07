const grid = document.querySelector(".grid") //mapeando a div que esta com o jogo todo dentro
const spanPlayer = document.querySelector(".player")
const timer = document.querySelector(".timer")


const characters = [ //arrary dos characters
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

const createElement = (tag, className) => {   //criando elemento
     const element = document.createElement(tag) //adc qual elemento que é no caso a tag
     element.className = className //adc className no elemento
     return element
}

let firstCard = " "
let secondCard = " "

const checkEndGame = () => { //  função pra finalizar o jogo
    const disableCards = document.querySelectorAll(".disableCard")

    if(disableCards.length === 20 ){ //se as 20 cartas estiverem com o disableCard acionados quer dizer que o  jogo foi ganho
       clearInterval(this.loop) //para o tempo
        alert(`Parabéns ${spanPlayer.innerHTML}! Seu jogo chegou ao fim! Seu tempo foi ${timer.innerHTML}!`)
    }
}

const checkCards = () =>{ // função pra checar as cartas se é igual a primeira ou não

    const firstCharacter = firstCard.getAttribute("data-character") // primeira carta
    const secondCharacter = secondCard.getAttribute("data-character") //segunda carta

    if( firstCharacter === secondCharacter){
        firstCard.firstChild.classList.add("disableCard") //adc a class com classlist.add a class disableCard
        secondCard.firstChild.classList.add("disableCard")
            firstCard = " " //deixando a carta vazia
            secondCard = " "
            
    
        checkEndGame()

    } else{
        setTimeout(()=>{ // dando um tempo maior pras duas cartas virarem
            firstCard.classList.remove("reveal-card") //removendo a class de revirar a carta
            secondCard.classList.remove("reveal-card")

            firstCard = " "
            secondCard = " "
        }, 700) //tempo de virada da carta 
    }
} 

const revealCard = ({ target }) => { //função pra revelar a carta

    if( target.parentNode.className.includes("reveal-card")){ //target.parentNode é a carta pai 
        return
    }

    if (firstCard === " "){
        target.parentNode.classList.add("reveal-card")
        firstCard = target.parentNode
    } else if ( secondCard === " ") {
        target.parentNode.classList.add("reveal-card")
        secondCard = target.parentNode
    }
        checkCards()
    }
    
const creatCards = (character) => { //função pra criar cada carta com a ajuda do array character
    const card = createElement("div", "card") //carta em si criada
    const front = createElement("div", "face front") //parte da frente da carta
    const back = createElement("div", "face back") //parte de tras da carta

    front.style.backgroundImage = `url('../assets/${character}.png')` //aqui esta dando cada frente de acordo com os personagens do array

    card.appendChild(front) //adc filhos aos pais
    card.appendChild(back)

    card.addEventListener("click", revealCard); //evento que vai revelar a carta ao ser clicada
    card.setAttribute("data-character", character)

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

const startTimer = () => {

   this.loop = setInterval(() => {
        const currentTimer = +timer.innerHTML 
        timer.innerHTML = currentTimer  + 1

    }, 1000)

}

window.onload = () => {

    const playerName = localStorage.getItem("player")
    spanPlayer.innerHTML = playerName
    startTimer()
    loadGame()
}

