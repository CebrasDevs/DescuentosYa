import ItemDetail from "@/components/ItemDetail";

export default function Layout({params}){
    const { id } = params;
    return(
        <div>
            <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  text-9xl  " > {`Estoy en el detail ${id}`} </h1>
            <ItemDetail id={id}/>
        </div>
    )
}