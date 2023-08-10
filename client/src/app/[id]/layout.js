import ItemDetail from "@/components/ItemDetail";
import axios from "axios";

export default async function Layout({ params }) {
  const { id } = params;
  const { data } = await axios(`http://localhost:3001/items/${id}`);
  
  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
}
