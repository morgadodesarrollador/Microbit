let latidos: number
basic.forever(function () {
  latidos = randint(1, 5)  
  basic.showNumber(latidos)
  basic.pause(1000)
  basic.clearScreen()

  for (let i = 0; i<latidos; i++){
      basic.showIcon(IconNames.Heart)
      basic.pause(300)
      basic.clearScreen()
      basic.pause(300)
  }