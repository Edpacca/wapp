import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useCallback, useRef } from 'react';
import { mapStyle } from './mapStyle';
import house from '../../assets/icons/house.svg';

const containerStyle = {
  width: '90%',
  height: '80vh'
};

const houseCoords = { lat: 56.47815940703385, lng: -4.324116001400637 };
const finlarigCoords = {lat: 56.47505699164878, lng: -4.314898901371605}

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
        center={houseCoords}
        zoom={15}
        options={options}
        onLoad={onMapLoad}
      >
        { 
        <div>
          <Marker icon={house} key={"house"} position={houseCoords}/>
          <Marker key={"castle"} position={finlarigCoords}/>
        </div>
        }
        <></>
      </GoogleMap>
    </div>
     
  )
}
