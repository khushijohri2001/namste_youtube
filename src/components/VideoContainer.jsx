import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_POPULAR_VIDEO_API } from "../utils/data/youtube-api";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { allFilterVideosHandler, allVideosHandler } from "../redux/videoSlice";

const VideoContainer = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  
  const allVideos = useSelector((store) => store.videos.allVideos);
  const allFilterVideos = useSelector((store) => store.videos.allFilterVideos);
  

  useEffect(() => {
    try {
      const getDataHandler = async () => {
        const data = await fetch(YOUTUBE_POPULAR_VIDEO_API);
        const json = await data.json();
        console.log(json);
        dispatch(allVideosHandler(json.items));
        dispatch(allFilterVideosHandler(json.items));
        setLoading(false);
       
      };

      getDataHandler();
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  

  return (
    <div>
      {loading || allVideos?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap gap-4 my-4 justify-between max-sm:justify-center">
          {allFilterVideos?.length === 0 ? (
            <h1>No Videos Found</h1>
          ) : (
            allFilterVideos.map((video) => <div key={video.etag}> <VideoCard info={video} /> </div>)
          )}
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
