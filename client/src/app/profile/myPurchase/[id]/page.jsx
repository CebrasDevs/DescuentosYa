'use client'
import PurchaseDetail from "@/components/PurchaseDetail";
import { useSelector } from "react-redux";
import { useSearchParams } from 'next/navigation'

export default function Page({ params }) {
  const { id } = params;

  const activeUser = useSelector((state) => state.activeUser);

  const searchParams = useSearchParams()
  const userId = searchParams.get('userId')

  return (
    <div>
      <PurchaseDetail activeUser={activeUser} id={id} user={userId} />
    </div>
  );
}