const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = async (categoryId) => {
  try {
    const res = await prisma.category.delete({
      where: {
        id: categoryId,
      },
    });
    await prisma.$disconnect();
    if (res) {
      return "Category deleted successfully.";
    } else {
      throw new Error("Category to delete not found.");
    }
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        throw new Error(
          "Cannot delete the category due to existing foreign key."
        );
      } else {
        throw new Error("Database error while trying to delete the category.");
      }
    } else {
      throw new Error("Unexpected error while trying to delete the category.");
    }
  }
};
