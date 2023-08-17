'use client'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories, getCompanies, getDiscounts, setActiveUser, setShoppingCart } from "@/redux/actions";

export default function RootConfig() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanies());
    dispatch(getDiscounts());
    dispatch(getCategories());
    // Acceder a una cookie
    const retrievedCookie = Cookies.get("accessTrue");
    if (retrievedCookie) {
        const parsedValue = JSON.parse(retrievedCookie);
        dispatch(setActiveUser(parsedValue.id));
    }
    const cart = Cookies.get("shoppingCart");
    if (cart) {
      const cartValue = JSON.parse(cart);
      dispatch(setShoppingCart(cartValue));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return null;
}