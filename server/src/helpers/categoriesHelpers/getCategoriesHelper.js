const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = async (condition = {}) => {
  try {
    const categories = await prisma.category.findMany({
      where: condition || true
      /* select: {
        name: true,
      }, */
    });
    await prisma.$disconnect();
    return categories;
  } catch (error) {
    await prisma.$disconnect();
    throw new Error("Error fetching categories.");
  }
};
