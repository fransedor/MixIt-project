class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    
    render() {
        this.innerHTML= 
        `
        <style>
        .hero {
            font-family: 'Lato', sans-serif;
            font-size: 32px;
            text-align: center;
            width: 70%;
            margin: 40px auto;
            height: 400px;
            display: block;
        }
        .hero h1 {
            margin: 0;
            padding: 20px 40px;
            color: black;
        }
        @media screen and (max-width: 750px) {
            .hero {
                font-size: 24px;
                height: auto;
                width: 90%;
            }
        }
        </style>
        
        <div class="title">
            <h1>Find the best cocktail you can make at home</h1>
        </div>`
        ;
    }
}
customElements.define('hero-title', Hero);
export default Hero;