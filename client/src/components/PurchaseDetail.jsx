"use client";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { URL_BASE } from "@/utils/const";
import validateReview from "@/utils/validateReview";
import { setActiveUser } from "@/redux/actions";
import { FaStar } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";

export default function PurchaseDetail({ id }) {
  const dispatch = useDispatch();
  /* const router = useRouter()
  const params = useSearchParams()
  const itemRouter = params.get("item")
  const item = JSON.parse(decodeURIComponent(itemRouter))
  console.log(item) */
  let activeUser = useSelector((state) => state.activeUser);

  let itemBought, reviewForItemBought;

  if (activeUser.id) {
    itemBought = activeUser.shoppings.find(
      (item) => item.items[0].id === Number(id)
    );
    reviewForItemBought = activeUser.Review.find(
      (item) => item.itemId === itemBought.items[0].id
    );
  }

  const [rating, setRating] = useState(null);
  const [edit, setEdit] = useState();
  const [review, setReview] = useState({
    userId: activeUser.id, //ya es numero
    itemId: itemBought?.items[0].id, //ya es numero
    comment: reviewForItemBought?.comment || "",
    star1: reviewForItemBought?.star1 || false,
    star2: reviewForItemBought?.star2 || false,
    star3: reviewForItemBought?.star3 || false,
    star4: reviewForItemBought?.star4 || false,
    star5: reviewForItemBought?.star5 || false,
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
      star1: starNumber === 1,
      star2: starNumber === 2,
      star3: starNumber === 3,
      star4: starNumber === 4,
      star5: starNumber === 5,
    };

    setReview(updatedReview);
  };

  //CUANDO SUBMITEO:
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // en caso de que el usuario ya haya hecho una review, se updatea (patch)
      if (reviewForItemBought) {
        const response = await axios.patch(
          `${URL_BASE}/review/${reviewForItemBought.id}`,
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
  };

  return (
    <div>
      <h1>Date:</h1>
      <h1>Paid with: {itemBought?.wayToPay} </h1>
      <h1>State: {itemBought?.state} </h1>
      <h1>Seller company: {itemBought?.items[0].company.name}</h1>
      <h1>
        Price paid:{" "}
        {(itemBought?.items[0].price * (1 - itemBought?.items[0].discount / 100)).toFixed(2)}
      </h1>
      <img className="w-[300px]" src={itemBought?.items[0].imageUrl} />
      {reviewForItemBought && !edit ? (
        <div>
          <h1>Your review</h1>
          <h1>{reviewForItemBought.comment}</h1>
          <button
            onClick={() => {
              setEdit(true);
            }}
          >
            Edit your review
          </button>
        </div>
      ) : (
        !edit && (
          <div>
            <h1>Leave a review of your purchase</h1>
            <form onSubmit={handleSubmit}>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((starNumber) => {
                  return (
                    <div>
                      <FaStar
                        key={starNumber}
                        name={`star${starNumber}`}
                        value={rating}
                        onClick={() => {
                          setRating(starNumber);
                          handleStar(starNumber);
                        }}
                        className={
                          starNumber <= rating
                            ? "text-yellow-500 text-5xl cursor-pointer"
                            : "text-5xl cursor-pointer"
                        }
                      />
                    </div>
                  );
                })}
              </div>
              <div>
                <textarea
                  type="text"
                  name="comment"
                  value={review.comment}
                  onChange={handleReview}
                  className=" h-[200px] bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                />
                <p className="text-red-600 h-4">{errors.comment}</p>
              </div>
              <button
                disabled={isNotReady}
                type="submit"
                className=" mt-2 ml-2 self-center w-1/2 h-12 text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:border-blue-500 hover:text-gray-700  hover:border "
              >
                Save
              </button>
            </form>
          </div>
        )
      )}
      {edit && (
        <div>
          <h1>Leave a review of your purchase</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((starNumber) => {
                return (
                  <div>
                    <FaStar
                      key={starNumber}
                      name={`star${starNumber}`}
                      value={rating}
                      onClick={() => {
                        setRating(starNumber);
                        handleStar(starNumber);
                      }}
                      className={
                        starNumber <= rating
                          ? "text-yellow-500 text-5xl cursor-pointer"
                          : "text-5xl cursor-pointer"
                      }
                    />
                  </div>
                );
              })}
            </div>
            <div>
              <textarea
                type="text"
                name="comment"
                value={review.comment}
                onChange={handleReview}
                className=" h-[200px] bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              />
              <p className="text-red-600 h-4">{errors.comment}</p>
            </div>
            <button
              disabled={isNotReady}
              type="submit"
              className=" mt-2 ml-2 self-center w-1/2 h-12 text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:border-blue-500 hover:text-gray-700  hover:border "
            >
              Save
            </button>
          </form>
        </div>
      )}
    </div>
  );
}