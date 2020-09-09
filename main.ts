// Click the comment icons to see Coding Outcomes by grade level!
input.onButtonPressed(Button.A, function () {
    // Repeating Events
    // 
    // Grade 3, 3.1: solve problems and create computational representations of mathematical situations by writing and executing code, including code that involves sequential, concurrent, and repeating events
    // 
    // 3.2 - Modify this code by:
    // - Change the number of times this code repeats
    // - What is the biggest number you can use?
    for (let index = 0; index < 4; index++) {
        // Sequential Events
        // 
        // Grade 1, 3.1: solve problems and create computational representations of mathematical situations by writing and executing code, including code that involves sequential events
        // 
        // 3.2 - Modify this code by:
        // - Change the look of your characters
        // - Adding blocks to your animation
        // 
        basic.showLeds(`
            . # . . .
            # # . . .
            . # . . #
            . # # # .
            . # . # .
            `)
        basic.showLeds(`
            . # . . .
            # # . . .
            . # . . .
            . # # # #
            . # . # .
            `)
    }
})
// A simple way to show your times tables using loops and sequences!
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 4; index++) {
        basic.showNumber(index * 5)
    }
})
// Concurrent Events
// 
// Grade 2, 3.1: solve problems and create computational representations of mathematical situations by writing and executing code, including code that involves sequential and concurrent events
// 
// 3.2 - Modify this code by:
// - Add another type of "listener"
// - What types are there?
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
    }
})
