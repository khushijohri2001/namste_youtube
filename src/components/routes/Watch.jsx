import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import CommentContainer from "../CommentContainer";
import LiveChat from "../LiveChat";
import LoadMoreCard from "../ReadMoreCard";
import { closeMenu } from "../../redux/sideSlice";
import numeral from "numeral";
import { dislikeCountHandler, dislikeToggle, likeCountHandler, likeToggle } from "../../redux/likeDislikeSlice";
import RecommendedVideos from "../RecommendedVideos";
import { RWebShare } from "react-web-share";
import { YOUTUBE_POPULAR_VIDEO_API, YOUTUBE_VIDEO_DETAILS_API } from "../../utils/data/youtube-api";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const searchParamsId = searchParams.get("v");
  const [videoDetails1, setVideoDetails1] = useState([]);
  const [videoDetails2, setVideoDetails2] = useState([]);

  useEffect(() => {
    const getVideoDetails = async () => {
      const res = await fetch(YOUTUBE_VIDEO_DETAILS_API(searchParamsId));
      const data = await res.json();
      setVideoDetails1(data?.items?.[0])
    };
    const getDataHandler = async () => {
      const data = await fetch(YOUTUBE_POPULAR_VIDEO_API);
      const json = await data.json();
      const videoList = json?.items
      const filterVideoById = videoList.find((item) => item.id === searchParamsId)
      setVideoDetails2(filterVideoById);
    };

    getDataHandler();
    getVideoDetails();
  }, []);



  const { contentDetails, statistics } = videoDetails1 ?? {}
  const { duration } = contentDetails ?? {};

  const { snippet, id } = videoDetails2 ?? {};
  const { channelTitle, description, publishedAt, tags, title } = snippet ?? {};
  const { commentCount, favouriteCount, likeCount, viewCount, dislikeCount } =
    statistics ?? {};

  const isLiked = useSelector((store) => store.likeDislike.isLiked);
  const likeCountStore = useSelector((store) => store.likeDislike.likeCount);
  const isDisliked = useSelector((store) => store.likeDislike.isDisliked);


  useEffect(() => {
    dispatch(closeMenu());
  });

  return (
    <div className="flex gap-8 mt-8 px-4 max-sm:flex-col max-sm:items-center ">
      <div className="w-full max-sm:w-[350px]">
        <div>
          <iframe
            className="w-[960px] h-[520px] max-sm:w-[350px] max-sm:h-[200px]"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h1 className="text-2xl font-semibold py-4 max-sm:text-lg">{title}</h1>
        </div>

        <div className="flex max-sm:flex-col max-sm:gap-4">
          <div className="flex items-center flex-[0.5] max-sm:justify-between">
            <div className="flex items-center gap-3 mr-12">
              <button className="p-2 border-2 border-black rounded-3xl h-13 w-auto">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/709/709722.png"
                  alt="user icon"
                  className="h-7 "
                />
              </button>
              <div>
                <h3 className="text-xl font-semibold mb-[-2px]">
                  {channelTitle}
                </h3>
                <p className="text-gray-500 text-sm">4.7k subscribers</p>
              </div>
            </div>

            <button className="bg-red-600 rounded-full p-2 px-5 font-semibold text-white">
              Subscribe
            </button>
          </div>

          <div className="flex flex-[0.5] items-center justify-end gap-4 max-sm:gap-2  max-sm:justify-between">
            <div className="flex items-center rounded-full py-2 bg-gray-100">
              <div
                className="flex items-center gap-2 py-1 px-7 max-sm:px-3 border border-gray-300 border-t-0 border-r-1 border-b-0 border-l-0"
                onClick={() => {
                  dispatch(likeToggle());
                  dispatch(likeCountHandler(likeCount));
                }}
              >
                <i
                  className={`${
                    isLiked ? "fa-solid" : "fa-regular"
                  } fa-thumbs-up fa-xl`}
                ></i>
                <p className="text-md max-sm:text-sm">{numeral(likeCountStore !== 0 ? likeCountStore : likeCount).format("0.a")}</p>
              </div>

              <div className="flex items-center gap-2  py-1 px-7 max-sm:px-3" onClick={() => {
                dispatch(dislikeToggle());
              }}>
                <i className={`${isDisliked ? "fa-solid" : "fa-regular"} fa-thumbs-down fa-flip-horizontal fa-xl`}></i>
              </div>
            </div>

            <RWebShare
              data={{
                text: "Shop Now on Booklet",
                url: "https://namaste-you-tube.web.app/watch?v=" + searchParamsId ,
                title: title,
              }}
            >
            <div className="flex items-center rounded-full py-2 bg-gray-100">
              <div className=" py-1 px-7 max-sm:px-3 flex items-center gap-3">
                <i className="fa-solid fa-share fa-xl"></i>
                <h3 className="text-md max-sm:text-sm">Share</h3>
              </div>
            </div>
            </RWebShare>

            <div className="flex items-center rounded-full py-2 bg-gray-100">
              <div className=" py-1 px-7 max-sm:px-3 flex items-center gap-3">
                <i className="fa-regular fa-bookmark"></i>
                <h3 className="text-md max-sm:text-sm">Watch Later</h3>
              </div>
            </div>
          </div>
        </div>

        <div>
          <LoadMoreCard
            viewCount={viewCount}
            publishedAt={publishedAt}
            description={description ?? ''}
          />
        </div>

        <div>
          <CommentContainer commentCount={commentCount} videoID={searchParamsId } />
        </div>
      </div>

      <div className=" w-full">
        <div>
          <LiveChat />
        </div>
        <div>
          <RecommendedVideos searchKeyword={title}/>
        </div>
      </div>
    </div>
  );
};

export default Watch;
