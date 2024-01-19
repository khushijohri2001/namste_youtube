import React from "react";
import {useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SidebarRow from "./reuse/SidebarRow";
import { signOut } from "firebase/auth";
import { LOGOUT } from "../redux/authSlice";
import { auth } from "../firebase";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
 

  if (!isMenuOpen) return null;
  return (
    isMenuOpen && (
      <div
        className={` ${
          isMenuOpen && "flex-[0.15]"
        } sticky top-[5rem] z-20 bg-white h-full flex flex-col items-center  shadow-sm max-sm:text-center w-64 p-8 max-sm:fixed max-sm:w-28  `}
      >
        <ul className="text-lg">
          <SidebarRow path="/" icon={ <i className="fa-solid fa-house"></i>} name="Home" />
          <SidebarRow path="/shorts" icon={ <i className="fa-solid fa-circle-play"></i>} name="Shorts" />
          <SidebarRow path="/subscription" icon={ <i className="fa-solid fa-clapperboard"></i>} name="Subscription" />
          

          <hr className="my-4 w-60 max-sm:w-16" />

          <SidebarRow path="/playlist" icon={<i className="fa-solid fa-table-list"></i>} name="Playlist" />
          <SidebarRow path="/watchlater" icon={<i className="fa-regular fa-clock"></i>} name="Watch Later" />
          <SidebarRow path="/history" icon={<i className="fa-solid fa-clock-rotate-left"></i>} name="History" />
          <SidebarRow path="/likedvideos" icon={<i className="fa-solid fa-thumbs-up"></i>} name="Liked Videos" />
          <SidebarRow path="/" icon={   <img
              src="https://www.nicepng.com/png/detail/202-2022683_edit-svg-png-icon-free-download-create-icon.png"
              alt="create"
              className="h-5"
            />} name="Upload Video" />
          <SidebarRow path="/" icon={<i className="fa-solid fa-arrow-right-from-bracket"></i>} name="Log Out" onClickHandler={async() => {
            await signOut(auth);
            dispatch(LOGOUT())

            sessionStorage.removeItem("nyt-access-token")
            sessionStorage.removeItem("nyt-user")
          }} />
       
        </ul>
      </div>
    )
  );
};

export default Sidebar;
