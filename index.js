let boton_buscar = document.getElementById("boton_buscar");
const API = 'https://rickandmortyapi.com/api/character';

boton_buscar.addEventListener('click', () => {
    getData(API);
    let buscador_contenido = document.getElementById("buscador").value;
    console.log(buscador_contenido);
})

const getData = (urlAPI) => {
    fetch(urlAPI)
    .then(response => response.json())
    .then(json => {
        printData(json),
        printPagination(json.info)})
    }
    
function printData(data){
    let html = ''
    data.results.forEach(element => {
        html +=  `<div class="col mt-5">`
        html +=  `<div class="card" style="width: 15rem;">`
        html +=  `<img src="${element.image}" class="card-img-top" alt="..."></img>`
        html +=  `<div class="card-body">`
        html +=  `<h8 class="card-status">${element.status}</h8>`
        html +=  `<h5 class="card-name">${element.name}</h5>`
        html +=  `<p class="card-gender">${element.gender}</p>`
        html +=  `<p class="card-species">${element.species}</p>`
        html +=  `</div></div></div>`
    });
    document.getElementById('infoCharacters').innerHTML = html;
}

const printPagination = (info) =>{
    let prevDisable = info.prev == null ? 'disabled' : '';
    let nextDisable = info.next == null ? 'disabled' : '';

    let html = `<li class="page-item" ${prevDisable}><a class="page-link" onclick="getData('${info.prev}')">Previous</a></li>`
    html += ` <li class="page-item" ${nextDisable}><a class="page-link" onclick="getData('${info.next}')">Next</a></li>`
    document.getElementById('pagination').innerHTML = html;
}

//fetch('http://example.com/movies.json')
  //.then(response => response.json())
  //.then(data => console.log(data));


/*
const endpoint = 'https://rickandmortyapi.com/api/character';
async function fetchData(endpoint){
    try{
        const res = await fetch(endpoint)
        console.log(res.json());
    } catch(err){
        return err;
    }
}
*/