var $ = require('jquery');

class CocktailItem extends HTMLElement {
    set drink(drink) {
        this._drink = drink;
        this.render();
    }
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
    get drinkId() {
        return this._drink.idDrink;
    }
    render() {
        this.innerHTML = `
        <style>
        cocktail-item {
            background-color: white;    
            text-align: center;
            border-radius: 8px;
            box-shadow: 5px 8px 10px rgba(0,0,0,0.5);
            margin: 10px 0;
        }
        cocktail-item img {
            width: 250px;
            border-radius: 8px 8px 0 0;
        }
        cocktail-item h3 {
            padding: 16px 0;
            margin: 0;
            font-size: 16px;
        }
        cocktail-item button {
            background-color: #75DBCD;
            padding: 8px 16px;
            margin: 16px 0 16px 0;
            border-radius: 8px;
            border: none;
            color: white;
            font-weight: bold;
        }
        cocktail-item button:hover {
            background-color: #5DAD9A;
            cursor: pointer;
        }
        </style>
    
        <img src=${this._drink.strDrinkThumb} alt="cocktail-name">
        <h3>${this._drink.strDrink}</h3>
        <button id="drink-details">Make this</button>`

        this.querySelector('#drink-details').addEventListener('click', this._clickEvent);
    }
}
customElements.define('cocktail-item', CocktailItem);