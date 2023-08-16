const { updateReviewHelper } = require('../../helpers')

module.exports = async (review, id) => {
    const {userId, itemId, comment, star1, star2, star3, star4, star5} = review
    // userId, itemId : numero
    // comment: string
    // stars: boolean
    if (
        (isNaN(userId)) ||
        (isNaN(itemId)) ||
        (comment && typeof comment !== "string") ||
        (typeof star1 !== 'boolean') ||
        (typeof star2 !== 'boolean') ||
        (typeof star3 !== 'boolean') ||
        (typeof star4 !== 'boolean') ||
        (typeof star5 !== 'boolean')
    )  throw new Error("Incomplete data or incorrect");
    let res = await updateReviewHelper(review, id)
    
    return res
};