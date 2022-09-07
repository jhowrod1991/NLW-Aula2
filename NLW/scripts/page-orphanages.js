//Create map
const map = L.map("map").setView([-27.22064, -49.6480883], 15);

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

//create popup overlay
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./images/images/arrow-white.svg"></a>'
);

//Create and Add Marker
L.marker([-27.22064, -49.6480883],{icon}).addTo(map).bindPopup(popup);
 
