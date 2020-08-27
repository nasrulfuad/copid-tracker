import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
    cases: {
        hex: "#CC1034",
        rgb: "rgb(204, 16, 52)",
        half_top: "rgba(204, 16, 52, 0.5)",
        multiplier: 800,
    },
    recovered: {
        hex: "#7DD71D",
        rgb: "rgb(125, 215, 29)",
        half_top: "rgba(125, 215, 29, 0.5)",
        multiplier: 1200,
    },
    deaths: {
        hex: "#FB4443",
        rgb: "rgb(251, 68, 67)",
        half_top: "rgba(251, 68, 67, 0.5)",
        multiplier: 2000,
    },
};

/** Draw circles on the map */
export const ShowDataOnMap = (data, casesType = "cases") =>
    data.map((country, index) => (
        <Circle
            key={index}
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].hex}
            radius={
                Math.sqrt(country[casesType]) *
                casesTypeColors[casesType].multiplier
            }
        >
            <Popup className="info-container">
                <div>
                    <div
                        className="info-flag"
                        style={{
                            backgroundImage: `url(${country.countryInfo.flag})`,
                        }}
                    ></div>
                    <div className="info-name">{country.country}</div>
                    <div className="info-confirmed">
                        Cases : {numeral(country.cases).format("0,0")}
                    </div>
                    <div className="info-recovered">
                        Recovered : {numeral(country.recovered).format("0,0")}
                    </div>
                    <div className="info-deaths">
                        Deaths : {numeral(country.deaths).format("0,0")}
                    </div>
                </div>
            </Popup>
        </Circle>
    ));
