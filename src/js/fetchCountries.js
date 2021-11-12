export function fetchCountries(countries) {
    return fetch(`https://restcountries.com/v3.1/name/${countries}?fields=name,capital,population,flags,languages` 
    ).then(function(response) { 
                if (!response.ok) { 
                    throw new Error(response.statusText); 
                }
                return response;
            })
        .then(response => {
        return response.json();
        
        });
}