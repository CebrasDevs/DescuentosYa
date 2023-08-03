"use client";
import Card from "./Card";

export default function Grid({currentView}) {

  const items = currentView;
  
  return (
    <div class="grid grid-cols-3 gap-12 p-24 items-center justify-center ">
      {items.map((item, index) => {
        return <Card item={item} key={index} />;
      })}
    </div>
  );
}
