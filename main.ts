const timers = [
    {
        name: "A",
        time: 19
    },
    {
        name: "B",
        time: 59
    },
    {
        name: "C",
        time: 31
    },
    {
        name: "D",
        time: 47
    }
]

const showCounterPhase = [
    () => basic.showLeds(`
    .....
    .#.#.
    .....
    #...#
    .###.`
    ),
    () => basic.showLeds(`
    .....
    .....
    .....
    .....
    #####`
    ),
    () => basic.showLeds(`
    .....
    .....
    .....
    #####
    #####`
    ),
    () => basic.showLeds(`
    .....
    .....
    #####
    #####
    #####`
    ),
    () => basic.showLeds(`
    .....
    #####
    #####
    #####
    #####`
    ),
    () => basic.showLeds(`
    #####
    #####
    #####
    #####
    #####`
    )
]

let selectedTimer = 0
const showTimerName = () => basic.showString(timers[selectedTimer].name)
let locked = false

// Reset Timer
input.onButtonPressed(Button.AB, () => {
    control.reset()
})

// Reset
input.onButtonPressed(Button.B, () => {
    if (!locked) {
        selectedTimer = (selectedTimer + 1) % 4
        showTimerName()
    }
})

// Start
input.onButtonPressed(Button.A, () => {
    if (!locked) {
        locked = true
        let delay = timers[selectedTimer].time * 1000 / 5
        for (let i = 5; i >=0 ; i--) {
            showCounterPhase[i]()
            basic.pause(delay)
        }
        locked = false
    }
})

// On power up, show selected timer
showTimerName()

