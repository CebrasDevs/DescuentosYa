export default function DisableItem({ close }) {
    const handleClose = () => {
      close("pending");
    };
  
    return (
      <div className="fixed inset-0 z-10 flex flex-col items-center backdrop-brightness-90 justify-center backdrop-blur-sm">
        <div className=" w-3/12 right-1/2 border-2 border-violet-900 top-1/4 max-h-80 bg-white justify-center flex flex-col items-center rounded-xl px-8 py-10 text-gray-800 shadoeLg">
          <svg
            width="91px"
            height="91px"
            viewBox="0 0 24.00 24.00"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              stroke-width="0.384"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M9.1709 4C9.58273 2.83481 10.694 2 12.0002 2C13.3064 2 14.4177 2.83481 14.8295 4"
                stroke="#cb261a"
                strokeWidth="1.6799999999999997"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M20.5001 6H3.5"
                stroke="#cb261a"
                strokeWidth="1.6799999999999997"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5"
                stroke="#cb261a"
                strokeWidth="1.6799999999999997"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M9.5 11L10 16"
                stroke="#cb261a"
                strokeWidth="1.6799999999999997"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M14.5 11L14 16"
                stroke="#cb261a"
                strokeWidth="1.6799999999999997"
                strokeLinecap="round"
              ></path>{" "}
            </g>
          </svg>
          <p className="mt-4 text-center text-xl font-bold">DISABLED</p>
          <p className="mt-2 text-center font-semibold text-lg">
            You disabled this item
          </p>
          <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
            <button
              onClick={handleClose}
              className="whitespace-nowrap rounded-md bg-red-600 px-4 py-3 font-medium text-white"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
  