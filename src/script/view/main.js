import '../component/HeroSearch.js';
import DataSource from '../data/DataSource.js';
import '../component/CocktailList.js';

const main = () => {
    const heroSearch = document.querySelector('hero-search');
    const cocktailList = document.querySelector('cocktail-list');
    const contents = document.querySelector('.contents');

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