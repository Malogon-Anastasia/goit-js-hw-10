export default fetchCountries;

const BASE_URL = `https://restcountries.com/v3/name/${country}?fields=name,capital,population,flag,languages`;
function fetchCountries(country) {
    return fetch(`${BASE_URL}`)
        .then(response => {
            if (!response.ok) {
                throw Error();
            }
            return response.json();
        })
}