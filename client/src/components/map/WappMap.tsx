import { GoogleMap, useLoadScript, Marker, Polyline } from '@react-google-maps/api';
import { useCallback, useRef, useState } from 'react';
import lochay from '../../assets/map-icons/lochay.svg';
import finlarig from '../../assets/map-icons/finlarig.svg';
import registry from '../../assets/map-icons/registry.svg';
import footstepsA from '../../assets/map-icons/footstepsA.svg';
import footstepsB from '../../assets/map-icons/footstepsB.svg';
import mountain from '../../assets/map-icons/mountain.svg';
import { ACHARN_WOODS } from '../../data/acharnWoods';
import { SRON_A_CHLACHAIN } from '../../data/sron-a-chlachain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const containerStyle = {
  width: '90%',
  height: '85vh',
  border: '2px solid yellowgreen',
  borderRadius: '2vw',
};

const lochayCoords = { lat: 56.47815940703385, lng: -4.324116001400637 };
const finlarigCoords = { lat: 56.47505699164878, lng: -4.314898901371605 };
const registryCoords = { lat: 56.46795190718324, lng: -4.318373729857583 };
const acharnStartCoords = { lat: 56.45960546129408, lng: -4.320894272525618 };
const chlachainStartCoords = { lat: 56.4692126040287, lng: -4.31767475314589 };
const chlachainTopCoords = 	{ lat: 56.465562613516, lng: -4.34184484168226 };
const center = { lat: 56.46995190718324, lng: -4.322373729857583 };

const libraries: ["places"] = ["places"];
const id = 'ed641887d0190883';

const options = {
  mapId: id,
  disableDefaultUI: true,
  zoomControl: true,
}

const acharnLineOptions = {
  strokeColor: '#d9ff00',
  strokeOpacity: 1,
  strokeWeight: 8,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  paths: ACHARN_WOODS,
  zIndex: 1
}

const chlachainLineOptions = {
  strokeColor: '#fc9003',
  strokeOpacity: 1,
  strokeWeight: 8,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  paths: SRON_A_CHLACHAIN,
  zIndex: 1
}

export function WappMap() {

  const [isMarkersShowing, setIsMarkersShowing] = useState(true);
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, [])

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY as string,
    libraries,
    
    mapIds: [id]
  })

  if (loadError) return <p>Error loading maps</p>
  if (!isLoaded) return <p>Loading maps</p>
  
    const lochayIcon: google.maps.Icon = {
      url: lochay,
      scaledSize: new google.maps.Size(120, 120),
    }

    const lochayLabel: google.maps.MarkerLabel = {
      text: "Reception",
      className: "map-label",
      color: "white"
    }

    const finlarigIcon: google.maps.Icon = {
      url: finlarig,
      scaledSize: new google.maps.Size(100, 100),
    }

    const finlarigLabel: google.maps.MarkerLabel = {
      text: "Ceremony",
      className: "map-label",
      color: "white"
    }

    const registryIcon: google.maps.Icon = {
      url: registry,
      scaledSize: new google.maps.Size(70, 70),
    }

    const registryLabel: google.maps.MarkerLabel = {
      text: "Registry Office",
      className: "map-label",
      color: "white"
    }

    const walkAIcon: google.maps.Icon = {
      url: footstepsA,
      scaledSize: new google.maps.Size(100, 100),
    }

    const walkBIcon: google.maps.Icon = {
      url: footstepsB,
      scaledSize: new google.maps.Size(100, 100),
    }

    const acharnWalkLabel: google.maps.MarkerLabel = {
      text: "Sunday walk A",
      className: "map-label",
      color: "white"
    }

    const chlachainWalkLabel: google.maps.MarkerLabel = {
      text: "Sunday walk B",
      className: "map-label",
      color: "white"
    }

    const summitIcon: google.maps.Icon = {
      url: mountain,
      scaledSize: new google.maps.Size(50, 50),
    }


    return (
    <div className="map-wrap">
      <button className="map-button" onClick={() => setIsMarkersShowing(!isMarkersShowing)}><FontAwesomeIcon icon={faEye}/></button>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14.4}
        options={options}
        onLoad={onMapLoad}
      >
        { isMarkersShowing && 
        <>
          <Marker label={lochayLabel} icon={lochayIcon} key={"house"} position={lochayCoords}/>
          <Marker label={finlarigLabel} icon={finlarigIcon} key={"castle"} position={finlarigCoords}/>
          <Marker label={registryLabel} icon={registryIcon} key={"registry"} position={registryCoords}/>
          <Marker label={acharnWalkLabel} icon={walkAIcon} key={"walkA"} position={acharnStartCoords}/>
          <Marker label={chlachainWalkLabel} icon={walkBIcon} key={"walkB"} position={chlachainStartCoords}/>
          <Marker icon={summitIcon} key={"walkBTop"} position={chlachainTopCoords}/>
          <Polyline path={ACHARN_WOODS} options={acharnLineOptions} />
          <Polyline path={SRON_A_CHLACHAIN} options={chlachainLineOptions} />
        </>
        }
      </GoogleMap>
    </div>
  )
}
