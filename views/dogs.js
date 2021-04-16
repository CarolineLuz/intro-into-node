const dogBreeds = require('dog-breeds');

let getAllDogs = () => {
    return  dogBreeds.all.map(function(x) {
        let image = `<img src="${x.imageURL || 'https://ma-hub.imgix.net/wp-images/2019/11/17203220/final-cut-pro-missing-file.jpg'}"></img>`
        let title = `<span class="larger"> ${x.name} </span>`
        const country = `<span style="display: block">Country of origin: ${x.origin}</span>`
        return '<p >' + image + title + country +  '</p>'
    })
};

exports.get = () => {
    return `
    <style>
    body {
        font-family: Courier;
    }
    p .larger {
        font-size: 1.8rem;
        display: inline;
        color: pink;
        font-weight: bold;
    }
    p {
        width: 50%;
        margin: auto;
        padding: 10px;
        position: relative;
        height: 107px;
        padding-bottom: 40px;
        border-bottom: 2px dashed pink;
        color: teal;
    }
    img {
        height: 100px;
        position: absolute;
        right: 5px;
        width: auto;
        padding: 3px;
        border: 3px dashed white;
        background: teal;
    }
    .sidepanel {
        height: 100vh; 
        width: 5vw;
        position: fixed;
        top: 0;
        left: 0;
        background: white;
    }
    </style>
    <div style="padding-top: 50px" >
        ${getAllDogs()}
    </div>
    <div class="sidepanel"></div>`

}