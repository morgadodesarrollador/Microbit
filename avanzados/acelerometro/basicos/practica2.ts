let velX: number
let velY: number
basic.forever(function () {
    velX = input.acceleration(Dimension.X)
    velY = input.acceleration(Dimension.Y)
    if ((velY > -200) && (velY<200)){
        if (velX == -1023)
            basic.showArrow(ArrowNames.West)
        else if (velX == 1023){
                basic.showArrow(ArrowNames.East)
        }
