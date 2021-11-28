import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useCallback, useRef, useState } from 'react';
import './map.css';
import { mapStyle } from './mapStyle';

const containerStyle = {
  width: '95%',
  height: '80vh'
};

const house = { lat: 56.47815940703385, lng: -4.324116001400637 };
const finlarig = {lat: 56.47505699164878, lng: -4.314898901371605}

const libraries: ["places"] = ["places"];

const options = {
  styles: mapStyle,
  disableDefaultUI: true,
  zoomControl: true,
}

export function WappMap() {

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, [])

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY as string,
    libraries,
  })

  if (loadError) return <p>Error loading maps</p>
  if (!isLoaded) return <p>Loading maps</p>

    return (
    <div className="App-header">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={house}
        zoom={15}
        options={options}
        onLoad={onMapLoad}
      >
        { 
        <div>
          <Marker key={"house"} position={house}/>
          <Marker key={"castle"} position={finlarig}/>
        </div>
        }
        <></>
      </GoogleMap>
    </div>
     
  )
}