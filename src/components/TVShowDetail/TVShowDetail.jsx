import FiveStarRating from "../FiveStarRating/FiveStarRating";
import s from "./style.module.css";

export default function TVShowDetail({ tvShow }) {
  const rating = `${tvShow.vote_average / 2} / 5`;
  return (
    <div className={s.container}>
      <div className={s.title}>{tvShow.name}</div>
      <div className={s.rating}>
        <FiveStarRating rating={tvShow.vote_average / 2}></FiveStarRating>
        <span className={s.ratingText}>{rating}</span>
      </div>
      <div className={s.summary}>{tvShow.overview}</div>
    </div>
  );
}
