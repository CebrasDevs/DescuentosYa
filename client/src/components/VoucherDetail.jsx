"use client";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { URL_BASE } from "@/utils/const";
import validateReview from "@/utils/validateReview";
import { setActiveUser } from "@/redux/actions";
import { FaStar } from "react-icons/fa";
import { HiMiniBackspace } from "react-icons/hi2";
import Loading from "@/components/loading";
import ReviewSaved from "./Modals/Reviews/ReviewSaved";
import ReviewDeleted from "./Modals/Reviews/ReviewDeleted";
axios.defaults.withCredentials = true;

export default function VoucherDetail({ id, user }) {
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.activeUser);

  const [isLoading, setIsLoading] = useState(true);
  const [reviewSaved, setReviewSaved] = useState("pending");

  let voucherBought, reviewForVoucherBought;
  useEffect(() => {
    setIsLoading(true);
    if (activeUser.id) {
      voucherBought = activeUser.vouchers.find(
        (voucher) => voucher.item.id === Number(id)
      );
      reviewForVoucherBought = activeUser.Review.find(
        (review) => review.itemId === voucherBought.item.id
      );
      setIsLoading(false);
    }
  }, [activeUser, id]);

  const [rating, setRating] = useState(null); //manejo el color de las estrellasenabled && reviewForVoucherBought?.
  const [edit, setEdit] = useState();
  const [review, setReview] = useState({
    userId: Number(user),
    itemId: Number(id),
    comment:
      (reviewForVoucherBought?.enabled && reviewForVoucherBought?.comment) ||
      "",
    star1:
      (reviewForVoucherBought?.enabled && reviewForVoucherBought?.star1) ||
      false,
    star2:
      (reviewForVoucherBought?.enabled && reviewForVoucherBought?.star2) ||
      false,
    star3:
      (reviewForVoucherBought?.enabled && reviewForVoucherBought?.star3) ||
      false,
    star4:
      (reviewForVoucherBought?.enabled && reviewForVoucherBought?.star4) ||
      false,
    star5:
      (reviewForVoucherBought?.enabled && reviewForVoucherBought?.star5) ||
      false,
  });

  useEffect(() => {
    if (reviewForVoucherBought?.enabled) {
      const selectedStars = [
        reviewForVoucherBought?.star1,
        reviewForVoucherBought?.star2,
        reviewForVoucherBought?.star3,
        reviewForVoucherBought?.star4,
        reviewForVoucherBought?.star5,
      ];
      const selectedRating = selectedStars.lastIndexOf(true) + 1;
      setRating(selectedRating);
    }
  }, [reviewForVoucherBought, activeUser]);

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

      if (reviewForVoucherBought) {
        let reviewWithTrueEnabled = { ...review, enabled: true };
        const response = await axios.patch(
          `${URL_BASE}/review/${reviewForVoucherBought.id}`,
          reviewWithTrueEnabled
        );
        if (response.status === 200) {
          setErrors({});
          dispatch(setActiveUser(activeUser.id));
          if (reviewForVoucherBought.enabled) {
            setReviewSaved(true);
          } else {
            setReviewSaved(true);
          }
        }
      } else {
        let reviewWithTrueEnabled = { ...review, enabled: true };
        //en caso de que el usuario nunca haya hecho una review de su compra
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
        `${URL_BASE}/review/${reviewForVoucherBought.id}`,
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

  voucherBought = activeUser?.vouchers?.find(
    (voucher) => voucher.item.id === Number(id)
  );
  reviewForVoucherBought = activeUser?.Review?.find(
    (review) => review.itemId === voucherBought?.item?.id
  );

  return (
    <div className="flex flex-col justify-center items-center ">
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
                src={voucherBought?.item.imageUrl}
              ></img>
            </div>
            <div className=" w-1/2 p-6 flex-col flex">
              <div className=" py-10 ">
                <h1 className=" font-bold text-5xl mr-44">
                  {" "}
                  {voucherBought.item.name}{" "}
                </h1>
              </div>
              <div className=" flex flex-row items-center gap-16">
                <div className=" flex flex-col gap-y-10">
                  <h1 className=" font-semibold text-xl">
                    Expiration Date: {voucherBought?.expirationDate}{" "}
                  </h1>

                  <h1 className=" font-semibold text-xl">
                    Seller company: {voucherBought?.company.name}
                  </h1>
                </div>
                <div>
                  <img
                    className="w-[250px] h-100px] "
                    src={voucherBought?.code}
                    alt="qrCode"
                  />
                </div>
              </div>
              <div className=" py-10 ">
                {!edit && (
                  <button
                    className="cursor-pointer py-2 px-6 font-bold rounded text-white bg-violet-500 hover:bg-violet-700"
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
              {reviewForVoucherBought?.enabled && (
                <div className="flex flex-col items-center bg-slate-50 rounded-2xl shadow-xl">
                  <h1 className=" font-semibold text-3xl mb-8 mt-8 ">
                    Your review
                  </h1>
                  <h1 className=" font-medium text-xl mb-4">
                    {reviewForVoucherBought?.comment}
                  </h1>
                  <div className="flex mb-6">
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
                <div>
                  <HiMiniBackspace
                    onClick={() => {
                      setEdit(false);
                    }}
                    className="hover:cursor-pointer text-4xl text-violet-600"
                  />
                </div>

                <h1 className=" text-4xl ">Leave a review of your purchase</h1>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="flex w-full m-5 items-center justify-center">
                  {[1, 2, 3, 4, 5].map((starNumber) => {
                    return (
                      <div
                        key={starNumber}
                        className=" items-center justify-center"
                      >
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
                      reviewForVoucherBought?.enabled
                        ? reviewForVoucherBought.comment
                        : "Leave a comment..."
                    }
                    value={review.comment}
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
                    disabled={!reviewForVoucherBought}
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
