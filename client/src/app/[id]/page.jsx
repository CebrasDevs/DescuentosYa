"use client"
import ItemDetail from "@/components/ItemDetail";
import axios from "axios";

export default async function detail( { params } ) {
    const { id } = params;
    const { data } = await axios(`https://desceuntosya-back.onrender.com/items/${id}`);

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <ItemDetail data={data} />
      </main>
    )
  }
