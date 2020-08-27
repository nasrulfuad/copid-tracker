import React, { useState, useEffect } from "react";
import { Row, Col, Typography } from "antd";
import SelectCountry from "./components/SelectCountry";
import TableData from "./components/TableData";
import Statistic from "./components/Statistic";
import LineGraph from "./components/LineGraph";
import Map from "./components/Map";
import { WORLDWIDE, getCountries, getCountryInfo } from "./Api";
import { sortData } from "./utils";
import "antd/dist/antd.css";
import "./styles/App.css";

const WorldwideLatDefault = {
    lat: 47,
    lng: 29,
};

const worldwide = "worldwide";

function App() {
    const [countries, setcountries] = useState([]);
    const [country, setCountry] = useState(worldwide);
    const [tableData, setTableData] = useState([]);
    const [countryInfo, setCountryInfo] = useState({});
    const [casesType, setCasesType] = useState("cases");
    const [mapCountries, setmapCountries] = useState([]);
    const [mapCenter, setMapCenter] = useState(WorldwideLatDefault);
    const [isCountriesLoading, setIsCountriesLoading] = useState(true);
    const [isCountryInfoLoading, setIsCountryInfoLoading] = useState(true);
    const [isMapLoading, setIsMapLoading] = useState(true);

    const fetchCountryInfo = async url => {
        const dataCountryInfo = await (await fetch(url)).json();
        setCountryInfo(dataCountryInfo);
        setIsCountryInfoLoading(false);
        return dataCountryInfo;
    };

    const onCountryChange = async countryCode => {
        setIsCountryInfoLoading(true);
        setIsMapLoading(true);
        const country = await getCountryInfo(countryCode);
        setCountry(countryCode);
        setCountryInfo(country);
        setIsCountryInfoLoading(false);
        setIsMapLoading(false);
        if (countryCode === worldwide) {
            setMapCenter(WorldwideLatDefault);
        } else {
            setMapCenter({
                lat: country.countryInfo.lat,
                lng: country.countryInfo.long,
            });
        }
    };

    useEffect(() => {
        fetchCountryInfo(WORLDWIDE);
        getCountries().then(data => {
            const dataCountries = data
                .filter(country => country.countryInfo.iso2 !== null)
                .map(country => ({
                    name: country.country,
                    value: country.countryInfo.iso2,
                }));
            setcountries(dataCountries);
            setTableData(sortData(data));
            setIsCountriesLoading(false);
            setmapCountries(data);
            setIsMapLoading(false);
        });
    }, []);

    return (
        <Row className="app">
            <Col span={15} xs={{ span: 24 }} lg={{ span: 15 }}>
                <Row style={{ padding: "5px 0" }}>
                    <Col lg={{ span: 19 }} xs={{ span: 24 }}>
                        <Typography.Title
                            type="secondary"
                            style={{ textAlign: "center" }}
                        >
                            Nasrul Copid Tracker
                        </Typography.Title>
                    </Col>
                    <Col lg={{ span: 5 }} xs={{ span: 24 }}>
                        <SelectCountry
                            countries={countries}
                            country={country}
                            onCountryChange={onCountryChange}
                            isLoading={isCountriesLoading}
                        />
                    </Col>
                </Row>
                <Statistic
                    countryInfo={countryInfo}
                    isLoading={isCountryInfoLoading}
                    casesType={casesType}
                    setCasesType={setCasesType}
                />
                <Map
                    casesType={casesType}
                    countries={mapCountries}
                    mapCenter={mapCenter}
                    isLoading={isMapLoading}
                />
            </Col>
            <Col
                span={8}
                offset={1}
                xs={{ span: 24, offset: 0 }}
                lg={{ span: 8, offset: 1 }}
            >
                <TableData
                    countries={tableData}
                    isLoading={isCountriesLoading}
                />
                <LineGraph
                    title={`Worldwide new ${casesType}`}
                    lastDays={120}
                    casesType={casesType}
                />
            </Col>
        </Row>
    );
}

export default App;
