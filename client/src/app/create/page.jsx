"use client";
import CreateItem from "@/components/CreateItem";
import Loading from "@/components/loading";
import { Suspense } from "react";

export default function Create() {
  return (
    <Suspense fallback={<Loading />}>
      <CreateItem />
    </Suspense>
  );
}
