
export class MovieReview {

    constructor(
        public userId: number,
        public movieId: number,
        public review: string,
        public title: string,
        public rating: number
    ){}

}