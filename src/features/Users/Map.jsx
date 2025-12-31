import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const LeafletMap = ({ lat, lng }) => {
  console.log("Map coordinates:", lat, lng);
  return (
    <MapContainer
      center={[parseFloat(lat), parseFloat(lng)]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[parseFloat(lat), parseFloat(lng)]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default LeafletMap;
