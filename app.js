const root = document.getElementById('root');
const loader = document.getElementById('contenedor');

//filtros

//const todos = document.getElementById('todos');
//const mujeres = document.getElementById('mujeres');
//const hombres = document.getElementById('hombres');

let pagina = 1;

const getData = async () => {
  const url = `https://breakingbadapi.com/api/characters?page=${pagina}`
  const response = await fetch(url)
  const json = await response.json();
  console.log(json)
 


printData(json)
//setTimeout(()=>{
  root.classList.remove('esconder')
loader.classList.add('esconder')

//},1000)
data = json;
return json;

}
let data ={};

//console.log(data)
const printData = arr => {
  let card =""
  arr.forEach((personaje) => {
    //console.log(personaje)
    card = card +  `
    <div class="col s14 m6 l4">
    <div class="card">
    <div class="card-image">
      <img src=${personaje.img}>
    </div>
    <div class="card-content">
      <p>Name: ${personaje.name}</p>
      <p>Birthday: ${personaje.birthday}</p>
      <p>occupation:${personaje.occupation} </p>
      <p>Status:${personaje.status}</p>
      <p>Nickname:${personaje.nickname }</p>
    </div>
    <div class="card-action">
      <a href="#"> ver mas...</a>
    </div>
  </div>
</div>
`
 })
 root.innerHTML = card;
}

const pagination = async promesa =>{
  const result = await promesa
  getData()
  
  
  }
  
pagination(getData())