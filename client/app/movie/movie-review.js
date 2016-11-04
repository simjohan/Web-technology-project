"use strict";
var MovieReview = (function () {
    function MovieReview(userId, movieId, title, rating, review) {
        this.userId = userId;
        this.movieId = movieId;
        this.title = title;
        this.rating = rating;
        this.review = review;
    }
    return MovieReview;
}());
exports.MovieReview = MovieReview;
//# sourceMappingURL=movie-review.js.map