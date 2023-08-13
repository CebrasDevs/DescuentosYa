const { PrismaClient } = require('@prisma/client');
const faker = require('faker');

const prisma = new PrismaClient();
async function seedData() {
    // Crear categorías
    const dataCategories = ['Food', 'Dairy', 'Cosmetics', 'Sports'];
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
        { email: 'mcdonalds@gmail.com', password: 'mcdonalds', enabled: true, role: 'COMPANY', dni_cuit: '33134366027', name: 'McDonalds', address: '41622 Ratke Glens', phoneNumber: '873-382-9467', lastPayment: null, description: "At McDonald's, we create smiles through flavorful journeys. Every Big Mac, Chicken McNugget, and McFlurry is a taste of nostalgia and innovation, served with a side of golden memories.", imageUrl: 'https://guiatodoberazategui.com.ar/wp-content/uploads/2020/03/Logo-de-McDonald%C2%B4s-1-1-1.png' },
        { email: 'burgerking@gmail.com', password: 'burgerking', enabled: true, role: 'COMPANY', dni_cuit: '35815505462', name: 'Burger King', address: '72572 Aurore Shoals', phoneNumber: '504-605-7317 x07965', lastPayment: null, description: "Burger King's flame-grilled expertise shines in each Whopper and crispy onion ring. Our commitment to bold flavors and customizable options ensures every visit is uniquely yours.", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj79lhBWamZcx9gN7RY5eXkec3_qXZDeZ6Ig&usqp=CAU' },
        { email: 'pizzahut@gmail.com', password: 'pizzahut', enabled: true, role: 'COMPANY', dni_cuit: '30383062410', name: 'Pizza Hut', address: '27310 O Kon Glen', phoneNumber: '(402) 805-4751 x62082', lastPayment: null, description: "Gather round the Pizza Hut table and relish oven-hot pizzas loaded with premium toppings. A legacy of crafting crave-worthy pies brings families closer, one slice at a time.", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoMuRtRkpmAo44JrCOBYs1ByMl6XqfYx_tNw&usqp=CAU' },
        { email: 'subway@gmail.com', password: 'subway', enabled: true, role: 'COMPANY', dni_cuit: '30127761460', name: 'Subway', address: '651 Sporer Forge', phoneNumber: '933.214.3426', lastPayment: null, description: "Elevate your day with Subway's fresh and customizable subs. From the first bite of oven-baked bread to the final touch of veggies, it's a masterpiece made for you.", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSleUahmc9LVW6C4ShvKOiqixTpk2IuXijyAw&usqp=CAU' },
        { email: 'kfc@gmail.com', password: 'kfc', enabled: true, role: 'COMPANY', dni_cuit: '32286160887', name: 'KFC', address: '392 Trenton Circles', phoneNumber: '275-813-0556 x477', lastPayment: null, description: "KFC transforms chicken into an art form, blending secret recipes and skilled preparation. Crispy, tender, and bursting with flavor, our chicken creates moments of shared happiness.", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvPg-rZKBadrmmUB9tDX-xMLDnFMcKGbqzg&usqp=CAU' },
        { email: 'laserenísima@gmail.com', password: 'laserenísima', enabled: true, role: 'COMPANY', dni_cuit: '34041763086', name: 'La Serenísima', address: '3794 Elsa Cove', phoneNumber: '946-238-7158 x2570', lastPayment: null, description: "La Serenísima stands as a dairy beacon, delivering unmatched quality in milk and dairy delights. Your family's health thrives on our commitment to excellence.", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9FweeNUqegx-MHySU_aUnFelsQrqv4xVdA&usqp=CAU' },
        { email: 'danone@gmail.com', password: 'danone', enabled: true, role: 'COMPANY', dni_cuit: '32887216101', name: 'Danone', address: '127 Armstrong Brook', phoneNumber: '1-649-811-4079', lastPayment: null, description: "Danone fuels your vitality through nourishing yogurts and treats. Elevate your wellness journey with Danone's wholesome products, nourishing your body and soul.", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMKb9qjza3naK6nSdKdmHFSJfg8Z52VR0cg&usqp=CAU' },
        { email: 'sancor@gmail.com', password: 'sancor', enabled: true, role: 'COMPANY', dni_cuit: '38609893845', name: 'Sancor', address: '2863 Lance Crescent', phoneNumber: '1-837-865-5733 x21165', lastPayment: null, description: "Sancor nurtures well-being from farm to home, offering an array of dairy essentials. Our dedication to health and taste enriches lives across generations.", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9xErSNroI5-XpXAvuw14Ah8D5xMO9Y3ZI1tBWWT4q_omclWsDUNxjh00iiVpt7cerqIY&usqp=CAU' },
        { email: 'natura@gmail.com', password: 'natura', enabled: true, role: 'COMPANY', dni_cuit: '37122062358', name: 'Natura', address: '675 Rau Mission', phoneNumber: '797.860.8703', lastPayment: null, description: "Discover beauty in nature with Natura's skincare, harnessing botanical wonders for a radiant you. Unleash your inner glow with Natura's natural treasures.", imageUrl: 'https://i.pinimg.com/736x/f2/33/16/f2331671f28fdd9e5f27dfad463d8bbc.jpg' },
        { email: 'avon@gmail.com', password: 'avon', enabled: true, role: 'COMPANY', dni_cuit: '36681061529', name: 'Avon', address: '50320 Mante Avenue', phoneNumber: '(504) 587-2580', lastPayment: null, description: "Avon empowers self-expression with cosmetics that enhance your unique beauty. Unveil your confidence and embrace your individuality with Avon's versatile range.", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2gV0XN44i7eKJZrtmAO6K16yG8qZIBl-QQ&usqp=CAU' },
        { email: 'lbel@gmail.com', password: 'lbel', enabled: true, role: 'COMPANY', dni_cuit: '31522149325', name: 'L Bel', address: '3858 Braun Village', phoneNumber: '666.710.6610 x76747', lastPayment: null, description: "L'bel epitomizes sophistication, offering luxurious cosmetics for timeless elegance. Elevate your beauty ritual with L'bel's opulent creations, capturing your allure.", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy03pAPMNRqftBBsRQiALvVK33yWuNn4q4Mw&usqp=CAU' },
        { email: 'nike@gmail.com', password: 'nike', enabled: true, role: 'COMPANY', dni_cuit: '33482514064', name: 'Nike', address: '9505 May Cliff', phoneNumber: '247-788-1735 x229', lastPayment: null, description: "Nike epitomizes athletic excellence, crafting high-performance sportswear and footwear that inspire triumph. Pursue your passions and unleash your potential with Nike's dynamic gear.", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFFUcd-e_1Dvl_4Ib58po4FVpMj7NyCb1JQ&usqp=CAU' },
        { email: 'adidas@gmail.com', password: 'adidas', enabled: true, role: 'COMPANY', dni_cuit: '30614878834', name: 'Adidas', address: '648 Rogahn Passage', phoneNumber: '(988) 847-0931 x6627', lastPayment: null, description: "Adidas embodies sport and style, delivering iconic designs and performance-driven attire. Elevate your lifestyle and achievements with Adidas's innovative creations.", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dtlrN5hP1x-m9AwA-NqGuUv2rwyehMoIkg&usqp=CAU' },
        { email: 'puma@gmail.com', password: 'puma', enabled: true, role: 'COMPANY', dni_cuit: '35140923855', name: 'Puma', address: '37758 Konopelski Centers', phoneNumber: '692-790-8155', lastPayment: null, description: "Puma seamlessly blends fashion and function, offering sleek sportswear and footwear. Embrace your active side with Puma's contemporary designs, amplifying your energy.", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VXT0dnlBIoMrg9ZR3XE9ddKrcqXAzBXz0w&usqp=CAU' }
    ];
    const companies = []; //coleccionamos los usuarios companies para crear sus items mas adelante
    for (let i = 0; i < dataCompanies.length; i++) {
        // recorremos el arreglo para insertar las companias en la tabla
        const company = await prisma.user.create({ //guardamos el objeto insertado en la tabla
            data: {
                email: dataCompanies[i].email,
                password: dataCompanies[i].name,
                enabled: true,
                role: dataCompanies[i].role,
                dni_cuit: dataCompanies[i].cuit,
                name: dataCompanies[i].name,
                address: faker.address.streetAddress(),
                phoneNumber: faker.phone.phoneNumber().toString(),
                description: dataCompanies[i].description,
                imageUrl: dataCompanies[i].imageUrl
            }
        });
        //guardamos el objeto company insertado en la tabla, que contiene ID
        companies.push(company);
    };

    // le damos un valor a la cantidad de usuarios members que queremos agregar 
    const membersQuantity = 20;
    const members = []; //coleccionamos a los members insertados para utilizarlos como compradores
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
                lastPayment: faker.date.between(new Date('2023-01-01'), new Date())
            },
        });
        members.push(member);
    };

    // Creamos un arreglo para guardar los datos de los admins del equipo
    const dataAdmins = [
        { email: 'SnowDevLC@gmail.com', password: 'SnowDevLC', name: 'SnowDevLC', imageUrl: 'https://avatars.githubusercontent.com/u/129117019?s=60&v=4' },
        { email: 'PabloBestani@gmail.com', password: 'PabloBestani', name: 'PabloBestani', imageUrl: 'https://avatars.githubusercontent.com/u/130400091?s=60&v=4' },
        { email: 'misaelc98@hotmail.com', password: 'misaelc98', name: 'misaelc98', imageUrl: 'https://avatars.githubusercontent.com/u/129080836?s=60&v=4' },
        { email: 'wtfranco22@hotmail.com', password: 'wtfranco22', name: 'wtfranco22', imageUrl: 'https://avatars.githubusercontent.com/u/13934218?s=60&v=4' },
        { email: 'AlbertoMallar@hotmail.com', password: 'AlbertoMallar', name: 'AlbertoMallar', imageUrl: 'https://avatars.githubusercontent.com/u/129788363?s=60&v=4' },
        { email: 'NicoGarcia12@hotmail.com', password: 'NicoGarcia12', name: 'NicoGarcia12', imageUrl: 'https://avatars.githubusercontent.com/u/67493670?s=60&v=4' },
        { email: 'DelHoyoLorenzo@yahoo.com', password: 'DelHoyoLorenzo', name: 'DelHoyoLorenzo', imageUrl: 'https://avatars.githubusercontent.com/u/129763514?s=60&v=4' },
        { email: 'AGAlbertoGentile@yahoo.com', password: 'AGAlbertoGentile', name: 'AGAlbertoGentile', imageUrl: 'https://avatars.githubusercontent.com/u/65029521?s=60&v=4' }
    ];
    for (let i = 0; i < dataAdmins.length; i++) {
        await prisma.user.create({
            data: {
                email: dataAdmins[i].email.toLowerCase(),
                password: dataAdmins[i].password.toLocaleLowerCase(),
                enabled: true,
                role: 'ADMIN',
                dni_cuit: faker.datatype.number({ min: 30999999, max: 44000000 }).toString(),
                name: dataAdmins[i].name.toLocaleLowerCase(),
                imageUrl: dataAdmins[i].imageUrl,
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
                description: "Unleash peak performance in our Men's Sports Shorts. Engineered for comfort, style, and agility, perfect for dynamic workouts.",
                name: "Men's Sports Shorts",
                price: 0,
                imageUrl: "https://woker.vtexassets.com/arquivos/ids/365231-800-800?v=638219310712830000&width=800&height=800&aspect=true"
            },
            {
                userId: 14,
                categoryId: 4,
                description: "Dive into a month of aquatic fun with our Swimming Pass. Enjoy unlimited pool access and make a splash today!",
                name: "Swimming Pass - 1 Month",
                price: 34.99,
                imageUrl: "https://imagenes.elpais.com/resizer/O_nfQn8L8LXpvOp_dWjVveDA2fo=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/XQDJC5BR4ZE45KALPCWSHUXYLY.jpg"
            }],
        13: [{ //adidas
            userId: 13,
            categoryId: 4,
            description: "Step up your game with our cutting-edge Running Shoes. Designed for comfort, speed, and durability, they're your ultimate fitness companion.",
            name: "Running Shoes",
            price: 0,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5pzQJQpMveJ6v2lVDoH8UE6SqpKt7tzBifcJ1v241FfcWmGn8paY_FnV596jP9B5kwA&usqp=CAU"
        }],
        12: [{ //nike
            userId: 12,
            categoryId: 4,
            description: "Stay cool and stylish with our Sports Cap, a perfect blend of function and fashion for your active lifestyle.",
            name: "Sports Cap",
            price: 0,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi7Wg33r4rG-h1-SM32mgIyeMmrPN_3SxAcfZDmiRyOTaowpSZzqcs8h6T4XEKPnUtvEc&usqp=CAU"
        }],
        11: [{ //Ibel cosmeticos
            userId: 11,
            categoryId: 3,
            description: "Revitalize your skin with our Moisturizing Face Cream, providing deep hydration and a radiant glow.",
            name: "Moisturizing Face Cream",
            price: 0,
            imageUrl: "https://http2.mlstatic.com/D_NQ_NP_910266-MLA43462195134_092020-O.webp"
        },
        {
            userId: 11,
            categoryId: 3,
            description: "Indulge your hair with our Nourishing Shampoo, enriched with essential nutrients for lustrous locks that turn heads.",
            name: "Nourishing Shampoo",
            price: 0,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy03pAPMNRqftBBsRQiALvVK33yWuNn4q4Mw&usqp=CAU",
        },
        {
            userId: 11,
            categoryId: 3,
            description: "Elevate your look with our premium Styling Products, perfect for creating trendy hairstyles that stand out.",
            name: "Styling Products",
            price: 0,
            imageUrl: "https://lh3.googleusercontent.com/p/AF1QipNktu1mOtDXBxoFb6N-hlubeeb3xFN7y4XNSmuL=w1080-h608-p-no-v0"
        },
        {
            userId: 11,
            categoryId: 3,
            description: "Experience tranquility with our Lavender Liquid Soap, a soothing cleanser that pampers your skin and senses.",
            name: "Lavender Liquid Soap",
            price: 0,
            imageUrl: "https://http2.mlstatic.com/D_NQ_NP_831077-MLM49175132171_022022-O.webp"
        },
        {
            userId: 11,
            categoryId: 3,
            description: "Unleash your inner artist with the L'bel Makeup Kit, a collection of exquisite cosmetics for a stunning makeover.",
            name: "L'bel Makeup Kit",
            price: 0,
            imageUrl: "https://trends.lbel.com/pe/wp-content/uploads/sites/13/2021/02/articulo-15-1.jpg"
        },
        {
            userId: 11,
            categoryId: 3,
            description: "Revive your skin with our invigorating Face Scrub, revealing a fresh, radiant complexion with every use.",
            name: "Face Scrub",
            price: 0,
            imageUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/144/045/products/exfoliante-facial1-e3fa5bb55e5ef6bd9416401223103867-640-0.jpg"
        }],
        10: [ // avon
            {
                userId: 10,
                categoryId: 3,
                description: "Experience relaxation like never before with our Sea Breeze Massage, a rejuvenating escape by the shore.",
                name: "Sea Breeze Massage",
                price: 12.99,
                imageUrl: "https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg"
            },
            {
                userId: 10,
                categoryId: 1,
                description: "Enhance your culinary adventures with the Cucina-donna Setx3, a trio of kitchen essentials for inspired cooking.",
                name: "Cucina-donna setx3",
                price: 0,
                imageUrl: "https://www.themarkethink.com/wp-content/uploads/2014/09/cucina-donna.jpg"
            },
            {
                userId: 10,
                categoryId: 3,
                description: "Discover elegance with Perfume Black Suede, a captivating blend that exudes sophistication and allure.",
                name: "Perfume Black suede",
                price: 0,
                imageUrl: "https://staticar.natura.com/cdn/ff/d2lCHJS6YHUOGXISYeQq0iDKs0wj6wXPo7hwNqX-6V0/1691557692/public/products/739029_1_8.jpg"
            },
            {
                userId: 10,
                categoryId: 3,
                description: "Embrace the timeless charm of Cypre Floral, a fragrance that harmoniously balances floral and woody notes for a unique scent experience.",
                name: "Cypre Floral",
                price: 0,
                imageUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/961/114/products/timeless1-5da018c005d1b26a7716349438212885-640-0.png"
            },
            {
                userId: 10,
                categoryId: 3,
                description: "Rediscover youth with our Anti-Aging Facial Mask. Rejuvenate skin for a radiant, age-defying glow.",
                name: "Anti-aging facial mask",
                price: 0,
                imageUrl: "https://juleriaque.vtexassets.com/arquivos/ids/206672-800-auto?v=638085776650130000&width=800&height=auto&aspect=true"
            },
            {
                userId: 10,
                categoryId: 3,
                description: "Unleash vibrant confidence with our Liquid Lipstick. Long-lasting colors for statement lips that steal the spotlight.",
                name: "Liquid Lipstick",
                price: 0,
                imageUrl: "https://images.rede.natura.net/nxcf-avon/static/assets/404.png"
            }],
        9: [ //Natura cosmeticos
            {
                userId: 9,
                categoryId: 3,
                description: "Reveal your natural beauty. Our Face Cleansing products gently purify, leaving your skin refreshed and rejuvenated.",
                name: "Face Cleansing",
                price: 13.99,
                imageUrl: "https://massageluxe.com/wp-content/uploads/2022/01/15424cc2-3cf3-4497-8426-696901b4ba15.jpg.webp"
            },
            {
                userId: 9,
                categoryId: 3,
                description: "Experience silky-smooth skin with our Body Waxing service. Professional, efficient hair removal for a flawless, confident you.",
                name: "Body waxing",
                price: 15.25,
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR56J50s-wkDt8iFQKj09Yv3f_PjeKh8tLDxg&usqp=CAU"
            },
            {
                userId: 9,
                categoryId: 3,
                description: "Elevate your charisma with Humor Cologne. Captivate with a playful blend that leaves a lasting, irresistible impression.",
                name: "Humor Cologne",
                price: 0,
                imageUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/090/902/products/meu-primer-humor1-980cb446460e79369816187515902074-480-0.jpg"
            }],
        8: [{ //sancor
            userId: 8,
            categoryId: 2,
            description: "Indulge in culinary delight. Our Cream Cheese adds creamy richness to elevate your favorite dishes to perfection.",
            name: "Cream Cheese",
            price: 0,
            imageUrl: "https://scontent.fmdq7-1.fna.fbcdn.net/v/t1.6435-9/117234738_133112421797669_5147060037201128200_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9267fe&_nc_ohc=vfCLx2kDiGAAX9N-45-&_nc_ht=scontent.fmdq7-1.fna&oh=00_AfBXRvIVuRvLe6cSypIPX-GkhI4pojEilmllHUzKV4WMKg&oe=64FB9C80"
        },
        {
            userId: 8,
            categoryId: 2,
            description: "Savor pure bliss with Strawberry Yogurt. Delicate, fruity indulgence that satisfies cravings and nourishes your senses.",
            name: "Strawberry Yogurt",
            price: 0,
            imageUrl: "https://www.sancoryoguresypostres.com.ar/wp-content/uploads/2018/07/6515-FRI-firme-entero-frutilla-fortificado-con-hierro-190g.png"
        }],
        7: [
            { //danone
                userId: 7,
                categoryId: 2,
                description: "Delight in Peach Yogurt's exquisite harmony of flavors. A luscious, fruity escape that awakens your taste buds.",
                name: "Peach Yogurt",
                price: 0,
                imageUrl: "https://proan-app.s3.amazonaws.com/products/481.jpeg"
            },
            {
                userId: 7,
                categoryId: 2,
                description: "Celebrate a week of creamy goodness during Dairy Week. Discover an array of dairy delights and culinary inspirations.",
                name: "Dairy Week",
                price: 0,
                imageUrl: "https://i.pinimg.com/736x/04/26/2f/04262fcf08a75bb9c0b3daf3aa47fc14--queso-life-is-good.jpg"
            },
            {
                userId: 7,
                categoryId: 2,
                description: "Experience a crunchy twist. Our Yogurt with Nuts and Cereals blends textures for a satisfying, nutritious treat.",
                name: "Yogurt nuts&cereals",
                price: 0,
                imageUrl: "https://www.danone.com.mx/wp-content/uploads/2023/05/productos.png"
            }],
        6: [{ //laSerenisima
            userId: 6,
            categoryId: 2,
            description: "Experience pure indulgence with Whole Milk. Creamy, wholesome goodness packed with essential nutrients for a nourished you.",
            name: "Whole Milk",
            price: 0,
            imageUrl: "https://www.ocu.org/-/media/ocu/images/home/alimentacion/alimentos/lacteos_blanco_.jpg?rev=04e2ca66-8851-4a07-b5d8-4c879f0d727f&hash=8B19CF9984C4138BDC89616BC096C835"
        },
        {
            userId: 6,
            categoryId: 2,
            description: "Unlock savings all month long with our Monthly Discount. Don't miss out on incredible deals and special offers!",
            name: "Monthly Discount",
            price: 0,
            imageUrl: "https://distribuidoraelcriollo.com/wp-content/uploads/2021/08/La-serenisima-portada.jpg",
        },
        {
            userId: 6,
            categoryId: 2,
            description: "Elevate your palate with Cheddar Cheese. Rich, bold flavor that adds a savory touch to your culinary creations.",
            name: "Cheddar Cheese",
            price: 0,
            imageUrl: "https://alberdisa.vteximg.com.br/arquivos/ids/165641-1000-1000/Queso-Finlandia-LS-Cheddar-Light-180gr.jpg?v=637538225418300000"
        },
        {
            userId: 6,
            categoryId: 2,
            description: "Discover culinary magic with Lard. Elevate your cooking with its rich, flavorful essence for unforgettable dishes.",
            name: "Lard",
            price: 0,
            imageUrl: "https://carrefourar.vtexassets.com/arquivos/ids/311989/7790742345806_02.jpg?v=638162342099730000"
        }],
        5: [{ //KFC
            userId: 5,
            categoryId: 1,
            description: "Savor the crunch of Wing Buckets. A feast of succulent wings in assorted flavors, perfect for sharing and indulging.",
            name: "Wing Buckets",
            price: 0,
            imageUrl: "https://kfc.ee/wp-content/uploads/2021/10/Chicken-bucket.png"
        }],
        4: [{ //subway
            userId: 4,
            categoryId: 1,
            description: "Tantalize your taste buds with Teriyaki Chicken. A symphony of sweet and savory, delivering an Asian-inspired culinary journey.",
            name: "Teriyaki Chicken",
            price: 0,
            imageUrl: "https://scontent.fmdq7-1.fna.fbcdn.net/v/t31.18172-8/28618796_1825099144190503_8067472820372582306_o.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=Z7t1smZul7oAX8zNPZJ&_nc_ht=scontent.fmdq7-1.fna&oh=00_AfDWksvxfCmCbO2w5wm-Mz5Isq7ZBchZ3jA_P_CYg-lfqQ&oe=64FBABD1"
        },
        {
            userId: 4,
            categoryId: 1,
            description: "Indulge in savory perfection with Roast Beef. Tender, seasoned slices that redefine the classic sandwich experience.",
            name: "Roast Beef",
            price: 0,
            imageUrl: "https://live.staticflickr.com/39/81382389_bc0b1d9147_b.jpg"
        },
        {
            userId: 4,
            categoryId: 1,
            description: "Satisfy cravings with Turkey and Mustard. A harmonious blend of flavors that offers a delectable twist.",
            name: "Turkey and Mustard",
            price: 0,
            imageUrl: "https://klorii.ro/images/foods/10000-20000/10887.webp"
        },
        {
            userId: 4,
            categoryId: 1,
            description: "Double the delight with our 2x1 Combo. Enjoy two mouthwatering options in one satisfying meal deal.",
            name: "2x1 Combo",
            price: 0,
            imageUrl: "https://mir-s3-cdn-cf.behance.net/projects/404/8a3add72902701.Y3JvcCwxMDgwLDg0NCwwLDIzMg.jpg"
        },
        {
            userId: 4,
            categoryId: 1,
            description: "Ignite your taste buds with Spicy Chicken. A fiery sensation that adds a thrilling kick to your meal.",
            name: "Spicy Chicken",
            price: 0,
            imageUrl: "https://cdn.foodbeast.com/content/wp-content/uploads/2012/07/subway-featured-footlong-buffalo-chicken.jpg"
        }],
        3: [{ //Pizza Hut
            userId: 3,
            categoryId: 1,
            description: "Experience pizza perfection with Pepperoni Pizza. Classic flavors and savory slices that satisfy every craving.",
            name: "Pepperoni Pizza",
            price: 0,
            imageUrl: "https://images.pizzahut.es/Products/Original/ph_pepperonilovers_detail-1698.jpg"
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Embark on a tropical journey with Hawaiian Pizza. Sweet and savory notes unite for a taste of paradise.",
            name: "Hawaiian Pizza",
            price: 0,
            imageUrl: "https://images.pizzahut.es/Products/Original/ph_hawaiana_customize_s-1450.jpg"
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Embrace flavorsome goodness with our Vegetarian Pizza. A medley of fresh vegetables and savory satisfaction in every bite.",
            name: "Vegetarian Pizza",
            price: 0,
            imageUrl: "https://scontent.fmdq7-1.fna.fbcdn.net/v/t1.18169-9/396076_10150453968877016_836210515_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=obNRVEva9VMAX_5314U&_nc_ht=scontent.fmdq7-1.fna&oh=00_AfCl1RWFFVF-_5fDLavqEDHiYMGH4PqUBBNr1zLSY8ceTQ&oe=64FBB15C"
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Transport your taste buds with Creole Pizza. A zesty fusion of spices and ingredients that captures the essence of Creole cuisine.",
            name: "Creole Pizza",
            price: 0,
            imageUrl: "https://www.carolinacreole.com/assets/cc-recipe-left-01.png",
            discount: 5,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Indulge in delight with a Free Pizza! Get a taste of perfection on us, a delicious treat you can't resist.",
            name: "Free Pizza!",
            price: 0,
            imageUrl: "https://cazaofertas.cl/wp-content/uploads/2022/10/pizza-hut-cupon.jpeg"
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Savor meaty bliss with our Meat Pizza. A carnivore's dream, loaded with an array of succulent, savory toppings.",
            name: "Meat Pizza",
            price: 0,
            imageUrl: "https://pbs.twimg.com/media/CLlcAtIXAAAdhra.jpg"
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Dive into flavor harmony with Mixed Pizza. A delectable blend of diverse ingredients for a taste explosion.",
            name: "Mixed Pizza",
            price: 0,
            imageUrl: "https://static.vecteezy.com/system/resources/previews/006/648/228/non_2x/12-inch-mixed-pizza-free-photo.jpg"
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Indulge in a tantalizing duo with Chicken and Bacon Pizza. A savory symphony of flavors that's simply irresistible.",
            name: "Chicken and Bacon Pizza",
            price: 0,
            imageUrl: "https://i.blogs.es/40c9b7/pizza-casera-champinon/650_1200.jpg"
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Exclusive deal alert! Enjoy a delectable 2 for 1 offer on pizzas, our treat for valued members.",
            name: "Pizza 2x1 for members",
            price: 0,
            imageUrl: "https://cnnespanol.cnn.com/wp-content/uploads/2020/11/201110065232-pizza-hut-beyond-sausage-full-169.jpg?quality=100&strip=info"
        }],
        2: [{ //burgerking
            userId: 2,
            categoryId: 1,
            description: "Experience burger perfection with the Whopper. A flame-grilled masterpiece that's big on flavor and satisfaction.",
            name: "Whopper",
            price: 0,
            imageUrl: "http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.latam/files/BK_Web_DOBLE_WHOPPER_500X540px.png"
        },
        {
            userId: 2,
            categoryId: 1,
            description: "Treat yourself to the regal taste of Chicken Royale. Succulent chicken, fresh ingredients, and royal flavors in every bite.",
            name: "Chicken Royale",
            price: 0,
            imageUrl: "https://s41230.pcdn.co/wp-content/uploads/2021/04/burger-king-vegan-chicken-header.png"
        },
        {
            userId: 2,
            categoryId: 1,
            description: "Savor the classic with our Cheeseburger. A perfect balance of flavors and textures for burger enthusiasts.",
            name: "Cheeseburger",
            price: 0,
            imageUrl: "http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.latam/files/BK_Web_DOBLECHEESEBACON_500X540px.png"
        },
        {
            userId: 2,
            categoryId: 1,
            description: "Triple the delight with our 3x2 Whopper deal. Enjoy three mouthwatering Whoppers for the price of two.",
            name: "3x2 Whopper",
            price: 0,
            imageUrl: "https://cazaofertas.com.mx/wp-content/uploads/2019/12/Burger-King-201219-01.jpg"
        }],
        1: [ //mcdonalds
            {
                userId: 1,
                categoryId: 1,
                description: "Elevate your taste journey with our Chicken Burger. Tender, flavorful chicken nestled in a bun of perfection.",
                name: "Chicken Burger",
                price: 0,
                imageUrl: "https://i.ytimg.com/vi/cpcc5ApbURE/maxresdefault.jpg"
            }]
    };
    let allItems = []; // coleccionamos todos los objetos items agregados a la BD para generarles un voucher o shopping
    for (const companyId in dataItems) {
        //recorremos los items anteriores y el index coindide con el id de la compania creada
        const items = dataItems[companyId];
        for (const item of items) {
            //agregamos todos los items a la compania que corresponde
            const addItem = await prisma.item.create({
                data: {
                    userId: +companyId,
                    categoryId: item.categoryId,
                    description: item.description,
                    name: item.name,
                    imageUrl: item.imageUrl,
                    price: item.price,
                    discount: faker.random.arrayElement([15, 20, 25, 30, 35, 40, 45, 50])
                }
            });
            allItems.push(addItem);
        }
    }

    // Generamos un vouchers o shopping 
    const transactionQuantity = 150;
    for (let i = 0; i < transactionQuantity; i++) {
        let item = faker.random.arrayElement(allItems)
        if (!item.price) {
            // entra a este if en caso de que el precio sea 0, por lo tanto creamos un voucher con su codigo al azar
            let expirationDate = faker.date.between(new Date('2023-07-01'), new Date('2023-09-01'));
            let enabled = expirationDate > new Date();
            await prisma.voucher.create({
                data: {
                    item: { connect: { id: item.id } },
                    user: { connect: { id: faker.random.arrayElement(members).id } },
                    code: faker.random.alphaNumeric(20),
                    enabled: enabled,
                    expirationDate: expirationDate
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
                    quantityItem: faker.datatype.number({ min: 1, max: 10 }),
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
