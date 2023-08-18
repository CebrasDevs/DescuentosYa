'use client'
import VoucherDetail from "@/components/VoucherDetail";
import { useSelector } from "react-redux";
import { useSearchParams } from 'next/navigation'

export default function Page({ params }) {
  const { id } = params;

  const activeUser = useSelector((state) => state.activeUser);

  const searchParams = useSearchParams()
  const userId = searchParams.get('userId')

  return(
    <div>
        <VoucherDetail activeUser={activeUser} id={id} user={userId} />
    </div>
  )
}