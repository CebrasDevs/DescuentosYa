"use client";
import Card from "./Card";
import usePaginate from "@/hooks/usePaginate";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

// action que me llene un arreglo EG de items ni bien se levante el front, me traigo ese EG
export default function Carousel({ value }) {
    const { currentView } = usePaginate();
    const items = currentView;

    const logos = [
        "https://static-cse.canva.com/blob/951773/0750logotiposqueteinspiraran.jpg",
        "https://images-platform.99static.com/KeqZEKjbfTQv3-Ehn1Jfbp_GDjo=/500x500/top/smart/99designs-contests-attachments/6/6866/attachment_6866141",
        "https://w7.pngwing.com/pngs/35/677/png-transparent-libertad-s-a-libertad-sa-proposal-hypermarket-trade-libertad-text-logo-supermarket.png",
        "https://assets.turbologo.ru/blog/ru/2021/11/12082225/Levis_logo.png",
        "https://www.ypf.cl/wp-content/uploads/2021/09/cropped-ypf_favicon.png",
        "https://1000marcas.net/wp-content/uploads/2021/06/Red-Bull-logo.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwYXGxH6qIx_sGbbzNScK6D5bAeGD8ca_pQ",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXAwDg1KkJVBb1nZccu3V8ZLg4rEAfPvoe5Q",
        "https://w7.pngwing.com/pngs/785/534/png-transparent-whirlpool-corporation-logo-home-appliance-brand-maytag-others-miscellaneous-text-logo.png",
    ];

    return value === "discounts" ? (
        <div className="carousel flex items-center justify-start overflow-x-auto relative">
            {items.map((item, index) => {
                return (
                    <div key={index}>
                        <Card item={item} />
                    </div>
                );
            })}
        </div>
    ) : (
        <div className="carousel flex items-center justify-start overflow-x-auto relative">
            {logos.map((logo, index) => {
                return (
                    <div key={index}>
                        <div className="card bg-white w-[270px] rounded-lg m-2 shadow-md hover:shadow-xl">
                        <img
                            className=" card w-[500px] h-[200px] bg-white shadow-xl rounded-lg"
                            src={logo}
                            alt="Brand 1"
                        />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
