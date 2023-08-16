const commentRegex = /^[a-zA-Z0-9\s.,!?'"()_-]+$/;

export default function validateReview(review) {
    if (!review) {
        console.log('Invalid review input recieved');
        return {};
    };

    let errors = {};
    const { comment } = review;

    // VALIDO COMMENT
    if (comment){
        if (!commentRegex.test(comment)) {
            errors.comment = 'Invalid character';
        };
        if (comment.length > 200) {
            errors.comment = 'Comment must be shorter';
        };
    };

    return errors;
};