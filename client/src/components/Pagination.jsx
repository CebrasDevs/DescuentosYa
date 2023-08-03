'use client'
import usePaginate from "@/hooks/usePaginate";


export default function Pagination() {

    const {
        handleOnClick,
        currentPage,
        numberOfPages
    } = usePaginate();

    return(
        <div>
            <button onClick={handleOnClick} name="previous"> PREV </button>
            <span> {currentPage} / {numberOfPages} </span>
            <button onClick={handleOnClick} name="next"> NEXT </button>
        </div>
    )
};
