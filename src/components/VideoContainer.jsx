import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { allFilterVideosHandler, apiCallHander, fetchVideoList } from "../redux/videoSlice";

const VideoContainer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const { allVideos, allFilterVideos, isApiCalled, status } = useSelector(
    (store) => store.videos
  );

  useEffect(() => {
    try {
      if (!isApiCalled) {
        dispatch(fetchVideoList());
        dispatch(apiCallHander());
        setLoading(false);
      } else{
       
        setLoading(false)
      }
    } catch (error) {
      setError(true);
    }
  }, [dispatch, isApiCalled]);


  if (error || status === "failed") {
    return (
      <p className="flex items-center justify-center h-[60vh] text-3xl font-bold">
        Oops! Something went wrong 😬{" "}
      </p>
    );
  }

  return (
    <div>
      {loading || status === "loading" || allVideos?.length === 0 ? (
        <Shimmer />
      ) : (
        <div
          style={{ width: "100%", height: "100%" }}
          className="flex flex-wrap gap-4 my-4 justify-between max-sm:justify-center"
        >
          {allFilterVideos?.length === 0 ? (
            <h1 className="flex items-center justify-center h-[60vh] text-3xl font-bold">
              No Videos Found
            </h1>
          ) : (
            <>
              {allFilterVideos.map((video) => (
                <div key={video.etag}>
                  <VideoCard info={video} />
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
