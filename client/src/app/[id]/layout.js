import ItemDetail from "@/components/ItemDetail";

export default function Layout({params}){
    const { id } = params;
    return(
        <div>
            <ItemDetail id={id}/>
        </div>
    )
}