import numeral from "numeral";

export const sortData = data => {
    return [...data].sort((a, b) => a.cases < b.cases);
};

export const prettyPrintStats = stat =>
    stat ? `+${numeral(stat).format("0.0a")}` : "+0";
