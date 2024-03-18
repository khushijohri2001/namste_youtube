import React, { Suspense, lazy, useEffect } from "react";
import ButtonList from "./ButtonList";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../redux/sideSlice";
import Shimmer from "./Shimmer";

const VideoContainer = lazy(() => import("./VideoContainer"));

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
  }, [dispatch]);

  return (
    <div
      className={`${isMenuOpen && "flex-[0.85]"} max-sm:${
        isMenuOpen && "flex-1"
      }  px-6 pt-8 `}
    >
      <ButtonList />
      <Suspense fallback={<Shimmer />}>
        <VideoContainer />
      </Suspense>
    </div>
  );
};

export default MainContainer;
