"use client";
import CompanyProfile from "@/components/CompanyProfile";
import UserProfile from "@/components/UserProfile";
import { Suspense } from "react";
import Loading from "@/components/loading";

export default function profile() {
  return (
    <Suspense fallback={<Loading />}>
      <UserProfile />
      <CompanyProfile />
    </Suspense>
  );
}
