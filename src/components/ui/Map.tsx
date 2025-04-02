"use client";

import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from "react-leaflet";
import { useEffect, useState } from "react";
import L, { LatLngExpression, LeafletMouseEvent } from "leaflet";
import markerIconSrc from "../../../public/marker-icon.png"; // Asegura que el archivo está en public/

type StoreFormData = {
    storeName: string;
    department: string;
    city: string;
    address: string;
    latitude: string;
    longitude: string;
};

type MapProps = {
    department: string;
    city: string;
    address: string;
    latitude: string;
    longitude: string;
    setFormData: React.Dispatch<React.SetStateAction<StoreFormData>>;
};

const DEFAULT_POSITION: [number, number] = [4.6097, -74.0817];

const customIcon = L.icon({
    iconUrl: markerIconSrc.src,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

const Map: React.FC<MapProps> = ({ department, city, address, latitude, longitude, setFormData }) => {
    const [position, setPosition] = useState<[number, number]>(
        latitude && longitude ? [parseFloat(latitude), parseFloat(longitude)] : DEFAULT_POSITION
    );

    useEffect(() => {
        if (!department || !city || !address) return;

        const fetchCoordinates = async () => {
            const query = `${address}, ${city}, ${department}, Colombia`;
            const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data.length > 0) {
                    const { lat, lon } = data[0];
                    const newPosition: [number, number] = [parseFloat(lat), parseFloat(lon)];

                    setPosition(newPosition);
                    setFormData((prev) => ({
                        ...prev,
                        latitude: lat.toString(),
                        longitude: lon.toString(),
                    }));
                }
            } catch (error) {
                console.error("Error obteniendo coordenadas:", error);
            }
        };

        fetchCoordinates();
    }, [department, city, address]);

    return (
        <MapContainer center={position} zoom={15} style={{ height: "300px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapUpdater position={position} />
            <LocationMarker setPosition={setPosition} setFormData={setFormData} />
            <Marker position={position} icon={customIcon} />
        </MapContainer>
    );
};

const MapUpdater = ({ position }: { position: [number, number] }) => {
    const map = useMap();

    useEffect(() => {
        if (position) {
            map.flyTo(position, 15, { animate: true });
        }
    }, [position, map]);

    return null;
};

const LocationMarker = ({
                            setPosition,
                            setFormData,
                        }: {
    setPosition: (position: [number, number]) => void;
    setFormData: React.Dispatch<React.SetStateAction<StoreFormData>>;
}) => {
    const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(null);

    useMapEvents({
        click(e: LeafletMouseEvent) {
            const { lat, lng } = e.latlng;
            const newPosition: [number, number] = [lat, lng];

            setPosition(newPosition);
            setMarkerPosition(newPosition);

            setFormData((prev) => ({
                ...prev,
                latitude: lat.toString(),
                longitude: lng.toString(),
            }));
        },
    });

    return markerPosition ? <Marker position={markerPosition} icon={customIcon} /> : null;
};

export default Map;
