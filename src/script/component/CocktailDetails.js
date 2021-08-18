var $ = require('jquery');

class CocktailDetails extends HTMLElement {
    
    set details(details) {
        this._details = details;
        this.render();
    }
    get details() {
        return this._details;
    }
   
    render() {
        const details = this._details[0];

        
        this.innerHTML= `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');

            .background {
                background-color: rgba(0,0,0, 0.5);
                position: fixed;
                top: 0;
                width: 100%;
                height: 100%;
            }
            .details {
                padding: 16px 20px;
                position: fixed;
                text-align: center;
                background-color: #75DBCD;
                border-radius: 16px;
                top: 53%;
                left: 50%;
                font-family: 'Lato', sans-serif;

                transform: translate(-50%, -50%);
            }
            .details img {
                width: 200px;
                object-fit: contain;
                border-radius: 16px;
            }
            .details h2 {
                margin: 0;
                margin-bottom: 16px;
            }
            
            .details p {
                width: 80%;
                margin: 16px auto;
            }
            .details button {
                display:block;
                margin: 16px auto;
                padding: 8px 16px;
                border-radius: 8px;
                font-weight: bold;
                background-color: #E76F51;
                color: white;
                border:none;
            }
            .details button:hover {
                cursor: pointer;
                background-color: #e76f51d3;
            }
        </style>

        <div class="background">
            <div class="details">
                <h2>${this._details[0].strDrink}</h2>
                <img src=${this._details[0].strDrinkThumb} alt="cocktail-details">
                <h3>Ingredients:</h3>
                <p id="list"><p>
                <p>${this._details[0].strInstructions}
                <button id="close-details">Close</button>
            </div>
        </div>`
        // this.querySelector('#close-details').addEventListener('click', function() {
        //     const details = document.getElementsByTagName('cocktail-details');
        //     details[0].remove();
        // });
        $(this).find('#close-details').on('click', function() {
            $('.details').parent().remove();
        });
    
        const ingredientsList = $(this).find('#list');
        function ingredient() {
            for (let i = 1; i <=15 ; i++){
                const ingredient = `strIngredient${i}`
                const measure = `strMeasure${i}`
                if (details[ingredient]) {
                    const list = `<li> ${details[ingredient]} ${details[measure]} </li>`
                    ingredientsList.append(list);
                }
            }
        }
        ingredient();
    }
}
customElements.define('cocktail-details', CocktailDetails);
export default CocktailDetails;