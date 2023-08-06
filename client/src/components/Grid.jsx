"use client";
import Card from "./Card";
import usePaginate from "@/hooks/usePaginate";
import Pagination from "@/components/Pagination";
import styles from "../styles/Discounts.module.css";

export default function Grid() {
    const { currentView } = usePaginate();

    const items = currentView;

    return (
        <>
            <div className={styles.container}>
                {items.map((item, index) => {
                    return <Card item={item} key={index} />;
                })}
            </div>
        </>
    );
}
