export default function ItemCartAdditionFail({ close }) {
  function handleClick() {
    close(false);
  }
  return (
    <div className="fixed inset-0 z-10 flex flex-col items-center backdrop-brightness-90 justify-center backdrop-blur-sm">
      <div className=" w-3/12 right-1/2 border-2 border-violet-900 top-1/4 max-h-120 bg-white justify-center flex flex-col items-center rounded-xl px-8 py-10 text-gray-800 shadow-lg">
        <svg
          width="69px"
          height="69px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="4.8"
          >
            {" "}
            <path
              d="M18.5 5.5L5.50002 18.4998"
              stroke="#ca2132"
              strokeWidth="2.232"
              strokeLinecap="round"
            ></path>{" "}
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="#ca2132"
              strokeWidth="2.232"
            ></circle>{" "}
          </g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M18.5 5.5L5.50002 18.4998"
              stroke="#ca2132"
              strokeWidth="2.232"
              strokeLinecap="round"
            ></path>{" "}
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="#ca2132"
              strokeWidth="2.232"
            ></circle>{" "}
          </g>
        </svg>
        <p className="mt-4 text-center text-2xl font-bold">
          ITEM ADDITION FAILED
        </p>
        <p className="mt-2 text-center font-semibold text-lg">
          The item is already in the shopping cart!
        </p>
        <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
          <button
            onClick={handleClick}
            className="whitespace-nowrap rounded-md bg-red-600 px-4 py-3 font-medium text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
