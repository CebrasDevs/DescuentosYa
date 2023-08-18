"use client";
import Filters from "@/components/Filters";
import Grid from "@/components/Grid";
import { getItemsByName, setDistances } from "@/redux/actions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
//se agrega para la solicitud de ubicacion al usuario
import LocationRequestModal from "@/components/Modals/Filters/LocationRequest";
import getUserLocation from "@/utils/geolocationUtils/getUserLocation";
import { useLoadScript } from "@react-google-maps/api";

export default function discounts() {
  useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY });
  // const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  // const handleClick = () => {
  //     dispatch(getItemsByName(search));
  // }
  const handleChange = (e) => {
    // const value = e.target.value;
    // setSearch(value);
    dispatch(getItemsByName(e.target.value));
  };

  // instanciamos para mostrar el modal de la ubicacion o no
  const [locationRequestModal, setLocationRequestModel] = useState(false);

  const showLocationRequestModal = async (boolean) => {
    // si no hay ubicacion solicitamos por el modal que acepte y puede cerrar el modal
    setLocationRequestModel(boolean)
    if (boolean) {
      getUserLocation()
        .then(() => setLocationRequestModel(false))
        .then(() => dispatch(setDistances()))
        .catch((error) => console.log(error));
    }
  };

  return (
        <div className="w-[90%] flex m-auto pb-32">
          {locationRequestModal && <LocationRequestModal close={showLocationRequestModal} />}
            <div className="rounded-lg w-[20%] mt-[8.5rem]">
                <Filters showModal={showLocationRequestModal} />
            </div>
            <div className="mt-10 w-[80%]">
                <div className="relative flex w-2/6 m-auto items-center justify-between rounded-md border shadow-lg mb-10">
                    <svg
                        className="absolute left-2 block h-5 w-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" className=""></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
                    </svg>
                    <input
                        type="search"
                        name="search"
                        onInput={handleChange}
                        className="h-14 w-full rounded-md py-4 pl-12 pr-8 outline-none focus:ring-2 focus:ring-violet-400"
                        placeholder="Find your next discount"
                    />
                </div>
                <Grid />
            </div>
        </div>
    );
}