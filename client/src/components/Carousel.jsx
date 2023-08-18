"use client"
import { useEffect, useState, useRef } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useSelector } from "react-redux";
import Link from "next/link";
import Card from "./Card";
import sortItemsCarousel from "@/utils/geolocationUtils/sortItemsCarousel";

export default function Carousel({ value, type }) {

  const carouselRef = useRef(null);

  let items = useSelector((state) => state.allItems);
  let companies = useSelector((state) => state.companies);

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

  let data = value === "discounts" ? items : companiesWithDistance ? companiesWithDistance : companies;

  if(value === "discounts") {
    if(type === "products"){
      data = data.filter((item) => item.price === 0)
    } else {
      data = data.filter((item) => item.price !== 0)
    }
  }

  const scrollLeft = () => {
    if (carouselRef.current) {
        carouselRef.current.scrollLeft -= 700;
      }
}

const scrollRight = () => {
    if (carouselRef.current) {
        carouselRef.current.scrollLeft += 700;
      }
}


  return (
    <div className="flex items-center">
        <button onClick={scrollLeft} className="mr-3">
          <FiChevronLeft size={60} className=" text-violet-600 bg-white rounded-full hover:shadow-2xl" />
        </button>
      <div ref={carouselRef} className="carousel flex items-center justify-start overflow-x-auto relative py-5 scroll-smooth scrollbar-hide">
        {data.map((item, index) => (
          <div  key={index} className="mx-3">
            {value === "discounts" ? (
              <Card item={item} />
            ) : (
              <div className=" bg-white w-[350px] rounded-lg shadow-md hover:shadow-xl">
                <Link href={`/brands/${item.id}`}>
                  <img
                    className="card w-full h-[200px] bg-white rounded-lg hover:scale-105 transition-transform ease-in-out duration-300"
                    src={item.imageUrl}
                    alt={item.companyName}
                  />
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
        <button onClick={scrollRight} className="ml-3">
          <FiChevronRight size={60} className=" text-violet-600 bg-white rounded-full hover:shadow-lg"/>
        </button>
    </div>
  );
}
