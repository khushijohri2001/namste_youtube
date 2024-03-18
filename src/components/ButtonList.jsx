import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import buttonList from "../utils/data/button-list";
import { activeButtonFilterHandler } from "../redux/buttonFilterSlice";
import {
  YOUTUBE_CATEGORY_VIDEO_API,
  YOUTUBE_POPULAR_VIDEO_API,
} from "../utils/data/youtube-api";
import { allFilterVideosHandler } from "../redux/videoSlice";

const ButtonList = () => {
  const [error, setError] = useState(false);
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  const activeButton = useSelector((store) => store.buttonFilter.activeButton);
  const allVideos = useSelector((store) => store.videos.allVideos);

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      if (activeButton === "All") {
        dispatch(allFilterVideosHandler(allVideos));
      } else {
        getVideosByCategory(activeButton);
      }
    } catch (error) {}
  }, [activeButton]);

  const getVideosByCategory = async (activeButton) => {
    const res = await fetch(YOUTUBE_CATEGORY_VIDEO_API(activeButton));
    const data = await res.json();
    dispatch(allFilterVideosHandler(data.items));
  };

  return (
    <div className="flex items-center relative mr-5 ">
      {/* <div className="flex items-center absolute left-0">
        <i className="fa-solid fa-angle-left fa-xl pr-4 py-5 gray-50"></i>
        <div className=" bg-gradient-to-r from-gray-50 py-5 w-4"></div>
      </div> */}

      <div
        className={` overflow-x-scroll overflow-y-hidden whitespace-nowrap  ${
          isMenuOpen
            ? " max-2xl:w-[80rem] max-xl:w-[52rem] max-lg:w-[34rem] max-md:w-[22rem] ]"
            : "xl:w-[98rem]"
        } max-sm:w-[22rem]  `}
      >
        {buttonList.map((name, index) => (
          <ul key={index} className="inline-block">
            <li
              className={`text-center  bg-gray-200 py-2 px-5 rounded-md mr-3 font-semibold cursor-pointer  ${
                activeButton === name
                  ? "bg-gray-600 text-white"
                  : " hover:bg-gray-300 transition ease-in-out delay-100"
              }`}
              onClick={() => dispatch(activeButtonFilterHandler(name))}
            >
              {name}
            </li>
          </ul>
        ))}
      </div>

      <div className="flex items-center absolute right-0">
        <div className=" bg-gradient-to-l from-gray-50 py-5 w-4"></div>
        <i className="fa-solid fa-angle-right fa-xl pl-4 py-5 bg-gray-50"></i>
      </div>
    </div>
  );
};

export default ButtonList;
