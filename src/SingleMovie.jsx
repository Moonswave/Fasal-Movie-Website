import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Header from "./Header";

const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);

  const { isLoading, movie, isError } = useFetch(`&i=${id}`);

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
    <>
    <div className="Singlebackground">
    <Header/>
    <section className="movie-section">
      <div className="movie-card" >
        <figure>
          <img src={movie.Poster} alt=""  className="singleimage"/>
        </figure>
        <div className="card-content">
          <p className="Singleword">Movie Name - {movie.Title}</p>
          <p className=""></p>
          <p className="Singleword">Release Date - {movie.Released}</p>
          <p className="Singleword">Genre- {movie.Genre}</p>
          <p className="Singleword">IMDB Rating- {movie.imdbRating} / 10</p>
          <div className="single-button">
          <NavLink to="/public" className="public-button">
            Add to Public Playlist
          </NavLink>
          <NavLink to="/" className="public-button">
            Add to Private Playlist
          </NavLink>
          </div>
        </div>
      </div>
    </section>
    </div>
    </>
  );
};

export default SingleMovie;