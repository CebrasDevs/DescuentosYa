"use client"

import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { cleanCompanyDetail, getCompanyDetail} from "../redux/actions";

const useCompany = (id) => {
    const dispatch = useDispatch();
    const company = useSelector((state) => state.companyDetail);

    useEffect(() => {
        dispatch(getCompanyDetail(id));
        return () => {
            dispatch(cleanCompanyDetail());
        };
    }, [dispatch, id]);

    return company;
};

export default useCompany;