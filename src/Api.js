export const BASE_URL = "https://disease.sh/v3/covid-19/";

export const WORLDWIDE = BASE_URL + "all";

export const getCountries = async () => {
    return await (await fetch(BASE_URL + "countries")).json();
};

export const getCountryInfo = async countryCode => {
    if (countryCode === "worldwide")
        return await (await fetch(BASE_URL + "all")).json();

    return await await (
        await fetch(BASE_URL + `countries/${countryCode}`)
    ).json();
};

export const getHistoricalData = async lastDays => {
    return await (
        await fetch(BASE_URL + `historical/all?lastdays=${lastDays}`)
    ).json();
};
