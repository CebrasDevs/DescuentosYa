export default function ItemSameCompanyAddition({ close }) {
  function handleClick() {
    close(false);
  }
  return (
    <div className="fixed inset-0 z-10 flex flex-col items-center backdrop-brightness-90 justify-center backdrop-blur-sm">
      <div className=" w-3/12 right-1/2 border-2 border-violet-900 top-1/4 max-h-120 bg-white justify-center flex flex-col items-center rounded-xl px-8 py-10 text-gray-800 shadow-lg">
        <svg
          width={"80px"}
          height={"80px"}
          fill="#000000"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>cancel</title>{" "}
            <path d="M16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM21.961 12.209c0.244-0.244 0.244-0.641 0-0.885l-1.328-1.327c-0.244-0.244-0.641-0.244-0.885 0l-3.761 3.761-3.761-3.761c-0.244-0.244-0.641-0.244-0.885 0l-1.328 1.327c-0.244 0.244-0.244 0.641 0 0.885l3.762 3.762-3.762 3.76c-0.244 0.244-0.244 0.641 0 0.885l1.328 1.328c0.244 0.244 0.641 0.244 0.885 0l3.761-3.762 3.761 3.762c0.244 0.244 0.641 0.244 0.885 0l1.328-1.328c0.244-0.244 0.244-0.641 0-0.885l-3.762-3.76 3.762-3.762z"></path>{" "}
          </g>
        </svg>
        <p className="mt-4 text-center text-2xl font-bold">
          ITEM ADDITION FAILED
        </p>
        <p className="mt-2 text-center font-semibold text-lg">
          Cannot add items from different companies!
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
