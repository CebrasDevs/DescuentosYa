const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = async () => {
  try {
    const categories = await prisma.category.findMany({
      select: {
        name: true,
      },
    });
    await prisma.$disconnect();
    return categories;
  } catch (error) {
    await prisma.$disconnect();
    throw new Error("Error fetching categories.");
  }
};
