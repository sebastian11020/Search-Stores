import L from "leaflet";

export const customIcon = new L.Icon({
    iconUrl: "/leaflet/dist/images/marker-icon.png",
    shadowUrl: "/leaflet/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
