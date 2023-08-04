import Filters from "@/components/Filters";
import Grid from "@/components/Grid";

export default function discounts() {
    return (
        <div className="grid grid-cols-4 gap-4 w-4/5 m-auto my-10">
            <div className="col-span-4 bg-violet-200 h-10">Search bar</div>
            <div className=" bg-gradient-to-b from-violet-200 to-white rounded-lg">
                <Filters />
            </div>
            <div className="col-span-3 rounded-lg">
                <Grid />
            </div>
        </div>
    );
}