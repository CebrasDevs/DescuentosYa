"use client"

import ItemDetail from "@/components/ItemDetail";
import useItemDetail from "@/hooks/useItemDetail";

export default function detail( {params} ) {

  const { id } = params;
  const data = useItemDetail(id)

    return (
      <div>
      <ItemDetail data={data} />
    </div>
    )
  }