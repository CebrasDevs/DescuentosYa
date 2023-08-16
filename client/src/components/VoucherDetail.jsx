"use client";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { URL_BASE } from "@/utils/const";
import validateReview from "@/utils/validateReview";
import { setActiveUser } from "@/redux/actions";

export default function PurchaseDetail({ id }) {
    const dispatch = useDispatch();
    let activeUser = useSelector((state) => state.activeUser);

    let voucherBought = activeUser.voucher.find(
        (voucher) => voucher.item[0].id === +id
    );

    let reviewForVoucherBought = activeUser.Review.find(
        (review) => review.itemId === voucherBought.item[0].id
    );

    const [edit, setEdit] = useState()
    const [review, setReview] = useState({
        userId: activeUser.id, //ya es numero
        itemId: voucherBought.items[0].id, //ya es numero
        comment: reviewForVoucherBought?.comment || "",
        star1: reviewForVoucherBought?.star1 || false,
        star2: reviewForVoucherBought?.star2 || false,
        star3: reviewForVoucherBought?.star3 || false,
        star4: reviewForVoucherBought?.star4 || false,
        star5: reviewForVoucherBought?.star5 || false,
    });

    const [errors, setErrors] = useState({
        comment: "",
    });

    const isNotReady = errors.comment;


    const handleReview = (event) => {
        setReview({
            ...review,
            [event.target.name]: event.target.value,
        });

        setErrors(
            validateReview({
                ...review,
                [event.target.name]: event.target.value,
            })
        );
    };

    const handleStar = (starNumber) => {
        const updatedReview = {
            ...review,
            [`star${starNumber}`]: !review[`star${starNumber}`],
        };

        setReview(updatedReview);
    };

    //CUANDO SUBMITEO:
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // en caso de que el usuario ya haya hecho una review, se updatea (patch)

            if (reviewForVoucherBought) {
                const response = await axios.patch(
                    `${URL_BASE}/review/${reviewForVoucherBought.id}`,
                    review
                );
                if (response.status === 200) {
                    setErrors({});
                    dispatch(setActiveUser(activeUser.id));
                    window.alert(`Your review was successfully modified`);
                }
            } else {
                //en caso de que el usuario nunca haya hecho una review de su compra
                const response = await axios.post(`${URL_BASE}/review`, review);
                console.log(review);
                if (response.status === 200) {
                    setErrors({});
                    dispatch(setActiveUser(activeUser.id));
                    window.alert(`Your review was successfully saved`);
                }
            }
        } catch (error) {
            window.alert("Error sending your review");
        }
    }
//     return (
//         <div>
//             <h1>Expiration Date: {voucherBought.expirationDate} </h1>
//             <h1>Code: {voucherBought.code} </h1>
//             <h1>Enabled?: {voucherBought.enable} </h1>
//             <h1>Seller company: {voucherBought.items[0].company.name}</h1>
           
//         <div/>
//         )
        
 }
