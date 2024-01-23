const accesskey = "MGkQEd07HBvVqDyJayTrPfTBHpFp5FRwDQVuiweOpnA" ;

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData ="";
let page = 1;

async function searchImages (){
    inputData = inputEl.value;

    const url = 'https://api.unsplash.com/search/photos?page=$(page}&query=$
    {inputData}&client_id=${accesskey}';

    const rensponse = await fetch(url);
    const data = await rensponse.json();

    const results = data.results;
    if (page== 1){
        searchResults.innerHTML= "";
    }
    results.map((result) =>{
        const imagewrapper =document.createElement('div');
        imagewrapper.classList.add("search-result");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imagelink = document.createElement('a');
        imagelink.href = result.links.innerHTML;
        imagelink.target = "_blank";
        imagelink.textcontent = result.alt_description;

        imagewrapper.appendChild(image);
        imagewrapper.appendChild(imagelink);
        searchResults.appendChild(imagewrapper);

    }
    );

    page++;
    if (page> 1){
        showMore.style.display ="block";

    }
}
formEl.addEventListener("submit", (event) =>{
    event.preventDefault();
    page= 1;
    searchImages();
})
showMore.addEventListener("click", () =>{
    searchImages();
}) 