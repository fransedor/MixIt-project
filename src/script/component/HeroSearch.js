class HeroSearch extends HTMLElement {
    // connectedCallback() {
    //     this.render();
    // }
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
    get value() {
        return this.querySelector('#ingredient').value;
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
            color: white;
            background-color: #0077b6;
        }
        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: white;
            opacity: 1; /* Firefox */
          }
          
          :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: white;
          }
          
          ::-ms-input-placeholder { /* Microsoft Edge */
            color: white;
          }
        .search input:focus {
            outline: none;
        }
        .search button {
            font-size: 20px;
            border-radius: 16px;
            padding: 12px 24px;
            background-color: #0077b6;
            font-weight: bold;
            color: white;
            border: none;
        }
        .search button:hover {
            background-color: #00b4d8;
            cursor: pointer;
        }
        </style>
        <div class="search">
                <input type="search" name="Ingredient" id="ingredient" placeholder="Ingredients...">
                <button id="searchIngredient" type="submit">Search</button>
        </div>`
        this.querySelector('#searchIngredient').addEventListener('click', this._clickEvent);
    }
}
customElements.define('hero-search', HeroSearch);
export default HeroSearch;