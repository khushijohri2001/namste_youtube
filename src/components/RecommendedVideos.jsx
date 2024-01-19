import React, { useEffect, useState } from 'react'
import { YOUTUBE_CATEGORY_VIDEO_API } from '../utils/data/youtube-api';
import { useDispatch } from 'react-redux';
import { allFilterVideosHandler } from '../redux/videoSlice';
import VideoCard from './VideoCard';

const RecommendedVideos = ({searchKeyword}) => {
    const [recommendedVideoList, setRecommendedVideoList] = useState([]);

  useEffect(() => {
    getVideosByCategory(searchKeyword)
  }, [])
  

    const getVideosByCategory = async(searchKeyword) => {
        const res = await fetch(YOUTUBE_CATEGORY_VIDEO_API(searchKeyword));
        const data = await res.json()
       setRecommendedVideoList(data.items);
      }

  return (
    <div className='w-full mt-8'>
        <div className="flex-col space-y-6">
        {
            recommendedVideoList.map(video => <div key={video.id.videoId}> <VideoCard info={video} /> </div> )
        }
        </div>
    </div>
  )
}

export default RecommendedVideos