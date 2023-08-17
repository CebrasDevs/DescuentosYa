'use client'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories, getCompanies, getDiscounts, setActiveUser, setShoppingCart } from "@/redux/actions";
import Cookies from "js-cookie";
import { useLoadScript } from "@react-google-maps/api";

export default function RootConfig() {
  const dispatch = useDispatch();
  // Cargamos el script de GoogleMaps para poder usar los mapas en toda la pagina
  useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY });

  useEffect(() => {
    // Hidratamos los estados globales
    dispatch(getCompanies());
    dispatch(getDiscounts());
    dispatch(getCategories());

    // Conseguimos el usuario activo a partir de la cookie
    const retrievedCookie = Cookies.get("accessTrue");
    if (retrievedCookie) {
        const parsedValue = JSON.parse(retrievedCookie);
        // Lo guardamos en el estado global
        dispatch(setActiveUser(parsedValue.id));
    }
    // Conseguimos los items que haya en las cookies
    const cart = Cookies.get("shoppingCart");
    if (cart) {
      const cartValue = JSON.parse(cart);
      // Los guardamos en el estado global
      dispatch(setShoppingCart(cartValue));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return null;
}