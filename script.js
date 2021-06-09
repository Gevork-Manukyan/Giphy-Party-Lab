const API_KEY = "ZJzvG87iB1XSOj2MEh6deyjhGrL3FqkN";
const limit = 9;
const rating = 'g';

const searchForm = document.querySelector("#searchForm");

searchForm.addEventListener("submit", getGiphys);
async function getGiphys (event) {
    event.preventDefault();
    
    const searchInput = event.target.searchItem.value;
    // console.log(event.target.searchItem.value)
    const apiURL = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchInput}&limit=${limit}`;
    // console.log(apiURL)

    const responseData = await getResponse(apiURL);
    console.log(getResultURLS(responseData));
}

async function getResponse(apiURL) {
    const response = await fetch(apiURL);
    const responseData = await response.json();
    return responseData;
}

function getResultURLS (responseData) {
    let urlArray = [];
    responseData.data.forEach((element, index) => {
        urlArray.push(element.images.original.url);
    })
    return urlArray;
}