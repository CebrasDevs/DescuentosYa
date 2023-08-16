'use client'
import PurchaseDetail from "@/components/PurchaseDetail";

export default function Page({ params }) {
  const { id } = params;

  return(
    <div>
        <PurchaseDetail id={id} />
    </div>
  )
}