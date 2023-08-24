import Loading from "@/components/loading";
import { Suspense } from "react";

export default function Layout({ children }) {

    return (
        <Suspense fallback={<Loading />}>
            <div className="flex">
                <div className="right flex flex-col justify-evenly text-black m-auto bg-slate-50 rounded-md w-1/3 my-10">
                    <div className="text-center py-10">
                        {children}
                    </div>
                </div>
            </div>
        </Suspense>
    )
}