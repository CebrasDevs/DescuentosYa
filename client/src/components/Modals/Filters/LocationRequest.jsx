export default function LocationRequestModal({ close }) {
    function handleClick() {
        close(false);
    }
    return (
        <div className="fixed inset-0 z-10 flex backdrop-brightness-90 flex-col items-center justify-center backdrop-blur-sm">
            <div className=" w-3/12 right-1/2 border-2 border-violet-900 top-1/4 max-h-80 bg-white justify-center flex flex-col items-center rounded-xl px-8 py-10 text-gray-800 shadow-lg">
                <h1>must allow location access</h1>
                <br /><br /><br /><br /><br /><br />
                <h3>then you must select the more option again</h3>
                <button onClick={handleClick}>Close</button>
            </div>
        </div>
    )
}