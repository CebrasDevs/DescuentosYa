"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { URL_BASE } from "@/utils/const";
import { AiFillPhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

export default function Userdetail({ id }) {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL_BASE}/profile/${id}`, {
          withCredentials: true,
        });
        if (response.status === 200) {
          setUser(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);
  
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <div className="bg-slate-50 rounded-lg shadow-md">
        <div className="flex flex-col items-center m-5">
          <h1>{user?.name}</h1>
          <img
            className="w-[300px] h-[300px] rounded-lg"
            src={user?.imageUrl}
          />
        </div>
        <div className="flex flex-col justify-center items-center m-5">
          {user?.description && (
            <h1 className="w-[500px] m-2">{user?.description}</h1>
          )}
          <div className="flex items-center">
            <HiOutlineMail className="flex mr-2" />
            <h1>{user?.email}</h1>
          </div>
          <div className="flex items-center">
            <AiFillPhone className="flex mr-2" />
            <h1>{user?.phoneNumber}</h1>
          </div>
          {user?.last_payment && <h1>Last payment: {user?.last_payment}</h1>}
          <div className="flex items-center">
            <BsPersonFill className="flex mr-2" />
            <h1>{user?.role}</h1>
          </div>
          {user?.enabled ? <h1>Status: active</h1> : <h1>Status: disabled</h1>}
        </div>
      </div>
      <div className="grid grid-cols-3">
        {user?.role === "COMPANY" && (
          <div className="flex flex-col bg-slate-50 rounded-lg shadow-md m-5 p-2 w-[500px]">
            <div className="flex justify-between border-b-2 mb-2">
              <h1 className="mb-2">ITEMS</h1>
              <h1>({user?.items.length})</h1>
            </div>
            {user?.items?.map((item) => {
              if (item.enabled) {
                return (
                  <div className="flex border-b-2 mb-2">
                    <img
                      className="w-[100px] h-[100px] rounded-lg"
                      src={item.imageUrl}
                    />
                    <h1 className="m-2">{item.name}</h1>
                  </div>
                );
              }
            })}
          </div>
        )}
        {user?.role === "MEMBER" ? (
          <div className="flex flex-col bg-slate-50 rounded-lg shadow-md m-5 p-2">
            <div className="flex justify-between border-b-2 mb-2">
              <h1 className="mb-2">MEMBER VOUCHERS GENERATED</h1>
              <h1>({user?.vouchers.length})</h1>
            </div>
            {user?.vouchers?.map((voucher) => {
              return (
                <div className="flex border-b-2 mb-2">
                  <img
                    className="w-[100px] h-[100px] rounded-lg"
                    src={voucher.item.imageUrl}
                  />
                  <h1 className="m-2">{voucher.item.name}</h1>
                  <Link href={`/admin/${voucher.company.id}`}>
                    <h1 className="m-2 underline">
                      Voucher for : {voucher.company.name}
                    </h1>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col bg-slate-50 rounded-lg shadow-md m-5 p-2">
            <div className="flex justify-between border-b-2 mb-2">
              <h1 className="mb-2">COMPANY VOUCHERS GENERATED</h1>
              <h1>({user?.vouchers.length})</h1>
            </div>
            {user?.vouchers?.map((voucher) => {
              return (
                <div className="flex border-b-2 mb-2">
                  <img
                    className="w-[100px] h-[100px] rounded-lg"
                    src={voucher.item.imageUrl}
                  />
                  <h1 className="m-2">{voucher.item.name}</h1>
                  <Link href={`/admin/${voucher.user.id}`}>
                    <h1 className="m-2 underline">
                      Voucher for : {voucher.user.name}
                    </h1>
                  </Link>
                  <h1 className="m-2">
                    Expiration on: {voucher.expirationDate}
                  </h1>
                </div>
              );
            })}
          </div>
        )}
        {/*  shoppings: [
      {
        id: 8,
        pdfUrl: 'http://stefan.net',
        wayToPay: 'CARD',
        state: 'SUCCESS',
        items: [
          {
            id: 54,
            quantity: 5,
            name: 'Swimming Pass - 1 Month',
            category: 'Sports',
            price: 35,
            discount: 15,
            imageUrl: 
              'https://imagenes.elpais.com/resizer/O_nfQn8L8LXpvOp_dWjVveDA2fo=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/XQDJC5BR4ZE45KALPCWSHUXYLY.jpg',
            company: { id: 14, name: 'Puma' }
          }
        ]
      }, */}
        {user?.role === "COMPANY" ? (
          <div className="flex flex-col bg-slate-50 rounded-lg shadow-md m-5 p-2">
            <div className="flex justify-between border-b-2 mb-2">
              <h1 className="mb-2">COMPANY SALES</h1>
              <h1>({user?.sales.length})</h1>
            </div>
            {user?.sales.length ? (
              user.sales.map((sale) => {
                return (
                  <div className="flex flex-col border-b-2">
                    <h1 className="m-2">{sale.name}</h1>
                    <h1 className="m-2">Method: {sale.wayToPay}</h1>
                    <Link href={`/admin/${sale.user.id}`}>
                      <h1 className="m-2 underline">
                        Sale for : {sale.user.name}
                      </h1>
                    </Link>
                    {sale.items.map((item) => {
                      return (
                        <div className="flex items-center">
                          <img
                            className="w-[100px] h-[100px] rounded-lg m-2"
                            src={item.imageUrl}
                          />
                          <h1>
                            {(item.price * (item.discount / 100)).toFixed(2)} $
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                );
              })
            ) : (
              <h1 className="text-lg font-bold">Have not made sales yet</h1>
            )}
          </div>
        ) : (
          <div className="flex flex-col bg-slate-50 rounded-lg shadow-md m-5 p-2">
            <div className="flex justify-between border-b-2 mb-2">
              <h1 className="mb-2">MEMBER ORDERS</h1>
              <h1>({user?.shoppings.length})</h1>
            </div>
            {user?.shoppings.length ? (
              user.shoppings.map((shopping) => {
                return (
                  <div className="flex flex-col border-b-2">
                    <h1 className="m-2">{shopping.name}</h1>
                    <h1 className="m-2">Method: {shopping.wayToPay}</h1>

                    {shopping.items.map((item) => {
                      return (
                        <div className="flex items-center">
                          <img
                            className="w-[100px] h-[100px] rounded-lg m-2"
                            src={item.imageUrl}
                          />
                          <Link href={`/admin/${item.company.id}`}>
                            <h1 className="m-2 underline">
                              Order from : {item.company.name}
                            </h1>
                          </Link>
                          <h1>
                            {(item.price * (item.discount / 100)).toFixed(2)} $
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                );
              })
            ) : (
              <h1 className="text-lg font-bold">Have not made orders yet</h1>
            )}
          </div>
        )}
        {user?.role === "MEMBER" ? (
          <div className="flex flex-col bg-slate-50 rounded-lg shadow-md m-5 p-2">
            <div className="flex justify-between border-b-2 mb-2">
              <h1 className="mb-2">REVIEWS</h1>
              <h1>({user?.Review.length})</h1>
            </div>
            {user?.Review.length ? (
              user.Review.map((review) => {
                return (
                  <div className="flex items-center border-b-2">
                    <div>
                      <FaStar className="text-yellow-500 text-2xl m-1" />
                    </div>
                    <h1 className="m-2">"{review.comment}"</h1>
                  </div>
                );
              })
            ) : (
              <h1 className="text-lg font-bold">Have not made review yet</h1>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
