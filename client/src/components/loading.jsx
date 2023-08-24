export default function Loading () {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div>
                <img alt="loadingGif" 
                className="mx-auto w-40 h-40 rounded-full"
                src="https://media.tenor.com/BtC0jVjzYToAAAAC/loading-chain.gif"></img>
            </div>
            {/* <div className="mt-4 text-lg">
                Loading...
            </div> */}
        </div>
    )
}