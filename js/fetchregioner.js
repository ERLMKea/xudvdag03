console.log("im in fetchurl")
const urlRegioner = "https://api.dataforsyningen.dk/regioner";

const inpUrl = document.getElementById("inpUrl")
const pbFetch = document.getElementById("pbFetchUrl")
const pbFetchRegioner = document.getElementById("pbFetchRegioner")
const textArea = document.getElementById("txt")

function fetchAnyUrl(url) {
    console.log("inside fetch json url=" + url)
    return  fetch(url).then(response => response);
}


function fetchAnyUrlText(url) {
    console.log("inside fetch json url=" + url)
    return  fetch(url).then(response => response.text());
}

function fetchAnyUrlJson(url) {
    console.log("inside fetch json url=" + url)
    return  fetch(url).then(response => response.json());
}

async function actionFetchUrl(btn) {
    const url = inpUrl.value;
    console.log(url)
    const anybody = await fetchAnyUrl(url)
    console.log(anybody)
    textArea.textContent = anybody
}

async function actionFetchRegioner(btn) {
    console.log("fetch regioner")
    const regioner = await fetchAnyUrlText(urlRegioner)
    console.log(regioner)
    textArea.textContent = regioner
}


pbFetchRegioner.addEventListener('click', actionFetchRegioner)
pbFetch.addEventListener('click', actionFetchUrl)


