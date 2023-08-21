'use client'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoadScript } from "@react-google-maps/api";
import Cookies from "js-cookie";
import { getCategories, getCompanies, getDiscounts, setActiveUser, setDistances, setShoppingCart } from "@/redux/actions";


export default function RootConfig() {
  const dispatch = useDispatch();
  // Cargamos el script de GoogleMaps para poder usar los mapas en toda la pagina
  const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY });
  const companies = useSelector((state) => state.companies);


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
    };

    // Conseguimos los items que haya en las cookies
    const cart = Cookies.get("shoppingCart");
    if (cart) {
      const cartValue = JSON.parse(cart);
      // Los guardamos en el estado global
      dispatch(setShoppingCart(cartValue));
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  useEffect(() => {
    // Necesitamos que las compañias ya esten en el estado global,
    //  que el script de GoogleMaps este listo,
    //  y que aun no se hayan cargado las distancias antes;

    if (companies.length && isLoaded && !("distance" in companies[0])) {
        // Chequeamos si ya hay userLocation guardada en el localStorage
        const userLocation = JSON.parse(localStorage.getItem("userLocation"));
        if (userLocation) {
            dispatch(setDistances(companies));
        };
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [companies, isLoaded])


    // Como esto es un componente que no renderiza nada, retornamos null
    return null;
}