import Loading from "@/components/loading";
import { Suspense } from "react";

export default function Layout ({children}) {
    return (
        <Suspense fallback={<Loading />}>

        <div>
            {children}
        </div>
        </Suspense>
    )
}