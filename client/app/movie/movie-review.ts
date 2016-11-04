
export class MovieReview {

    constructor(
        public userId: number,
        public movieId: number,
        public title: string,
        public rating: number,
        public review: string
    ){}

}