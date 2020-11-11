radio.onReceivedNumber(function (receivedNumber) {
    list.push(radio.receivedPacket(RadioPacketProperty.SerialNumber))
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(list[0])
})
let list: number[] = []
radio.setGroup(1)
radio.setTransmitSerialNumber(true)
radio.sendNumber(2)
list = []
