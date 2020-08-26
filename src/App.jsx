import React, { useState, useEffect } from "react";
import { Row, Col, Typography, Select } from "antd";
import TableData from "./components/TableData";
import { getCountries } from "./Api";
import { sortData } from "./utils";
import "antd/dist/antd.css";
import "./styles/App.css";

function App() {
    const [countries, setcountries] = useState([]);
    const [country, setCountry] = useState("worldwide");
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        getCountries().then(data => {
            const dataCountries = data
                .filter(country => country.countryInfo.iso2 !== null)
                .map(country => ({
                    name: country.country,
                    value: country.countryInfo.iso2,
                }));
            setcountries(dataCountries);
            setTableData(sortData(data));
        });
    }, []);

    return (
        <Row className="app">
            <Col span={15}>
                <Row>
                    <Col span={19}>
                        <Typography.Title type="secondary">
                            Covid 19 Tracker
                        </Typography.Title>
                    </Col>
                    <Col span={5}>
                        <Select
                            showSearch
                            placeholder="Select Country"
                            defaultValue={country}
                            style={{ width: "100%", margin: "0 10px" }}
                            filterOption={(input, option) =>
                                option.children
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Select.Option value="worldwide">
                                Worldwide
                            </Select.Option>
                            {countries.map(country => (
                                <Select.Option
                                    key={country.value}
                                    value={country.value}
                                >
                                    {country.name}
                                </Select.Option>
                            ))}
                        </Select>
                    </Col>
                </Row>
            </Col>
            <Col span={8} offset={1}>
                <TableData countries={tableData} />
            </Col>
        </Row>
    );
}

export default App;
