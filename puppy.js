const thingsThatPuppersDo = require('./thingsThatPuppersDo');
const dogBreeds = require('dog-breeds');


exports.getPuppy = () => {
    const breed = dogBreeds.random()
    return `
    
    <div style="width: 50%; margin: auto; padding-top: 50px; font-family: monospace">
    
    Hi, I'm your smol puppy companion!   <br>
    <p style="padding-left:250px; color: brown">
    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0; &#xA0;&#xA0 &#xA0;&#xA0;&#xA0;&#xA0;__&#xA0;&#xA0;&#xA0;&#xA0;__<br>

    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0; &#xA0;&#xA0 &#xA0;&#xA0;&#xA0;&#xA0;\\/----\\/<br>

    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0; &#xA0;&#xA0 &#xA0;&#xA0;&#xA0;&#xA0; \\0&#xA0;&#xA0;0/&#xA0;&#xA0;    ${thingsThatPuppersDo.randomThing()}<br>

    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0; &#xA0;&#xA0  &#xA0;&#xA0;&#xA0;&#xA0; _\\&#xA0;&#xA0;/_<br>

    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0; &#xA0;&#xA0 &#xA0;&#xA0;&#xA0;_|&#xA0;&#xA0;\\/&#xA0;&#xA0;|_<br>

    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0;&#xA0;&#xA0 &#xA0;&#xA0;   |&#xA0;|&#xA0;|&#xA0;&#xA0;|&#xA0;|&#xA0;| <br>

    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0; &#xA0;&#xA0 _|&#xA0;&#xA0;|&#xA0;|&#xA0;&#xA0;|&#xA0;|&#xA0;|_ <br>

    &#xA0;&#xA0 &#xA0;&#xA0;&#xA0; &#xA0;&#xA0"---&#xA0;|_|--|_|---"<br>
&#xA0;
</p>   
<br>
    I am a ${breed.name}. Arf,  <a href="${breed.imageURL}">Click here</a> to see how I'll look one day when I'm grown up.<br></section>
    `
}