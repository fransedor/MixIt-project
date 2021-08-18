import img from "./images/cocktail-image.jpg";

class BodyBackground extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <style>
        body-background img {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.4;
            z-index: 1;
        }
        </style>
        <img src=${img}>
        `
    }
}
customElements.define('body-background', BodyBackground);
export default BodyBackground;