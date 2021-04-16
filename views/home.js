exports.get = () => {
    return `
    <style>
    * {
        font-family: Courier New;
    }
    section {
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: -1;
    }
        .iframe-wrapper {
            position: absolute;
            height: 100px;
            width: 100px;
            border-radius: 50%;
            overflow: hidden
        }
        .gif-content {
            position: absolute;
            top: -25px;
        }
        .to-the-left {
            left: -25%;
        }
        .top-center-left {
            top: 10vh;
            left: 19vw;
        }
        .top-left {
            top: 3vh;
            left: 4vw;
        }
        .bottom-left {
            top: 70vh;
            left: 8vw;
        }

        .bottom-center-left {
            top: 50vh;
            left: 30vw;
        }
        .bottom-center-right {
            top: 55vh;
            left: 75vw;
        }
        .top-right {
            top: 5vh;
            left: 80vw;
        }
    </style>

    <section>
    <div style="position: relative"> 
    <div class="iframe-wrapper top-left">
    <iframe  src="https://giphy.com/embed/Lr2YomhIBU8LK" width="150%" height="auto" frameBorder="0" class="giphy-embed gif-content to-the-left" allowFullScreen></iframe>
    </div>
    <div class="iframe-wrapper top-center-left">
    <iframe src="https://giphy.com/embed/V3Z76ctCO3jG0" width="150%" height="auto" frameBorder="0" class="giphy-embed gif-content " allowFullScreen></iframe></div>
    <div class="iframe-wrapper bottom-left">
    <iframe src="https://giphy.com/embed/ctUtYKSfmvJOE" width="150%" height="auto" frameBorder="0" class="giphy-embed gif-content to-the-left" allowFullScreen></iframe></div>
    <div class="iframe-wrapper bottom-center-left">
    <iframe src="https://giphy.com/embed/XugjYxgqhuotW" width="150%" height="auto" frameBorder="0" class="giphy-embed gif-content  to-the-left" allowFullScreen></iframe></div>
    <div class="iframe-wrapper bottom-center-right">
    <iframe src="https://giphy.com/embed/rmvMh6rmX3x7O" width="150%" height="auto" frameBorder="0" class="giphy-embed gif-content" allowFullScreen></iframe></div>
    </div>
    <div class="iframe-wrapper top-right">
    <iframe src="https://giphy.com/embed/3o6ZtaO9BZHcOjmErm" width="150%" height="auto" frameBorder="0" class="giphy-embed gif-content to-the-left" allowFullScreen></iframe></div>
    </div>
    </div>
    
    </section>
    
    <div style="color: maroon; font-size: 1.3rem; margin:auto; width: 50%; padding-top: 200px;">
    <h1 style="color: pink; font-size: 2rem">Oh Hi! Great that you are here!!! 🐶 </h1>
    <p>
    On this page you can meet a lot of fun little puppies because we all need a companion in these quarantined times.
    Click <a style="color: pink" href="/puppy">here</a> to get to know your puppy companion. 🦮 🐕‍🦺 🐩 🐕
    </p>
    </div>
    
    `

}