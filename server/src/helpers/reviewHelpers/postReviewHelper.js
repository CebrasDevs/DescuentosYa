const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = async ({
  userId,
  itemId,
  comment,
  star1,
  star2,
  star3,
  star4,
  star5,
}) => {
  const existingReview = await prisma.review.findFirst({
    where: {
      userId: userId,
      itemId: itemId,
    },
  });

  if (existingReview) {
    throw new Error("User already submitted a review for this item");
  }
  const res = await prisma.review.create({
    data: {
      userId: userId,
      itemId: itemId,
      comment: comment,
      star1: star1,
      star2: star2,
      star3: star3,
      star4: star4,
      star5: star5,
    },
  });

  return res;
};
