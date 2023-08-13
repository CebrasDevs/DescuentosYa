import ShoppingCart from "../../components/ShoppingCart";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function ShoppingCart() {
    useEffect(() => {
        const retrievedCookie = Cookies.get("accessTrue");
        if (!retrievedCookie) {
          window.location.href = "http://localhost:3000/";
        }
      }, []);

    return (
        <>
            <ShoppingCart />
        </>
    );
}
