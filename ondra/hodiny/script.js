setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')  
const secondHand = document.querySelector('[data-second-hand]')

function setRotation(hand, rotation) {
    hand.style.setProperty('--rotation', rotation * 360 )
}

function setClock() {
    const currentDate = new Date()
    const seconds = currentDate.getSeconds() / 60
    const minutes = (seconds + currentDate.getMinutes()) / 60
    const hours = (minutes + currentDate.getHours()) / 12

    setRotation(secondHand, seconds)
    setRotation(minuteHand, minutes)
    setRotation(hourHand, hours)
}

setClock()
