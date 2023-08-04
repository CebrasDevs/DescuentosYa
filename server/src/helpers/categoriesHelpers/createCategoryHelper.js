const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = async (category) => {
  try {
    const res = await prisma.category.create({
      data: {
        name: category.name,
      },
    });
    await prisma.$disconnect();
    return res;
  } catch (error) {
    await prisma.$disconnect();
    throw new Error("Error creating category.");
  }
};
