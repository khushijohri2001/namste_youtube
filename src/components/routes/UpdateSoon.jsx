import React, { useEffect } from 'react'
import serverDown from "../../assets/undraw_server_down.svg"
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../redux/sideSlice';

const UpdateSoon = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
      });
  return (
    <div className="h-[90vh] flex-1 flex items-center justify-center bg-purple-100">
       <div className='flex-col space-y-10'>
       <img src={serverDown} alt="happy music" className="h-80" />
        <h1 className='text-6xl text-center font-bold text-purple-900'>Will Be Updated Soon!</h1>
       </div>
    </div>
  )
}

export default UpdateSoon