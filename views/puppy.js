const dogBreeds = require('dog-breeds');
const dogNames = require('dog-names')


let doSomething = () => {
    const things = [
        'Arf arf!', 'Woof!', '**Wiggles Tail**', '**Makes big puppy eyes**' 
    ] 
    const ramdomIndex = Math.floor(Math.random() * things.length)
    return things[ramdomIndex]
}

exports.get = () => {
    const breed = dogBreeds.random()
    return `
    <div style="color: #e8a0ad; width: 70%; margin-left: 25%; padding-top: 50px; font-family: courier">
    
    Hi, I'm <span style="color: teal">${dogNames.allRandom()}</span>, your smol puppy companion!   <br>
    <p style="padding-left:250px; color: brown">
    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0; &#xA0;&#xA0 &#xA0;&#xA0;&#xA0;&#xA0;__&#xA0;&#xA0;&#xA0;&#xA0;__<br>
    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0; &#xA0;&#xA0 &#xA0;&#xA0;&#xA0;&#xA0;\\/----\\/<br>
    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0; &#xA0;&#xA0 &#xA0;&#xA0;&#xA0;&#xA0; \\0&#xA0;&#xA0;0/&#xA0;&#xA0;    ${doSomething()}<br>
    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0; &#xA0;&#xA0  &#xA0;&#xA0;&#xA0;&#xA0; _\\&#xA0;&#xA0;/_<br>
    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0; &#xA0;&#xA0 &#xA0;&#xA0;&#xA0;_|&#xA0;&#xA0;\\/&#xA0;&#xA0;|_<br>
    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0;&#xA0;&#xA0 &#xA0;&#xA0;   |&#xA0;|&#xA0;|&#xA0;&#xA0;|&#xA0;|&#xA0;| <br>
    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0; &#xA0;&#xA0 _|&#xA0;&#xA0;|&#xA0;|&#xA0;&#xA0;|&#xA0;|&#xA0;|_ <br>
    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0; &#xA0;&#xA0"---&#xA0;|_|--|_|---"<br>
    </p>   
    <br>
    I am a <span style="color: teal">${breed.name}</span> from <span style="color: teal">${breed.origin}</span>. <br>
    <br>
    One day, when I'm grown up, I'll look like this<br>
    <p style="padding-left: 100px; font-size: 3rem">	
    &#10164;<br>
    <img style="width: 30%; margin-left: 50px; padding: 5px; border: 8px dashed white; background: teal" src="${breed.imageURL || 'https://ma-hub.imgix.net/wp-images/2019/11/17203220/final-cut-pro-missing-file.jpg' } " alt="${breed.name}"/>
    </p>
    Click <a style="color: teal; text-decoration: none" href="/puppy">here</a> to meet another puppy companion!
    </div>

    `
}