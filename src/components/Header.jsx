import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../redux/sideSlice";
import {
  YOUTUBE_CATEGORY_VIDEO_API,
  YOUTUBE_SUGGESTION_API,
} from "../utils/data/youtube-api";
import { cacheResult } from "../redux/searchSlice";
import { Link } from "react-router-dom";
import { searchFilterData } from "../utils/functions/searchFilterData";
import { allFilterVideosHandler } from "../redux/videoSlice";

const Header = () => {
  const [isSuggestionOpen, setIsSuggestionOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const allVideos = useSelector((store) => store.videos.allVideos);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestionList(searchCache[searchQuery]);
      } else {
        fetchSuggestionsHandler();
      }

      if (searchQuery === "") {
        fetchSuggestionsHandler();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const fetchSuggestionsHandler = async () => {
    const response = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const data = await response.json();
    setSuggestionList(data[1]);

    dispatch(
      cacheResult({
        [searchQuery]: data[1],
      })
    );
  };

  const menuToggleHandler = () => {
    dispatch(menuToggle());
  };

  const handleBlur = () => setIsSuggestionOpen(false);

  const suggestionClickHandler = (suggestion) => {
    setSearchQuery(suggestion);
    handleBlur();
  };

  const getVideosByCategory = async (activeButton) => {
    const res = await fetch(YOUTUBE_CATEGORY_VIDEO_API(activeButton));
    const data = await res.json();
    dispatch(allFilterVideosHandler(data.items));
  };

  const searchHandler = (searchQuery) => {
    const data = searchFilterData(searchQuery, allVideos);
    if (data.length === 0) {
      getVideosByCategory(searchQuery);
    } else {
      dispatch(allFilterVideosHandler(data));
    }
    setIsSuggestionOpen(false);
  };

  return (
    <div className=" sticky top-0 bg-white  flex gap-3 justify-between shadow-md p-4 items-center z-50">
      <div className=" flex gap-5 max-sm:gap-0">
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          alt="hamburger"
          className="h-8 "
          onClick={() => menuToggleHandler()}
        />
        <Link to="/">
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png"
            alt="logo"
            className="h-8 max-md:hidden"
          />
        </Link>
      </div>

      <div className="flex-1 flex justify-center">
        <form
          className=" relative "
          onSubmit={(e) => {
            e.preventDefault();
            searchHandler(searchQuery)
          }}
        >
          <input
            type="text"
            value={searchQuery}
            className="border border-gray-600 w-[33rem] flex-1 p-1 px-4 h-11 rounded-l-3xl max-lg:w-96 max-sm:w-44 max-sm:pr-2"
            onFocus={() => setIsSuggestionOpen(true)}
            onChange={(event) => setSearchQuery(event.target.value)}
          />

          {isSuggestionOpen && (
            <div className="absolute bg-white w-[33rem] border-t-0 border-r-1 border-b-1 border-l-1 border-gray-200 m-[1px] shadow-lg rounded-xl z-30 max-lg:w-96 max-sm:w-56">
              <ul>
                {suggestionList.map((suggestion) => (
                  <li
                    className="m-2 p-2 px-4 mb-1 rounded-md shadow-sm cursor-pointer hover:bg-gray-100"
                    key={suggestion}
                    onClick={() => suggestionClickHandler(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </form>

        <button
          className="bg-gray-300 border border-slate-600 p-1 px-3 rounded-r-3xl text-lg "
          onClick={() => searchHandler(searchQuery)}
        >
          🔍
        </button>
        <button className="bg-gray-300 border p-2 ml-5 max-sm:ml-2 rounded-3xl">
          <img
            src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png"
            alt="speak"
            className="h-6 "
          />
        </button>
      </div>

      <div className=" flex gap-3">
        <button className=" p-1 max-sm:hidden">
          <img
            src="https://www.nicepng.com/png/detail/202-2022683_edit-svg-png-icon-free-download-create-icon.png"
            alt="create"
            className="h-7 "
          />
        </button>
        <button className="p-1 max-sm:hidden">
          <img
            src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-512.png"
            alt="notification"
            className="h-7 w-auto "
          />
        </button>

        <Link to="/login">
          <button className="p-2 border-2 border-black rounded-3xl">
            <img
              src="https://cdn-icons-png.flaticon.com/512/709/709722.png"
              alt="user icon"
              className="h-5"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
