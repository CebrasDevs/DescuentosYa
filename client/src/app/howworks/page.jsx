import { BsQrCodeScan } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";

export default function howWorks() {
  return (
    <section className="w-full h-full flex flex-col items-center ">
      <h1 className=" mt-6 text-6xl tracking-wide font-extrabold text-center text-gray-800 ">
        How does DescuentosYa work?
      </h1>
      <div className=" mt-10 mb-4 w-full flex flex-row justify-center ">
        <div className=" flex justify-center items-center mr-16 align-middle w-1/3 rounded-lg h-44 bg-violet-400 border-2 border-violet-600 shadow-xl ">
          <h3 className=" mx-12 text-2xl font-semibold text-center tracking-wide">
            DescuentosYa! is here to help you find exactly what you are looking
            for with the best discount possible!
          </h3>
        </div>
        <img className=" w-32" src="https://res.cloudinary.com/dwndzlcxp/image/upload/v1692323579/DescuentosYaBrand-03_hbs5xp.png"></img>
      </div>
      <div className=" my-6 w-full flex flex-row justify-center ">
        <AiOutlineShoppingCart className=" h-44 w-40" />
        <div className=" flex justify-center items-center ml-20 align-middle w-1/3 rounded-lg h-44 bg-violet-300 border-2 border-violet-400 shadow-xl ">
          <h3 className=" mx-12 text-2xl font-semibold text-center tracking-wide">
            You can find many different services on sale and pay them online!
          </h3>
        </div>
      </div>
      <div className=" my-6 w-full flex flex-row justify-center ">
        <div className=" flex justify-center items-center mr-20 align-middle w-1/3 rounded-lg h-44 bg-violet-400 border-2 border-violet-500 shadow-xl ">
          <h3 className=" mx-16 text-2xl font-semibold text-center tracking-wide">
            Found a product you would like to buy? You can get a discount to get
            it!
          </h3>
        </div>
        <BsQrCodeScan className=" h-44 w-40" />
      </div>
      <div className=" mt-10 flex justify-center items-center align-middle w-1/3 rounded-lg h-44 bg-violet-300 border-2 border-violet-600 shadow-2xl ">
        <h3 className=" mx-8 text-2xl font-semibold text-center tracking-wide">
            Sign Up and start enjoying the benefits of being a member of our family!
        </h3>
      </div>
    </section>
  );
}
