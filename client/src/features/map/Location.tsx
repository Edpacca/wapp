import { WrappedWappMap } from "./WappMap";

export function Location() {

    const url: string = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY as string}&callback=initMap`;

    return (
        <WrappedWappMap 
            googleMapURL={url}
            loadingElement={<div style={{height: "100%"}}></div>}
            containerElement={<div style={{height: "100%"}}></div>}
            mapElement={<div style={{height: "100%"}}></div>}
        />
    )
}