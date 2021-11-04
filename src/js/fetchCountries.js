export default fetchCountries;

const BASE_URL = 'https://restcountries.com/#api-endpoints-v3-name';
function fetchCountries(searchQuery) {
    return fetch(`${BASE_URL}${searchQuery}`)
        .then(response => {
            if (!response.ok) {
                throw Error();
            }
            return response.json();
        })
}