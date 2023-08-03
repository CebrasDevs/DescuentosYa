import Filters from "@/components/Filters";
import Grid from "@/components/Grid";

export default function discounts() {
    return (
        <div className="grid grid-cols-4 gap-4 w-3/4 m-auto mt-10">
            <div className="col-span-4 bg-violet-200 h-10">Search bar</div>
            <div className="bg-violet-200">
                <Filters />
            </div>
            <div className="bg-violet-200 col-span-3">
                <Grid />
            </div>
        </div>
    );
}