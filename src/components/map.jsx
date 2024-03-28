import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";
import L from 'leaflet';
import axios from 'axios';
import mapicon from '../assets/icon.png';

const MapWithMarkers = () => {
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL_API}/maps`);
        setClinics(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Set the initial map center and zoom level
  const mapCenter = [28.6139, 77.2090];
  const zoomLevel = 11;

  // Custom icon settings
  const customIcon = L.icon({
    iconUrl: mapicon, // Replace with the path to your custom marker icon
    iconSize: [50, 50],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

  return (
    <MapContainer center={mapCenter} zoom={zoomLevel} style={{ height: '96.5vh', width: '100%' }}>
      {/* Add tile layer for the map */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Add markers for each clinic */}
      {clinics.map((clinic, index) => {
        const [lat, lng] = clinic.latlong.split(',').map(Number);

        return (
          <Marker key={index} position={[lat, lng]} icon={customIcon}>
            <Popup>{clinic.clinic_name}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapWithMarkers;
