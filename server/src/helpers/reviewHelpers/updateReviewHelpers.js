const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = async (review, id) => {

    const res = await prisma.review.update({
        where: { id: +id },
        data: {
          comment: review.comment,
          star1: review.star1,
          star2: review.star2,
          star3: review.star3,
          star4: review.star4,
          star5: review.star5,
          enabled: review.enabled
        },
      });
if(res){
    return res;
}
    throw new Error(error.message);

};