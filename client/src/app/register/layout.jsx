import IsCompany from "./isCompany"
import Loading from "@/components/loading";
import { Suspense } from "react";


export default function Layout () {
    return (
        <Suspense fallback={<Loading />}>

        <div>
            <IsCompany/>
        </div>
        </Suspense>
    )
}