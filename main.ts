radio.onReceivedString(function (receivedString) {
    if (receivedString == "g") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
    if (receivedString == "r") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    }
    if (receivedString == "b") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
    }
    if (receivedString == "l") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    }
    if (receivedString == "s") {
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (receivedString == "u") {
        if (각도 > 40) {
            각도 += -1
            maqueen.servoRun(maqueen.Servos.S1, 각도)
            basic.pause(10)
        }
    }
    if (receivedString == "d") {
        if (각도 < 130) {
            각도 += 1
            maqueen.servoRun(maqueen.Servos.S1, 각도)
            basic.pause(10)
        }
    }
})
let 각도 = 0
radio.setGroup(1)
