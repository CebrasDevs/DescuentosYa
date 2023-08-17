"use client";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Carousel from "./Carousel";

const slides = [
    {
        url: "https://iili.io/HtJnXee.webp",
    },
    {
        url: "https://iili.io/HtJoFEl.webp",
    },
    {
        url: "https://iili.io/HtJoBY7.webp",
    },
];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="w-full pb-10">
            <div className="max-w-full h-[340px] w-full m-auto px-4 relative group">
                <div
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className="w-full h-full bg-center bg-cover ease-out duration-500"
                ></div>

                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>

                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
            </div>

            <div className="w-2/3 m-auto mt-10">
                <h2 className="mb-3 text-2xl">Discounts</h2>
                <Carousel value={"discounts"} />
            </div>

            <div className="w-2/3 m-auto mt-10">
                <h2 className="mb-3 text-2xl">Companies</h2>
                <Carousel value={"companies"} />
            </div>
        </div>
    );
}
