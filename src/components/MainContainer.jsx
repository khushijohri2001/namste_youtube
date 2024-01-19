import React, { useEffect } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useDispatch, useSelector } from 'react-redux';
import { openMenu } from '../redux/sideSlice';

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
  }, []);
  
  return (
    <div className={`${isMenuOpen && "flex-[0.85]"} max-sm:${isMenuOpen && "flex-1"}  px-6 pt-8 `}>
        <ButtonList/>
         <VideoContainer/> 
     </div>
  )
}

export default MainContainer