const commentRegex = /^[a-zA-Z0-9\s.,!?'"()_-]+$/;

export default function validateReview(review) {
    if (!review) {
        console.log('Invalid review input recieved');
        return {};
    };

    let errors = {};
    const { comment, star1, star2, star3, star4, star5 } = review;
    const starsArray = [star1, star2, star3, star4, star5]
    // VALIDO COMMENT
    if (comment){
        if (!commentRegex.test(comment)) {
            errors.comment = 'Invalid character';
        };
        if (comment.length > 200) {
            errors.comment = 'Comment must be shorter';
        };
    };

    //VALIDO STARS
    if (!starsArray.includes(true)){ //si alguna es false
            errors.star1 = 'Must click any star';
            errors.star2 = 'Must click any star';
            errors.star3 = 'Must click any star';
            errors.star4 = 'Must click any star';
            errors.star5 = 'Must click any star';
    };

    return errors;
};