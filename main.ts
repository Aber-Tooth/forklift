radio.onReceivedNumber(function (receivedNumber) {
    Action = receivedNumber
})
function Forward () {
    wuKong.setAllMotor(100, 100)
}
function Forkdown () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
}
function Reverse () {
    wuKong.setAllMotor(-100, -100)
}
function Forkup () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
let Action = 0
joystickbit.initJoystickBit()
radio.setGroup(21)
basic.showLeds(`
    . # . # .
    . . . . .
    # . . . #
    . # . # .
    . . # . .
    `)
basic.forever(function () {
	
})
