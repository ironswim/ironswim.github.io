/* global google:true */
function initMap() {
  'use strict';

  var map = new google.maps.Map(document.getElementById('googlemap'), {
    zoom: 13,
    center: { lat: 50.067744, lng: 19.9546235 }
  });

  var infowindowAGH = new google.maps.InfoWindow({
    content: '<div class="mapmodal"><h1>Basen AGH</h1><address>ul. Jana Buszka 4<br>30-150 Kraków</address></div>'
  });
  var infowindowUE = new google.maps.InfoWindow({
    content: '<div class="mapmodal"><h1>Basen Uniwersytetu Ekonomicznego</h1>' +
             '<address>ul. Rakowicka 27<br>31-510 Kraków</address></div>'
  });
  var infowindowZSS = new google.maps.InfoWindow({
    content: '<div class="mapmodal"><h1>Basen Zespołu Szkół Ogólnokształcących Sportowych nr 1 w Krakowie</h1>' +
             '<address>os. Handlowe 4<br>31-935 Kraków</address></div>'
  });
  var infowindowTSW = new google.maps.InfoWindow({
    content: '<div class="mapmodal"><h1>Basen Towarzystwa Sportowego Wisła Kraków</h1>' +
             '<address>ul. Reymonta 22<br>30-059 Kraków</div>'
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
  var markerZSS = new google.maps.Marker({
    position: { lat: 50.074387, lng: 20.0229163 },
    map: map,
    title: 'Basen Zespołu Szkół Ogólnokształcących Sportowych nr 1 w Krakowie'
  });
  var markerTSW = new google.maps.Marker({
    position: { lat: 50.0651826, lng: 19.9089928 },
    map: map,
    title: 'Basen Towarzystwa Sportowego Wisła Kraków'
  });
  var hideAllInfowindows = function () {
    infowindowAGH.close();
    infowindowUE.close();
    infowindowZSS.close();
    infowindowTSW.close();
  };

  markerAGH.addListener('click', function () {
    hideAllInfowindows();
    infowindowAGH.open(map, markerAGH);
  });
  markerUE.addListener('click', function () {
    hideAllInfowindows();
    infowindowUE.open(map, markerUE);
  });
  markerZSS.addListener('click', function () {
    hideAllInfowindows();
    infowindowZSS.open(map, markerZSS);
  });
  markerTSW.addListener('click', function () {
    hideAllInfowindows();
    infowindowTSW.open(map, markerTSW);
  });
}
