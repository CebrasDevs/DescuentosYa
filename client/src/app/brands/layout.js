export default function BrandView() {
  const logos = [
    "https://static-cse.canva.com/blob/951773/0750logotiposqueteinspiraran.jpg",
    "https://images-platform.99static.com/KeqZEKjbfTQv3-Ehn1Jfbp_GDjo=/500x500/top/smart/99designs-contests-attachments/6/6866/attachment_6866141",
    "https://w7.pngwing.com/pngs/35/677/png-transparent-libertad-s-a-libertad-sa-proposal-hypermarket-trade-libertad-text-logo-supermarket.png",
    "https://assets.turbologo.ru/blog/ru/2021/11/12082225/Levis_logo.png",
    "https://www.ypf.cl/wp-content/uploads/2021/09/cropped-ypf_favicon.png",
    "https://1000marcas.net/wp-content/uploads/2021/06/Red-Bull-logo.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwYXGxH6qIx_sGbbzNScK6D5bAeGD8ca_pQ",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXAwDg1KkJVBb1nZccu3V8ZLg4rEAfPvoe5Q",
    "https://w7.pngwing.com/pngs/785/534/png-transparent-whirlpool-corporation-logo-home-appliance-brand-maytag-others-miscellaneous-text-logo.png",
    "https://static-cse.canva.com/blob/951808/1050logotiposqueteinspiraran.png",
    "https://upload.wikimedia.org/wikipedia/commons/9/94/Logo-VEA-Supermercados.png",
    "https://assets.turbologo.ru/blog/ru/2021/11/12081039/Dolce-Gabbana-Logo.png",
    "https://img.freepik.com/vector-gratis/plantilla-logotipo-spa-bienestar-vector-diseno-profesional-naturaleza-flor_53876-136294.jpg?w=2000",
    "https://i.pinimg.com/550x/0b/bc/96/0bbc96e1c3f9a08fe299683efd0110f8.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKeKEh-ckrZNjwoV13X_0nrqtAyU6VyAlqCbzO4DyOwRIaQPHjGSJlIEJNw97FuW_Y1RI",
    "https://yiminshum.com/wp-content/uploads/2021/08/Logo-Hitlton-hotels-and-resorts.png",
    "https://www.seoptimer.com/es/blog/wp-content/uploads/2016/06/f54f3f21-ce42-4427-8924-66ebf59b3cad.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dYBTXLTWN_U13ECwoaMsCv_iQ_ChFI1MkfXkH7n5wWRXzpVPG8_nTJ6JtsCNFVOG-5c",
    "https://www.logogenio.es/images/articles/10-best-fashion-logos1.jpg",
    "https://static.hosteltur.com/app/public/uploads/img/articles/2013/06/01/L_5c1a341626e18_marriot2_logo.jpg",
  ];

  return (
    <div className=" flex relative">
      <div className=" mx-auto py-8">
        <div className="grid grid-cols-2 gap-20 p-24 items-center justify-center ">
          {logos.map((logo) => (
            <div className="bg-white shadow-xl h-64 rounded-lg overflow-hidden cursor-pointer ">
              <img className="h-full w-full object-cover" src={logo} alt="Brand 1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
