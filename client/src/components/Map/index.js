import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class Maps extends Component {
  
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},

      selectedPlace: {}
    };
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  render() {
    const styles = [
      {"elementType": "geometry","stylers": [{"color": "#f5f5f5"}]},
      {"elementType": "labels.icon","stylers": [{"visibility": "off"}]},
      {"elementType": "labels.text.fill","stylers": [{"color": "#616161"}]},
      {"elementType": "labels.text.stroke","stylers": [{"color": "#f5f5f5"}]},
      {"featureType": "administrative.land_parcel","elementType": "labels.text.fill","stylers": [{"color": "#bdbdbd"}]},
      {"featureType": "poi","elementType": "geometry","stylers": [{"color": "#eeeeee"}]},
      {"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#757575"}]},
      {"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#e5e5e5"}]},
      {"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#9e9e9e"}]},
      {"featureType": "road","elementType": "geometry","stylers": [{"color": "#ffffff"}]},
      {"featureType": "road.arterial","elementType": "labels.text.fill","stylers": [{"color": "#757575"}]},
      {"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#dadada"}]},
      {"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#616161"}]},
      {"featureType": "road.local","elementType": "labels.text.fill","stylers": [{"color": "#9e9e9e"}]},
      {"featureType": "transit.line","elementType": "geometry","stylers": [{"color": "#e5e5e5"}]},
      {"featureType": "transit.station","elementType": "geometry","stylers": [{"color": "#eeeeee"}]},
      {"featureType": "water","elementType": "geometry","stylers": [{"color": "#c9c9c9"}]},
      {"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#9e9e9e"}]}
    ];

    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    const style = {
      width: '100%',
      height: '100%'
    }

    return (
      <div id="map">
        <Map 
          style={ style } 
          styles={ styles } 
          google={ this.props.google } 
          zoom={ 13 } 
          initialCenter={{
            lat: 9.0083282,
            lng: -79.5058761
          }}
        >
          <Marker onClick={ this.onMarkerClick } name={ "Moby Supply" } />
          <InfoWindow marker={ this.state.activeMarker } visible={ this.state.showingInfoWindow }>
            <div>
              <h1>{ this.state.selectedPlace.name }</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAQB-2SW3e1kvlQ3V3JgAd0b8Wjn33KzgY',
  v: "3"
})(Maps);