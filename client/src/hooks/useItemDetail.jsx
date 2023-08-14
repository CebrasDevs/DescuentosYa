"use client"

import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { getItemDetail, cleanItemDetail } from "@/redux/actions";

const useItemDetail = (id) => {
    const dispatch = useDispatch();
    const itemDetail = useSelector((state) => state.itemDetail);

    useEffect(() => {
        dispatch(getItemDetail(id));
        return () => {
            dispatch(cleanItemDetail());
        };
    }, [dispatch, id]);

    return itemDetail;
};

export default useItemDetail;