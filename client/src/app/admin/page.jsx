"use client";
import Dashboard from "@/components/Dashboard";
import Loading from "@/components/loading";
import { Suspense } from "react";

export default function AdminPage() {
    return (
        <Suspense fallback={<Loading />}>
            <Dashboard />
        </Suspense>
    );
}
