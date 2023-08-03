"use client";
import Card from "./Card";

export default function Grid() {
  const items = [
    {
      id: 1,
      userId: 2,
      description: null,
      discount: 15,
      category: ["market"],
      name: "Bebida Cola",
      price: 0,
    },
    {
      id: 2,
      userId: 2,
      description: null,
      discount: 20,
      category: ["health"],
      name: "Masajes chinos",
      price: 200,
    },
  ];
  return (
    <div>
      {items.map((item, index) => {
        return <Card item={item} key={index} />;
      })}
    </div>
  );
}
