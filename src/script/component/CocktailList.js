import "./CocktailItem.js";

class CocktailList extends HTMLElement {
    
    set drinks(drinks) {
        this._drinks = drinks;
        this.render();
    }
    render() {
        this.innerHTML = "";
        
        
        console.log(this._drinks);
        this._drinks.forEach(drink => {
            const cocktails = document.createElement('cocktail-item');
            cocktails.drink = drink;
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