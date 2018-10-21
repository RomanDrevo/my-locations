import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>{
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
        console.log('selected place: ', this.state.selectedPlace)
    }

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        const {position} = this.props
        // console.log('position: ', position)
        return (
            <Map
                style={{
                    width: '92%'
                }}
                zoom={8}
                google={this.props.google}
                onClick={this.onMapClicked}
                initialCenter={{
                    lat: position.lat,
                    lng: position.lng
                }}
                center={{
                    lat: position.lat,
                    lng: position.lng
                }}
            >
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Current location'}
                    position={{lat: position.lat, lng: position.lng}}
                />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAYkKcKKcNDhMqwPcaJXExIxISvXzRj8NE')
})(MapContainer)