import ItemDetail from "@/components/ItemDetail";
import axios from "axios";

export default async function Layout({ params }) {
  const { id } = params;
  const { data } = await axios(`https://desceuntosya-back.onrender.com/items/${id}`);

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
}
