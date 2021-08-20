import "./CocktailItem.js";
import DataSource from "../data/DataSource.js";
import "./CocktailDetails.js";
var $ = require('jquery');

class CocktailList extends HTMLElement {
    
    
    set drinks(drinks) {
        this._drinks = drinks;
        this.render();
    }
    render() {
        this.innerHTML = "";
        
        
        this._drinks.forEach(drink => {
            const cocktails = document.createElement('cocktail-item');
            cocktails.drink = drink;
            cocktails.clickEvent = () => {
                DataSource.drinkDetails(cocktails.drinkId)
                .then(result => {
                    const cocktailDetails = document.createElement('cocktail-details');
                    cocktailDetails.details = result;
                    $('body').append(cocktailDetails);
                })}
            this.appendChild(cocktails);
        });

    }
    renderError(message) {
        this.innerHTML = `
        <style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
         }
         <style>`;
         this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}
customElements.define('cocktail-list', CocktailList);

export default CocktailList;