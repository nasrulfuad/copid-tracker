import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { Card } from "antd";
import { ShowDataOnMap } from "../components/ShowDataOnMap";
import "leaflet/dist/leaflet.css";
import "../styles/Map.css";

function Map({ countries, casesType }) {
    return (
        <Card className="map">
            <LeafletMap
                center={{
                    lat: 34.80746,
                    lng: -40.4796,
                }}
                zoom={3}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='http://osm.org/copyright'>OpenStreet</a> contributors"
                />
                {ShowDataOnMap(countries, casesType)}
            </LeafletMap>
        </Card>
    );
}

export default Map;
