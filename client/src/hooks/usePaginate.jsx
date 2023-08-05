"use client";

import { getDiscounts, setCurrentPage } from "@/redux/actions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function usePaginate() {
    const dispatch = useDispatch();

    const allItems = useSelector((state) => state.filteredItems);
    const currentPage = useSelector((state) => state.currentPage);

    useEffect(() => {
        dispatch(getDiscounts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    const itemsPerPage = 12;
    const maxIndex = currentPage * itemsPerPage;
    const minIndex = maxIndex - itemsPerPage;
    const currentView = allItems?.slice(minIndex, maxIndex); // se envia a GRID
    const numberOfPages = Math.ceil(allItems.length / itemsPerPage) || 1; // para asegurarnos de que el number of pages no sea nunca 0

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

    return {
        currentView,
        handleOnClick,
        numberOfPages,
        currentPage,
    };
}
