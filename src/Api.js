export const BASE_URL = "https://disease.sh/v3/covid-19/";

export const WORLDWIDE = BASE_URL + "all";

export const getCountries = async () => {
    return await (await fetch(BASE_URL + "countries")).json();
};
