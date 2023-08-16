import Loading from "@/components/loading";
import { Suspense } from "react";

export default function profileView({children}) {

  return (
    <Suspense fallback={<Loading />}>

    <div className="min-h-[60vh]">
      {children}
    </div>
    </Suspense>
  );
}
