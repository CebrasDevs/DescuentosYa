const { PrismaClient } = require('@prisma/client');
const faker = require('faker');

const prisma = new PrismaClient();
async function seedData() {
    // Crear categorías
    const dataCategories = ['comida', 'lacteos', 'cosmetica', 'deporte'];
    for (let i = 0; i < dataCategories.length; i++) {
        await prisma.category.create({
            data: {
                name: dataCategories[i],
            },
        });
    }

    // Estos son los datos de las empresas que vamos a cargar
    const dataCompanies = [
        // 14 objetos
        { email: 'mcdonalds@gmail.com', password: 'mcdonalds', enabled: true, role: 'COMPANY', dni_cuit: '33134366027', name: 'McDonalds', address: '41622 Ratke Glens', phoneNumber: '873-382-9467', lastPayment: null, description: 'Cadena de restaurantes de comida rápida, conocida por sus hamburguesas y papas fritas.', imageUrl: 'https://guiatodoberazategui.com.ar/wp-content/uploads/2020/03/Logo-de-McDonald%C2%B4s-1-1-1.png' },
        { email: 'burgerking@gmail.com', password: 'burgerking', enabled: true, role: 'COMPANY', dni_cuit: '35815505462', name: 'Burger King', address: '72572 Aurore Shoals', phoneNumber: '504-605-7317 x07965', lastPayment: null, description: 'Cadena de restaurantes de hamburguesas y comida rápida, con un menú variado.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj79lhBWamZcx9gN7RY5eXkec3_qXZDeZ6Ig&usqp=CAU' },
        { email: 'pizzahut@gmail.com', password: 'pizzahut', enabled: true, role: 'COMPANY', dni_cuit: '30383062410', name: 'Pizza Hut', address: '27310 O Kon Glen', phoneNumber: '(402) 805-4751 x62082', lastPayment: null, description: 'Famosa cadena de pizzerías con una amplia variedad de pizzas y platos italianos.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoMuRtRkpmAo44JrCOBYs1ByMl6XqfYx_tNw&usqp=CAU' },
        { email: 'subway@gmail.com', password: 'subway', enabled: true, role: 'COMPANY', dni_cuit: '30127761460', name: 'Subway', address: '651 Sporer Forge', phoneNumber: '933.214.3426', lastPayment: null, description: 'Franquicia de sándwiches y bocadillos, conocida por sus opciones de comida fresca y personalizable', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSleUahmc9LVW6C4ShvKOiqixTpk2IuXijyAw&usqp=CAU' },
        { email: 'kfc@gmail.com', password: 'kfc', enabled: true, role: 'COMPANY', dni_cuit: '32286160887', name: 'KFC', address: '392 Trenton Circles', phoneNumber: '275-813-0556 x477', lastPayment: null, description: 'Cadena de restaurantes especializada en pollo frito y platos de comida rápida.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvPg-rZKBadrmmUB9tDX-xMLDnFMcKGbqzg&usqp=CAU' },
        { email: 'laserenísima@gmail.com', password: 'laserenísima', enabled: true, role: 'COMPANY', dni_cuit: '34041763086', name: 'La Serenísima', address: '3794 Elsa Cove', phoneNumber: '946-238-7158 x2570', lastPayment: null, description: 'Líder en productos lácteos y lácteos frescos en Argentina, ofrece leche, yogur, quesos y más.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9FweeNUqegx-MHySU_aUnFelsQrqv4xVdA&usqp=CAU' },
        { email: 'danone@gmail.com', password: 'danone', enabled: true, role: 'COMPANY', dni_cuit: '32887216101', name: 'Danone', address: '127 Armstrong Brook', phoneNumber: '1-649-811-4079', lastPayment: null, description: 'Marca internacional de productos lácteos y alimentos saludables.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMKb9qjza3naK6nSdKdmHFSJfg8Z52VR0cg&usqp=CAU' },
        { email: 'sancor@gmail.com', password: 'saitemId: voucherncor', enabled: true, role: 'COMPANY', dni_cuit: '38609893845', name: 'Sancor', address: '2863 Lance Crescent', phoneNumber: '1-837-865-5733 x21165', lastPayment: null, description: 'Empresa argentina de lácteos con una amplia variedad de productos lácteos y derivados.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9xErSNroI5-XpXAvuw14Ah8D5xMO9Y3ZI1tBWWT4q_omclWsDUNxjh00iiVpt7cerqIY&usqp=CAU' },
        { email: 'natura@gmail.com', password: 'natura', enabled: true, role: 'COMPANY', dni_cuit: '37122062358', name: 'Natura', address: '675 Rau Mission', phoneNumber: '797.860.8703', lastPayment: null, description: 'Empresa de productos de belleza y cuidado personal con enfoque en ingredientes naturales.', imageUrl: 'https://i.pinimg.com/736x/f2/33/16/f2331671f28fdd9e5f27dfad463d8bbc.jpg' },
        { email: 'avon@gmail.com', password: 'avon', enabled: true, role: 'COMPANY', dni_cuit: '36681061529', name: 'Avon', address: '50320 Mante Avenue', phoneNumber: '(504) 587-2580', lastPayment: null, description: 'Empresa de venta directa de productos de belleza y cosméticos.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2gV0XN44i7eKJZrtmAO6K16yG8qZIBl-QQ&usqp=CAU' },
        { email: 'lbel@gmail.com', password: 'lbel', enabled: true, role: 'COMPANY', dni_cuit: '31522149325', name: 'L Bel', address: '3858 Braun Village', phoneNumber: '666.710.6610 x76747', lastPayment: null, description: 'Marca de productos de belleza y cuidado personal, con líneas de maquillaje y perfumería.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy03pAPMNRqftBBsRQiALvVK33yWuNn4q4Mw&usqp=CAU' },
        { email: 'nike@gmail.com', password: 'nike', enabled: true, role: 'COMPANY', dni_cuit: '33482514064', name: 'Nike', address: '9505 May Cliff', phoneNumber: '247-788-1735 x229', lastPayment: null, description: 'Marca líder en calzado y ropa deportiva, con una amplia gama de productos para atletas.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFFUcd-e_1Dvl_4Ib58po4FVpMj7NyCb1JQ&usqp=CAU' },
        { email: 'adidas@gmail.com', password: 'adidas', enabled: true, role: 'COMPANY', dni_cuit: '30614878834', name: 'Adidas', address: '648 Rogahn Passage', phoneNumber: '(988) 847-0931 x6627', lastPayment: null, description: 'Otra marca líder en calzado y ropa deportiva, con énfasis en diseño y tecnología.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dtlrN5hP1x-m9AwA-NqGuUv2rwyehMoIkg&usqp=CAU' },
        { email: 'puma@gmail.com', password: 'puma', enabled: true, role: 'COMPANY', dni_cuit: '35140923855', name: 'Puma', address: '37758 Konopelski Centers', phoneNumber: '692-790-8155', lastPayment: null, description: 'Empresa internacional de ropa deportiva y calzado, con una línea de productos modernos y elegantes.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VXT0dnlBIoMrg9ZR3XE9ddKrcqXAzBXz0w&usqp=CAU' }
    ];
    const companies = []; //coleccionmos los objetos insertados
    for (let i = 0; i < dataCompanies.length; i++) {
        // recorremos el arreglo para insertar las companias en la tabla
        const company = await prisma.user.create({ //guardamos el objeto insertado en la tabla
            data: {
                email: dataCompanies[i].email,
                password: dataCompanies[i].name,
                enabled: true,
                role: dataCompanies[i].role,
                dni_cuit: dataCompanies[i].cuit.toString(),
                name: dataCompanies[i].name,
                address: faker.address.streetAddress(false),
                phoneNumber: faker.phone.phoneNumber(),
                description: dataCompanies[i].description,
                imageUrl: dataCompanies[i].imageUrl
            }
        });
        //guardamos el objeto company insertado en la tabla, que contiene ID
        companies.push(company);
    };

    const membersQuantity = 20;
    const members = [];
    for (let i = 0; i < membersQuantity; i++) {
        const member = await prisma.user.create({
            data: {
                email: faker.internet.email(),
                password: faker.internet.password(),
                enabled: true,
                role: 'MEMBER',
                dni_cuit: faker.datatype.number({ min: 30999999, max: 44000000 }).toString(),
                name: faker.name.firstName() + " " + faker.name.lastName(),
                imageUrl: 'https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg',
                address: faker.address.streetAddress(),
                phoneNumber: faker.phone.phoneNumber(),
                lastPayment: faker.date.past()
            },
        });
        members.push(member);
    };

    // Crear Admins
    const dataAdmins = [
        { email: 'General1@gmail.com', password: 'fCUfY5v8TL98bum', enabled: true, role: 'ADMIN', dni_cuit: null, name: null, address: '8944 Prosacco Rue', phoneNumber: '380-302-8280', lastPayment: null, description: null, imageUrl: 'https://picsum.photos/300' },
        { email: 'Fern.Kunde8@gmail.com', password: 'm14pXruZPfa_7zb', enabled: false, role: 'ADMIN', dni_cuit: null, name: null, address: '568 Johnson Overpass', phoneNumber: '(924) 566-0524', lastPayment: null, description: null, imageUrl: 'https://picsum.photos/300' },
        { email: 'Kristina_Koelpin10@hotmail.com', password: 'O2GlXpTu9b6ev9T', enabled: false, role: 'ADMIN', dni_cuit: null, name: null, address: '19160 Ladarius Course', phoneNumber: '348.376.2291 x09209', lastPayment: null, description: null, imageUrl: 'https://picsum.photos/300' },
        { email: 'Aditya.Miller@hotmail.com', password: '_vkUzkwD4hS230b', enabled: false, role: 'ADMIN', dni_cuit: null, name: null, address: '280 Leuschke Haven', phoneNumber: '1-790-442-5805', lastPayment: null, description: null, imageUrl: 'https://picsum.photos/300' },
        { email: 'Queen85@hotmail.com', password: 'GzAu_hjSFaTpLWc', enabled: false, role: 'ADMIN', dni_cuit: null, name: null, address: '41025 Jerde Glen', phoneNumber: '817.201.9940', lastPayment: null, description: null, imageUrl: 'https://picsum.photos/300' },
        { email: 'Santiago_Lubowitz@hotmail.com', password: '2jHK6b5jzXvQfFm', enabled: false, role: 'ADMIN', dni_cuit: null, name: null, address: '259 Harris Pass', phoneNumber: '1-342-372-6257 x855', lastPayment: null, description: null, imageUrl: 'https://picsum.photos/300' },
        { email: 'Brendan_Schultz@yahoo.com', password: '4KxgCvD9_h3QYWW', enabled: false, role: 'ADMIN', dni_cuit: null, name: null, address: '4938 Powlowski Underpass', phoneNumber: '(289) 589-7932 x3591', lastPayment: null, description: null, imageUrl: 'https://picsum.photos/300' },
        { email: 'Brant47@yahoo.com', password: 'wfcx0s4cFTGIOip', enabled: true, role: 'ADMIN', dni_cuit: null, name: null, address: '7446 Michael Hill', phoneNumber: '(616) 235-8508', lastPayment: null, description: null, imageUrl: 'https://picsum.photos/300' },
        { email: 'Annie_Hammes39@gmail.com', password: 'IiE7Zf7ZfN9aq2Y', enabled: false, role: 'ADMIN', dni_cuit: null, name: null, address: '628 Boehm Shore', phoneNumber: '795.862.2705', lastPayment: null, description: null, imageUrl: 'https://picsum.photos/300' },
        { email: 'Johan14@hotmail.com', password: 'zoQFxVZg70ZSY0U', enabled: true, role: 'ADMIN', dni_cuit: null, name: null, address: '522 Donnelly Fort', phoneNumber: '(795) 364-4507', lastPayment: null, description: null, imageUrl: 'https://picsum.photos/300' },
        { email: 'Patsy46@gmail.com', password: 'QVPNmhRCGxVtPE2', enabled: false, role: 'ADMIN', dni_cuit: null, name: null, address: '145 Howell Roads', phoneNumber: '618-545-7817 x7747', lastPayment: null, description: null, imageUrl: 'https://picsum.photos/300' },
        { email: 'Pinkie.Krajcik@hotmail.com', password: 'gcxH0Jijlw8H7uk', enabled: true, role: 'ADMIN', dni_cuit: null, name: null, address: '03510 Rath Hollow', phoneNumber: '(473) 521-6203 x898', lastPayment: null, description: null, imageUrl: 'https://picsum.photos/300' }
    ];
    for (let i = 0; i < dataAdmins.length; i++) {
        await prisma.dataAdmins.create({
            data: {
                email: faker.internet.email(),
                password: faker.internet.password(),
                enabled: true,
                role: dataAdmins[i].role,
                dni_cuit: faker.datatype.number({ min: 30999999, max: 44000000 }).toString(),
                name: faker.name.firstName(),
                imageUrl: 'https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg',
                address: faker.address.streetAddress(),
                phoneNumber: faker.phone.phoneNumber(),
                lastPayment: null
            },
        });
    };

    // Es un objeto que contiene userId : [arreglo de objetos items](index coincide con userId del item)
    const dataItems = {
        14: [{ // puma
            userId: 14,
            categoryId: 4,
            description: "Men's Sports Shorts",
            name: "Men's Sports Shorts",
            price: 18.99,
            imageUrl: "https://woker.vtexassets.com/arquivos/ids/365231-800-800?v=638219310712830000&width=800&height=800&aspect=true"
        }, {
            userId: 14,
            categoryId: 4,
            description: "3 months discount for swimming",
            name: "Swimming pass",
            price: 0,
            imageUrl: "https://imagenes.elpais.com/resizer/O_nfQn8L8LXpvOp_dWjVveDA2fo=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/XQDJC5BR4ZE45KALPCWSHUXYLY.jpg"
        }],
        13: [{ //adidas
            userId: 13,
            categoryId: 4,
            description: "Running Shoes absorb shock and lightweight material",
            name: "Running Shoes",
            price: 11.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5pzQJQpMveJ6v2lVDoH8UE6SqpKt7tzBifcJ1v241FfcWmGn8paY_FnV596jP9B5kwA&usqp=CAU"
        }],
        12: [{ //nike
            userId: 12,
            categoryId: 4,
            description: "Sports peaked cap, suitable for long tennis matches",
            name: "Sports Cap",
            price: 8.49,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi7Wg33r4rG-h1-SM32mgIyeMmrPN_3SxAcfZDmiRyOTaowpSZzqcs8h6T4XEKPnUtvEc&usqp=CAU"
        }],
        11: [{ //Ibel cosmeticos
            userId: 11,
            categoryId: 3,
            description: "Moisturizing face cream.",
            name: "Moisturizing Face Cream",
            price: 15.99,
            imageUrl: "https://http2.mlstatic.com/D_NQ_NP_910266-MLA43462195134_092020-O.webp"
        },
        {
            userId: 11,
            categoryId: 3,
            description: "Nourishing shampoo for dry hair",
            name: "Nourishing Shampoo",
            price: 12.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy03pAPMNRqftBBsRQiALvVK33yWuNn4q4Mw&usqp=CAU",
        },
        {
            userId: 11,
            categoryId: 3,
            description: "Conditioner, shampoo, dyes and repairer for damaged hair",
            name: "Styling Products",
            price: 0,
            imageUrl: "https://lh3.googleusercontent.com/p/AF1QipNktu1mOtDXBxoFb6N-hlubeeb3xFN7y4XNSmuL=w1080-h608-p-no-v0"
        },
        {
            userId: 11,
            categoryId: 3,
            description: "Liquid hand soap with lavender scent.",
            name: "Lavender Liquid Soap",
            price: 7.99,
            imageUrl: "https://http2.mlstatic.com/D_NQ_NP_831077-MLM49175132171_022022-O.webp"
        },
        {
            userId: 11,
            categoryId: 3,
            description: "Makeups that are offered these days, enjoy the DTO.",
            name: "L'bel Makeups",
            price: 25.99,
            imageUrl: "https://trends.lbel.com/pe/wp-content/uploads/sites/13/2021/02/articulo-15-1.jpg",
            discount: 0,
        },
        {
            userId: 11,
            categoryId: 3,
            description: "Facial scrub with natural extracts.",
            name: "Face Scrub",
            price: 14.99,
            imageUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/144/045/products/exfoliante-facial1-e3fa5bb55e5ef6bd9416401223103867-640-0.jpg"
        }],
        10: [ // avon
            {
                userId: 10,
                categoryId: 3,
                description: "45 min. sea breeze massage",
                name: "Sea Breeze Massage",
                price: 12.99,
                imageUrl: "https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg"
            },
            {
                userId: 10,
                categoryId: 3,
                description: "Avon creates cutting-edge technology for new line of kitchen products",
                name: "Cucina-donna setx3",
                price: 32.99,
                imageUrl: "https://www.themarkethink.com/wp-content/uploads/2014/09/cucina-donna.jpg"
            },
            {
                userId: 10,
                categoryId: 3,
                description: "Perfume for men.",
                name: "Perfume Black suede",
                price: 1.49,
                imageUrl: "https://staticar.natura.com/cdn/ff/d2lCHJS6YHUOGXISYeQq0iDKs0wj6wXPo7hwNqX-6V0/1691557692/public/products/739029_1_8.jpg"
            },
            {
                userId: 10,
                categoryId: 3,
                description: "Classic women's perfume",
                name: "Cypre Floral",
                price: 3.49,
                imageUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/961/114/products/timeless1-5da018c005d1b26a7716349438212885-640-0.png"
            },
            {
                userId: 10,
                categoryId: 3,
                description: "Strengthening and moisturizing Mascara",
                name: "Mascara",
                price: 3.99,
                imageUrl: "https://juleriaque.vtexassets.com/arquivos/ids/206672-800-auto?v=638085776650130000&width=800&height=auto&aspect=true"
            },
            {
                userId: 10,
                categoryId: 3,
                description: "Liquid lipstick of intense colors",
                name: "Liquid Lipstick",
                price: 6.49,
                imageUrl: "https://images.rede.natura.net/nxcf-avon/static/assets/404.png"
            }],
        9: [ //Natura cosmeticos
            {
                userId: 9,
                categoryId: 3,
                description: "Massages and descaling facial cleansing",
                name: "Face Cleansing",
                price: 13.99,
                imageUrl: "https://massageluxe.com/wp-content/uploads/2022/01/15424cc2-3cf3-4497-8426-696901b4ba15.jpg.webp"
            },
            {
                userId: 9,
                categoryId: 3,
                description: "Body waxing for men.",
                name: "Body waxing",
                price: 0,
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR56J50s-wkDt8iFQKj09Yv3f_PjeKh8tLDxg&usqp=CAU"
            },
            {
                userId: 9,
                categoryId: 3,
                description: "Cologne for women humor de Natura.",
                name: "Humor Cologne",
                price: 22.99,
                imageUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/090/902/products/meu-primer-humor1-980cb446460e79369816187515902074-480-0.jpg"
            }],
        8: [{ //sancor
            userId: 8,
            categoryId: 2,
            description: "Soft and creamy cheese.",
            name: "Cream Cheese",
            price: 2.99,
            imageUrl: "https://scontent.fmdq7-1.fna.fbcdn.net/v/t1.6435-9/117234738_133112421797669_5147060037201128200_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9267fe&_nc_ohc=vfCLx2kDiGAAX9N-45-&_nc_ht=scontent.fmdq7-1.fna&oh=00_AfBXRvIVuRvLe6cSypIPX-GkhI4pojEilmllHUzKV4WMKg&oe=64FB9C80"
        },
        {
            userId: 8,
            categoryId: 2,
            description: "Natural yogurt with fruit.",
            name: "Strawberry Yogurt",
            price: 1.99,
            imageUrl: "https://www.sancoryoguresypostres.com.ar/wp-content/uploads/2018/07/6515-FRI-firme-entero-frutilla-fortificado-con-hierro-190g.png"
        }],
        7: [,
            { //danone
                userId: 7,
                categoryId: 2,
                description: "Yogurt with peach chunks.",
                name: "Peach Yogurt",
                price: 1.99,
                imageUrl: "https://proan-app.s3.amazonaws.com/products/481.jpeg"
            },
            {
                userId: 7,
                categoryId: 2,
                description: "Treat yourself and enjoy the monthly coupon at Danone.",
                name: "Dairy Week",
                price: 0,
                imageUrl: "https://i.pinimg.com/736x/04/26/2f/04262fcf08a75bb9c0b3daf3aa47fc14--queso-life-is-good.jpg"
            },
            {
                userId: 7,
                categoryId: 2,
                description: "Nut and cereal yogurt.",
                name: "Yogurt with nuts and cereals",
                price: 2.99,
                imageUrl: "https://www.danone.com.mx/wp-content/uploads/2023/05/productos.png"
            }],
        6: [{ //laSerenisima
            userId: 6,
            categoryId: 2,
            description: "Fresh and nutritious milk.",
            name: "Whole Milk",
            price: 3.49,
            imageUrl: "https://www.ocu.org/-/media/ocu/images/home/alimentacion/alimentos/lacteos_blanco_.jpg?rev=04e2ca66-8851-4a07-b5d8-4c879f0d727f&hash=8B19CF9984C4138BDC89616BC096C835"
        },
        {
            userId: 6,
            categoryId: 2,
            description: "Enjoy the selected products of the serenissima.",
            name: "Discount month",
            price: 0,
            imageUrl: "https://distribuidoraelcriollo.com/wp-content/uploads/2021/08/La-serenisima-portada.jpg",
        },
        {
            userId: 6,
            categoryId: 2,
            description: "Creamy and delicious cheddar cheese La Serenísima.",
            name: "Cheddar Cheese",
            price: 7.99,
            imageUrl: "https://alberdisa.vteximg.com.br/arquivos/ids/165641-1000-1000/Queso-Finlandia-LS-Cheddar-Light-180gr.jpg?v=637538225418300000"
        },
        {
            userId: 6,
            categoryId: 2,
            description: "Smooth and creamy butter.",
            name: "Lard",
            price: 2.49,
            imageUrl: "https://carrefourar.vtexassets.com/arquivos/ids/311989/7790742345806_02.jpg?v=638162342099730000"
        }],
        5: [{ //KFC
            userId: 5,
            categoryId: 1,
            description: "Buckets of crispy chicken wings.",
            name: "Wing Buckets",
            price: 9.99,
            imageUrl: "https://www.vivepalmira.com/wp-content/uploads/2019/03/post_id_8015_91551_700x362.jpg"
        }],
        4: [{ //subway
            userId: 4,
            categoryId: 1,
            description: "Teriyaki chicken sandwich with fresh vegetables.",
            name: "Teriyaki Chicken",
            price: 7.99,
            imageUrl: "https://scontent.fmdq7-1.fna.fbcdn.net/v/t31.18172-8/28618796_1825099144190503_8067472820372582306_o.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=Z7t1smZul7oAX8zNPZJ&_nc_ht=scontent.fmdq7-1.fna&oh=00_AfDWksvxfCmCbO2w5wm-Mz5Isq7ZBchZ3jA_P_CYg-lfqQ&oe=64FBABD1"
        },
        {
            userId: 4,
            categoryId: 1,
            description: "Roast beef sandwich with guacamole and fresh vegetables.",
            name: "Roast Beef",
            price: 8.49,
            imageUrl: "https://live.staticflickr.com/39/81382389_bc0b1d9147_b.jpg"
        },
        {
            userId: 4,
            categoryId: 1,
            description: "Turkey sandwich with mustard and fresh vegetables.",
            name: "Turkey and Mustard",
            price: 7.49,
            imageUrl: "https://klorii.ro/images/foods/10000-20000/10887.webp"
        },
        {
            userId: 4,
            categoryId: 1,
            description: "Combo 2x1 both 15cm or 30cm are you going to miss it?.",
            name: "2x1 Combo",
            price: 0,
            imageUrl: "https://mir-s3-cdn-cf.behance.net/projects/404/8a3add72902701.Y3JvcCwxMDgwLDg0NCwwLDIzMg.jpg"
        },
        {
            userId: 4,
            categoryId: 1,
            description: "Spicy chicken sandwich with ranch dressing and fresh vegetables.",
            name: "Spicy Chicken",
            price: 7.99,
            imageUrl: "https://www.vivepalmira.com/wp-content/uploads/2019/03/post_id_8015_91551_700x362.jpg",
            discount: 15,
        },],
        3: [{ //Pizza Hut
            userId: 3,
            categoryId: 1,
            description: "Pizza with pepperoni, mozzarella cheese and tomato sauce.",
            name: "Pepperoni Pizza",
            price: 12.99,
            imageUrl: "https://images.pizzahut.es/Products/Original/ph_pepperonilovers_detail-1698.jpg"
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza with ham, pineapple, mozzarella cheese and tomato sauce.",
            name: "Hawaiian Pizza",
            price: 13.99,
            imageUrl: "https://images.pizzahut.es/Products/Original/ph_hawaiana_customize_s-1450.jpg"
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza with mushrooms, olives, onion, peppers and mozzarella cheese.",
            name: "Vegetarian Pizza",
            price: 14.99,
            imageUrl: "https://scontent.fmdq7-1.fna.fbcdn.net/v/t1.18169-9/396076_10150453968877016_836210515_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=obNRVEva9VMAX_5314U&_nc_ht=scontent.fmdq7-1.fna&oh=00_AfCl1RWFFVF-_5fDLavqEDHiYMGH4PqUBBNr1zLSY8ceTQ&oe=64FBB15C"
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza with beef, chorizo, bacon, egg and mozzarella cheese.",
            name: "Creole Pizza",
            price: 15.99,
            imageUrl: "https://instagram.fmdq7-1.fna.fbcdn.net/v/t51.2885-15/296302189_764602274963631_4480315473084707217_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fmdq7-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=JwRZUpGOvbgAX8GfXyV&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfB4bNsjBdJjdLpoRfCOa5OeIhURj7LcjfiyUWIKK9CLfw&oe=64D9DC11&_nc_sid=2999b8",
            discount: 5,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Redeem coupon for a family pizza of any Pizza Hut variety.",
            name: "Free Pizza!",
            price: 0,
            imageUrl: "https://cazaofertas.cl/wp-content/uploads/2022/10/pizza-hut-cupon.jpeg"
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza with beef, onion, peppers and mozzarella cheese.",
            name: "Meat Pizza",
            price: 13.99,
            imageUrl: "https://pbs.twimg.com/media/CLlcAtIXAAAdhra.jpg"
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza with pepperoni, salami, chorizo and mozzarella cheese.",
            name: "Mixed Pizza",
            price: 15.99,
            imageUrl: "https://static.vecteezy.com/system/resources/previews/006/648/228/non_2x/12-inch-mixed-pizza-free-photo.jpg"
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza with chicken, bacon, mushrooms and mozzarella cheese.",
            name: "Chicken and Bacon Pizza",
            price: 14.99,
            imageUrl: "https://i.blogs.es/40c9b7/pizza-casera-champinon/650_1200.jpg",
            discount: 0,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Choose from the different varieties to enjoy the coupon at Pizza Hut.",
            name: "Pizza 2 for 1 for members",
            price: 0,
            imageUrl: "https://instagram.fmdq7-1.fna.fbcdn.net/v/t51.2885-15/283488435_739061367139101_1194088822873350154_n.jpg?stp=dst-jpg_e15_fr_s1080x1080&_nc_ht=instagram.fmdq7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=-izz7U3Uc4YAX8qiIVl&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfCUVYzSDsiZlZeqbGe-yl0fOmTCDlYyCoxns2vTvwVghw&oe=64D8ED27&_nc_sid=2999b8"
        }],
        2: [{ //burgerking
            userId: 2,
            categoryId: 1,
            description: "Burger with beef, American cheese and bacon.",
            name: "Whopper",
            price: 6.49,
            imageUrl: "http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.latam/files/BK_Web_DOBLE_WHOPPER_500X540px.png",
            discount: 5,
        },
        {
            userId: 2,
            categoryId: 1,
            description: "Breaded chicken burger with lettuce and mayonnaise.",
            name: "Chicken Royale",
            price: 5.99,
            imageUrl: "https://s41230.pcdn.co/wp-content/uploads/2021/04/burger-king-vegan-chicken-header.png"
        },
        {
            userId: 2,
            categoryId: 1,
            description: "Burger with beef, cheddar cheese and onion.",
            name: "Cheeseburger",
            price: 4.99,
            imageUrl: "http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.latam/files/BK_Web_DOBLECHEESEBACON_500X540px.png"
        },
        {
            userId: 2,
            categoryId: 1,
            description: "Enjoy the Beef, American Cheese and Bacon Burger Combo", name: "3x2 Whopper",
            price: 6.99,
            imageUrl: "https://cazaofertas.com.mx/wp-content/uploads/2019/12/Burger-King-201219-01.jpg"
        }],
        1: [ //mcdonalds
            {
                userId: 1,
                categoryId: 1,
                description: "Grilled chicken burger with lettuce and mayonnaise.",
                name: "Chicken Burger",
                price: 6.49,
                imageUrl: "https://i.ytimg.com/vi/cpcc5ApbURE/maxresdefault.jpg"
            }]
    };
    let allItems = [];
    for (const companyId in dataItems) {
        const items = dataItems[companyId];
        for (const item of items) {
            const addItem = await prisma.item.create({
                data: {
                    userId: +companyId,
                    categoryId: item.categoryId,
                    description: item.descripcion,
                    name: item.name,
                    imageUrl: item.imageUrl,
                    price: item.price,
                    discount: faker.random.arrayElement([15, 20, 25, 30, 35, 40, 45, 50])
                }
            });
            allItems.push(addItem);
        }
    }

    // Crear vouchers o SHOPPING
    const transactionQuantity = 150;
    for (let i = 0; i < transactionQuantity; i++) {
        let item = faker.random.arrayElement(allItems)
        if (!item.price) {
            // entra a este if en caso de que el precio sea 0
            // por lo tanto creamos un voucher con su codigo al azar
            await prisma.voucher.create({
                data: {
                    item: { connect: { id: item.id } },
                    user: { connect: { id: faker.random.arrayElement(members).id } },
                    code: faker.random.alphaNumeric(20),
                },
            });
        } else {
            //entra en el caso de que el item tenga un precio distinto de 0 y generamos la compra
            const shopping = await prisma.shopping.create({
                data: {
                    user: { connect: { id: faker.random.arrayElement(members).id } },
                    pdfUrl: faker.internet.url(),
                    wayToPay: faker.random.arrayElement(['CASH', 'CARD']),
                    state: faker.random.arrayElement(['SUCCESS', 'PENDING']),
                },
            });
            // Crear ítems para la compra
            await prisma.item_Shopping.create({
                data: {
                    item: { connect: { id: item.id } },
                    shopping: { connect: { id: shopping.id } },
                    quantity: faker.datatype.number({ min: 1, max: 10 }),
                },
            });
        }
    }
}
seedData()
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
