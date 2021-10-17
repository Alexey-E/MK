function main() {
  const $arena = document.querySelector('.arenas')
  
  const $randomButton = document.querySelector('.button')
  
  const player1 = {
    player: 1,
    name: "sonya",
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['fist', 'fist', 'leg'],
    attack: () => console.log(`${this.name} fight...`)
  }

  const player2 = {
    player: 2,
    name: "kitana",
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['fist', 'fist', 'leg'],
    attack: () => console.log(`${this.name} fight...`)
  }

  const playersArray = [player1, player2]

  const createElement = (className, tag = 'div') => {
    const newElement = document.createElement(tag)
    if (className) newElement.classList.add(className)
    return newElement
  }

  const createPlayer = (playerObject) => {
    const $player = createElement(`player${playerObject.player}`)
    const $progressbar = createElement('progressbar')
    const $life = createElement('life')
    $life.style.width = `${playerObject.hp}%`
    const $name = createElement('name')
    $name.innerText = playerObject.name
    const $character = createElement('character')
    const $img = createElement('', 'img')
    $img.src = playerObject.img

    $progressbar.appendChild($life)
    $progressbar.appendChild($name)
    $character.appendChild($img)
    $player.appendChild($progressbar)
    $player.appendChild($character)

    return $player
  }

  const playerWin = (name) => {
    const $loseTitle = createElement('loseTitle')
    $loseTitle.innerText = `${name} wins`
    return $loseTitle
  }

  const changeHP = (playersArray) => () => {
    const playerObject = playersArray[Math.round(Math.random())]
    const $playerLife = document.querySelector(`.player${playerObject.player} .life`)
    playerObject.hp -= Math.round(Math.random()*20)
    if (playerObject.hp <= 0) {
      playerObject.hp = 0
      $arena.appendChild(playerWin(playersArray.filter(player => player.hp)[0].name))
      $randomButton.disabled = true
    }
    $playerLife.style.width = `${playerObject.hp}%`
  }

  $randomButton.addEventListener('click', changeHP(playersArray))

  $arena.appendChild(createPlayer(player1))
  $arena.appendChild(createPlayer(player2))
}
document.addEventListener('DOMContentLoaded', main )