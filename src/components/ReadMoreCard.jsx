import React, { useEffect, useState } from 'react'

const ReadMoreCard = ({viewCount, publishedAt, description}) => {
  const [isReadMore, setIsReadMore] = useState(false);

  useEffect(() => {
    setIsReadMore(false)
  }, [])


  return (
    <div className='w-half bg-gray-100 my-8 p-3 rounded-xl'>
        <div className='flex gap-4 font-bold'>
            <p>{viewCount} views</p>
            <p>{publishedAt}</p>
        </div>
        
          <p className={`py-4 whitespace-pre-line ${!isReadMore && description?.length > 300 && "leading-5 h-32 overflow-hidden line-clamp-5"}`}>
          {description}
        </p>
        
        
        { 
         description?.length > 300 && <button className="px-3 py-1 border border-gray-500 rounded-lg font-bold" onClick={() => setIsReadMore(!isReadMore)}>{!isReadMore ? "Show More" : "Show less"}</button>
        }
    </div>
  )
}

export default ReadMoreCard