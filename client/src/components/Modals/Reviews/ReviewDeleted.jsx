export default function ReviewDeleted({ close }) {
    const handleClose = () => {
      close("pending");
    };
    return (
      <div className="fixed inset-0 z-10 flex backdrop-brightness-90 flex-col items-center justify-center backdrop-blur-sm">
        <div className=" w-3/12 right-1/2 border-2 border-violet-900 top-1/4 max-h-80 bg-white justify-center flex flex-col items-center rounded-xl px-8 py-10 text-gray-800 shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#f44336" d="M44,24c0,11-9,20-20,20S4,35,4,24S13,4,24,4S44,13,44,24z"></path><line x1="16.9" x2="31.1" y1="16.9" y2="31.1" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4"></line><line x1="31.1" x2="16.9" y1="16.9" y2="31.1" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4"></line>
</svg>
  
          <p className="mt-4 text-center text-3xl tracking-wider font-extrabold">
            Your review was deleted
          </p>
          <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
            <button
              onClick={handleClose}
              className="whitespace-nowrap rounded-md  bg-red-500 hover:bg-red-700 px-6 py-3 font-semibold tracking-wide text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }