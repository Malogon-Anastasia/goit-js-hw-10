export function fetchCountries(name) {
    return fetch(`https://restcountries.com/v2/all?fields=name.official,capital,population,flags.svg,languages`)
     .then(response => {
            if (!response.ok) {
                throw Error();
            }
            return response.json();
        })
}

fetchCountries("Peru");