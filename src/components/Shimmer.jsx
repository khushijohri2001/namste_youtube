import React from 'react'

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-3 my-6 justify-between">
        {Array(20).fill().map((s, index) => {
            return(
                <div key={index} className='m-5'>
                <div className="bg-gray-300 w-96 h-44 rounded-md mb-3"></div>
                <div className="bg-gray-200 w-96 h-5 rounded-sm mb-2"></div>
                <div className="bg-gray-200 w-42 h-3 rounded-sm mb-2"></div>
                <div className="bg-gray-200 w-40 h-3 rounded-sm"></div>
                </div>
            )
        })}
    </div>
  )
}

export default Shimmer