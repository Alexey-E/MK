const player1 = {
  name: "sonya",
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ['fist', 'fist', 'leg'],
  attack: () => console.log(`${this.name} fight...`)
}

const player2 = {
  name: "kitana",
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['fist', 'fist', 'leg'],
  attack: () => console.log(`${this.name} fight...`)
}


const createElement = (className, tag = 'div') => {
  const newElement = document.createElement(tag)
  if (className) newElement.classList.add(className)
  return newElement
}

const $arena = document.querySelector('.arenas')
const createPlayer = ( name, playerObject) => {
    const $player = createElement(name)
    const $progressbar = createElement('progressbar')
    const $life = createElement('life')
    $life.style.width = `${playerObject.hp}%`
    const $name = createElement('name')
    $name.innerText = playerObject.name.toUpperCase()
    const $character = createElement('character')
    const $img = createElement( '', 'img')
    $img.src = playerObject.img

    $progressbar.appendChild($life)
    $progressbar.appendChild($name)
    $character.appendChild($img)
    $player.appendChild($progressbar)
    $player.appendChild($character)

    $arena.appendChild($player)
}

createPlayer('player1', player1)
createPlayer('player2', player2)