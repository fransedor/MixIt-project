var $ = require('jquery');
class HeroSearch extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
    get value() {
        // return this.querySelector('#ingredient').value;
        return $("#ingredient").prop("value");
    }
    render() {
        this.innerHTML = `
        <style>
        .search input {
            width: 50%;
            font-size: 20px;
            border: none;
            padding: 12px 24px;
            margin: 40px 0px;
            border-radius: 16px;
        }
        .search input:focus {
            outline: none;
        }
        .search button {
            font-size: 20px;
            border-radius: 16px;
            padding: 12px 24px;
            background-color: #75DBCD;
            font-weight: bold;
            color: white;
            border: none;
        }
        .search button:hover {
            background-color: #5DAD9A;
            cursor: pointer;
        }
        </style>
        <div class="search">
                <input type="search" name="Ingredient" id="ingredient" placeholder="Ingredients...">
                <button id="searchIngredient" type="submit">Search</button>
        </div>`
        $("#searchIngredient").on('click', this._clickEvent);
    }
}
customElements.define('hero-search', HeroSearch);
export default HeroSearch;