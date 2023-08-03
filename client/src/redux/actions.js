export const GET_COMPANIES = "GET_COMPANIES";


export const getCompanies = (data) => {
    return { type: GET_COMPANIES, payload: data };
};