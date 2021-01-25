let velX: number
let velY: number
basic.forever(function () {
    velX = input.acceleration(Dimension.X)
    velY = input.acceleration(Dimension.Y)
    if (velX < -200){
        basic.showArrow(ArrowNames.West)
    }else if (velX > 200){
        basic.showArrow(ArrowNames.East)
    } else {
        basic.clearScreen()
    }

 
})
