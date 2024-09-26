const timers = [
    {
        name: "A",
        time: 5
    },
    {
        name: "B",
        time: 7 
    },
    {
        name: "C",
        time: 11
    },
    {
        name: "D",
        time: 13
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

// Cycle through the Timers
input.onButtonPressed(Button.AB, () => {
    selectedTimer = (selectedTimer + 1) % 4
    showTimerName()
})

// Reset
input.onButtonPressed(Button.B, showTimerName)

// Start
input.onButtonPressed(Button.A, () => {
    let delay = timers[selectedTimer].time * 1000 / 5
    for (let i = 5; i >= 0; i--) {
        showCounterPhase[i]()
        basic.pause(delay)
    }
})

// On power up, show selected timer
showTimerName()

