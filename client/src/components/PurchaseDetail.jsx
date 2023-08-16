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
  let itemBought = activeUser.shoppings.find(
    (item) => item.items[0].id === Number(id)
  );
  let reviewForItemBought = activeUser.Review.find(
    (item) => item.itemId === itemBought.items[0].id
  );
  
  const [edit, setEdit] = useState()
  const [review, setReview] = useState({
    userId: activeUser.id, //ya es numero
    itemId: itemBought.items[0].id, //ya es numero
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
      [`star${starNumber}`]: !review[`star${starNumber}`],
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
      <h1>Paid with: {itemBought.wayToPay} </h1>
      <h1>State: {itemBought.state} </h1>
      <h1>Seller company: {itemBought.items[0].company.name}</h1>
      <h1>
        Price paid:{" "}
        {itemBought.items[0].price * (1 - itemBought.items[0].discount / 100)}
      </h1>
      <img className="w-[300px]" src={itemBought.items[0].imageUrl} />
      {(reviewForItemBought && !edit) ? (
        <div>
          <h1>Your review</h1>
          <h1>{reviewForItemBought.comment}</h1>
          <button onClick={()=>{
            setEdit(true)
          }}>Edit your review</button>
        </div>
      ) : (!edit && (
        <div>
          <h1>Leave a review of your purchase</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((starNumber) => (
                <svg
                  key={starNumber}
                  aria-hidden="true"
                  className={`h-10 w-10 text-yellow-300 hover:cursor-pointer ${
                    review[`star${starNumber}`] ? "text-yellow-500" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  name={`star${starNumber}`}
                  onClick={() => handleStar(starNumber)}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <div>
              <input
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
      ))}
      {edit && <div>
          <h1>Leave a review of your purchase</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((starNumber) => (
                <svg
                  key={starNumber}
                  aria-hidden="true"
                  className={`h-10 w-10 text-yellow-300 hover:cursor-pointer ${
                    review[`star${starNumber}`] ? "text-yellow-500" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  name={`star${starNumber}`}
                  onClick={() => handleStar(starNumber)}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <div>
              <input
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
        </div>}
    </div>
  );
}