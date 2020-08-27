import numeral from "numeral";

export const sortData = data => {
    return [...data].sort((a, b) => a.cases < b.cases);
};

export const prettyPrintStats = stat =>
    stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const buildChartData = (data, casesType = "cases") => {
    const chartData = [];
    let lastDataPoint;
    let index = 0;
    for (let date in data[casesType]) {
        if (lastDataPoint && index % 3 === 0) {
            chartData.push({
                x: date,
                y: data[casesType][date] - lastDataPoint,
            });
        }
        index++;
        lastDataPoint = data[casesType][date];
    }
    return chartData;
};
