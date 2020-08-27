import React, { useState, useEffect } from "react";
import { Card, Skeleton } from "antd";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import { getHistoricalData } from "../Api";
import { buildChartData } from "../utils";

const options = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format("+0,0");
            },
        },
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll",
                },
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
                ticks: {
                    callback: function (value, index, values) {
                        return numeral(value).format("0a");
                    },
                },
            },
        ],
    },
};

function LineGraph({ title, lastDays, casesType }) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getHistoricalData(lastDays).then(data => {
            setData(buildChartData(data, casesType));
            setIsLoading(false);
        });
    }, [lastDays, casesType]);

    return (
        <Card title={title} style={{ height: "350px" }}>
            {isLoading ? (
                <Skeleton />
            ) : (
                <Line
                    height={250}
                    options={options}
                    data={{
                        datasets: [
                            {
                                backgroundColor: "rgba(204, 16, 52, 0.5)",
                                borderColor: "#cc1034",
                                data,
                            },
                        ],
                    }}
                />
            )}
        </Card>
    );
}

export default LineGraph;
