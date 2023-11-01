canvas = document.getElementById('myCanvas')
ctx = canvas.getContext('2d')

//Crie um array "nasaMarsImageArray" e guarde todos os nomes dos arquivos de imagem.

nasaMarsImageArray = [
  'nasa_image_1.jpg',
  'nasa_image_2.jpeg ',
  'nasa_image_3.jpg',
  'nasa_image_4.jpg'
]

//Gere um número aleatório e o guarde na variável "randomNumber"

randomNumber = Math.floor(Math.random() * 4)

console.log(randomNumber)
roverWidth = 100
roverHeight = 90

/*Passe esse randomNumber como índice do array e atualize a variável backgroundImagecom o seguinte*/

backgroundImage = nasaMarsImageArray[randomNumber]

//coloque a variável backgroundImage no console para ver quando a imagem chega, toda vez que recarregamos a página.

console.log('backgroundImage =' + backgroundImage)

roverImage = 'rover.png'

roverX = 10
roverY = 10

function add() {
  backgroundImgTag = new Image() //definindo uma variável com uma nova imagem
  backgroundImgTag.onload = uploadBackground // ajustando uma função, fazendo onload desta variável
  backgroundImgTag.src = backgroundImage // carregando uma imagem

  roverImgTag = new Image() //definindo uma variável com uma nova imagem
  roverImgTag.onload = uploadRover // ajustando uma função, fazendo onload desta variável
  roverImgTag.src = roverImage // carregando uma imagem
}

function uploadBackground() {
  ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height)
}

function uploadRover() {
  ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight)
}

window.addEventListener('keydown', my_keydown)

function my_keydown(e) {
  keyPressed = e.keyCode
  console.log(keyPressed)
  if (keyPressed == '38') {
    up()
    console.log('cima')
  }
  if (keyPressed == '40') {
    down()
    console.log('baixo')
  }
  if (keyPressed == '37') {
    left()
    console.log('esquerda')
  }
  if (keyPressed == '39') {
    right()
    console.log('direita')
  }
}

//Adicione o código para a função up():

function up() {
  if (roverY > 0) {
    roverY = roverY - 10
    console.log(
      ' Quando a seta para cima é pressionada, x =' + roverX + 'I y =' + roverY
    )
    uploadBackground()
    uploadRover()
  }
}

//Adicione o código para a função down():

function down() {
  if (roverX > 0) {
    roverY = roverY + 10
    console.log(
      'Quando a seta para baixo é pressionada, x = ' + roverX + 'I y =' + roverY
    )
    uploadBackground()
    uploadRover()
  }
}

//Adicione o código para a função right():

function right() {
  if (roverX <= 700) {
    roverX = roverX = 10
    console.log(
      ' Quando a seta para a direita é pressionada , x =' +
        roverX +
        ' I y =' +
        roverY
    )
    uploadBackground()
    uploadRover()
  }
}

//Adicione o código para a função left():

function left() {
  if (roverX >= 0) {
    roverX = roverX - 10
    console.log(
      'Quando a seta a esquerda é pressionada , x =' +
        roverx +
        'I y = ' +
        roverY
    )
    uploadBackground()
    uploadRover()
  }
}
