export default function QrFailed({ close }) {
  function handleClick() {
    close(false);
  }
  return (
    <div className="fixed inset-0 z-10 flex flex-col items-center backdrop-brightness-90 justify-center backdrop-blur-sm">
      <div className=" w-3/12 right-1/2 border-2 border-violet-900 top-1/4 max-h-120 bg-white justify-center flex flex-col items-center rounded-xl px-8 py-10 text-gray-800 shadow-lg">
        <svg
          width="80px"
          height="80px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#c31d1d"
          stroke="#c31d1d"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path fill="none" d="M0 0h24v24H0z"></path>{" "}
              <path d="M15 3h6v5h-2V5h-4V3zM9 3v2H5v3H3V3h6zm6 18v-2h4v-3h2v5h-6zm-6 0H3v-5h2v3h4v2zM3 11h18v2H3v-2z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
        <p className="mt-4 text-center text-2xl font-bold">
          QR GENERATION FAILED
        </p>
        <p className="mt-2 text-center font-semibold text-lg">
          This QR code was already generated previouslly
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
