const pupperThings = require('./pupperThings');
const dogBreeds = require('dog-breeds');
const dogNames = require('dog-names')

exports.getPuppy = () => {
    const breed = dogBreeds.random()
    return `
    <div style="color: #e8a0ad; width: 50%; margin: auto; padding-top: 50px; font-family: courier">
    
    Hi, I'm ${dogNames.allRandom()}, your smol puppy companion!   <br>
    <p style="padding-left:250px; color: brown">
    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0; &#xA0;&#xA0 &#xA0;&#xA0;&#xA0;&#xA0;__&#xA0;&#xA0;&#xA0;&#xA0;__<br>
    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0; &#xA0;&#xA0 &#xA0;&#xA0;&#xA0;&#xA0;\\/----\\/<br>
    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0; &#xA0;&#xA0 &#xA0;&#xA0;&#xA0;&#xA0; \\0&#xA0;&#xA0;0/&#xA0;&#xA0;    ${pupperThings.doSomething()}<br>
    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0; &#xA0;&#xA0  &#xA0;&#xA0;&#xA0;&#xA0; _\\&#xA0;&#xA0;/_<br>
    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0; &#xA0;&#xA0 &#xA0;&#xA0;&#xA0;_|&#xA0;&#xA0;\\/&#xA0;&#xA0;|_<br>
    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0;&#xA0;&#xA0 &#xA0;&#xA0;   |&#xA0;|&#xA0;|&#xA0;&#xA0;|&#xA0;|&#xA0;| <br>
    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0; &#xA0;&#xA0 _|&#xA0;&#xA0;|&#xA0;|&#xA0;&#xA0;|&#xA0;|&#xA0;|_ <br>
    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0; &#xA0;&#xA0"---&#xA0;|_|--|_|---"<br>
    </p>   
    <br>
    I am a ${breed.name} from ${breed.origin}. <br>
    <br>
    One day, when I'm grown up, I'll look like this<br>
    <p style="padding-left: 100px; font-size: 3rem">	
    &#10164;<br>
    <img style="width: 30%; margin-left: 50px; padding: 5px; border: 1px dashed brown" src="${breed.imageURL}" alt="${breed.name}"/>
    </p>
    Click <a href="/puppy">here</a> to meet another puppy companion!
    </div>

    `
}