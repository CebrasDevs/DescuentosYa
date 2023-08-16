const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async ( condition = {}, fullDetail = false ) => {
    const users = await prisma.user.findMany({
        where: condition,
        include: {
            // Cascada de datos de una company
            Item: {
                include: {
                    category: true,
                    Item_Shopping: fullDetail
                }
            },

            // Cascada de datos de un member o de un admin
            Voucher: {
                include: fullDetail && {
                    item: {
                        include: {
                            category: true,
                            user: true
                        }
                    }
                }
            },

            // Tambien para un member o un admin
            Shopping: {
                include: fullDetail && {
                    Item_Shopping: {
                        include: {
                            item: {
                                include: {
                                    category: true,
                                    user: true
                                }
                            }
                        }
                    }
                }
            },

            Review: fullDetail
        }
    });
    await prisma.$disconnect();
    if (users) {
        return users;
    };
    throw new Error(error.message);
};
