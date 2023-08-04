const { PrismaClient } = require('@prisma/client');
const faker = require('faker');

const prisma = new PrismaClient();

async function seedData() {
    // Crear usuarios
    const numUsers = 20;
    const users = [];
    for (let i = 0; i < numUsers; i++) {
        let role = faker.random.arrayElement(['ADMIN', 'COMPANY', 'MEMBER']);
        let dni = (role === 'MEMBER') ? faker.datatype.number({ min: 0, max: 99999999 }).toString() : null;
        let cuit = (role === 'COMPANY') ? faker.datatype.number({ min: 0, max: 99999999 }).toString() : null;
        let name = (role === 'COMPANY') ? null : faker.name.firstName();
        let company_name = (role === 'COMPANY') ? faker.name.firstName() : null;
        let last_payment = (role === 'MEMBER') ? faker.date.past() : null;
        let description = (role === 'COMPANY') ? faker.lorem.paragraph() : null;
        const user = await prisma.user.create({
            data: {
                email: faker.internet.email(),
                password: faker.internet.password(),
                enabled: faker.random.arrayElement([true,false]),
                role: role,
                dni: dni,
                cuit: cuit,
                name: name,
                url_image: faker.image.avatar(),
                company_name: company_name,
                address: faker.address.streetAddress(),
                phone: faker.phone.phoneNumber(),
                last_payment: last_payment,
                description: description,
            },
        });
        users.push(user);
    }

    // Crear categorías
    const numCategories = 5;
    let categories = [];
    const categoriesa = ['lacteos', 'indumentaria', 'estetica', 'tecnologia', 'jardineria'];
    for (let i = 0; i < numCategories; i++) {
        let arr = categoriesa[i];
        const category = await prisma.category.create({
            data: {
                name: arr,
            },
        });
        categories.push(category);
    }

    // Crear ítems
    const numItems = 50;
    const items = [];
    for (let i = 0; i < numItems; i++) {
        const item = await prisma.item.create({
            data: {
                userId: faker.random.arrayElement(users).id ,
                categoryId: faker.random.arrayElement(categories).id ,
                description: faker.lorem.paragraph(),
                name: faker.commerce.productName(),
                price: faker.random.arrayElement([parseFloat(faker.commerce.price()), 0]),
                url_image: faker.image.imageUrl(),
                discount: faker.datatype.number({ min: 0, max: 50 }),
            },
        });
        items.push(item);
    }

    // Crear vouchers
    const numVouchers = 100;
    for (let i = 0; i < numVouchers; i++) {
        let item = faker.random.arrayElement(items)
        if (!item.price) {
            await prisma.voucher.create({
                data: {
                    item: { connect: { id: item.id } },
                    user: { connect: { id: faker.random.arrayElement(users).id } },
                    code: faker.random.alphaNumeric(10),
                },
            });
        }
    }

    // Crear compras
    const numShoppings = 100;
    for (let i = 0; i < numShoppings; i++) {
        let item = faker.random.arrayElement(items);
        if (item.price > 0) {
            const shopping = await prisma.shopping.create({
                data: {
                    user: { connect: { id: faker.random.arrayElement(users).id } },
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
                    quantity_Item: faker.datatype.number({ min: 0, max: 10 }),
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
