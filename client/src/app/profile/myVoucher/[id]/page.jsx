'use client'
import VoucherDetail from "@/components/VoucherDetail";

export default function Page({ params }) {
  const { id } = params;

  return(
    <div>
        <VoucherDetail id={id} />
    </div>
  )
}