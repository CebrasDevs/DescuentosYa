export default function BrandView() {

  const logos = [
    "https://static-cse.canva.com/blob/951773/0750logotiposqueteinspiraran.jpg",
    "https://images-platform.99static.com/KeqZEKjbfTQv3-Ehn1Jfbp_GDjo=/500x500/top/smart/99designs-contests-attachments/6/6866/attachment_6866141",
    "https://assets.turbologo.ru/blog/ru/2021/11/12082225/Levis_logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXAwDg1KkJVBb1nZccu3V8ZLg4rEAfPvoe5Q",
    "https://static-cse.canva.com/blob/951808/1050logotiposqueteinspiraran.png",
    "https://assets.turbologo.ru/blog/ru/2021/11/12081039/Dolce-Gabbana-Logo.png",
    "https://img.freepik.com/vector-gratis/plantilla-logotipo-spa-bienestar-vector-diseno-profesional-naturaleza-flor_53876-136294.jpg?w=2000",
    "https://i.pinimg.com/550x/0b/bc/96/0bbc96e1c3f9a08fe299683efd0110f8.jpg",
    "https://atlasstoked.com/img/cms/blog/imported/dc-shoes-x-usa-206324.jpg",
    "https://yiminshum.com/wp-content/uploads/2021/08/Logo-Hitlton-hotels-and-resorts.png",
    "https://www.seoptimer.com/es/blog/wp-content/uploads/2016/06/f54f3f21-ce42-4427-8924-66ebf59b3cad.jpg",
    "https://www.logogenio.es/images/articles/10-best-fashion-logos1.jpg",
    "https://static.hosteltur.com/app/public/uploads/img/articles/2013/06/01/L_5c1a341626e18_marriot2_logo.jpg",
  ];

  return (
    <div>
      <div class="container mx-auto py-8">
        <h1 class="text-3xl font-bold mb-8">Brands</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {logos.map((logo) => (
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                class="h-40 w-full object-cover"
                src={logo}
                alt="Brand 1"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
