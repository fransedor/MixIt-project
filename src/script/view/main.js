import '../component/HeroSearch.js';
import DataSource from '../data/DataSource.js';
import '../component/CocktailList.js';
var $ = require('jquery');

const main = () => {
    const heroSearch = $('hero-search')[0];
    const cocktailList = $('cocktail-list')[0];
    const contents = $('.contents')[0];

    const onButtonSearchClicked = () => {
        DataSource.searchIngredient(heroSearch.value)
        .then(renderResult)
        .catch(fallbackResult)
    };

    const renderResult = (results) => {
        contents.style.display = "block";
        cocktailList.drinks = results;
    }
    
    const fallbackResult = (message) => {
        cocktailList.renderError(message);
    }
    heroSearch.clickEvent = onButtonSearchClicked;

    // const onDrinkDetailsClicked = () => {
    //     DataSource.drinkDetails(cocktailItem.drinkId)
    //     .then(details => {
    //         console.log(details);
    //     })}
        
    // }
    // const renderDetails = (details) => {
    //     cocktailDetails.details = details;
    // }
    // cocktailItem.clickEvent = onDrinkDetailsClicked;
}
export default main;