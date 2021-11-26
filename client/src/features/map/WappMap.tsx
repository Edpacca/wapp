import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function WappMap() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{lat: 56.47815940703385, lng: -4.324116001400637}}
        />
    );
}

export const WrappedWappMap = withScriptjs(withGoogleMap(WappMap))