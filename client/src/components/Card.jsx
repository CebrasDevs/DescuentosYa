"use client";
import Link from "next/link";

// action que me llene un arreglo EG de items ni bien se levante el front, me traigo ese EG
export default function Card({item}) {

  return(
    <div className='m-20'>
          <h2>{item.name}</h2>
          <li>Category {item.category}</li>
          <li>{item.discount}% discount</li>
          <div>
        <Link href={`/${item.id}`} className="text-blue-700">             
              <h2 /* link al item view */>Ver oferta</h2>
        </Link>
          </div>
      </div>
  );
}
