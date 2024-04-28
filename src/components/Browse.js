import useNowplayingMovies from "../hooks/useNowPlayingMovie";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecndaryContainer from "./SecndaryContainer";

const Browse = () => {
  useNowplayingMovies()
  usePopularMovies()
  return (
    <div>
      <Header />
      <MainContainer />
      <SecndaryContainer/>
    </div>
  );
};

export default Browse;
