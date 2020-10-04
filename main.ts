let rps = 0
/**
 */
input.onButtonPressed(Button.A, function () {
    rps = randint(1, 6)
    if (rps == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (rps == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . . #
            # # . # .
            . . # # .
            # # . # .
            . . . . #
            `)
    }
})
