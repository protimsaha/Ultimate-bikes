import React from 'react';
import './ReactLeaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'


const ReactLeaflet = () => {
    return (
        <div className='my-5 map-box'>
            <h1 className='text-center map-text'>Find Us Now</h1>
            <MapContainer className='map-container' center={[23.7937, 90.4066]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[23.7937, 90.4066]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default ReactLeaflet;