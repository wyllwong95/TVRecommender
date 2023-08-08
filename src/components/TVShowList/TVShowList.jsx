import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";

export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <div className={s.tvshow_wrapper}>
      <div className={s.title}>You'll probably like :</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <TVShowListItem
              tvShow={tvShow}
              onClick={onClickItem}
              key={tvShow.id}
            ></TVShowListItem>
          );
        })}
      </div>
    </div>
  );
}
