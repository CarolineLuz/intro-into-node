exports.doSomething = () => {
    const things = [
        'Arf arf!', 'Woof!', '**Wiggles Tail**', '**Makes big puppy eyes**' 
    ] 
    const ramdomIndex = Math.floor(Math.random() * things.length)
    return things[ramdomIndex]
}