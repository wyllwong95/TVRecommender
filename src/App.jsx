import s from "./style.module.css";
import { TVShowAPI } from "./components/api/tv-show";
import { useEffect, useState } from "react";
import { BASE_IMAGE_URL } from "./config";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import logoImg from "./assets/images/logo.png";
import { Logo } from "./components/Logo/Logo";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";
console.log("key: ", process.env.REACT_APP_API_KEY);
export default function App() {
  console.log("key: ", process.env.REACT_APP_API_KEY);

  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendations, setRecommendations] = useState([]);

  async function fetchPopulars() {
    try {
      const popularTVShowList = await TVShowAPI.fetchPopulars();
      if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[0]);
      }
    } catch (error) {
      alert("Cannot fetch popular tv show: ");
    }
  }

  async function fetchRecommendations(tvShowId) {
    try {
      const recommendationsResp = await TVShowAPI.fetchRecommendations(
        tvShowId
      );
      if (recommendationsResp.length > 0) {
        console.log(recommendationsResp.slice(0, 10));
        setRecommendations(recommendationsResp.slice(0, 10));
      }
    } catch (error) {
      alert("Cannot fetch recommendations. TvShowID: ", tvShowId);
    }
  }

  async function fetchByTitle(title) {
    try {
      const searchResp = await TVShowAPI.fetchByTitle(title);
      if (searchResp.length > 0) {
        console.log(searchResp);
        setCurrentTVShow(searchResp[0]);
      }
    } catch (error) {
      alert("Cannot search title ", title);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  function updateCurrentTVShow(tvShow) {
    setCurrentTVShow(tvShow);
  }

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BASE_IMAGE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoImg}
              title="Watowatch"
              subtitle="Find a show you may like"
            ></Logo>
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle}></SearchBar>
          </div>
        </div>
      </div>
      {currentTVShow && <TVShowDetail tvShow={currentTVShow}></TVShowDetail>}
      <div className={s.recommended_tv_shows}>
        {currentTVShow && (
          <TVShowList
            tvShowList={recommendations}
            onClickItem={updateCurrentTVShow}
          ></TVShowList>
        )}
      </div>
    </div>
  );
}
