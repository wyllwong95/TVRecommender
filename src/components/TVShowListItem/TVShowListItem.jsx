import { SMALL_IMAGE_BASE_URL } from "../../config";
import s from "./style.module.css";

export function TVShowListItem({ tvShow, onClick }) {
  const onClick_ = () => {
    onClick(tvShow);
  };

  return (
    <div className={s.container} onClick={onClick_}>
      <img
        alt={tvShow.name}
        src={SMALL_IMAGE_BASE_URL + tvShow.backdrop_path}
        className={s.img}
      ></img>
      <div className={s.title_wrapper}>
        <div className={s.title}>{tvShow.name}</div>
      </div>
    </div>
  );
}
