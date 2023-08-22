import IsCompany from "../../components/isCompany";
import Loading from "@/components/loading";
import { Suspense } from "react";

export default function Register() {
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <IsCompany />
            </Suspense>
        </div>
    );
}
