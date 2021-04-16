exports.get = () => {
    return `
    <style>
    
    nav {
        z-index: 500;
        background: pink;
        border-radius: 50%;
        font-family: Courier;
        position:fixed; 
        width: 28vh; 
        height: 28vh; 
        top: 25vh; 
        left: -3vw;
    }

    nav div {
        position: relative;
        left: 4vw;
        top: 4vw;
    }

    nav ul {
        position: relative;
        left: -2vw;
    }
    nav span {
        font-size: 1.4rem;
        color: teal;
    }
    ul, ul li {
        list-style: none
    }
    ul li a {
        text-decoration: none;
        color: white;
    }
    ul li a:hover {
        color: teal;
    }
    </style>
    <nav>
    <div>
    <span>Navigation:</span>
    <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/puppy">Find a companion</a></li>
    <li><a href="/all-puppies">Explore Dog Breeds</a></li>
    </ul>
    </div>

    </nav>
    
    `
}