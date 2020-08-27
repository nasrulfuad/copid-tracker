import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { Card, Skeleton, List } from "antd";
import { ShowDataOnMap } from "../components/ShowDataOnMap";
import "leaflet/dist/leaflet.css";
import "../styles/Map.css";

function Map({ countries, casesType, mapCenter, isLoading = true }) {
    return (
        <Card className="map">
            {isLoading ? (
                <List
                    dataSource={[1, 2, 3, 4, 5]}
                    renderItem={item => <Skeleton active />}
                />
            ) : (
                <LeafletMap center={mapCenter} zoom={4}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreet</a> contributors"
                    />
                    {ShowDataOnMap(countries, casesType)}
                </LeafletMap>
            )}
        </Card>
    );
}

export default Map;
