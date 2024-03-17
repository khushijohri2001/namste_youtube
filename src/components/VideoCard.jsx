import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { YOUTUBE_CHANNEL_API, YOUTUBE_VIDEO_DETAILS_API } from "../utils/data/youtube-api";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoCard = ({ info }) => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [viewCount, setViewCount] = useState();
  const [channelInfo, setChannelInfo] = useState([])
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  const [isLoading, setIsLoading] = useState(true)

  const { snippet:{channelId, title, channelTitle, thumbnails, liveBroadcastContent}, id } = info;
  const video_id = id?.videoId || id;

  // const {viewCount, likeCount, commentCount} = statistics;

  // useEffect(() => {
  //   const getVideoDetails = async () => {
  //     const res = await fetch(YOUTUBE_VIDEO_DETAILS_API(video_id));
  //     const data = await res.json();
  //     setVideoDetails(data?.items[0]);
  //     setViewCount(data?.items[0]?.statistics?.viewCount);
  //   };
  //   getVideoDetails();
    
  // }, [video_id]);

  useEffect(() => {
    try{
    const getChannelDetails =  async() =>{
      const res = await fetch(YOUTUBE_CHANNEL_API(channelId))
      const json = await res.json()
      setChannelInfo(json?.items[0]?.snippet?.thumbnails?.default);
      setIsLoading(false)
    }
    getChannelDetails()
    } catch(error){
      console.log(error);
    }
  }, [])


  
  return (
    <>
     {isLoading ? (
      <Shimmer/>
     ) : (
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
        <div className="flex gap-2 mt-2">
          <div className="">
                <img
                  src={channelInfo?.url}
                  alt="user icon"
                  className="w-12 h-12 object-cover rounded-full"
                />
          </div>
          <div>
            <h3 className="font-bold text-lg max-sm:text-sm line-clamp-1">
              {title}
            </h3>
            <p className="text-md font-medium text-gray-600">{channelTitle}</p>
            <p className="text-md font-medium text-red-600">
              {!liveBroadcastContent === "none" && liveBroadcastContent}
            </p>
            <p className="text-md font-medium text-gray-600">{viewCount} views</p>
          </div>
        </div>
        
      </div>
    </Link>
     )}
    </>
  );
};

export default VideoCard;
