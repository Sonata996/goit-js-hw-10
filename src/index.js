// import axios from "axios"
// import SlimSelect from 'slim-select/dist/slimselect.css'
import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api'


const elements = {
    breedSelect: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    catInfo: document.querySelector('.cat-info')
}
elements.breedSelect.addEventListener('change', foo)

elements.error.classList.add("is-hidden")
elements.breedSelect.classList.add("is-hidden")
elements.catInfo.classList.add("is-hidden")




fetchBreeds()
    .then((data) => {
        if (data) {
            elements.breedSelect.classList.remove("is-hidden") 
            elements.loader.classList.add("is-hidden")
     }
        elements.breedSelect.innerHTML = createSelect(data)
    })
    .catch(error => Notiflix.Notify.failure('Qui timide rogat docet negare'))



// createSelect(fetchBreeds)
function createSelect(arr) {
    return  arr.map(({ id, name }) => `
    <option value="${id}">${name}</option>`).join()
}


function foo(evt) {
    elements.loader.classList.remove("is-hidden")
    fetchCatByBreed(evt)
        .then(data => {
            Notiflix.Notify.success('Your kitty has been found')
    createВescriptionCat(data);
    })
        .catch(error => Notiflix.Notify.failure('Your kitty has not been found'))
}
function createВescriptionCat(arr) {
elements.loader.classList.add("is-hidden")
elements.catInfo.classList.remove("is-hidden")
    const { url, breeds } = arr[0]
    // console.log(breeds);
    elements.catInfo.innerHTML = `
    <img class="img-s" src="${url}" alt="${breeds[0].name}  width="320" height="320">
    <div class="cat-block-info">
        <h1>${breeds[0].name}</h1>
        <p>${breeds[0].description}</p>
        <p>${breeds[0].temperament}</p>
  </div>`
}

