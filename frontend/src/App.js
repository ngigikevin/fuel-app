import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken 
= 'pk.eyJ1Ijoic2Fta2FtZGV2IiwiYSI6ImNsZjZxbmtzcDB4bDgzeXFoaXM2dWtkdHQifQ.ANRM8LjZKe0tKwOkUrF2PA';
function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(37.326791);
  const [lat, setLat] = useState(-0.563562);
  const [zoom, setZoom] = useState(13);
  const [petrostations,setPetrostations] = useState([]);
  function successLct(pst){
    setLng(pst.coords.longitude);
    setLat(pst.coords.latitude);
    setZoom(13)
console.log(pst.coords.latitude)
console.log(pst.coords.longitude)
  }
  function errLct(err){
console.log(err)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      successLct,
      errLct,{enableHighAccuracy:true}
      )
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    }); 
    // Create a new marker.
  const marker = new mapboxgl.Marker({color: "red"})
  .setLngLat([lng, lat])
  .addTo(map.current);
  const getPetrostation = async()=>{
    const url = 'http://localhost:5000/api/v1/petrostation/getPetro'
const resp = await fetch(url);
const data = await resp.json();
setPetrostations(data);
  }
  getPetrostation();

  });
  useEffect(() => {
    if (!map.current)
      return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));

    });
  });
  console.log(petrostations);
// petrostations.forEach(st => {
//   console.log(st);
// });
// create the popup
const popup = (st)=>{
  console.log(st)
  return  new mapboxgl.Popup({ offset: 25 }).setText(st.name)
  };

  // const popup = petrostations.map(st=>
  //   new mapboxgl.Popup({).setText(st.name)
  //   );

petrostations.map(st=>
  new mapboxgl.Marker({color: "blue"}).setLngLat(st.location.coordinates).setPopup(popup(st)).addTo(map.current)
  );
  //.Popup({offset:30}).setLngLat(st.location.coordinates).setHTML(`${st.name}`)
// petrostations.map(st=> new mapboxgl.Popup({offset:30}).setLngLat(st.location.coordinates).setHTML(`${st.name}`)).addTo(map.current);
// console.log(stg);
  return (
    <div className="App">
      <div className="sidebar">
Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
</div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}



export default App;
