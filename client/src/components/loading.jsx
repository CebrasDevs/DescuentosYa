export default function Loading () {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div>
                <img alt="loadingGif" 
                className="mx-auto w-40 h-40"
                src="https://media1.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif?cid=ecf05e470j9jbzj6hix26qz96rjlksdyo2mhy4twtiyby1jp&ep=v1_gifs_search&rid=giphy.gif&ct=g"></img>
            </div>
            <div className="mt-4 text-lg">
                Loading...
            </div>
        </div>
    )
}