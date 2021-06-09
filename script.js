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

    const response = await fetch(apiURL);
    const responseData = await response.json();
    // console.log(responseData);
}