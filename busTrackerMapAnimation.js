const coffeeStops = [
     [-116.20225, 43.601600],
     [-116.193000, 43.59480],
     [-116.213000, 43.596000],
     [-116.213820, 43.588930],
  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhbmR5Zml0Y2hldHQiLCJhIjoiY2xleWY0Ynd0MGdmdTN5cWs4MzhlN3M5ZSJ9.kvYMZkOa5DIwvazXw_ejMw';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-116.19999, 43.6029],
    zoom: 10,
  });
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  var marker = new mapboxgl.Marker()
    .setLngLat([-116.19999, 43.6029])
    .addTo(map);
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    setTimeout(() => {
      if(counter >= coffeeStops.length){
        return
      }
      marker.setLngLat(coffeeStops[counter]),
      counter ++;
      move();
  }, 1500);
}
    // moves the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Uses counter to access bus stops in the array busStops
  
