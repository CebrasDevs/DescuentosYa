"use client";

import { filterCards, setCurrentPage } from "@/redux/actions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function usePaginate(value) {
    const dispatch = useDispatch();
    const allItems = useSelector((state) => state.allItems);
    const filteredItems = useSelector((state) => state.filteredItems);
    const currentPage = useSelector((state) => state.currentPage);

    const activeUser = useSelector((state) => state.activeUser);

    const detailUser = useSelector((state) => state.companyDetail);
    const activeFilters = useSelector((state) => state.activeFilters);
    
    useEffect(() => {
        if (allItems.length) {
            dispatch(filterCards(activeFilters));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allItems]);

    const itemsPerPage = 12;
    const maxIndex = currentPage * itemsPerPage;
    const minIndex = maxIndex - itemsPerPage;
    const currentView = filteredItems?.filter((item) => item.enabled).slice(minIndex, maxIndex); // se envia a GRID
    const numberOfPages = Math.ceil(filteredItems?.length / itemsPerPage) || 1; // para asegurarnos de que el number of pages no sea nunca 0

    const itemsProfile = activeUser.items?.slice(minIndex, maxIndex);

    const itemsDetail = detailUser.items?.filter((item) => item.enabled).slice(minIndex, maxIndex);
    
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

    if (value === "profile") {
        return {
            itemsProfile,
            handleOnClick,
            numberOfPages,
            currentPage,
        };
    }

    if (value === "detail") {
        return {
            itemsDetail,
            handleOnClick,
            numberOfPages,
            currentPage,
        };
    }

    if (value !== "detail" && value !== "profile") {
        return {
            currentView,
            handleOnClick,
            numberOfPages,
            currentPage,
        };
    }
}
