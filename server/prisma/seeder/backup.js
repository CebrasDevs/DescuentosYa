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
        1    { email: 'mcdonalds@gmail.com', password: 'mcdonalds', enabled: true, role: 'COMPANY', dni_cuit: '33134366027', name: 'McDonalds', address: '41622 Ratke Glens', phoneNumber: '873-382-9467', lastPayment: null, description: 'Cadena de restaurantes de comida rápida, conocida por sus hamburguesas y papas fritas.', imageUrl: 'https://guiatodoberazategui.com.ar/wp-content/uploads/2020/03/Logo-de-McDonald%C2%B4s-1-1-1.png' },
        2    { email: 'burgerking@gmail.com', password: 'burgerking', enabled: true, role: 'COMPANY', dni_cuit: '35815505462', name: 'Burger King', address: '72572 Aurore Shoals', phoneNumber: '504-605-7317 x07965', lastPayment: null, description: 'Cadena de restaurantes de hamburguesas y comida rápida, con un menú variado.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj79lhBWamZcx9gN7RY5eXkec3_qXZDeZ6Ig&usqp=CAU' },
        3    { email: 'pizzahut@gmail.com', password: 'pizzahut', enabled: true, role: 'COMPANY', dni_cuit: '30383062410', name: 'Pizza Hut', address: '27310 O Kon Glen', phoneNumber: '(402) 805-4751 x62082', lastPayment: null, description: 'Famosa cadena de pizzerías con una amplia variedad de pizzas y platos italianos.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoMuRtRkpmAo44JrCOBYs1ByMl6XqfYx_tNw&usqp=CAU' },
        4    { email: 'subway@gmail.com', password: 'subway', enabled: true, role: 'COMPANY', dni_cuit: '30127761460', name: 'Subway', address: '651 Sporer Forge', phoneNumber: '933.214.3426', lastPayment: null, description: 'Franquicia de sándwiches y bocadillos, conocida por sus opciones de comida fresca y personalizable', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSleUahmc9LVW6C4ShvKOiqixTpk2IuXijyAw&usqp=CAU' },
        5    { email: 'kfc@gmail.com', password: 'kfc', enabled: true, role: 'COMPANY', dni_cuit: '32286160887', name: 'KFC', address: '392 Trenton Circles', phoneNumber: '275-813-0556 x477', lastPayment: null, description: 'Cadena de restaurantes especializada en pollo frito y platos de comida rápida.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvPg-rZKBadrmmUB9tDX-xMLDnFMcKGbqzg&usqp=CAU' },
        6    { email: 'laserenísima@gmail.com', password: 'laserenísima', enabled: true, role: 'COMPANY', dni_cuit: '34041763086', name: 'La Serenísima', address: '3794 Elsa Cove', phoneNumber: '946-238-7158 x2570', lastPayment: null, description: 'Líder en productos lácteos y lácteos frescos en Argentina, ofrece leche, yogur, quesos y más.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9FweeNUqegx-MHySU_aUnFelsQrqv4xVdA&usqp=CAU' },
        7    { email: 'danone@gmail.com', password: 'danone', enabled: true, role: 'COMPANY', dni_cuit: '32887216101', name: 'Danone', address: '127 Armstrong Brook', phoneNumber: '1-649-811-4079', lastPayment: null, description: 'Marca internacional de productos lácteos y alimentos saludables.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMKb9qjza3naK6nSdKdmHFSJfg8Z52VR0cg&usqp=CAU' },
        8    { email: 'sancor@gmail.com', password: 'saitemId: voucherncor', enabled: true, role: 'COMPANY', dni_cuit: '38609893845', name: 'Sancor', address: '2863 Lance Crescent', phoneNumber: '1-837-865-5733 x21165', lastPayment: null, description: 'Empresa argentina de lácteos con una amplia variedad de productos lácteos y derivados.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9xErSNroI5-XpXAvuw14Ah8D5xMO9Y3ZI1tBWWT4q_omclWsDUNxjh00iiVpt7cerqIY&usqp=CAU' },
        9    { email: 'natura@gmail.com', password: 'natura', enabled: true, role: 'COMPANY', dni_cuit: '37122062358', name: 'Natura', address: '675 Rau Mission', phoneNumber: '797.860.8703', lastPayment: null, description: 'Empresa de productos de belleza y cuidado personal con enfoque en ingredientes naturales.', imageUrl: 'https://i.pinimg.com/736x/f2/33/16/f2331671f28fdd9e5f27dfad463d8bbc.jpg' },
        10    { email: 'avon@gmail.com', password: 'avon', enabled: true, role: 'COMPANY', dni_cuit: '36681061529', name: 'Avon', address: '50320 Mante Avenue', phoneNumber: '(504) 587-2580', lastPayment: null, description: 'Empresa de venta directa de productos de belleza y cosméticos.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2gV0XN44i7eKJZrtmAO6K16yG8qZIBl-QQ&usqp=CAU' },
        11    { email: 'lbel@gmail.com', password: 'lbel', enabled: true, role: 'COMPANY', dni_cuit: '31522149325', name: 'L Bel', address: '3858 Braun Village', phoneNumber: '666.710.6610 x76747', lastPayment: null, description: 'Marca de productos de belleza y cuidado personal, con líneas de maquillaje y perfumería.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy03pAPMNRqftBBsRQiALvVK33yWuNn4q4Mw&usqp=CAU' },
        12    { email: 'nike@gmail.com', password: 'nike', enabled: true, role: 'COMPANY', dni_cuit: '33482514064', name: 'Nike', address: '9505 May Cliff', phoneNumber: '247-788-1735 x229', lastPayment: null, description: 'Marca líder en calzado y ropa deportiva, con una amplia gama de productos para atletas.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFFUcd-e_1Dvl_4Ib58po4FVpMj7NyCb1JQ&usqp=CAU' },
        13    { email: 'adidas@gmail.com', password: 'adidas', enabled: true, role: 'COMPANY', dni_cuit: '30614878834', name: 'Adidas', address: '648 Rogahn Passage', phoneNumber: '(988) 847-0931 x6627', lastPayment: null, description: 'Otra marca líder en calzado y ropa deportiva, con énfasis en diseño y tecnología.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dtlrN5hP1x-m9AwA-NqGuUv2rwyehMoIkg&usqp=CAU' },
        14    { email: 'puma@gmail.com', password: 'puma', enabled: true, role: 'COMPANY', dni_cuit: '35140923855', name: 'Puma', address: '37758 Konopelski Centers', phoneNumber: '692-790-8155', lastPayment: null, description: 'Empresa internacional de ropa deportiva y calzado, con una línea de productos modernos y elegantes.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VXT0dnlBIoMrg9ZR3XE9ddKrcqXAzBXz0w&usqp=CAU' }
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

    // Crear Members
    const dataMembers = [
        { email: 'Crystal84@yahoo.com', password: 'T4VutWsp54GTLxE', enabled: true, role: 'MEMBER', dni_cuit: '31858020', name: 'Daphne', address: '359 Morissette Fork', phoneNumber: '204.233.8448', lastPayment: '2023-05-31T11:23:08.995', description: null, imageUrl: 'https://picsum.photos/300' },
        { email: 'Eveline1@yahoo.com', password: '1FuQeseEgs7Z9HR', enabled: true, role: 'MEMBER', dni_cuit: '35158803', name: 'Emily', address: '849 Elena Square', phoneNumber: '319.883.6132', lastPayment: '2023-04-14T17:36:40.426', description: null, imageUrl: 'https://picsum.photos/300' },
        { email: 'Brooks67@gmail.com', password: 'XqD5SAhGxNeVdUr', enabled: true, role: 'MEMBER', dni_cuit: '26962255', name: 'Lourdes', address: '9513 Ebba Square', phoneNumber: '347.952.8177 x5427', lastPayment: '2023-04-24T07:45:51.298', description: null, imageUrl: 'https://picsum.photos/300' },
        { email: 'Bert40@yahoo.com', password: 'sRlMHeTHrTOjLDs', enabled: false, role: 'MEMBER', dni_cuit: '37692888', name: 'Earlene', address: '820 Hodkiewicz Spring', phoneNumber: '277.787.1495 x40586', lastPayment: '2022-10-14T18:43:06.809', description: null, imageUrl: 'https://picsum.photos/300' },
        { email: 'Derek.Ernser98@gmail.com', password: '1HCAL0QQnknlRQW', enabled: false, role: 'MEMBER', dni_cuit: '27672100', name: 'Alvena', address: '91208 Jamil Rapid', phoneNumber: '(578) 972-0384', lastPayment: '2022-08-06T01:31:51.271', description: null, imageUrl: 'https://picsum.photos/300' },
        { email: 'Pearl_Fay@yahoo.com', password: 'aqxXfGgMFW5PmR9', enabled: false, role: 'MEMBER', dni_cuit: '41571796', name: 'Leon', address: '689 Reyna Light', phoneNumber: '932-329-5382', lastPayment: '2023-06-11T15:34:39.929', description: null, imageUrl: 'https://picsum.photos/300' },
        { email: 'Madelynn30@gmail.com', password: '7nWpW5zIZ8vAYBZ', enabled: true, role: 'MEMBER', dni_cuit: '43285438', name: 'Dena', address: '876 Reynolds Lodge', phoneNumber: '943.583.2457', lastPayment: '2022-08-11T13:14:16.272', description: null, imageUrl: 'https://picsum.photos/300' }
    ];
    const members = [];
    for (let i = 0; i < dataMembers.length; i++) {
        const member = await prisma.user.create({
            data: {
                email: faker.internet.email(),
                password: faker.internet.password(),
                enabled: true,
                role: dataMembers[i].role,
                dni_cuit: faker.datatype.number({ min: 30999999, max: 44000000 }).toString(),
                name: faker.name.firstName(),
                imageUrl: 'https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg',
                address: faker.address.streetAddress(),
                phoneNumber: faker.phone.phoneNumber(),
                lastPayment: dataMembers[i].lastPayment
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
        14: [{
            userId: 14,
            categoryId: 4,
            description: "Shorts Deportivos Hombre",
            name: "Shorts Deportivos Hombre",
            price: 18.99,
            imageUrl: "https://www.deportesinc.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-29-at-10.11.53.jpeurl_image:ghttps://www.deportesevolution.com/wp-content/uploads/2022/01/La-importancia-de-la-ropa-deportiva-especifica.jpeg",
            discount: 0,
        }],
        9: [
            {
                userId: 9,
                categoryId: 3,
                description: "Masajes y limpieza facial desincrustante",
                name: "Masajes y limpieza facial desincrustante",
                price: 0,
                imageUrl: "https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg",
                discount: 0,
            },
            {
                userId: 9,
                categoryId: 3,
                description: "Mascara de pestañas para volumen.",
                name: "Mascara de Pestañas",
                price: 10.99,
                imageUrl: "https://via.placeholder.com/300",
                discount: 5,
            },
            {
                userId: 9,
                categoryId: 3,
                description: "Paleta de sombras con tonos neutros.",
                name: "Paleta de Sombras Neutras",
                price: 22.99,
                imageUrl: "https://via.placeholder.com/300",
                discount: 0,
            }],
        12: [{
            userId: 12,
            categoryId: 3,
            description: "Máscara de pestañas para mayor volumen.",
            name: "Máscara de Pestañas",
            price: 8.49,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        }],
        11: [{
            userId: 11,
            categoryId: 3,
            description: "Crema hidratante para el rostro.",
            name: "Crema Facial Hidratante",
            price: 15.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 11,
            categoryId: 3,
            description: "Shampoo nutritivo para cabello seco.",
            name: "Shampoo Nutritivo",
            price: 12.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 10,
        },
        {
            userId: 11,
            categoryId: 3,
            description: "Acondicionador reparador para cabello dañado.",
            name: "Acondicionador Reparador",
            price: 11.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 5,
        },
        {
            userId: 11,
            categoryId: 3,
            description: "Jabón líquido para manos con aroma de lavanda.",
            name: "Jabón Líquido Lavanda",
            price: 7.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 11,
            categoryId: 3,
            description: "Perfume femenino con notas florales.",
            name: "Perfume Floral",
            price: 25.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 11,
            categoryId: 3,
            description: "Exfoliante facial con extractos naturales.",
            name: "Exfoliante Facial",
            price: 14.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        }],
        10: [
            {
                userId: 10,
                categoryId: 3,
                description: "Masaje brisa de mar 45 min.",
                name: "Masaje brisa de mar",
                price: 0,
                imageUrl: "https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg",
                discount: 10,
            },
            {
                userId: 10,
                categoryId: 2,
                description: "Manteca con sal para untar.",
                name: "Manteca",
                price: 2.99,
                imageUrl: "https://via.placeholder.com/300",
                discount: 10,
            },
            {
                userId: 10,
                categoryId: 2,
                description: "Yogur bebible sabor frutilla.",
                name: "Yogur Bebible Frutilla",
                price: 1.49,
                imageUrl: "https://via.placeholder.com/300",
                discount: 0,
            },
            {
                userId: 10,
                categoryId: 2,
                description: "Yogur bebible sabor durazno.",
                name: "Yogur Bebible Durazno",
                price: 1.49,
                imageUrl: "https://via.placeholder.com/300",
                discount: 0,
            },
            {
                userId: 10,
                categoryId: 2,
                description: "Leche descremada con calcio.",
                name: "Leche Descremada",
                price: 3.99,
                imageUrl: "https://via.placeholder.com/300",
                discount: 0,
            },
            {
                userId: 10,
                categoryId: 2,
                description: "Queso crema para untar.",
                name: "Queso Crema",
                price: 2.49,
                imageUrl: "https://via.placeholder.com/300",
                discount: 5,
            },
            {
                userId: 10,
                categoryId: 2,
                description: "Queso rallado para espolvorear.",
                name: "Queso Rallado",
                price: 1.99,
                imageUrl: "https://via.placeholder.com/300",
                discount: 0,
            }],
        13: [{
            userId: 13,
            categoryId: 2,
            description: "Yogur griego con miel y nueces.",
            name: "Yogur Griego",
            price: 2.49,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        }],
        8: [{
            userId: 8,
            categoryId: 2,
            description: "Queso suave y cremoso.",
            name: "Queso Crema",
            price: 2.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        }],
        7: [{
            userId: 7,
            categoryId: 2,
            description: "Yogur natural con frutas.",
            name: "Yogur de Frutilla",
            price: 1.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 5,
        },
        {
            userId: 7,
            categoryId: 2,
            description: "Yogur con trozos de durazno.",
            name: "Yogur de Durazno",
            price: 1.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 7,
            categoryId: 2,
            description: "Yogur con trozos de frutas tropicales.",
            name: "Yogur Tropical",
            price: 2.49,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 7,
            categoryId: 2,
            description: "Yogur con miel y almendras.",
            name: "Yogur con Miel y Almendras",
            price: 2.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        }],
        6: [{
            userId: 6,
            categoryId: 2,
            description: "Leche fresca y nutritiva.",
            name: "Leche Entera",
            price: 3.49,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 6,
            categoryId: 2,
            description: "Yogur natural con frutas frescas.",
            name: "Yogur Natural",
            price: 1.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 6,
            categoryId: 2,
            description: "Queso cheddar cremoso y delicioso.",
            name: "Queso Cheddar",
            price: 2.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 6,
            categoryId: 2,
            description: "Manteca suave y cremosa.",
            name: "Manteca",
            price: 2.49,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        }],
        5: [{
            userId: 5,
            categoryId: 1,
            description: "Buckets de alitas de pollo crujientes.",
            name: "Buckets de Alitas",
            price: 9.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 10,
        }],
        4: [{
            userId: 4,
            categoryId: 1,
            description: "Sándwich de pollo teriyaki con vegetales frescos.",
            name: "Pollo Teriyaki",
            price: 7.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 4,
            categoryId: 1,
            description: "Sándwich de carne asada con guacamole y vegetales frescos.",
            name: "Carne Asada",
            price: 8.49,
            imageUrl: "https://via.placeholder.com/300",
            discount: 10,
        },
        {
            userId: 4,
            categoryId: 1,
            description: "Sándwich de pavo con mostaza y vegetales frescos.",
            name: "Pavo y Mostaza",
            price: 7.49,
            imageUrl: "https://via.placeholder.com/300",
            discount: 5,
        },
        {
            userId: 4,
            categoryId: 1,
            description: "Sándwich de albóndigas con salsa marinara y queso fundido.",
            name: "Albóndigas",
            price: 8.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 4,
            categoryId: 1,
            description: "Sándwich de pollo picante con aderezo ranch y vegetales frescos.",
            name: "Pollo Picante",
            price: 7.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 15,
        },
        {
            userId: 4,
            categoryId: 1,
            description: "Sándwich de atún con mayonesa y vegetales frescos.",
            name: "Atún y Mayonesa",
            price: 7.49,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        }],
        3: [{
            userId: 3,
            categoryId: 1,
            description: "Pizza con pepperoni, queso mozzarella y salsa de tomate.",
            name: "Pizza de Pepperoni",
            price: 12.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza con jamón, piña, queso mozzarella y salsa de tomate.",
            name: "Pizza Hawaiana",
            price: 13.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 10,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza con champiñones, aceitunas, cebolla, pimientos y queso mozzarella.",
            name: "Pizza Vegetariana",
            price: 14.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 15,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza con carne de res, chorizo, panceta, huevo y queso mozzarella.",
            name: "Pizza Criolla",
            price: 15.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 5,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza con salami, queso mozzarella y salsa de tomate.",
            name: "Pizza de Salami",
            price: 12.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza con pollo a la parrilla, espinacas y queso mozzarella.",
            name: "Pizza de Pollo a la Parrilla",
            price: 14.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 10,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza con carne de res, cebolla, pimientos y queso mozzarella.",
            name: "Pizza de Carne",
            price: 13.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 5,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza con pepperoni, salami, chorizo y queso mozzarella.",
            name: "Pizza Mixta",
            price: 15.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 10,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza con pollo, panceta, hongos y queso mozzarella.",
            name: "Pizza de Pollo y Panceta",
            price: 14.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza con jamón, queso mozzarella y salsa de tomate.",
            name: "Pizza de Jamón y Queso",
            price: 12.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 5,
        },
        {
            userId: 3,
            categoryId: 1,
            description: "Pizza con carne de res, bacon, cebolla caramelizada y queso mozzarella.",
            name: "Pizza Bacon y Cebolla",
            price: 15.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        }],
        2: [{
            userId: 2,
            categoryId: 1,
            description: "Hamburguesa con carne de res, queso americano y tocino.",
            name: "Whopper",
            price: 6.49,
            imageUrl: "https://via.placeholder.com/300",
            discount: 5,
        },
        {
            userId: 2,
            categoryId: 1,
            description: "Hamburguesa de pollo empanizado con lechuga y mayonesa.",
            name: "Chicken Royale",
            price: 5.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 10,
        },
        {
            userId: 2,
            categoryId: 1,
            description: "Hamburguesa con carne de res, queso cheddar y cebolla.",
            name: "Cheeseburger",
            price: 4.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 0,
        },
        {
            userId: 2,
            categoryId: 1,
            description: "Hamburguesa con carne de res, queso suizo y champiñones.",
            name: "Swiss Mushroom Burger",
            price: 6.99,
            imageUrl: "https://via.placeholder.com/300",
            discount: 15,
        }],
        1: [
            {
                userId: 1,
                categoryId: 1,
                description: "Hamburguesa de pollo a la parrilla con lechuga y mayonesa.",
                name: "Hamburguesa de Pollo",
                price: 6.49,
                imageUrl: "https://www.vivepalmira.com/wp-content/uploads/2019/03/post_id_8015_91551_700x362.jpg",
                discount: 5
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
    const cantidadDeCreacion = 100;
    for (let i = 0; i < cantidadDeCreacion; i++) {
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
