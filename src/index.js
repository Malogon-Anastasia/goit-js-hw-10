import './css/styles.css';
import fetchCountries from "./js/fetchCountries.js";
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';


const DEBOUNCE = 300;
const refs = {
    countryContainer: document.querySelector('.country-info'),
    countryList: document.querySelector('.country-list'),
    searchFormRef: document.querySelector('#search-box'),
}

refs.searchFormRef.addEventListener('input', debounce(countryInputHandler, DEBOUNCE));


function countryInputHandler() {}


function renderCountryMarkup() {}

function onError() {}

