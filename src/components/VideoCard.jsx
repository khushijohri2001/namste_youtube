import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  YOUTUBE_CHANNEL_API,
  YOUTUBE_VIDEO_DETAILS_API_BY_ID,
} from "../utils/data/youtube-api";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { formatNumber } from "../utils/functions/formatNumber";

const VideoCard = ({ info }) => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [viewCount, setViewCount] = useState();
  const [channelInfo, setChannelInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  const {
    snippet: {
      channelId,
      title,
      channelTitle,
      thumbnails,
      liveBroadcastContent,
    },
    id,
  } = info;
  const video_id = id?.videoId || id;

  useEffect(() => {
    ;(async () => {
      const res = await fetch(YOUTUBE_VIDEO_DETAILS_API_BY_ID(video_id));
      const data = await res.json();
      setVideoDetails(data?.items[0]);
      setViewCount(data?.items[0]?.statistics?.viewCount);
    })();
  }, [video_id]);

  useEffect(() => {
    try {
      const getChannelDetails = async () => {
        const res = await fetch(YOUTUBE_CHANNEL_API(channelId));
        const json = await res.json();
        setChannelInfo(json?.items[0]?.snippet?.thumbnails?.default);
        setIsLoading(false);
      };
      getChannelDetails();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Shimmer />
      ) : (
        <Link to={"/watch?v=" + video_id}>
          <div
            className={`shadow-md rounded-lg p-3 bg-white h-full ${
              isMenuOpen ? "  w-96" : " w-[22rem]"
            } max-sm:w-[22rem]`}
          >
            <div>
              <img
                className={`object-cover rounded-lg 
          ${isMenuOpen ? " h-[13rem] w-96" : "h-[12rem] w-[22rem]"} 
          max-sm:h-[11rem] max-sm:w-80`}
                src={thumbnails.medium.url}
                alt={title}
                loading="lazy"
              />
            </div>
            <div className="flex gap-4 mt-2 justify-between">
              <div className="w-12">
                <img
                  src={channelInfo?.url}
                  alt="user icon"
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>
              <div className="w-[85%]">
                <h3 className="font-bold text-lg max-sm:text-sm line-clamp-2">
                  {title}
                </h3>
                <p className="text-md font-medium text-gray-600">
                  {channelTitle}
                </p>
                <p className="text-md font-medium text-red-600">
                  {!liveBroadcastContent === "none" && liveBroadcastContent}
                </p>
                <p className="text-md font-medium text-gray-600">
                  {formatNumber(viewCount)} views
                </p>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default VideoCard;
