import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: -36.750612, lng: 174.704499 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -36.750612, lng: 174.704499 }} />}
  </GoogleMap>
))


export default MyMapComponent;