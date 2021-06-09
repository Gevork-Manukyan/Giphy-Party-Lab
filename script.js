const API_KEY = "ZJzvG87iB1XSOj2MEh6deyjhGrL3FqkN";
const limit = 10;
const rating = 'g';

const searchForm = document.querySelector("#searchForm");
const imageArea = document.querySelector("#flex-container");

searchForm.addEventListener("submit", getGiphys);
async function getGiphys (event) {
    event.preventDefault();
    
    const searchInput = event.target.searchItem.value;
    const apiURL = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchInput}&limit=${limit}`;

    const responseData = await getResponse(apiURL);
    const urlArray = getImageURLS(responseData);
    console.log(urlArray)

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
    urlArray.forEach((element) => {
        addImage(element);
    })
}

function addImage (imgURL) {
    imageArea.innerHTML += `
    <div class="flex-item">
        <img src="${imgURL}">
    </div>
    `;
}