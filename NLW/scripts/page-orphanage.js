const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom:false,
  zoomControl:false,

}

//Create map
const map = L.map("map", options).setView([-27.22064, -49.6480883], 15);

//Create and add tile layer
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//Create Icon
const icon = L.icon({
  iconUrl: "./images/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});


//Create and Add Marker
L.marker([-27.22064, -49.6480883],{icon}).addTo(map);
 
//Image Gallery

function selectImage(event) {
  const button = event.currentTarget

  console.log(button.children)
  
  //remover todas as classes .active
  const buttons = document.querySelectorAll(".images button")
  
  buttons.forEach(removeActiveClass)

  function removeActiveClass(button){
    button.classList.remove("active")
  }
  //selecionar a imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")
  //atualizar o container de imagem
imageContainer.src = image.src
  //adicionar a classe active para este botao que foi clicado
  button.classList.add("active")
}