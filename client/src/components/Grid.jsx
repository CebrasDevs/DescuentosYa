"use client";
import Card from "./Card";
import usePaginate from "@/hooks/usePaginate";
import Pagination from "@/components/Pagination";

export default function Grid() {
  const {
    currentView
  } = usePaginate();

  const items = currentView;

  
  return (
    <div className="grid grid-cols-3 gap-12 p-24 items-center justify-center ">
      {items.map((item, index) => {
        return <Card item={item} key={index} />;
      })}
      <Pagination/>
    </div>
  );
}
