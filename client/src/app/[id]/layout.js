import ItemDetail from "@/components/ItemDetail";
import { URL_BASE } from "@/utils/const";
import axios from "axios";

export default async function Layout({ params }) {
  const { id } = params;
  const { data } = await axios(`${URL_BASE}/items/${id}`);
  
  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
}
