import Filters from "@/components/Filters";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <div> 
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  text-9xl  ">DescuentosYa!</h1>
        <Filters/>
        <Grid/>
      </main>
    </div>
  );
}
