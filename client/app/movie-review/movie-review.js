"use strict";
/**
 * Model for a movie review, used in review-form.component
 */
var MovieReview = (function () {
    function MovieReview(userId, movieId, review, title, rating) {
        this.userId = userId;
        this.movieId = movieId;
        this.review = review;
        this.title = title;
        this.rating = rating;
    }
    return MovieReview;
}());
exports.MovieReview = MovieReview;
//# sourceMappingURL=movie-review.js.map