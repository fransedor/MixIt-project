import '../component/HeroSearch.js';
import DataSource from '../data/DataSource.js';
import '../component/CocktailList.js';

const main = () => {
    const heroSearch = document.querySelector('hero-search');
    const cocktailList = document.querySelector('cocktail-list');

    const onButtonSearchClicked = () => {
        DataSource.searchIngredient(heroSearch.value)
        .then(renderResult)
        .catch(fallbackResult)
    };

    const renderResult = (results) => {
        cocktailList.drinks = results;
    }
    
    const fallbackResult = (message) => {
        cocktailList.renderError(message);
    }
    heroSearch.clickEvent = onButtonSearchClicked;
}
export default main;