// LO SIGUIENTE ES SOLO DE EJEMPLO


export const GET_COMPANIES = "GET_COMPANIES";

export const getCompanies = () => {
    return async (dispatch) => {
        try {
            const data = 0;
            return dispatch({
                type: GET_COMPANIES,
                payload: data,
            });
        } catch (error) {
            console.log(error.response.data);
        }
    };
};