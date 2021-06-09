const API_KEY = "ZJzvG87iB1XSOj2MEh6deyjhGrL3FqkN";
const limit = 10;
let offset = 0;
const rating = 'g';

const searchForm = document.querySelector("#searchForm");
const imageArea = document.querySelector("#flex-container");

let temp = true;
searchForm.addEventListener("submit", getGiphys);
async function getGiphys (event) {
    event.preventDefault();
    
    const searchInput = event.target.searchItem.value;
    const apiURL = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchInput}&limit=${limit}`;

    const responseData = await getResponse(apiURL);
    const urlArray = getImageURLS(responseData);

    displayImages(urlArray);
}

async function getResponse(apiURL) {
    const response = await fetch(apiURL);
    const responseData = await response.json();
    return responseData;
}

function getImageURLS (responseData) {
    let urlArray = [];
    responseData.data.forEach((element, index) => {
        urlArray.push(element.images.original.url);
    })
    return urlArray;
}

function displayImages (urlArray) {
    clearContainer();
    urlArray.forEach((element) => {
        addImage(element);
    })
}

function clearContainer () {
    imageArea.innerHTML = "";
}

function addImage (imgURL) {
    imageArea.innerHTML += `
    <div class="flex-item">
        <img src="${imgURL}">
    </div>
    `;
}