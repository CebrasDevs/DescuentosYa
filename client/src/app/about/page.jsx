export default function about() {
  return (
    <section className=" flex flex-col w-full h-full items-center justify-center ">
      <div className=" mt-8 mb-1 py-4 w-3/5 border-b-2 border-gray-400">
        <h1 className=" mb-6 font-bold tracking-wider text-3xl">
          About DescuentosYa
        </h1>
        <h3 className=" text-xl tracking-wide ">
          At DescuentosYa, we are committed to connecting users with the best
          offers on products and services, providing a solid bridge between
          consumers and companies. Our goal is to make your shopping experience
          more affordable and rewarding, while helping businesses expand their
          reach and attract new customers.
        </h3>
      </div>
      <div className="  mt-6 mb-1 py-4 w-3/5 border-b-2 border-gray-400">
        <h1 className=" mb-6 font-bold tracking-wider text-3xl">Our Mission</h1>
        <h3 className=" text-xl tracking-wide  ">
          Our mission is to provide our users, a reliable and convenient
          platform, to access exclusive discounts on a wide variety of
          categories, from dining and entertainment to premium merchandise. We
          want you to save money while you enjoy what you like best.
        </h3>
      </div>
      <div className="  mt-6 mb-1 w-3/5">
        <h1 className=" mb-6 font-bold tracking-wider text-3xl">Contact us</h1>
        <h2 className=" mb-6 font-semibold tracking-wider text-2xl">
          {" "}
          Product and Service Support
        </h2>
        <h3 className=" text-xl tracking-wide mb-6 ">
          Need service or support? Start your request online and we’ll find you
          a solution!{" "}
          <p className=" font-semibold">costumerservice@descuentosya.com</p>
        </h3>
        <h2 className=" mb-6 font-semibold tracking-wider text-2xl">
          {" "}
          Work with us
        </h2>
        <h3 className=" text-xl tracking-wide mb-6 ">
          If you are a business or professional user/company, contact our staff
          for Business{" "}
          <span className=" font-semibold">companies@descuentosya.com</span> or
          call <span className=" font-semibold"> +54 9 223 123-4567 </span>
        </h3>
        <h3 className=" text-xl tracking-wide mb-6 ">
          Tell us how we’re doing, (we read everything, but can’t always
          respond):{" "}
          <span className="font-semibold">contact@descuentosya.com</span>
        </h3>
      </div>
    </section>
  );
}
