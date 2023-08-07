const { PrismaClient } = require('@prisma/client');
const faker = require('faker');

const prisma = new PrismaClient();
async function seedData() {
    //Carga de categories
    const categories = ['camida', 'lacteos', 'cosmetica', 'deporte'];
    for (let i = 0; i < categories.length; i++) {
        await prisma.category.create({
            data: {
                name: categories[i],
            },
        });
    };

    //Carga de users
    const users = [
        { email: 'mcdonalds@gmail.com', password: 'mcdonalds', enabeld: true, role: 'COMPANY', dni: null, cuit: '33134366027', name: null, company_name: 'McDonalds', address: '41622 Ratke Glens', phone: '873-382-9467', last_payment: null, description: 'Cadena de restaurantes de comida rápida, conocida por sus hamburguesas y papas fritas.', url_image: 'https://guiatodoberazategui.com.ar/wp-content/uploads/2020/03/Logo-de-McDonald%C2%B4s-1-1-1.png' },
        { email: 'burgerking@gmail.com', password: 'burgerking', enabeld: true, role: 'COMPANY', dni: null, cuit: '35815505462', name: null, company_name: 'Burger King', address: '72572 Aurore Shoals', phone: '504-605-7317 x07965', last_payment: null, description: 'Cadena de restaurantes de hamburguesas y comida rápida, con un menú variado.', url_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj79lhBWamZcx9gN7RY5eXkec3_qXZDeZ6Ig&usqp=CAU' },
        { email: 'pizzahut@gmail.com', password: 'pizzahut', enabeld: true, role: 'COMPANY', dni: null, cuit: '30383062410', name: null, company_name: 'Pizza Hut', address: '27310 O Kon Glen', phone: '(402) 805-4751 x62082', last_payment: null, description: 'Famosa cadena de pizzerías con una amplia variedad de pizzas y platos italianos.', url_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoMuRtRkpmAo44JrCOBYs1ByMl6XqfYx_tNw&usqp=CAU' },
        { email: 'subway@gmail.com', password: 'subway', enabeld: true, role: 'COMPANY', dni: null, cuit: '30127761460', name: null, company_name: 'Subway', address: '651 Sporer Forge', phone: '933.214.3426', last_payment: null, description: 'Franquicia de sándwiches y bocadillos, conocida por sus opciones de comida fresca y personalizable', url_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSleUahmc9LVW6C4ShvKOiqixTpk2IuXijyAw&usqp=CAU' },
        { email: 'kfc@gmail.com', password: 'kfc', enabeld: true, role: 'COMPANY', dni: null, cuit: '32286160887', name: null, company_name: 'KFC', address: '392 Trenton Circles', phone: '275-813-0556 x477', last_payment: null, description: 'Cadena de restaurantes especializada en pollo frito y platos de comida rápida.', url_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvPg-rZKBadrmmUB9tDX-xMLDnFMcKGbqzg&usqp=CAU' },
        { email: 'laserenísima@gmail.com', password: 'laserenísima', enabeld: true, role: 'COMPANY', dni: null, cuit: '34041763086', name: null, company_name: 'La Serenísima', address: '3794 Elsa Cove', phone: '946-238-7158 x2570', last_payment: null, description: 'Líder en productos lácteos y lácteos frescos en Argentina, ofrece leche, yogur, quesos y más.', url_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9FweeNUqegx-MHySU_aUnFelsQrqv4xVdA&usqp=CAU' },
        { email: 'danone@gmail.com', password: 'danone', enabeld: true, role: 'COMPANY', dni: null, cuit: '32887216101', name: null, company_name: 'Danone', address: '127 Armstrong Brook', phone: '1-649-811-4079', last_payment: null, description: 'Marca internacional de productos lácteos y alimentos saludables.', url_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMKb9qjza3naK6nSdKdmHFSJfg8Z52VR0cg&usqp=CAU' },
        { email: 'sancor@gmail.com', password: 'saitemId: voucherncor', enabeld: true, role: 'COMPANY', dni: null, cuit: '38609893845', name: null, company_name: 'Sancor', address: '2863 Lance Crescent', phone: '1-837-865-5733 x21165', last_payment: null, description: 'Empresa argentina de lácteos con una amplia variedad de productos lácteos y derivados.', url_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9xErSNroI5-XpXAvuw14Ah8D5xMO9Y3ZI1tBWWT4q_omclWsDUNxjh00iiVpt7cerqIY&usqp=CAU' },
        { email: 'natura@gmail.com', password: 'natura', enabeld: true, role: 'COMPANY', dni: null, cuit: '37122062358', name: null, company_name: 'Natura', address: '675 Rau Mission', phone: '797.860.8703', last_payment: null, description: 'Empresa de productos de belleza y cuidado personal con enfoque en ingredientes naturales.', url_image: 'https://i.pinimg.com/736x/f2/33/16/f2331671f28fdd9e5f27dfad463d8bbc.jpg' },
        { email: 'avon@gmail.com', password: 'avon', enabeld: true, role: 'COMPANY', dni: null, cuit: '36681061529', name: null, company_name: 'Avon', address: '50320 Mante Avenue', phone: '(504) 587-2580', last_payment: null, description: 'Empresa de venta directa de productos de belleza y cosméticos.', url_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2gV0XN44i7eKJZrtmAO6K16yG8qZIBl-QQ&usqp=CAU' },
        { email: 'lbel@gmail.com', password: 'lbel', enabeld: true, role: 'COMPANY', dni: null, cuit: '31522149325', name: null, company_name: 'L Bel', address: '3858 Braun Village', phone: '666.710.6610 x76747', last_payment: null, description: 'Marca de productos de belleza y cuidado personal, con líneas de maquillaje y perfumería.', url_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy03pAPMNRqftBBsRQiALvVK33yWuNn4q4Mw&usqp=CAU' },
        { email: 'nike@gmail.com', password: 'nike', enabeld: true, role: 'COMPANY', dni: null, cuit: '33482514064', name: null, company_name: 'Nike', address: '9505 May Cliff', phone: '247-788-1735 x229', last_payment: null, description: 'Marca líder en calzado y ropa deportiva, con una amplia gama de productos para atletas.', url_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFFUcd-e_1Dvl_4Ib58po4FVpMj7NyCb1JQ&usqp=CAU' },
        { email: 'adidas@gmail.com', password: 'adidas', enabeld: true, role: 'COMPANY', dni: null, cuit: '30614878834', name: null, company_name: 'Adidas', address: '648 Rogahn Passage', phone: '(988) 847-0931 x6627', last_payment: null, description: 'Otra marca líder en calzado y ropa deportiva, con énfasis en diseño y tecnología.', url_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dtlrN5hP1x-m9AwA-NqGuUv2rwyehMoIkg&usqp=CAU' },
        { email: 'puma@gmail.com', password: 'puma', enabeld: true, role: 'COMPANY', dni: null, cuit: '35140923855', name: null, company_name: 'Puma', address: '37758 Konopelski Centers', phone: '692-790-8155', last_payment: null, description: 'Empresa internacional de ropa deportiva y calzado, con una línea de productos modernos y elegantes.', url_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VXT0dnlBIoMrg9ZR3XE9ddKrcqXAzBXz0w&usqp=CAU' },
        { email: 'Crystal84@yahoo.com', password: 'T4VutWsp54GTLxE', enabeld: true, role: 'MEMBER', dni: '31858020', cuit: null, name: 'Daphne', company_name: 'null', address: '359 Morissette Fork', phone: '204.233.8448', last_payment: '2023-05-31T11:23:08.995', description: null, url_image: 'https://picsum.photos/300' },
        { email: 'General1@gmail.com', password: 'fCUfY5v8TL98bum', enabeld: true, role: 'ADMIN', dni: null, cuit: null, name: null, company_name: null, address: '8944 Prosacco Rue', phone: '380-302-8280', last_payment: null, description: null, url_image: 'https://picsum.photos/300' },
        { email: 'Fern.Kunde8@gmail.com', password: 'm14pXruZPfa_7zb', enabeld: false, role: 'ADMIN', dni: null, cuit: null, name: null, company_name: null, address: '568 Johnson Overpass', phone: '(924) 566-0524', last_payment: null, description: null, url_image: 'https://picsum.photos/300' },
        { email: 'Kristina_Koelpin10@hotmail.com', password: 'O2GlXpTu9b6ev9T', enabeld: false, role: 'ADMIN', dni: null, cuit: null, name: null, company_name: null, address: '19160 Ladarius Course', phone: '348.376.2291 x09209', last_payment: null, description: null, url_image: 'https://picsum.photos/300' },
        { email: 'Aditya.Miller@hotmail.com', password: '_vkUzkwD4hS230b', enabeld: false, role: 'ADMIN', dni: null, cuit: null, name: null, company_name: null, address: '280 Leuschke Haven', phone: '1-790-442-5805', last_payment: null, description: null, url_image: 'https://picsum.photos/300' },
        { email: 'Queen85@hotmail.com', password: 'GzAu_hjSFaTpLWc', enabeld: false, role: 'ADMIN', dni: null, cuit: null, name: null, company_name: null, address: '41025 Jerde Glen', phone: '817.201.9940', last_payment: null, description: null, url_image: 'https://picsum.photos/300' },
        { email: 'Santiago_Lubowitz@hotmail.com', password: '2jHK6b5jzXvQfFm', enabeld: false, role: 'ADMIN', dni: null, cuit: null, name: null, company_name: null, address: '259 Harris Pass', phone: '1-342-372-6257 x855', last_payment: null, description: null, url_image: 'https://picsum.photos/300' },
        { email: 'Eveline1@yahoo.com', password: '1FuQeseEgs7Z9HR', enabeld: true, role: 'MEMBER', dni: '35158803', cuit: null, name: 'Emily', company_name: null, address: '849 Elena Square', phone: '319.883.6132', last_payment: '2023-04-14T17:36:40.426', description: null, url_image: 'https://picsum.photos/300' },
        { email: 'Brooks67@gmail.com', password: 'XqD5SAhGxNeVdUr', enabeld: true, role: 'MEMBER', dni: '26962255', cuit: null, name: 'Lourdes', company_name: null, address: '9513 Ebba Square', phone: '347.952.8177 x5427', last_payment: '2023-04-24T07:45:51.298', description: null, url_image: 'https://picsum.photos/300' },
        { email: 'Bert40@yahoo.com', password: 'sRlMHeTHrTOjLDs', enabeld: false, role: 'MEMBER', dni: '37692888', cuit: null, name: 'Earlene', company_name: null, address: '820 Hodkiewicz Spring', phone: '277.787.1495 x40586', last_payment: '2022-10-14T18:43:06.809', description: null, url_image: 'https://picsum.photos/300' },
        { email: 'Brendan_Schultz@yahoo.com', password: '4KxgCvD9_h3QYWW', enabeld: false, role: 'ADMIN', dni: null, cuit: null, name: null, company_name: null, address: '4938 Powlowski Underpass', phone: '(289) 589-7932 x3591', last_payment: null, description: null, url_image: 'https://picsum.photos/300' },
        { email: 'Brant47@yahoo.com', password: 'wfcx0s4cFTGIOip', enabeld: true, role: 'ADMIN', dni: null, cuit: null, name: null, company_name: null, address: '7446 Michael Hill', phone: '(616) 235-8508', last_payment: null, description: null, url_image: 'https://picsum.photos/300' },
        { email: 'Annie_Hammes39@gmail.com', password: 'IiE7Zf7ZfN9aq2Y', enabeld: false, role: 'ADMIN', dni: null, cuit: null, name: null, company_name: null, address: '628 Boehm Shore', phone: '795.862.2705', last_payment: null, description: null, url_image: 'https://picsum.photos/300' },
        { email: 'Derek.Ernser98@gmail.com', password: '1HCAL0QQnknlRQW', enabeld: false, role: 'MEMBER', dni: '27672100', cuit: null, name: 'Alvena', company_name: null, address: '91208 Jamil Rapid', phone: '(578) 972-0384', last_payment: '2022-08-06T01:31:51.271', description: null, url_image: 'https://picsum.photos/300' },
        { email: 'Shanelle65@yahoo.com', password: 'XgDnzV7cluG6viK', enabeld: true, role: 'MEMBER', dni: '41280425', cuit: null, name: 'Arvid', company_name: null, address: '544 Waters Spring', phone: '(685) 820-0445 x46834', last_payment: '2022-10-30T20:47:29.52', description: null, url_image: 'https://picsum.photos/300' },
        { email: 'Johan14@hotmail.com', password: 'zoQFxVZg70ZSY0U', enabeld: true, role: 'ADMIN', dni: null, cuit: null, name: null, company_name: null, address: '522 Donnelly Fort', phone: '(795) 364-4507', last_payment: null, description: null, url_image: 'https://picsum.photos/300' },
        { email: 'Pearl_Fay@yahoo.com', password: 'aqxXfGgMFW5PmR9', enabeld: false, role: 'MEMBER', dni: '41571796', cuit: null, name: 'Leon', company_name: null, address: '689 Reyna Light', phone: '932-329-5382', last_payment: '2023-06-11T15:34:39.929', description: null, url_image: 'https://picsum.photos/300' },
        { email: 'Patsy46@gmail.com', password: 'QVPNmhRCGxVtPE2', enabeld: false, role: 'ADMIN', dni: null, cuit: null, name: null, company_name: null, address: '145 Howell Roads', phone: '618-545-7817 x7747', last_payment: null, description: null, url_image: 'https://picsum.photos/300' },
        { email: 'Madelynn30@gmail.com', password: '7nWpW5zIZ8vAYBZ', enabeld: true, role: 'MEMBER', dni: '43285438', cuit: null, name: 'Dena', company_name: null, address: '876 Reynolds Lodge', phone: '943.583.2457', last_payment: '2022-08-11T13:14:16.272', description: null, url_image: 'https://picsum.photos/300' },
        { email: 'Pinkie.Krajcik@hotmail.com', password: 'gcxH0Jijlw8H7uk', enabeld: true, role: 'ADMIN', dni: null, cuit: null, name: null, company_name: null, address: '03510 Rath Hollow', phone: '(473) 521-6203 x898', last_payment: null, description: null, url_image: 'https://picsum.photos/300' }
    ]
    for (let i = 0; i < users.length; i++) {
        let date = (users[i].role === 'MEMBER') ? faker.date.past() : null;
        await prisma.user.create({
            data: {
                email: users[i].email,
                password: users[i].password,
                enabled: users[i].enabeld,
                role: users[i].role,
                dni: users[i].dni,
                cuit: users[i].cuit,
                name: users[i].name,
                company_name: users[i].company_name,
                address: users[i].address,
                phone: users[i].phone,
                description: users[i].description,
                last_payment: date,
                url_image: users[i].url_image
            },
        });
    }

    //Carga de items
    const items = [
        { id: 26, userId: 6, description: ' ', name: 'Leche Entera', price: 0, url_image: 'https://www.ocu.org/-/media/ocu/images/home/alimentacion/alimentos/lacteos_blanco_.jpg?rev=04e2ca66-8851-4a07-b5d8-4c879f0d727f&hash=8B19CF9984C4138BDC89616BC096C835', categotyId: 2, discount: 40 },
        { id: 29, userId: 6, description: ' ', name: 'Manteca', price: 0, url_image: 'https://www.ocu.org/-/media/ocu/images/home/alimentacion/alimentos/lacteos_blanco_.jpg?rev=04e2ca66-8851-4a07-b5d8-4c879f0d727f&hash=8B19CF9984C4138BDC89616BC096C835', categotyId: 2, discount: 40 },
        { id: 30, userId: 7, description: ' ', name: 'Yogur de Frutilla', price: 0, url_image: 'https://www.ocu.org/-/media/ocu/images/home/alimentacion/alimentos/lacteos_blanco_.jpg?rev=04e2ca66-8851-4a07-b5d8-4c879f0d727f&hash=8B19CF9984C4138BDC89616BC096C835', categotyId: 2, discount: 30 },
        { id: 31, userId: 7, description: ' ', name: 'Yogur de Durazno', price: 0, url_image: 'https://www.ocu.org/-/media/ocu/images/home/alimentacion/alimentos/lacteos_blanco_.jpg?rev=04e2ca66-8851-4a07-b5d8-4c879f0d727f&hash=8B19CF9984C4138BDC89616BC096C835', categotyId: 2, discount: 35 },
        { id: 32, userId: 7, description: ' ', name: 'Yogur Tropical', price: 0, url_image: 'https://www.ocu.org/-/media/ocu/images/home/alimentacion/alimentos/lacteos_blanco_.jpg?rev=04e2ca66-8851-4a07-b5d8-4c879f0d727f&hash=8B19CF9984C4138BDC89616BC096C835', categotyId: 2, discount: 30 },
        { id: 33, userId: 7, description: ' ', name: 'Yogur con Miel y Almendras', price: 0, url_image: 'https://www.ocu.org/-/media/ocu/images/home/alimentacion/alimentos/lacteos_blanco_.jpg?rev=04e2ca66-8851-4a07-b5d8-4c879f0d727f&hash=8B19CF9984C4138BDC89616BC096C835', categotyId: 2, discount: 45 },
        { id: 36, userId: 10, description: ' ', name: 'Manteca', price: 0, url_image: 'https://www.ocu.org/-/media/ocu/images/home/alimentacion/alimentos/lacteos_blanco_.jpg?rev=04e2ca66-8851-4a07-b5d8-4c879f0d727f&hash=8B19CF9984C4138BDC89616BC096C835', categotyId: 2, discount: 15 },
        { id: 37, userId: 10, description: ' ', name: 'Yogur Bebible Frutilla', price: 0, url_image: 'https://www.ocu.org/-/media/ocu/images/home/alimentacion/alimentos/lacteos_blanco_.jpg?rev=04e2ca66-8851-4a07-b5d8-4c879f0d727f&hash=8B19CF9984C4138BDC89616BC096C835', categotyId: 2, discount: 15 },
        { id: 38, userId: 10, description: ' ', name: 'Yogur Bebible Durazno', price: 0, url_image: 'https://www.ocu.org/-/media/ocu/images/home/alimentacion/alimentos/lacteos_blanco_.jpg?rev=04e2ca66-8851-4a07-b5d8-4c879f0d727f&hash=8B19CF9984C4138BDC89616BC096C835', categotyId: 2, discount: 30 },
        { id: 55, userId: 16, description: ' ', name: 'Masajes', price: 99.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 40 },
        { id: 56, userId: 16, description: ' ', name: 'Masajes', price: 89.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 15 },
        { id: 57, userId: 16, description: ' ', name: 'Masajes', price: 29.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 40 },
        { id: 61, userId: 17, description: ' ', name: 'Masajes', price: 29.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 30 },
        { id: 40, userId: 10, description: ' ', name: 'Queso Crema', price: 0, url_image: 'https://via.placeholder.com/300', categotyId: 2, discount: 40 },
        { id: 25, userId: 5, description: ' ', name: 'Buckets de Alitas', price: 0, url_image: 'https://www.vivepalmira.com/wp-content/uploads/2019/03/post_id_8015_91551_700x362.jpg', categotyId: 1, discount: 25 },
        { id: 2, userId: 1, description: ' ', name: 'Hamburguesa de Pollo', price: 0, url_image: 'https://www.vivepalmira.com/wp-content/uploads/2019/03/post_id_8015_91551_700x362.jpg', categotyId: 1, discount: 20 },
        { id: 4, userId: 2, description: ' ', name: 'Whopper', price: 0, url_image: 'https://www.vivepalmira.com/wp-content/uploads/2019/03/post_id_8015_91551_700x362.jpg', categotyId: 1, discount: 25 },
        { id: 13, userId: 3, description: ' ', name: 'Pizza de Pollo a la Parrilla', price: 0, url_image: 'https://www.vivepalmira.com/wp-content/uploads/2019/03/post_id_8015_91551_700x362.jpg', categotyId: 1, discount: 40 },
        { id: 14, userId: 3, description: ' ', name: 'Pizza de Carne', price: 0, url_image: 'https://www.vivepalmira.com/wp-content/uploads/2019/03/post_id_8015_91551_700x362.jpg', categotyId: 1, discount: 25 },
        { id: 16, userId: 3, description: ' ', name: 'Pizza de Pollo y Panceta', price: 0, url_image: 'https://www.vivepalmira.com/wp-content/uploads/2019/03/post_id_8015_91551_700x362.jpg', categotyId: 1, discount: 20 },
        { id: 17, userId: 3, description: ' ', name: 'Pizza de Jamón y Queso', price: 0, url_image: 'https://www.vivepalmira.com/wp-content/uploads/2019/03/post_id_8015_91551_700x362.jpg', categotyId: 1, discount: 30 },
        { id: 20, userId: 4, description: ' ', name: 'Carne Asada', price: 0, url_image: 'https://www.vivepalmira.com/wp-content/uploads/2019/03/post_id_8015_91551_700x362.jpg', categotyId: 1, discount: 40 },
        { id: 21, userId: 4, description: ' ', name: 'Pavo y Mostaza', price: 0, url_image: 'https://www.vivepalmira.com/wp-content/uploads/2019/03/post_id_8015_91551_700x362.jpg', categotyId: 1, discount: 15 },
        { id: 22, userId: 4, description: ' ', name: 'Albóndigas', price: 0, url_image: 'https://www.vivepalmira.com/wp-content/uploads/2019/03/post_id_8015_91551_700x362.jpg', categotyId: 1, discount: 20 },
        { id: 58, userId: 16, description: ' ', name: 'Shorts Deportivos Mujer', price: 0, url_image: 'https://www.deportesevolution.com/wp-content/uploads/2022/01/La-importancia-de-la-ropa-deportiva-especifica.jpeg', categotyId: 4, discount: 45 },
        { id: 59, userId: 16, description: ' ', name: 'Mochila Deportiva', price: 0, url_image: 'https://www.deportesevolution.com/wp-content/uploads/2022/01/La-importancia-de-la-ropa-deportiva-especifica.jpeg', categotyId: 4, discount: 25 },
        { id: 60, userId: 16, description: ' ', name: 'Gorra Deportiva', price: 0, url_image: 'https://www.deportesevolution.com/wp-content/uploads/2022/01/La-importancia-de-la-ropa-deportiva-especifica.jpeg', categotyId: 4, discount: 30 },
        { id: 46, userId: 11, description: ' ', name: 'Hamburguesa', price: 0, url_image: 'https://www.vivepalmira.com/wp-content/uploads/2019/03/post_id_8015_91551_700x362.jpg', categotyId: 1, discount: 15 },
        { id: 48, userId: 12, description: ' ', name: 'Pizza', price: 0, url_image: 'https://www.vivepalmira.com/wp-content/uploads/2019/03/post_id_8015_91551_700x362.jpg', categotyId: 1, discount: 15 },
        { id: 52, userId: 13, description: ' ', name: 'Alitas de pollo', price: 0, url_image: 'https://www.vivepalmira.com/wp-content/uploads/2019/03/post_id_8015_91551_700x362.jpg', categotyId: 1, discount: 45 },
        { id: 8, userId: 3, description: ' ', name: 'Masaje deportivo 40 min', price: 12.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 40 },
        { id: 28, userId: 6, description: ' ', name: 'Limpieza facial despigmentante', price: 2.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 30 },
        { id: 1, userId: 1, description: ' ', name: 'Masaje relajante 45 min', price: 5.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 30 },
        { id: 5, userId: 2, description: ' ', name: 'Masaje brisa de mar 45 min', price: 5.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 45 },
        { id: 66, userId: 17, description: ' ', name: 'Camiseta Sin Mangas', price: 0, url_image: 'https://www.deportesevolution.com/wp-content/uploads/2022/01/La-importancia-de-la-ropa-deportiva-especifica.jpeg', categotyId: 4, discount: 40 },
        { id: 68, userId: 17, description: ' ', name: 'Bolsa Deportiva', price: 0, url_image: 'https://www.deportesevolution.com/wp-content/uploads/2022/01/La-importancia-de-la-ropa-deportiva-especifica.jpeg', categotyId: 4, discount: 35 },
        { id: 69, userId: 17, description: ' ', name: 'Medias Deportivas', price: 0, url_image: 'https://www.deportesevolution.com/wp-content/uploads/2022/01/La-importancia-de-la-ropa-deportiva-especifica.jpeg', categotyId: 4, discount: 45 },
        { id: 71, userId: 17, description: ' ', name: 'Shorts Deportivos Hombre', price: 0, url_image: 'https://www.deportesinc.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-29-at-10.11.53.jpeurl_image:ghttps://www.deportesevolution.com/wp-content/uploads/2022/01/La-importancia-de-la-ropa-deportiva-especifica.jpeg', categotyId: 4, discount: 35 },
        { id: 65, userId: 17, description: ' ', name: 'Masajes', price: 39.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 15 },
        { id: 18, userId: 3, description: ' ', name: 'Limpieza facial desincrustante', price: 15.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 20 },
        { id: 64, userId: 17, description: ' ', name: 'Masajes', price: 54.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 20 },
        { id: 62, userId: 17, description: ' ', name: 'Masajes', price: 119.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 20 },
        { id: 27, userId: 6, description: ' ', name: 'Limpieza facial antiedad', price: 1.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 45 },
        { id: 73, userId: 18, description: ' ', name: 'Zapatillas Deportivas Mujer', price: 0, url_image: 'https://www.deportesevolution.com/wp-content/uploads/2022/01/La-importancia-de-la-ropa-deportiva-especifica.jpeg', categotyId: 4, discount: 40 },
        { id: 74, userId: 18, description: ' ', name: 'Shorts Deportivos Mujer', price: 0, url_image: 'https://www.deportesevolution.com/wp-content/uploads/2022/01/La-importancia-de-la-ropa-deportiva-especifica.jpeg', categotyId: 4, discount: 25 },
        { id: 75, userId: 18, description: ' ', name: 'Pantalones de Yoga Mujer', price: 0, url_image: 'https://www.deportesevolution.com/wp-content/uploads/2022/01/La-importancia-de-la-ropa-deportiva-especifica.jpeg', categotyId: 4, discount: 30 },
        { id: 76, userId: 19, description: ' ', name: 'Leggings de Compresión', price: 0, url_image: 'https://www.deportesevolution.com/wp-content/uploads/2022/01/La-importancia-de-la-ropa-deportiva-especifica.jpeg', categotyId: 4, discount: 40 },
        { id: 77, userId: 20, description: ' ', name: 'Zapatillas Retro', price: 0, url_image: 'https://www.deportesevolution.com/wp-content/uploads/2022/01/La-importancia-de-la-ropa-deportiva-especifica.jpeg', categotyId: 4, discount: 25 },
        { id: 78, userId: 20, description: ' ', name: 'Zapatillas Deportivas Hombre', price: 0, url_image: 'https://www.deportesevolution.com/wp-content/uploads/2022/01/La-importancia-de-la-ropa-deportiva-especifica.jpeg', categotyId: 4, discount: 45 },
        { id: 79, userId: 20, description: ' ', name: 'Zapatillas de Running', price: 0, url_image: 'https://www.deportesevolution.com/wp-content/uploads/2022/01/La-importancia-de-la-ropa-deportiva-especifica.jpeg', categotyId: 4, discount: 45 },
        { id: 80, userId: 20, description: ' ', name: 'Zapatillas de Caminar', price: 0, url_image: 'https://www.deportesevolution.com/wp-content/uploads/2022/01/La-importancia-de-la-ropa-deportiva-especifica.jpeg', categotyId: 4, discount: 45 },
        { id: 81, userId: 20, description: ' ', name: 'Shorts Deportivos Hombre', price: 0, url_image: 'https://www.deportesevolution.com/wp-content/uploads/2022/01/La-importancia-de-la-ropa-deportiva-especifica.jpeg', categotyId: 4, discount: 15 },
        { id: 82, userId: 20, description: ' ', name: 'Pantalones de Entrenamiento Hombre', price: 0, url_image: 'https://www.deportesevolution.com/wp-content/uploads/2022/01/La-importancia-de-la-ropa-deportiva-especifica.jpeg', categotyId: 4, discount: 20 },
        { id: 83, userId: 20, description: ' ', name: 'Mochila Deportiva', price: 0, url_image: 'https://www.deportesevolution.com/wp-content/uploads/2022/01/La-importancia-de-la-ropa-deportiva-especifica.jpeg', categotyId: 4, discount: 15 },
        { id: 23, userId: 4, description: ' ', name: 'Limpieza facial nutritiva', price: 7.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 20 },
        { id: 44, userId: 11, description: ' ', name: 'Depilacion con cera', price: 11.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 20 },
        { id: 11, userId: 3, description: ' ', name: 'Masajes faciales 30 min', price: 15.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 15 },
        { id: 35, userId: 9, description: ' ', name: 'Reflexilogia', price: 2.49, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 15 },
        { id: 45, userId: 11, description: ' ', name: 'Planchado express', price: 7.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 20 },
        { id: 15, userId: 3, description: ' ', name: 'Limpieza facial 45 min', price: 15.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 25 },
        { id: 6, userId: 2, description: ' ', name: 'Masaje holistico 45 min', price: 4.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 40 },
        { id: 84, userId: 20, description: ' ', name: 'Masajes', price: 19.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 25 },
        { id: 12, userId: 3, description: ' ', name: 'Manicura y pedicura SPA', price: 12.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 40 },
        { id: 72, userId: 18, description: ' ', name: 'Masajes', price: 39.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 15 },
        { id: 39, userId: 10, description: ' ', name: 'Tratamientos esteticos', price: 3.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 30 },
        { id: 24, userId: 4, description: ' ', name: 'Limpieza facial oxigenante', price: 7.49, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 20 },
        { id: 19, userId: 4, description: ' ', name: 'Limpieza facial hidratante', price: 7.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 25 },
        { id: 50, userId: 13, description: ' ', name: 'Base de Maquillaje', price: 18.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 15 },
        { id: 49, userId: 13, description: ' ', name: 'Labial Líquido', price: 12.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 25 },
        { id: 47, userId: 11, description: ' ', name: 'Exfoliante Facial', price: 14.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 15 },
        { id: 3, userId: 1, description: ' ', name: 'Masaje antiesters 45 min', price: 8.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 45 },
        { id: 54, userId: 15, description: ' ', name: 'Paleta de Sombras Neutrales', price: 14.49, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 30 },
        { id: 34, userId: 8, description: ' ', name: 'Acupuntura', price: 2.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 20 },
        { id: 41, userId: 10, description: ' ', name: 'Chocolaterapia', price: 1.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 45 },
        { id: 51, userId: 13, description: ' ', name: 'Mascara de Pestañas', price: 10.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 15 },
        { id: 70, userId: 17, description: ' ', name: 'Masajes', price: 29.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 15 },
        { id: 43, userId: 11, description: ' ', name: 'Vendas frias', price: 12.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 20 },
        { id: 67, userId: 17, description: ' ', name: 'Masajes', price: 19.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 15 },
        { id: 53, userId: 14, description: ' ', name: 'Base de Maquillaje', price: 18.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 45 },
        { id: 63, userId: 17, description: ' ', name: 'Masajes', price: 34.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 40 },
        { id: 10, userId: 3, description: ' ', name: 'Masaje de pies 25 min', price: 14.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 45 },
        { id: 7, userId: 2, description: ' ', name: 'Masaje reductivo 40 min', price: 6.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 40 },
        { id: 9, userId: 3, description: ' ', name: 'Masaje reafirmante 40 min', price: 13.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 45 },
        { id: 42, userId: 11, description: ' ', name: 'Vendas calientes', price: 15.99, url_image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg', categotyId: 3, discount: 40 },
        { id: 85, userId: 2, description: ' ', name: 'masajes', price: 15, url_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStNu_u5-YI28DpmZ5ZRq7vGQzKfaWMfDbuig&usqp=CAU', categotyId: 3, discount: 35 }
    ];
    for (let i = 0; i < items.length; i++) {
        await prisma.item.create({
            data: {
                id: items[i].email,
                userId: items[i].userId,
                categoryId: items[i].categotyId,
                description: items[i].description,
                name: items[i].name,
                price: items[i].price,
                url_image: items[i].url_image,
                discount: items[i].discount,
            },
        });
    }

    //Carga de ventas
    const shop = [
        { id: 1, userId: 33, url_PDF: 'https://petra.org', way_to_pay: 'CASH', state: 'SUCCESS' },
        { id: 2, userId: 24, url_PDF: 'http://gerson.biz', way_to_pay: 'CASH', state: 'PENDING' },
        { id: 3, userId: 33, url_PDF: 'http://vance.net', way_to_pay: 'CASH', state: 'SUCCESS' },
        { id: 4, userId: 29, url_PDF: 'https://antonietta.biz', way_to_pay: 'CASH', state: 'PENDING' },
        { id: 5, userId: 28, url_PDF: 'https://francisco.org', way_to_pay: 'CARD', state: 'PENDING' },
        { id: 6, userId: 33, url_PDF: 'https://trent.org', way_to_pay: 'CASH', state: 'SUCCESS' },
        { id: 7, userId: 24, url_PDF: 'https://brant.info', way_to_pay: 'CASH', state: 'PENDING' },
        { id: 8, userId: 22, url_PDF: 'http://mabelle.com', way_to_pay: 'CARD', state: 'SUCCESS' },
        { id: 9, userId: 15, url_PDF: 'https://fabiola.biz', way_to_pay: 'CASH', state: 'PENDING' },
        { id: 10, userId: 28, url_PDF: 'https://toby.org', way_to_pay: 'CARD', state: 'PENDING' },
        { id: 11, userId: 29, url_PDF: 'http://gino.name', way_to_pay: 'CARD', state: 'SUCCESS' },
        { id: 12, userId: 29, url_PDF: 'https://jerald.info', way_to_pay: 'CARD', state: 'PENDING' },
        { id: 13, userId: 28, url_PDF: 'https://ethelyn.biz', way_to_pay: 'CARD', state: 'SUCCESS' },
        { id: 14, userId: 22, url_PDF: 'http://seth.info', way_to_pay: 'CARD', state: 'PENDING' },
        { id: 15, userId: 15, url_PDF: 'https://nelda.net', way_to_pay: 'CARD', state: 'SUCCESS' },
        { id: 16, userId: 22, url_PDF: 'http://molly.name', way_to_pay: 'CASH', state: 'SUCCESS' },
        { id: 17, userId: 15, url_PDF: 'http://aliza.com', way_to_pay: 'CARD', state: 'SUCCESS' },
        { id: 18, userId: 33, url_PDF: 'http://ansley.org', way_to_pay: 'CASH', state: 'SUCCESS' },
        { id: 19, userId: 22, url_PDF: 'https://abigayle.biz', way_to_pay: 'CASH', state: 'PENDING' },
        { id: 20, userId: 33, url_PDF: 'https://favian.biz', way_to_pay: 'CASH', state: 'SUCCESS' },
        { id: 21, userId: 22, url_PDF: 'http://rudy.name', way_to_pay: 'CASH', state: 'PENDING' },
        { id: 22, userId: 24, url_PDF: 'https://aniya.com', way_to_pay: 'CARD', state: 'PENDING' },
        { id: 23, userId: 31, url_PDF: 'http://gretchen.biz', way_to_pay: 'CARD', state: 'SUCCESS' },
        { id: 24, userId: 24, url_PDF: 'http://mariah.org', way_to_pay: 'CASH', state: 'PENDING' },
        { id: 25, userId: 28, url_PDF: 'http://cara.biz', way_to_pay: 'CARD', state: 'SUCCESS' },
        { id: 26, userId: 15, url_PDF: 'http://gabriella.com', way_to_pay: 'CASH', state: 'PENDING' },
        { id: 27, userId: 31, url_PDF: 'https://favian.info', way_to_pay: 'CASH', state: 'PENDING' },
        { id: 28, userId: 31, url_PDF: 'http://jo.com', way_to_pay: 'CARD', state: 'SUCCESS' },
        { id: 29, userId: 31, url_PDF: 'http://elenor.info', way_to_pay: 'CASH', state: 'PENDING' },
        { id: 30, userId: 31, url_PDF: 'https://trudie.org', way_to_pay: 'CASH', state: 'SUCCESS' },
        { id: 31, userId: 29, url_PDF: 'http://leora.net', way_to_pay: 'CARD', state: 'PENDING' },
        { id: 32, userId: 15, url_PDF: 'https://peter.biz', way_to_pay: 'CARD', state: 'SUCCESS' },
        { id: 33, userId: 29, url_PDF: 'https://antonietta.name', way_to_pay: 'CARD', state: 'SUCCESS' },
        { id: 34, userId: 23, url_PDF: 'http://isai.biz', way_to_pay: 'CASH', state: 'SUCCESS' },
        { id: 35, userId: 23, url_PDF: 'http://camila.info', way_to_pay: 'CASH', state: 'SUCCESS' },
        { id: 36, userId: 31, url_PDF: 'http://maryjane.com', way_to_pay: 'CARD', state: 'SUCCESS' },
        { id: 37, userId: 24, url_PDF: 'http://velma.biz', way_to_pay: 'CASH', state: 'SUCCESS' },
        { id: 38, userId: 33, url_PDF: 'http://arch.biz', way_to_pay: 'CARD', state: 'PENDING' },
        { id: 39, userId: 23, url_PDF: 'https://aaron.biz', way_to_pay: 'CASH', state: 'PENDING' },
        { id: 40, userId: 33, url_PDF: 'http://sigurd.net', way_to_pay: 'CARD', state: 'PENDING' },
        { id: 41, userId: 31, url_PDF: 'https://flavio.com', way_to_pay: 'CASH', state: 'SUCCESS' },
        { id: 42, userId: 24, url_PDF: 'http://nelson.com', way_to_pay: 'CARD', state: 'PENDING' },
        { id: 43, userId: 23, url_PDF: 'http://sandy.name', way_to_pay: 'CARD', state: 'SUCCESS' },
        { id: 44, userId: 22, url_PDF: 'http://hobart.biz', way_to_pay: 'CARD', state: 'SUCCESS' },
        { id: 45, userId: 22, url_PDF: 'http://jermain.biz', way_to_pay: 'CASH', state: 'SUCCESS' },
        { id: 46, userId: 24, url_PDF: 'http://amelie.com', way_to_pay: 'CASH', state: 'SUCCESS' }
    ];
    for (let i = 0; i < shop.length; i++) {
        await prisma.shopping.create({
            data: {
                userId: shop[i].userId,
                url_PDF: shop[i].url_PDF,
                way_to_pay: shop[i].way_to_pay,
                state: shop[i].state,
            },
        });
    }

    //Carga en tabla intermedia
    const itemShop = [
        { id: 1, itemId: 50, shopId: 1, quantity: 3 },
        { id: 2, itemId: 35, shopId: 2, quantity: 2 },
        { id: 3, itemId: 12, shopId: 3, quantity: 8 },
        { id: 4, itemId: 84, shopId: 4, quantity: 3 },
        { id: 5, itemId: 44, shopId: 5, quantity: 4 },
        { id: 6, itemId: 39, shopId: 6, quantity: 2 },
        { id: 7, itemId: 41, shopId: 7, quantity: 7 },
        { id: 8, itemId: 41, shopId: 8, quantity: 7 },
        { id: 9, itemId: 53, shopId: 9, quantity: 8 },
        { id: 10, itemId: 24, shopId: 10, quantity: 9 },
        { id: 11, itemId: 65, shopId: 11, quantity: 8 },
        { id: 12, itemId: 27, shopId: 12, quantity: 6 },
        { id: 13, itemId: 11, shopId: 13, quantity: 9 },
        { id: 14, itemId: 54, shopId: 14, quantity: 3 },
        { id: 15, itemId: 51, shopId: 15, quantity: 5 },
        { id: 16, itemId: 56, shopId: 16, quantity: 7 },
        { id: 17, itemId: 5, shopId: 17, quantity: 7 },
        { id: 18, itemId: 67, shopId: 18, quantity: 9 },
        { id: 19, itemId: 23, shopId: 19, quantity: 8 },
        { id: 20, itemId: 84, shopId: 20, quantity: 8 },
        { id: 21, itemId: 49, shopId: 21, quantity: 1 },
        { id: 22, itemId: 12, shopId: 22, quantity: 7 },
        { id: 23, itemId: 6, shopId: 23, quantity: 2 },
        { id: 24, itemId: 63, shopId: 24, quantity: 7 },
        { id: 25, itemId: 56, shopId: 25, quantity: 2 },
        { id: 26, itemId: 23, shopId: 26, quantity: 4 },
        { id: 27, itemId: 27, shopId: 27, quantity: 7 },
        { id: 28, itemId: 24, shopId: 28, quantity: 1 },
        { id: 29, itemId: 84, shopId: 29, quantity: 1 },
        { id: 30, itemId: 55, shopId: 30, quantity: 4 },
        { id: 31, itemId: 54, shopId: 31, quantity: 10 },
        { id: 32, itemId: 3, shopId: 32, quantity: 9 },
        { id: 33, itemId: 34, shopId: 33, quantity: 7 },
        { id: 34, itemId: 3, shopId: 34, quantity: 1 },
        { id: 35, itemId: 67, shopId: 35, quantity: 1 },
        { id: 36, itemId: 53, shopId: 36, quantity: 4 },
        { id: 37, itemId: 56, shopId: 37, quantity: 9 },
        { id: 38, itemId: 3, shopId: 38, quantity: 2 },
        { id: 39, itemId: 44, shopId: 39, quantity: 6 },
        { id: 40, itemId: 24, shopId: 40, quantity: 10 },
        { id: 41, itemId: 39, shopId: 41, quantity: 8 },
        { id: 42, itemId: 54, shopId: 42, quantity: 1 },
        { id: 43, itemId: 15, shopId: 43, quantity: 1 },
        { id: 44, itemId: 47, shopId: 44, quantity: 6 },
        { id: 45, itemId: 50, shopId: 45, quantity: 1 },
        { id: 46, itemId: 72, shopId: 46, quantity: 1 }
    ];
    for (let i = 0; i < itemShop.length; i++) {
        await prisma.item_Shopping.create({
            data: {
                item: {
                    connect: {
                        id: itemShop[i].itemId
                    }
                },
                shopping: {
                    connect: {
                        id: itemShop[i].shopId
                    }
                },
                quantity_Item: itemShop[i].quantity
            },
        });
    }

    //Carga de cupones
    const vouchers = [
        { id: 1, itemId: 79, userId: 28, code: 'sr3cay6qnhweboj5djd9' },
        { id: 2, itemId: 69, userId: 29, code: 'z9ua2wco03retyuoetgg' },
        { id: 3, itemId: 58, userId: 28, code: '527fkjwezgl3x1a7ryin' },
        { id: 4, itemId: 79, userId: 33, code: 'wsiu09a8mwkes4inspcp' },
        { id: 5, itemId: 81, userId: 33, code: 'gd3efoejnppcooptbi4q' },
        { id: 6, itemId: 22, userId: 33, code: '1niev18nanq20hzwrr9n' },
        { id: 7, itemId: 40, userId: 22, code: 'k9w07r7snyu1h2506gsm' },
        { id: 8, itemId: 74, userId: 29, code: 'p4m5omv4z7ltrjuif903' },
        { id: 9, itemId: 26, userId: 24, code: 's5tlzjez3v9i6stidmdg' },
        { id: 10, itemId: 37, userId: 33, code: 'udcmy1z9h1jy3b3a2qhn' },
        { id: 11, itemId: 26, userId: 15, code: 'a6j0gbrrxw4h6nri1439' },
        { id: 12, itemId: 69, userId: 28, code: '5blcnisol1t31e8v2lfs' },
        { id: 13, itemId: 22, userId: 31, code: 'yvw8irf8f6gcuw9v63pj' },
        { id: 14, itemId: 4, userId: 28, code: '3gdwpe0tzrhkv0oun13c' },
        { id: 15, itemId: 37, userId: 24, code: 'jj4v6lqzop6zqot5gxfd' },
        { id: 16, itemId: 83, userId: 31, code: 'o790uaiu9675ejhrxyxb' },
        { id: 17, itemId: 37, userId: 24, code: 'mgtfeu17f6mlivclzl8z' },
        { id: 18, itemId: 74, userId: 28, code: '5zaehnfin1tyqk8stufz' },
        { id: 19, itemId: 32, userId: 33, code: 'qaj48wh183q2jj11qord' },
        { id: 20, itemId: 66, userId: 15, code: 'ng0qcewzc8kqlp74apg0' },
        { id: 21, itemId: 46, userId: 22, code: '6jsu4s814bfa0i5i4wvu' },
        { id: 22, itemId: 13, userId: 22, code: 'puxwxg1r4neevnz0rrlj' },
        { id: 23, itemId: 46, userId: 29, code: 's2wgq0e0fveuad477vjp' },
        { id: 24, itemId: 29, userId: 22, code: 'dmpy1gnmq519wz11z3tm' },
        { id: 25, itemId: 29, userId: 29, code: '7aq1k50pze1x8uwms41t' },
        { id: 26, itemId: 79, userId: 15, code: '9o7aczghkcvq2x6v0is2' },
        { id: 27, itemId: 20, userId: 23, code: 'sfffrs8y1wo6z0pczk14' },
        { id: 28, itemId: 26, userId: 28, code: 'peyqrfdul7s1wpzkf3fp' },
        { id: 29, itemId: 69, userId: 22, code: 'slfbaclvwl9bqkl5a6kc' },
        { id: 30, itemId: 83, userId: 33, code: 'tv0xvehx722rq8fkvjjq' },
        { id: 31, itemId: 75, userId: 28, code: 'tsp6uy8hok5snli79o6w' },
        { id: 32, itemId: 33, userId: 29, code: 'q7rx5eu42ju1yc9r707q' },
        { id: 33, itemId: 46, userId: 24, code: '7o1lxo1ga2nvoml4fjaz' },
        { id: 34, itemId: 32, userId: 33, code: 'ut9b51sl8fvfdga4x2qr' },
        { id: 35, itemId: 4, userId: 22, code: '3524bnkoat1970st74xz' },
        { id: 36, itemId: 60, userId: 31, code: '76a7u28ieyhampy0t9u7' },
        { id: 37, itemId: 32, userId: 28, code: '7nzfm2gmgj9qtsxs985w' },
        { id: 38, itemId: 74, userId: 33, code: '5xdb1y36884g4e490t9f' },
        { id: 39, itemId: 81, userId: 15, code: '4zrki41obqmzycc9yo2k' },
        { id: 40, itemId: 17, userId: 24, code: 'q79ngw96fwyjjatwik94' },
        { id: 41, itemId: 38, userId: 23, code: 'rf3aebwrqdz3boy6s60r' }
    ];
    for (let i = 0; i < vouchers.length; i++) {
        await prisma.voucher.create({
            data: {
                itemId: vouchers[i].itemId,
                userId: vouchers[i].userId,
                code: vouchers[i].code
            },
        });
    }
}
seedData()
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
