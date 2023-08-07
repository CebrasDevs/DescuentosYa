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
    // Crear companias
    const dataCompanies = [
        // Comidas
        {
            name: "McDonalds",
            description: "Cadena de restaurantes de comida rápida, conocida por sus hamburguesas y papas fritas.",
            category: "comida",
            image: "https://img.freepik.com/premium-photo/mcdonald039s-restaurantmcdonald039s-is-american-hamburger-fast-food-restaurant-chain-most_158001-4328.jpg?size=626&ext=jpg&ga=GA1.2.2081610295.1691199335&semt=sph"
        },
        {
            name: "Burger King",
            description: "Cadena de restaurantes de hamburguesas y comida rápida, con un menú variado.",
            category: "comida",
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj79lhBWamZcx9gN7RY5eXkec3_qXZDeZ6Ig&usqp=CAU`
        },
        {
            name: "Pizza Hut",
            description: "Famosa cadena de pizzerías con una amplia variedad de pizzas y platos italianos.",
            category: "comida",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoMuRtRkpmAo44JrCOBYs1ByMl6XqfYx_tNw&usqp=CAU"
        },
        {
            name: "Subway",
            description: "Franquicia de sándwiches y bocadillos, conocida por sus opciones de comida fresca y personalizable.",
            category: "comida",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSleUahmc9LVW6C4ShvKOiqixTpk2IuXijyAw&usqp=CAU"
        },
        {
            name: "KFC",
            description: "Cadena de restaurantes especializada en pollo frito y platos de comida rápida.",
            category: "comida",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvPg-rZKBadrmmUB9tDX-xMLDnFMcKGbqzg&usqp=CAU"
        },

        // Lácteos
        {
            name: "La Serenísima",
            description: "Líder en productos lácteos y lácteos frescos en Argentina, ofrece leche, yogur, quesos y más.",
            category: "lacteos",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9FweeNUqegx-MHySU_aUnFelsQrqv4xVdA&usqp=CAU"
        },
        {
            name: "Danone",
            description: "Marca internacional de productos lácteos y alimentos saludables.",
            category: "lacteos",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMKb9qjza3naK6nSdKdmHFSJfg8Z52VR0cg&usqp=CAU"
        },
        {
            name: "Sancor",
            description: "Empresa argentina de lácteos con una amplia variedad de productos lácteos y derivados.",
            category: "lacteos",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9xErSNroI5-XpXAvuw14Ah8D5xMO9Y3ZI1tBWWT4q_omclWsDUNxjh00iiVpt7cerqIY&usqp=CAU"
        },

        // Productos Cosméticos
        {
            name: "Natura",
            description: "Empresa de productos de belleza y cuidado personal con enfoque en ingredientes naturales.",
            category: "cosmetica",
            image: "https://i.pinimg.com/736x/f2/33/16/f2331671f28fdd9e5f27dfad463d8bbc.jpg"
        },
        {
            name: "Avon",
            description: "Empresa de venta directa de productos de belleza y cosméticos.",
            category: "cosmetica",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2gV0XN44i7eKJZrtmAO6K16yG8qZIBl-QQ&usqp=CAU"
        },
        {
            name: "L'Bel",
            description: "Marca de productos de belleza y cuidado personal, con líneas de maquillaje y perfumería.",
            category: "cosmetica",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy03pAPMNRqftBBsRQiALvVK33yWuNn4q4Mw&usqp=CAU"
        },

        // Indumentarias Internacionales Deportivas
        {
            name: "Nike",
            description: "Marca líder en calzado y ropa deportiva, con una amplia gama de productos para atletas.",
            category: "deportes",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFFUcd-e_1Dvl_4Ib58po4FVpMj7NyCb1JQ&usqp=CAU"
        },
        {
            name: "Adidas",
            description: "Otra marca líder en calzado y ropa deportiva, con énfasis en diseño y tecnología.",
            category: "deportes",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dtlrN5hP1x-m9AwA-NqGuUv2rwyehMoIkg&usqp=CAU"
        },
        {
            name: "Puma",
            description: "Empresa internacional de ropa deportiva y calzado, con una línea de productos modernos y elegantes.",
            category: "deportes",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VXT0dnlBIoMrg9ZR3XE9ddKrcqXAzBXz0w&usqp=CAU"
        }
    ];
    const companies = [];
    for (let i = 0; i < dataCompanies.length; i++) {
        let email = ((dataCompanies[i].name).replace(/\s+/g, '').toLowerCase() + '@gmail.com');
        const company = await prisma.user.create({
            data: {
                email: email,
                password: dataCompanies[i].name.replace(/\s+/g, '').toLowerCase(),
                enabled: true,
                role: "COMPANY",
                cuit: faker.datatype.number({ min: 30000000001, max: 39999999999 }).toString(),
                company_name: dataCompanies[i].name,
                address: faker.address.streetAddress(false),
                phone: faker.phone.phoneNumber(),
                description: dataCompanies[i].description,
                url_image: dataCompanies[i].image
            }
        });
        companies.push(company);
    };

    // Crear Admins, Members
    const numUsers = 20;
    const shopper = [];
    for (let i = 0; i < numUsers; i++) {
        let role = faker.random.arrayElement(['ADMIN', 'MEMBER']);
        let dni = (role === 'MEMBER') ? faker.datatype.number({ min: 25999999, max: 44000000 }).toString() : null;
        let name = (role === 'MEMBER') ? faker.name.firstName() : null;
        let last_payment = (role === 'MEMBER') ? faker.date.past() : null;
        const user = await prisma.user.create({
            data: {
                email: faker.internet.email(),
                password: faker.internet.password(),
                enabled: faker.random.arrayElement([true, false]),
                role: role,
                dni: dni,
                name: name,
                url_image: 'https://picsum.photos/300',
                address: faker.address.streetAddress(),
                phone: faker.phone.phoneNumber(),
                last_payment: last_payment,
            },
        });
        if (user.role === 'MEMBER') shopper.push(user);
    };

    // Crear Items
    const dataItems = {
        20: [{
            userId: 20,
            categoryId: 4,
            description: "Zapatillas de estilo retro y cómodas.",
            name: "Zapatillas Retro",
            price: 74.99,
            url_image: "https://via.placeholder.com/300",
            discount: 10,
        },
        {
            userId: 20,
            categoryId: 4,
            description: "Zapatillas deportivas para hombres.",
            name: "Zapatillas Deportivas Hombre",
            price: 89.99,
            url_image: "https://via.placeholder.com/300",
            discount: 5,
        },
        {
            userId: 20,
            categoryId: 4,
            description: "Zapatillas para correr de alto rendimiento.",
            name: "Zapatillas de Running",
            price: 99.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 20,
            categoryId: 4,
            description: "Zapatillas para caminar con amortiguación.",
            name: "Zapatillas de Caminar",
            price: 79.99,
            url_image: "https://via.placeholder.com/300",
            discount: 15,
        },
        {
            userId: 20,
            categoryId: 4,
            description: "Shorts deportivos para hombres.",
            name: "Shorts Deportivos Hombre",
            price: 24.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 20,
            categoryId: 4,
            description: "Pantalones de entrenamiento para hombres.",
            name: "Pantalones de Entrenamiento Hombre",
            price: 34.99,
            url_image: "https://via.placeholder.com/300",
            discount: 10,
        },
        {
            userId: 20,
            categoryId: 4,
            description: "Mochila deportiva para llevar tus cosas.",
            name: "Mochila Deportiva",
            price: 49.99,
            url_image: "https://via.placeholder.com/300",
            discount: 5,
        },
        {
            userId: 20,
            categoryId: 4,
            description: "Gorra deportiva para protegerte del sol.",
            name: "Gorra Deportiva",
            price: 19.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        }],
        19: [{
            userId: 19,
            categoryId: 4,
            description: "Leggings de compresión para entrenamiento.",
            name: "Leggings de Compresión",
            price: 32.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        }],
        18: [{
            userId: 18,
            categoryId: 4,
            description: "Sudadera deportiva con capucha.",
            name: "Sudadera con Capucha",
            price: 39.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 18,
            categoryId: 4,
            description: "Zapatillas deportivas para mujeres.",
            name: "Zapatillas Deportivas Mujer",
            price: 89.99,
            url_image: "https://via.placeholder.com/300",
            discount: 10,
        },
        {
            userId: 18,
            categoryId: 4,
            description: "Shorts deportivos para mujeres.",
            name: "Shorts Deportivos Mujer",
            price: 24.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 18,
            categoryId: 4,
            description: "Pantalones de yoga para mujeres.",
            name: "Pantalones de Yoga Mujer",
            price: 34.99,
            url_image: "https://via.placeholder.com/300",
            discount: 5,
        }],
        17: [{
            userId: 17,
            categoryId: 4,
            description: "Camiseta deportiva de secado rápido.",
            name: "Camiseta de Entrenamiento",
            price: 29.99,
            url_image: "https://via.placeholder.com/300",
            discount: 15,
        },
        {
            userId: 17,
            categoryId: 4,
            description: "Zapatillas de baloncesto para hombres.",
            name: "Zapatillas de Baloncesto Hombre",
            price: 119.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 17,
            categoryId: 4,
            description: "Leggings deportivos para mujeres.",
            name: "Leggings Deportivos Mujer",
            price: 34.99,
            url_image: "https://via.placeholder.com/300",
            discount: 10,
        },
        {
            userId: 17,
            categoryId: 4,
            description: "Chaqueta cortavientos para correr.",
            name: "Chaqueta Cortavientos",
            price: 54.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 17,
            categoryId: 4,
            description: "Pantalones deportivos para hombres.",
            name: "Pantalones Deportivos Hombre",
            price: 39.99,
            url_image: "https://via.placeholder.com/300",
            discount: 5,
        },
        {
            userId: 17,
            categoryId: 4,
            description: "Camiseta sin mangas para entrenamiento.",
            name: "Camiseta Sin Mangas",
            price: 24.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 17,
            categoryId: 4,
            description: "Gorra deportiva con tecnología de absorción de sudor.",
            name: "Gorra Deportiva",
            price: 19.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 17,
            categoryId: 4,
            description: "Bolsa deportiva con múltiples compartimentos.",
            name: "Bolsa Deportiva",
            price: 29.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 17,
            categoryId: 4,
            description: "Medias deportivas para correr.",
            name: "Medias Deportivas",
            price: 12.99,
            url_image: "https://via.placeholder.com/300",
            discount: 10,
        },
        {
            userId: 17,
            categoryId: 4,
            description: "Camiseta de manga larga para entrenamiento.",
            name: "Camiseta Manga Larga",
            price: 29.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 17,
            categoryId: 4,
            description: "Shorts deportivos para hombres.",
            name: "Shorts Deportivos Hombre",
            price: 24.99,
            url_image: "https://via.placeholder.com/300",
            discount: 5,
        }],
        16: [{
            userId: 16,
            categoryId: 4,
            description: "Zapatillas deportivas para correr.",
            name: "Zapatillas de Running",
            price: 99.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 16,
            categoryId: 4,
            description: "Zapatillas deportivas para entrenamiento cruzado.",
            name: "Zapatillas de Entrenamiento",
            price: 89.99,
            url_image: "https://via.placeholder.com/300",
            discount: 10,
        },
        {
            userId: 16,
            categoryId: 4,
            description: "Camiseta de manga corta para hombre.",
            name: "Camiseta Deportiva Hombre",
            price: 29.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 16,
            categoryId: 4,
            description: "Shorts deportivos para mujer.",
            name: "Shorts Deportivos Mujer",
            price: 24.99,
            url_image: "https://via.placeholder.com/300",
            discount: 5,
        },
        {
            userId: 16,
            categoryId: 4,
            description: "Mochila para llevar artículos deportivos.",
            name: "Mochila Deportiva",
            price: 39.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 16,
            categoryId: 4,
            description: "Gorra deportiva para protección solar.",
            name: "Gorra Deportiva",
            price: 19.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        }],
        15: [{
            userId: 15,
            categoryId: 3,
            description: "Paleta de sombras con tonos neutrales.",
            name: "Paleta de Sombras Neutrales",
            price: 14.49,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        }],
        14: [{
            userId: 14,
            categoryId: 3,
            description: "Base de maquillaje para piel radiante.",
            name: "Base de Maquillaje",
            price: 18.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        }],
        13: [{
            userId: 13,
            categoryId: 3,
            description: "Labial líquido de larga duración.",
            name: "Labial Líquido",
            price: 12.99,
            url_image: "https://via.placeholder.com/300",
            discount: 10,
        },
        {
            userId: 13,
            categoryId: 3,
            description: "Base de maquillaje de cobertura media.",
            name: "Base de Maquillaje",
            price: 18.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 13,
            categoryId: 3,
            description: "Mascara de pestañas para volumen.",
            name: "Mascara de Pestañas",
            price: 10.99,
            url_image: "https://via.placeholder.com/300",
            discount: 5,
        },
        {
            userId: 13,
            categoryId: 3,
            description: "Paleta de sombras con tonos neutros.",
            name: "Paleta de Sombras Neutras",
            price: 22.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        }],
        12: [{
            userId: 12,
            categoryId: 3,
            description: "Máscara de pestañas para mayor volumen.",
            name: "Máscara de Pestañas",
            price: 8.49,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        }],
        11: [{
            userId: 11,
            categoryId: 3,
            description: "Crema hidratante para el rostro.",
            name: "Crema Facial Hidratante",
            price: 15.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 11,
            categoryId: 3,
            description: "Shampoo nutritivo para cabello seco.",
            name: "Shampoo Nutritivo",
            price: 12.99,
            url_image: "https://via.placeholder.com/300",
            discount: 10,
        },
        {
            userId: 11,
            categoryId: 3,
            description: "Acondicionador reparador para cabello dañado.",
            name: "Acondicionador Reparador",
            price: 11.99,
            url_image: "https://via.placeholder.com/300",
            discount: 5,
        },
        {
            userId: 11,
            categoryId: 3,
            description: "Jabón líquido para manos con aroma de lavanda.",
            name: "Jabón Líquido Lavanda",
            price: 7.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 11,
            categoryId: 3,
            description: "Perfume femenino con notas florales.",
            name: "Perfume Floral",
            price: 25.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 11,
            categoryId: 3,
            description: "Exfoliante facial con extractos naturales.",
            name: "Exfoliante Facial",
            price: 14.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        }],
        10: [{
            userId: 10,
            categoryId: 2,
            description: "Manteca con sal para untar.",
            name: "Manteca",
            price: 2.99,
            url_image: "https://via.placeholder.com/300",
            discount: 10,
        },
        {
            userId: 10,
            categoryId: 2,
            description: "Yogur bebible sabor frutilla.",
            name: "Yogur Bebible Frutilla",
            price: 1.49,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 10,
            categoryId: 2,
            description: "Yogur bebible sabor durazno.",
            name: "Yogur Bebible Durazno",
            price: 1.49,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 10,
            categoryId: 2,
            description: "Leche descremada con calcio.",
            name: "Leche Descremada",
            price: 3.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 10,
            categoryId: 2,
            description: "Queso crema para untar.",
            name: "Queso Crema",
            price: 2.49,
            url_image: "https://via.placeholder.com/300",
            discount: 5,
        },
        {
            userId: 10,
            categoryId: 2,
            description: "Queso rallado para espolvorear.",
            name: "Queso Rallado",
            price: 1.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        }],
        9: [{
            userId: 9,
            categoryId: 2,
            description: "Yogur griego con miel y nueces.",
            name: "Yogur Griego",
            price: 2.49,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        }],
        8: [{
            userId: 8,
            categoryId: 2,
            description: "Queso suave y cremoso.",
            name: "Queso Crema",
            price: 2.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        }],
        7: [{
            userId: 7,
            categoryId: 2,
            description: "Yogur natural con frutas.",
            name: "Yogur de Frutilla",
            price: 1.99,
            url_image: "https://via.placeholder.com/300",
            discount: 5,
        },
        {
            userId: 7,
            categoryId: 2,
            description: "Yogur con trozos de durazno.",
            name: "Yogur de Durazno",
            price: 1.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 7,
            categoryId: 2,
            description: "Yogur con trozos de frutas tropicales.",
            name: "Yogur Tropical",
            price: 2.49,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 7,
            categoryId: 2,
            description: "Yogur con miel y almendras.",
            name: "Yogur con Miel y Almendras",
            price: 2.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        }],
        6: [{
            userId: 6,
            categoryId: 2,
            description: "Leche fresca y nutritiva.",
            name: "Leche Entera",
            price: 3.49,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 6,
            categoryId: 2,
            description: "Yogur natural con frutas frescas.",
            name: "Yogur Natural",
            price: 1.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 6,
            categoryId: 2,
            description: "Queso cheddar cremoso y delicioso.",
            name: "Queso Cheddar",
            price: 2.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 6,
            categoryId: 2,
            description: "Manteca suave y cremosa.",
            name: "Manteca",
            price: 2.49,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        }],
        5: [{
            userId: 5,
            categoryId: 1,
            description: "Buckets de alitas de pollo crujientes.",
            name: "Buckets de Alitas",
            price: 9.99,
            url_image: "https://via.placeholder.com/300",
            discount: 10,
        }],
        4: [{
            userId: 4,
            categoryId: 1,
            description: "Sándwich de pollo teriyaki con vegetales frescos.",
            name: "Pollo Teriyaki",
            price: 7.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 4,
            categoryId: 1,
            description: "Sándwich de carne asada con guacamole y vegetales frescos.",
            name: "Carne Asada",
            price: 8.49,
            url_image: "https://via.placeholder.com/300",
            discount: 10,
        },
        {
            userId: 4,
            categoryId: 1,
            description: "Sándwich de pavo con mostaza y vegetales frescos.",
            name: "Pavo y Mostaza",
            price: 7.49,
            url_image: "https://via.placeholder.com/300",
            discount: 5,
        },
        {
            userId: 4,
            categoryId: 1,
            description: "Sándwich de albóndigas con salsa marinara y queso fundido.",
            name: "Albóndigas",
            price: 8.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 4,
            categoryId: 1,
            description: "Sándwich de pollo picante con aderezo ranch y vegetales frescos.",
            name: "Pollo Picante",
            price: 7.99,
            url_image: "https://via.placeholder.com/300",
            discount: 15,
        },
        {
            userId: 4,
            categoryId: 1,
            description: "Sándwich de atún con mayonesa y vegetales frescos.",
            name: "Atún y Mayonesa",
            price: 7.49,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        }],
        3: [{
            userId: 3,
            categoryId: 1,
            description: "Pizza con pepperoni, queso mozzarella y salsa de tomate.",
            name: "Pizza de Pepperoni",
            price: 12.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza con jamón, piña, queso mozzarella y salsa de tomate.",
            name: "Pizza Hawaiana",
            price: 13.99,
            url_image: "https://via.placeholder.com/300",
            discount: 10,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza con champiñones, aceitunas, cebolla, pimientos y queso mozzarella.",
            name: "Pizza Vegetariana",
            price: 14.99,
            url_image: "https://via.placeholder.com/300",
            discount: 15,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza con carne de res, chorizo, panceta, huevo y queso mozzarella.",
            name: "Pizza Criolla",
            price: 15.99,
            url_image: "https://via.placeholder.com/300",
            discount: 5,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza con salami, queso mozzarella y salsa de tomate.",
            name: "Pizza de Salami",
            price: 12.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza con pollo a la parrilla, espinacas y queso mozzarella.",
            name: "Pizza de Pollo a la Parrilla",
            price: 14.99,
            url_image: "https://via.placeholder.com/300",
            discount: 10,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza con carne de res, cebolla, pimientos y queso mozzarella.",
            name: "Pizza de Carne",
            price: 13.99,
            url_image: "https://via.placeholder.com/300",
            discount: 5,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza con pepperoni, salami, chorizo y queso mozzarella.",
            name: "Pizza Mixta",
            price: 15.99,
            url_image: "https://via.placeholder.com/300",
            discount: 10,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza con pollo, panceta, hongos y queso mozzarella.",
            name: "Pizza de Pollo y Panceta",
            price: 14.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza con jamón, queso mozzarella y salsa de tomate.",
            name: "Pizza de Jamón y Queso",
            price: 12.99,
            url_image: "https://via.placeholder.com/300",
            discount: 5,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza con carne de res, bacon, cebolla caramelizada y queso mozzarella.",
            name: "Pizza Bacon y Cebolla",
            price: 15.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        }],
        2: [{
            userId: 2,
            categoryId: 1,
            description: "Hamburguesa con carne de res, queso americano y tocino.",
            name: "Whopper",
            price: 6.49,
            url_image: "https://via.placeholder.com/300",
            discount: 5,
        },
        {
            userId: 2,
            categoryId: 1,
            description: "Hamburguesa de pollo empanizado con lechuga y mayonesa.",
            name: "Chicken Royale",
            price: 5.99,
            url_image: "https://via.placeholder.com/300",
            discount: 10,
        },
        {
            userId: 2,
            categoryId: 1,
            description: "Hamburguesa con carne de res, queso cheddar y cebolla.",
            name: "Cheeseburger",
            price: 4.99,
            url_image: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 2,
            categoryId: 1,
            description: "Hamburguesa con carne de res, queso suizo y champiñones.",
            name: "Swiss Mushroom Burger",
            price: 6.99,
            url_image: "https://via.placeholder.com/300",
            discount: 15,
        }],
        1: [{
            userId: 1,
            categoryId: 1,
            description: "Deliciosa hamburguesa con carne de res, queso cheddar y lechuga.",
            name: "Hamburguesa Clásica",
            price: 5.99,
            url_image: "https://via.placeholder.com/300",
            discount: 10,
        },
        {
            userId: 1,
            categoryId: 1,
            description: "Hamburguesa de pollo a la parrilla con lechuga y mayonesa.",
            name: "Hamburguesa de Pollo",
            price: 6.49,
            url_image: "https://via.placeholder.com/300",
            discount: 5,
        },
        {
            userId: 1,
            categoryId: 1,
            description: "Combo que incluye hamburguesa, papas fritas y una bebida.",
            name: "Combo Big Mac",
            price: 8.99,
            url_image: "https://via.placeholder.com/300",
            discount: 15,
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
                    url_image: "https://via.placeholder.com/300",
                    price: faker.random.arrayElement([item.price, 0]),
                    discount: faker.random.arrayElement([15, 20, 25, 30, 35, 40, 45])
                }
            });
            allItems.push(addItem);
        }
    }

    // Crear vouchers
    const numVouchers = 100;
    for (let i = 0; i < numVouchers; i++) {
        let item = faker.random.arrayElement(allItems)
        if (!item.price) {
            await prisma.voucher.create({
                data: {
                    item: { connect: { id: item.id } },
                    user: { connect: { id: faker.random.arrayElement(shopper).id } },
                    code: faker.random.alphaNumeric(20),
                },
            });
        }
    }

    // Crear compras
    const numShoppings = 100;
    for (let i = 0; i < numShoppings; i++) {
        let item = faker.random.arrayElement(allItems);
        if (item.price) {
            const shopping = await prisma.shopping.create({
                data: {
                    user: { connect: { id: faker.random.arrayElement(shopper).id } },
                    url_PDF: faker.internet.url(),
                    way_to_pay: faker.random.arrayElement(['CASH', 'CARD']),
                    state: faker.random.arrayElement(['SUCCESS', 'PENDING']),
                },
            });
            // Crear ítems para la compra
            await prisma.item_Shopping.create({
                data: {
                    item: { connect: { id: item.id } },
                    shopping: { connect: { id: shopping.id } },
                    quantity_Item: faker.datatype.number({ min: 1, max: 10 }),
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
