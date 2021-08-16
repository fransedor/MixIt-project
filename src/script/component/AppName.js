class AppName extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=MonteCarlo&display=swap');

        header {
        font-family: 'MonteCarlo', cursive;
        font-size: 40px;
        }
        header p {
            padding: 8px 40px;
            margin: 0;
        }
        </style>
        <p>Mix It!</p>
        `
    }
}
customElements.define('app-name', AppName);

