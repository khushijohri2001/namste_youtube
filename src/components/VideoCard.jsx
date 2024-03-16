import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { YOUTUBE_COMMENT_THREAD_API, YOUTUBE_VIDEO_DETAILS_API } from "../utils/data/youtube-api";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [viewCount, setViewCount] = useState();
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  


  const { snippet, id } = info;
  const { title, channelTitle, thumbnails, liveBroadcastContent } = snippet;

  const video_id = id?.videoId || id;

  // const {viewCount, likeCount, commentCount} = statistics;

  useEffect(() => {
    const getVideoDetails = async () => {
      const res = await fetch(YOUTUBE_VIDEO_DETAILS_API(video_id));
      const data = await res.json();
      setVideoDetails(data?.items[0]);
      setViewCount(data?.items[0]?.statistics?.viewCount);
    };
    getVideoDetails();
  }, []);

  
  return (
    <Link
      key={video_id}
      to={"/watch?v=" + video_id}
      state={{ info: info, videoDetails: videoDetails }}
    >
      <div
        className={`shadow-md rounded-lg p-3 bg-white h-auto ${
          isMenuOpen ? "  w-96" : " w-[22rem]"
        } max-sm:w-[22rem]`}
      >
        <img
          className={`object-cover rounded-lg 
          ${ isMenuOpen ? " h-[13rem] w-96" : "h-[12rem] w-[22rem]"} 
          max-sm:h-[11rem] max-sm:w-80`}
          src={thumbnails.medium.url}
          alt={title}
        />
        <div>
          <div></div>
          <div>
            <h3 className="font-bold text-lg max-sm:text-sm line-clamp-1">
              {title}
            </h3>
            <p className="text-md font-medium text-gray-600">{channelTitle}</p>
            <p className="text-md font-medium text-red-600">
              {!liveBroadcastContent === "none" && liveBroadcastContent}
            </p>
            <p></p>
          </div>
        </div>
        <p className="text-md font-medium text-gray-600">{viewCount} views</p>
      </div>
    </Link>
  );
};

export default VideoCard;
