exports.randomThing = () => {
    const things = [
        'Arf arf!', 'Woof!', '**Wiggle Tail**'
    ] 
    const ramdomIndex = Math.floor(Math.random() * things.length)
    return things[ramdomIndex]
}