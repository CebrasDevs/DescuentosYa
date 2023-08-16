'use client'
import PurchaseDetail from "@/components/PurchaseDetail";
import VoucherDetail from "@/components/VoucherDetail";

export default function Page({ params }) {
  const { id } = params;

  return(
    <div>
        <PurchaseDetail id={id} />
        {/* <VoucherDetail id={id} /> */}
    </div>
  )
}