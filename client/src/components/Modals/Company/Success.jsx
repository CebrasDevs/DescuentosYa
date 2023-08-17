import Link from "next/link";

export default function SuccessModal() {
  return (
    <div className="fixed inset-0 backdrop-brightness-90 z-10 flex flex-col items-center justify-center backdrop-blur-sm">
      <div className=" w-3/12 right-1/2 border-2 border-violet-900 top-1/4 max-h-80 bg-white justify-center flex flex-col items-center rounded-xl px-8 py-10 text-gray-800 shadow-lg">
        <svg
          width="91px"
          height="91px"
          viewBox="0 0 24.00 24.00"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#338e39"
            strokeWidth="4.8"
          >
            {" "}
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              stroke="#11d80e"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              opacity="0.34"
              d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
              stroke="#11d80e"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              stroke="#11d80e"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              opacity="0.34"
              d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
              stroke="#11d80e"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
        <p className="mt-4 text-center text-xl font-bold">Success</p>
        <p className="mt-2 text-center text-lg">
          Your account was created successfully
        </p>
        <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
          <Link href="/">
            <button className="whitespace-nowrap rounded-md bg-green-600 px-4 py-3 font-medium text-white">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
