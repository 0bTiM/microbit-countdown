let selectedTimer = 0
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

const showTimerName = () => basic.showString(timers[selectedTimer].name)

// Cycle through the Timers
// input.onButtonPressed(Button.AB, () => {
//     selectedTimer = (selectedTimer + 1) % 4
//     showTimerName()
// })

// Reset
input.onButtonPressed(Button.B, () => control.reset())

// Start
input.onButtonPressed(Button.A, () => {
    let delay = timers[selectedTimer].time * 1000 / 5
    for (let i = 5; i >=0 ; i--) {
        showCounterPhase[i]()
        basic.pause(delay)
    }
})

// On power up, show selected timer
showTimerName()

