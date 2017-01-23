/* global google:true */
function initMap() {
  'use strict';

  var map = new google.maps.Map(document.getElementById('googlemap'), {
    zoom: 13,
    center: { lat: 50.0709877, lng: 19.9132656 }
  });

  var infowindowAGH = new google.maps.InfoWindow({
    content: '<div class="mapmodal"><h1>Basen AGH</h1><address>ul. Jana Buszka 4<br>30-150 Kraków</address></div>'
  });
  var infowindowUE = new google.maps.InfoWindow({
    content: '<div class="mapmodal"><h1>Basen Uniwersytetu Ekonomicznego</h1>' +
             '<address>ul. Rakowicka 27<br>31-510 Kraków</address></div>'
  });

  var markerAGH = new google.maps.Marker({
    position: { lat: 50.0684448, lng: 19.8988166 },
    map: map,
    title: 'Basen AGH'
  });
  var markerUE = new google.maps.Marker({
    position: { lat: 50.067744, lng: 19.9546235 },
    map: map,
    title: 'Basen Uniwersytetu Ekonomicznego'
  });

  markerAGH.addListener('click', function () {
    infowindowAGH.open(map, markerAGH);
  });
  markerUE.addListener('click', function () {
    infowindowUE.open(map, markerUE);
  });
  infowindowAGH.open(map, markerAGH);
  infowindowUE.open(map, markerUE);
}
