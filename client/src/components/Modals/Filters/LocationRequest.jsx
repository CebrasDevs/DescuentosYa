import { FaLocationDot } from "react-icons/fa";

export default function LocationRequestModal({ close }) {
  function handleClick() {
    close(false);
  }
  return (
    <div className="fixed inset-0 z-10 flex flex-col items-center backdrop-brightness-90 justify-center backdrop-blur-sm">
      <div className=" w-3/12 right-1/2 border-2 border-violet-900 top-1/4 max-h-100 bg-white justify-center flex flex-col items-center rounded-xl px-8 py-10 text-gray-800 shadow-lg">
        <svg
          width="80px"
          height="80px"
          viewBox="0 0 24.00 24.00"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#121111"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
              stroke="#7e1dbf"
              strokeWidth="2.16"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
              stroke="#7e1dbf"
              strokeWidth="2.16"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
        <p className="mt-4 text-center text-2xl font-bold">ENABLE LOCATION</p>
        <p className="mt-2 text-center font-semibold text-lg">
         Enable location to continue with this option, and select it again.
        </p>
        <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
          <button
            onClick={handleClick}
            className="whitespace-nowrap rounded-md bg-violet-600 px-4 py-3 font-medium text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}