import React from "react";
import { Select, Skeleton, Card } from "antd";

function SelectCountry({ countries, country, isLoading, ...props }) {
    if (isLoading) {
        return <Skeleton.Input active style={{ width: 200 }} />;
    }
    return (
        <Select
            showSearch
            placeholder="Select Country"
            defaultValue={country}
            size="large"
            onChange={props.onCountryChange}
            style={{ width: "100%" }}
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            <Select.Option value="worldwide">Worldwide</Select.Option>
            {countries.map(country => (
                <Select.Option key={country.value} value={country.value}>
                    {country.name}
                </Select.Option>
            ))}
        </Select>
    );
}

export default SelectCountry;
