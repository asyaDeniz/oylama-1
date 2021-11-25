input.onButtonPressed(Button.A, function () {
    evet += 1
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.pause(200)
    basic.showString("?")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("A=")
    basic.showNumber(evet)
    basic.showString("B=")
    basic.showNumber(hayır)
    if (evet > hayır) {
        basic.showString("EVET KAZANDI")
    } else if (evet < hayır) {
        basic.showString("HAYIR KAZANMADI")
    } else {
        basic.showString("OYLAR EŞİT")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.pause(200)
    basic.showString("?")
})
let evet = 0
let hayır = 0
hayır = 0
evet = 0
basic.showString("A=EVET")
basic.pause(200)
basic.showString("B=HAYIR")
basic.forever(function () {
	
})
