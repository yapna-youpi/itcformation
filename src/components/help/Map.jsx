import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Mape extends Component {

  render() {
    return (
        <div style={{position:'relative'}}>
            <div  className="map">
                <Map google={this.props.google} zoom={14}>
                        
                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        
                    </InfoWindow>
                </Map>
            </div>
        </div>
    )
  }
}


export default GoogleApiWrapper({
    apiKey: ("3.869454,11.4418708")
  })(Mape)
