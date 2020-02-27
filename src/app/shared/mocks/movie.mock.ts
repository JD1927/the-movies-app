import { Movie } from './../../models/movie.model';

export const movieMock: Movie = {
  year: "1994",
    genres: [
      "Crime",
      "Drama"
    ],
    duration: "2h 36min",
    releaseDate: "1995-03-03",
    country: "USA",
    title: "The Shawshank Redemption",
    description: "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.",
    rating: 9.3,
    rank: 1,
    image: "https://images-na.ssl-images-amazon.com/images/I/51Zc2wF4P%2BL._AC_.jpg",
    trailer:"https://www.youtube.com/embed/NmzuHjWmXOc"
}
