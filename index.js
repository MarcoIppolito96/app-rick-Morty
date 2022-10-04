let boton_buscar = document.getElementById("boton_buscar");

boton_buscar.addEventListener('click', () => {

    let buscador_contenido = document.getElementById("buscador").value;
    console.log(buscador_contenido);
})

document.addEventListener('click', function(){
    fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((json) => printData(json))
})

function printData(data){
    data.results.forEach(element => {
        const html = ''
        html +=  `<div class="card" style="width: 13rem;">`
        html +=  `<img src="${data.results.image}" class="card-img-top" alt="..."></img>`
        html +=  `  <div class="card-body">`
        html +=  `<h8 class="card-status">${data.results.status}</h8>`
        html +=  `<div class="card-body">`
        html +=  `<h5 class="card-name">${data.results.name}</h5>`
        html +=  `<p class="card-gender">${data.results.gender}</p>`
        html +=  `<p class="card-species">${data.results.species}</p>`
        html +=  `</div></div></div>`
    });

}



<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
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