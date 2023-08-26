import axios from "axios"
import Notiflix from 'notiflix';


function fetchBreeds() {
    const BASE_URL = "https://api.thecatapi.com/v1/breeds";
    axios.defaults.headers.common["x-api-key"] = "live_qz1ZafSqk2N04ieyrXQbDGx6zm1EiVEaIwL0uyEPxl1bOTty4loGY31YdTYYcdqV"
    
    return axios
        .get(BASE_URL)
        .then(response => {
            Notiflix.Notify.success('Information about the cats received')
            return response.data
        })
    .catch(error => Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!'))
}
    

function fetchCatByBreed(breedId) {
    const { value } = breedId.target
    const API_KEY_BREEDS = `https://api.thecatapi.com/v1/images/search?breed_ids=${value}`
    return axios
        .get(API_KEY_BREEDS)
        .then(response => response.data)
        .catch(error => Notiflix.Notify.failure('ERROR'))
}
export {fetchBreeds, fetchCatByBreed}