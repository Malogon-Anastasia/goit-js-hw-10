import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import countryMarkup from './templates/country-markup';
import flags from './templates/flag';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const debounce = require('lodash.debounce');

const DEBOUNCE = 300;
const inputRef = document.querySelector('#search-box');
const containerRef = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(onInputChange, DEBOUNCE));

function onInputChange(evt) {
    const countryName = evt.target.value.trim();
        
    if (evt.target.value === '') {
        deleteMarkup();
        return;
    } 

    fetchCountries(`${countryName}`).then(countries => {
        
        if (countries.length > 10 ) {
            Notify.info("Too many matches found. Please enter a more specific name.");
         } 
        
            else if (countries.length > 2) {
                const list = flags(countries);
                containerRef.innerHTML = list;
           
            } else {
                const markup = countryMarkup(countries);
                console.log(markup);
                containerRef.innerHTML = markup;
             }
    }).catch(error => {
        deleteMarkup();
        Notify.failure("Oops, there is no country with that name");
        return;
    });
    console.log(containerRef.textContent = evt.target.value.trim());
};
    
    
function deleteMarkup() {
    containerRef.innerHTML = '';
}
