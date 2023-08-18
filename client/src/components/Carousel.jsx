"use client"
import { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useSelector } from "react-redux";
import Link from "next/link";
import Card from "./Card";

export default function Carousel({ value }) {
  const itemsPerPage = 3;

  const items = useSelector((state) => state.allItems);
  const companies = useSelector((state) => state.companies);

  const [currentPage, setCurrentPage] = useState(0);

  const data = value === "discounts" ? items : companies;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentView = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex ">
      {/* Renderiza los elementos de la página actual */}
        <button onClick={prevPage} disabled={currentPage === 0}>
          <FiChevronLeft className=" text-white text-6xl bg-slate-600 rounded-full" />
        </button>
      <div className=" flex flex-wrap w-full min-w-full justify-start">
        {currentView.map((item, index) => (
          <div  key={index}>
            {/* Renderiza tu elemento aquí */}
            {value === "discounts" ? (
              <Card item={item}/>
            ) : (
              <div className=" bg-white w-[400px] rounded-lg m-2 shadow-md hover:shadow-xl">
                <Link href={`/brands/${item.id}`}>
                  <img
                    className="card w-full h-[200px] bg-white shadow-xl rounded-lg filter grayscale hover:filter-none transition duration-300"
                    src={item.imageUrl}
                    alt={item.companyName}
                  />
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
        <button onClick={nextPage} disabled={currentPage === totalPages - 1}>
          <FiChevronRight className=" text-white text-6xl bg-slate-600 rounded-full"/>
        </button>
    </div>
  );
}

// "use client";
// import Card from "./Card";
// import usePaginate from "@/hooks/usePaginate";
// import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import { useSelector } from "react-redux";
// import Link from "next/link";

// // action que me llene un arreglo EG de items ni bien se levante el front, me traigo ese EG
// export default function Carousel({ value }) {
//     const { currentView } = usePaginate();
//     const items = currentView;

//     const companies = useSelector((state) => state.companies);

//     return value === "discounts" ? (
//         <div className="carousel flex items-center justify-start overflow-x-auto relative py-5">
//             {items.map((item, index) => {
//                 return (
//                     <div key={index}>
//                         <Card item={item} />
//                     </div>
//                 );
//             })}
//         </div>
//     ) : (
//         <div className="carousel flex items-center justify-start overflow-x-auto relative">
//             {companies.map((company, index) => {
//                 return (
//                     <div key={index}>
//                         <div className="card bg-white w-[270px] rounded-lg m-2 shadow-md hover:shadow-xl">
//                         <Link href={`/brands/${company.id}`}>
//                             <img
//                                 className=" card w-[500px] h-[200px] bg-white shadow-xl rounded-lg"
//                                 src={company.imageUrl}
//                                 alt={company.companyName}
//                             />
//                         </Link>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }
