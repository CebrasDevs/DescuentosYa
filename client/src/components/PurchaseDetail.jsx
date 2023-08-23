"use client";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { URL_BASE } from "@/utils/const";
import validateReview from "@/utils/validateReview";
import { setActiveUser } from "@/redux/actions";
import { FaStar } from "react-icons/fa";
import { HiMiniBackspace } from "react-icons/hi2";
axios.defaults.withCredentials = true;

export default function PurchaseDetail({ id, activeUser, user }) {
  const dispatch = useDispatch();

  let itemBought, reviewForItemBought;
  if (activeUser.id) {
    itemBought = activeUser.shoppings.find(
      (item) => item.items[0].id === Number(id)
    );
    reviewForItemBought = activeUser.Review.find(
      (item) => item.itemId === itemBought.items[0].id
    );
  }

  const [rating, setRating] = useState(null); //para colorear las estrellas
  const [edit, setEdit] = useState();
  const [review, setReview] = useState({
    userId: Number(user),
    itemId: Number(id),
    comment: (reviewForItemBought?.enabled && reviewForItemBought?.comment) || "",
    star1:  (reviewForItemBought?.enabled && reviewForItemBought?.star1) || false,
    star2: (reviewForItemBought?.enabled && reviewForItemBought?.star2) || false,
    star3: (reviewForItemBought?.enabled && reviewForItemBought?.star3) || false,
    star4: (reviewForItemBought?.enabled && reviewForItemBought?.star4) || false,
    star5: (reviewForItemBought?.enabled && reviewForItemBought?.star5) || false,
  });

  useEffect(() => { //para que se muestren debajo de yourReview las estrellas sin funcionalidad
    if(reviewForItemBought?.enabled){
      const selectedStars = [
        reviewForItemBought?.star1,
        reviewForItemBought?.star2,
        reviewForItemBought?.star3,
        reviewForItemBought?.star4,
        reviewForItemBought?.star5,
      ];
      const selectedRating = selectedStars.lastIndexOf(true) + 1;
      setRating(selectedRating);
    }
  }, [reviewForItemBought]);

  const [errors, setErrors] = useState({});

  const isNotReady = errors.comment || errors.star1;

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
      star1: starNumber >= 1,
      star2: starNumber >= 2,
      star3: starNumber >= 3,
      star4: starNumber >= 4,
      star5: starNumber >= 5,
    };

    setErrors(
      validateReview({ //esta validacion no se hace, esta de mas
        ...review,
        star1: starNumber >= 1,
        star2: starNumber >= 2,
        star3: starNumber >= 3,
        star4: starNumber >= 4,
        star5: starNumber >= 5,
      })
    );
    setReview(updatedReview);
  };

  //CUANDO SUBMITEO:
  const handleSubmit = async (e) => {
    e.preventDefault();

    try { // en caso de que el usuario ya haya hecho una review, se updatea (patch)
      if (reviewForItemBought) {
        let reviewWithTrueEnabled = { ...review, enabled: true };
        const response = await axios.patch(
          `${URL_BASE}/review/${reviewForItemBought.id}`,
          reviewWithTrueEnabled
        );
        if (response.status === 200) {
          setErrors({});
          dispatch(setActiveUser(activeUser.id));
          if (reviewForItemBought.enabled) {
            window.alert(`Your review was successfully modified`);
          } else {
            window.alert(`Your review was successfully saved!`);
          }
        }
      } else { //en caso de que el usuario nunca haya hecho una review de su compra
        let reviewWithTrueEnabled = { ...review, enabled: true };
        const response = await axios.post(
          `${URL_BASE}/review`,
          reviewWithTrueEnabled
        );
        if (response.status === 200) {
          setErrors({});
          dispatch(setActiveUser(activeUser.id));
          window.alert(`Your review was successfully saved`);
        }
      }
    } catch (error) {
      window.alert("Error sending your review");
    }
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      let reviewWithFalseEnabled = { ...review, enabled: false };
      const response = await axios.patch(
        `${URL_BASE}/review/${reviewForItemBought.id}`,
        reviewWithFalseEnabled
      );

      if (response.status === 200) {
        setErrors({});
        setReview({
          userId: Number(user),
          itemId: Number(id),
          comment: "",
          star1: false,
          star2: false,
          star3: false,
          star4: false,
          star5: false,
        });
        setRating(null)
        dispatch(setActiveUser(activeUser.id));
        window.alert(`Your review was successfully deleted`);
      }
    } catch (error) {
      window.alert("Error sending your review");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center border-b-2 bg-slate-50 rounded-lg shadow-md m-5 mt-10">
      {/* <h1>Date:</h1> */}
      <h1>Paid with: {itemBought?.wayToPay} </h1>
      <h1>State: {itemBought?.state} </h1>
      <h1>Seller company: {itemBought?.items[0].company.name}</h1>
      <h1>
        Price paid: ${" "}
        {(
          itemBought?.items[0].price *
          (1 - itemBought?.items[0].discount / 100)
        ).toFixed(2)}
      </h1>
      <img className="w-[300px]" src={itemBought?.items[0].imageUrl} />
      <button
        onClick={() => {
          setEdit(true);
        }}
      >
        Edit your review
      </button>
      {!edit ? (
        <div>
          {reviewForItemBought?.enabled && (
            <div className="m-5 items-center">
              <h1>Your review</h1>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((starNumber) => {
                  return (
                    <div className="m-1">
                      <FaStar
                        className={
                          starNumber <= rating
                            ? "text-yellow-500 text-5xl m-1"
                            : "text-5xl m-1"
                        }
                      />
                    </div>
                  );
                })}
              </div>
              <h1>{reviewForItemBought?.comment}</h1>
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center border border-black m-5 rounded-lg">
          <HiMiniBackspace
            onClick={() => {
              setEdit(false);
            }}
            className="hover: cursor-pointer text-4xl m-4"
          />
          <h1>Leave a review of your purchase</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex m-5">
              {[1, 2, 3, 4, 5].map((starNumber) => {
                return (
                  <div key={starNumber}>
                    <FaStar
                      key={starNumber}
                      name={`star${starNumber}`}
                      onClick={() => {
                        setRating(starNumber);
                        handleStar(starNumber);
                      }}
                      className={
                        starNumber <= rating
                          ? "text-yellow-500 text-5xl cursor-pointer m-1"
                          : "text-5xl cursor-pointer m-1"
                      }
                    />
                  </div>
                );
              })}
            </div>
            <div className="m-5">
              {" "}
              {/* TEXT AREA*/}
              <textarea
                type="text"
                name="comment"
                placeholder={reviewForItemBought?.enabled ? reviewForItemBought?.comment : "Leave a comment..."}
                value={/* reviewForItemBought?.enabled ? reviewForItemBought.comment :  */review.comment}
                onChange={handleReview}
                className=" h-[200px] bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              />
              <p className="text-red-600 h-4">{errors.comment}</p>
            </div>
            <div className="flex m-5">
              <button
                disabled={
                  !Object.values(review).some((value) => value === true) ||
                  isNotReady
                }
                type="submit"
                name="save"
                className={
                  "mt-2 ml-2 self-center w-1/2 h-12 text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:border-blue-500 hover:text-gray-700  hover:border disabled:opacity-50 disabled:cursor-not-allowed"
                }
              >
                Save
              </button>

              <button
                disabled={!reviewForItemBought?.enabled}
                name="delete"
                className=" mt-2 ml-2 self-center w-1/2 h-12 text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:border-blue-500 hover:text-gray-700  hover:border disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}