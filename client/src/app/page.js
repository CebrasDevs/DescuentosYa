import Filters from "@/components/Filters";

export default function Home() {
  return (
    <div> 
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Filters/>
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  text-9xl  ">
          DescuentosYa!
        </h1>
      </main>
    </div>
  );
}
