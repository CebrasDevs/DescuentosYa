"use client";
import Card from "./Card";
import usePaginate from "@/hooks/usePaginate";
import styles from "../styles/Discounts.module.css";

export default function Grid({company}) {
    const { currentView, itemsCompany } = usePaginate(company);
    const items = currentView || itemsCompany;

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
