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

function onInputChange(e) {
   const countryName = inputRef.value.trim();
        
    if (!countryName) {
        deleteMarkup();
        return;
    }

    if (e.data === ' ') {
        return;
  }

    fetchCountries(countryName).then(countries => {
        if (countries.length > 10 ) {
            deleteMarkup();
            Notify.info("Too many matches found. Please enter a more specific name.");
            return;
         } 
         if (countries.length > 1) {
             const flag = flags(countries);
            containerRef.innerHTML = flag;
            return;
        } 
            const markup = countryMarkup(countries);
            containerRef.innerHTML = markup;
                            
    }).catch(error => {
        deleteMarkup();
        console.log(error);
       return;
    });
        
}   
    
function deleteMarkup() {
    containerRef.innerHTML = '';
}


