const { updateReviewController } = require('../../controllers')

module.exports = async (req, res) => {
    try {
        const {userId, itemId, comment, star1, star2, star3, star4, star5, enabled} = req.body
        let review = {userId, itemId, comment, star1, star2, star3, star4, star5, enabled}
        let response = await updateReviewController(review, req.params.id)
        return res.status(200).send(response);

    } catch (error) {
        
        return res.status(400).json({ error: error.message })
    };
};