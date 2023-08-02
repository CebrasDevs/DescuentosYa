export default function profileView() {
  return (
    <div className="flex w-full h-screen items-center justify-center ">
      <div className=" block w-3/4 h-1/4 rounded-3xl mt-2 bg-gradient-to-b from-cyan-300 to-blue-300">
        <div className="  h-full w-1/2 ">
          <div className=" flex justify-center mt-16 mb-16 ">
            <img
              className=" w-1/2 h-3/5  rounded-full shadow-2xl"
              src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
              alt="defaultprofilepic"
            />
          </div>
          <div className=" text-center text-black h-2/5 mt-16 mb-16">
            <h1 className=" text-2xl font-semibold">Luis "El Doctor" Canales</h1>
          </div>
        </div>
        <div className=" block w-1/2 right-0">
          <h3 className=" flex ">Otra Info relevante del user</h3>
        </div>
      </div>
    </div>
  );
}
