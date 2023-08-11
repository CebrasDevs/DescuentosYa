"use client"
import ItemDetail from "@/components/ItemDetail";
import axios from "axios";
import { URL_BASE } from "@/utils/const.js";

export default async function detail( { params } ) {
    const { id } = params;
    const { data } = await axios(`${URL_BASE}/items/${id}`);

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <ItemDetail data={data} />
      </main>
    )
  }
