"use client";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { URL_BASE } from "@/utils/const";
import validateReview from "@/utils/validateReview";
import { setActiveUser } from "@/redux/actions";
import { FaStar } from "react-icons/fa";
import { HiMiniBackspace } from "react-icons/hi2";
import ReviewSaved from "../components/Modals/Reviews/ReviewSaved";
import ReviewDeleted from "../components/Modals/Reviews/ReviewDeleted";
import Loading from "@/components/loading";
axios.defaults.withCredentials = true;

export default function PurchaseDetail({ id, activeUser, user }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [reviewSaved, setReviewSaved] = useState("pending");

  let allItemsBought, reviewForItemBought, itemBought;

  useEffect(() => {
    setIsLoading(true);
    if (activeUser?.id) {
      allItemsBought = activeUser.shoppings.map((shopping) =>
        shopping.items.find((item) => item.id === Number(id))
      );
      itemBought = allItemsBought.find((item) => item !== undefined);
      reviewForItemBought = activeUser.Review.find(
        (review) => review.itemId === itemBought.id
      );
      setIsLoading(false);
    }
  }, [activeUser, id]);

  const [rating, setRating] = useState(null); //para colorear las estrellas
  const [edit, setEdit] = useState();
  const [review, setReview] = useState({
    userId: Number(user),
    itemId: Number(id),
    comment:
      (reviewForItemBought?.enabled && reviewForItemBought?.comment) || "",
    star1:
      (reviewForItemBought?.enabled && reviewForItemBought?.star1) || false,
    star2:
      (reviewForItemBought?.enabled && reviewForItemBought?.star2) || false,
    star3:
      (reviewForItemBought?.enabled && reviewForItemBought?.star3) || false,
    star4:
      (reviewForItemBought?.enabled && reviewForItemBought?.star4) || false,
    star5:
      (reviewForItemBought?.enabled && reviewForItemBought?.star5) || false,
  });

  useEffect(() => {
    //para que se muestren debajo de yourReview las estrellas sin funcionalidad
    if (reviewForItemBought?.enabled) {
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
  }, [reviewForItemBought, activeUser]);

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
      validateReview({
        //esta validacion no se hace, esta de mas
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

    try {
      // en caso de que el usuario ya haya hecho una review, se updatea (patch)
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
            setReviewSaved(true);
          } else {
            setReviewSaved(true);
          }
        }
      } else {
        //en caso de que el usuario nunca haya hecho una review de su compra
        let reviewWithTrueEnabled = { ...review, enabled: true };
        const response = await axios.post(
          `${URL_BASE}/review`,
          reviewWithTrueEnabled
        );
        if (response.status === 200) {
          setErrors({});
          dispatch(setActiveUser(activeUser.id));
          setReviewSaved(true);
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
        setRating(null);
        dispatch(setActiveUser(activeUser.id));
        setReviewSaved(false);
      }
    } catch (error) {
      window.alert("Error sending your review");
    }
  };
  allItemsBought = activeUser?.shoppings?.map((shopping) =>
    shopping.items.find((item) => item.id === Number(id))
  );
  itemBought = allItemsBought?.find((item) => item !== undefined);
  reviewForItemBought = activeUser?.Review?.find(
    (review) => review.itemId === itemBought.id
  );

  const handleCloseModal = () => {
    setReviewSaved("pending");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col w-4/5 m-5 drop-shadow-xl">
          {reviewSaved === true && <ReviewSaved close={handleCloseModal} />}
          {reviewSaved === false && <ReviewDeleted close={handleCloseModal} />}
          <div className=" relative flex justify-center w-full min-h-[500px] bg-white rounded-2xl shadow-xl my-14 ">
            <div className=" w-1/2 h-full">
              <img
                className="w-[650px] h-[500px] object-cover rounded-2xl mt-6 mb-6 ml-10 border-2 border-gray-300"
                src={itemBought?.imageUrl}
              />
            </div>
            <div className=" w-1/2 p-6 flex-col flex">
              <div className=" py-10 ">
                <h1 className=" font-bold text-5xl mr-44">
                  {" "}
                  {itemBought.name}{" "}
                </h1>
              </div>
              <div className=" flex flex-col gap-y-10">
                <h1 className=" font-semibold text-xl">
                  Seller company: {itemBought?.company.name}
                </h1>
                <h1 className=" font-semibold text-xl">
                  Price paid: ${" "}
                  {(
                    itemBought?.price *
                    (1 - itemBought?.discount / 100)
                  ).toFixed(2)}
                </h1>
              </div>
              <div className=" py-10 ">
                {!edit && (
                  <button
                    className="cursor-pointer py-2 px-6 font-bold rounded text-white bg-violet-500 hover:bg-violet-700 mt-20"
                    onClick={() => {
                      setEdit(true);
                    }}
                  >
                    Edit your review
                  </button>
                )}
              </div>
            </div>
          </div>
          {!edit ? (
            <div>
              {reviewForItemBought?.enabled && (
                <div className="flex flex-col items-center bg-slate-50 rounded-2xl shadow-xl">
                  <h1 className=" font-semibold text-3xl mb-8 mt-8 ">
                    Your review
                  </h1>
                  <h1 className=" font-medium text-xl mb-4">
                    {reviewForItemBought?.comment}
                  </h1>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((starNumber) => {
                      return (
                        <div className="m-1">
                          <FaStar
                            className={
                              starNumber <= rating
                                ? "text-yellow-500 text-4xl m-1"
                                : "text-4xl m-1"
                            }
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col w-full items-center bg-slate-50 rounded-2xl shadow-xl">
              <div className=" flex gap-10 mt-10 items-center w-full justify-center">
                <HiMiniBackspace
                  onClick={() => {
                    setEdit(false);
                  }}
                  className="hover:cursor-pointer text-4xl text-violet-600"
                />
                <h1 className=" text-4xl ">Leave a review of your purchase</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex w-full m-5 items-center justify-center">
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
                              ? "text-yellow-500 text-4xl cursor-pointer m-1"
                              : "text-4xl cursor-pointer m-1"
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
                    placeholder={
                      reviewForItemBought?.enabled
                        ? reviewForItemBought?.comment
                        : "Leave a comment..."
                    }
                    value={
                      /* reviewForItemBought?.enabled ? reviewForItemBought.comment :  */ review.comment
                    }
                    onChange={handleReview}
                    className=" h-[200px] w-[1000px] bg-gray-50 border border-gray-400 text-gray-900 sm:text-2xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 "
                  />
                  <p className="text-red-600 h-4">{errors.comment}</p>
                </div>
                <div className="flex m-5 justify-center items-center">
                  <button
                    disabled={
                      !Object.values(review).some((value) => value === true) ||
                      isNotReady
                    }
                    type="submit"
                    name="save"
                    className=" mt-2 ml-2 self-center w-44 h-12 text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:border-blue-500 hover:text-gray-700  hover:border "
                  >
                    Save
                  </button>

                  <button
                    disabled={!reviewForItemBought?.enabled}
                    name="delete"
                    className=" mt-2 ml-2 self-center w-44 h-12 text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:border-blue-500 hover:text-gray-700  hover:border disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
