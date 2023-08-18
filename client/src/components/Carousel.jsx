"use client"
import { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useSelector } from "react-redux";
import Link from "next/link";
import Card from "./Card";
import sortItemsCarousel from "@/utils/geolocationUtils/sortItemsCarousel";

export default function Carousel({ value }) {
  const itemsPerPage = 3;

  let items = useSelector((state) => state.allItems);
  let companies = useSelector((state) => state.companies);

  const [currentPage, setCurrentPage] = useState(0);
  const [companiesWithDistance, setCompaniesWithDistance] = useState(null)
  useEffect(() => {
    if (localStorage.getItem("userLocation") &&
      companies.length &&
      items.length &&
      items[0].distance
    ) {
      setCompaniesWithDistance(companies.sort((a, b) => a.distance?.value - b.distance?.value));
      items = sortItemsCarousel(items);
    };
  }, [companies]);

  const data = value === "discounts" ? items : companiesWithDistance ? companiesWithDistance : companies;
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
