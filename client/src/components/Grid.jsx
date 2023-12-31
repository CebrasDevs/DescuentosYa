"use client";
import Card from "./Card";
import usePaginate from "@/hooks/usePaginate";
import styles from "../styles/Discounts.module.css";

export default function Grid({value, itemsFiltered}) {
    const { currentView, itemsProfile, itemsDetail } = usePaginate(value);
    const items = itemsFiltered || currentView || itemsProfile || itemsDetail;

    return (
        <>
            <div className={styles.container}>
                {items.map((item, index) => {
                    return <Card item={item} key={index} value={value}/>;
                })}
            </div>
        </>
    );
}
