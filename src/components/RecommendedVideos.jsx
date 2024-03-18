import React, { useEffect, useState } from 'react'
import { YOUTUBE_CATEGORY_VIDEO_API } from '../utils/data/youtube-api';
import VideoCard from './VideoCard';

const RecommendedVideos = ({searchKeyword}) => {
    const [recommendedVideoList, setRecommendedVideoList] = useState([]);

  useEffect(() => {
    getVideosByCategory(searchKeyword)
  }, [searchKeyword])
  

    const getVideosByCategory = async(searchKeyword) => {
        const res = await fetch(YOUTUBE_CATEGORY_VIDEO_API(searchKeyword));
        const data = await res.json()
       setRecommendedVideoList(data.items);
      }

      console.log(recommendedVideoList);

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