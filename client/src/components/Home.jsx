'use client'
import Filters from "@/components/Filters";
import Grid from "@/components/Grid";
import Pagination from "@/components/Pagination";
import usePaginate from "@/hooks/usePaginate";


export default function Home() {

    const {
      currentView
    } = usePaginate();
  
    return (
      <div> 
        <Filters/>
        <Pagination/>
        <Grid currentView={currentView}/>
      </div>
    );
  }