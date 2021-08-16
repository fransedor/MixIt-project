class DataSource {
    static searchIngredient(keyword) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${keyword}`)
        .then(response => {
            return response.json();
        }).then(responseJSON => {
            return Promise.resolve(responseJSON.drinks);
        })
        .catch(() => {
            return Promise.reject(`${keyword} is not found`);
        })
        
    }
}
export default DataSource;