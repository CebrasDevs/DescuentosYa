"use client";

import { getDiscounts, setCurrentPage } from "@/redux/actions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function usePaginate(company) {
    const dispatch = useDispatch();

    const filteredItems = useSelector((state) => state.filteredItems);
    const currentPage = useSelector((state) => state.currentPage);

    const activeUser = useSelector((state) => state.activeUser);

    useEffect(() => {
        dispatch(getDiscounts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    const itemsPerPage = 12;
    const maxIndex = currentPage * itemsPerPage;
    const minIndex = maxIndex - itemsPerPage;
    const currentView = filteredItems?.slice(minIndex, maxIndex); // se envia a GRID
    const numberOfPages = Math.ceil(filteredItems?.length / itemsPerPage) || 1; // para asegurarnos de que el number of pages no sea nunca 0

    const itemsCompany = activeUser.items?.slice(minIndex, maxIndex);

    function handleOnClick(e) {
        if (e.target.name === "previous")
            if (currentPage > 1) {
                dispatch(setCurrentPage(currentPage - 1));
            }
        if (e.target.name === "next")
            if (currentPage < numberOfPages) {
                dispatch(setCurrentPage(currentPage + 1));
            }
    }

    if (company === true) {
        return {
            itemsCompany,
            handleOnClick,
            numberOfPages,
            currentPage,
        };
    }

    return {
        currentView,
        handleOnClick,
        numberOfPages,
        currentPage,
    };
}
