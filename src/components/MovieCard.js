import React from 'react'
import { IMG_CDN } from '../utils/Constant'

const MovieCard = ({posterpath}) => {
  console.log("{ IMG_CDN+posterpath}", IMG_CDN + posterpath);
  return (
    <div className=" w-48 pr-12">
      <img alt="MovieCard" src={IMG_CDN + posterpath} />
    </div>
  );
};

export default MovieCard