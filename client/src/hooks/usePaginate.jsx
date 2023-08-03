'use client'

import { setCurrentPage } from "@/redux/actions";
import { useSelector, useDispatch } from "react-redux";




export default function usePaginate(){
    
    const dispatch = useDispatch();

    const allItems = useSelector((state)=> state.allItems);
    const currentPage = useSelector((state)=> state.currentPage)

    const itemsPerPage = 6;
    const maxIndex = currentPage * itemsPerPage;
    const minIndex = maxIndex - itemsPerPage;
    const currentView = allItems?.slice(minIndex, maxIndex); // se envia a GRID
    const numberOfPages = Math.ceil(allItems.length / itemsPerPage) || 1; // para asegurarnos de que el number of pages no sea nunca 0

    function handleOnClick(e) {
        if (e.target.name === 'previous')
            if (currentPage > 1) {
                dispatch(setCurrentPage(currentPage - 1));
            }
        if (e.target.name === 'next')
            if (currentPage < numberOfPages) {
                dispatch(setCurrentPage(currentPage + 1));
            }
    };

    return {
        currentView,
        handleOnClick,
        numberOfPages,
        currentPage
    }

};