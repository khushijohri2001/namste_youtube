import React, { useEffect, useState } from "react";
import { YOUTUBE_COMMENT_THREAD_API } from "../utils/data/youtube-api";

const commentData = [
  {
    name: "Khushi Johri",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Khushi Johri",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Khushi Johri",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Khushi Johri",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Khushi Johri",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Khushi Johri",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Khushi Johri",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Khushi Johri",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
        ],
      },
      {
        name: "Khushi Johri",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Khushi Johri",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Khushi Johri",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
];



const Comment = ({ data }) => {
  const {id, snippet:{topLevelComment: {snippet: {authorDisplayName, authorProfileImageUrl, textOriginal }}}} = data;

  return (
    <div className="p-3 flex items-start gap-3 border border-gray-200 rounded-lg m-3">
      <button className=" border border-black rounded-3xl min-h-[2rem] min-w-[2rem] h-8 w-8">
        <img
          src={authorProfileImageUrl}
          alt={authorDisplayName}
          className="rounded-full"
        />
      </button>
      <div className="flex flex-col gap-1">
        <p className="font-bold text-sm">{authorDisplayName}</p>
        <p>{textOriginal}</p>
      </div>
    </div>
  );
};



const CommentList = ({ comment}) => {
 
 
  return comment && comment.map((data) => (
    <div key={data.id}>
      <Comment data={data} />

      {/* N level nested comment thread... Add replies */}
      
      {/* <div className="ml-8 pl-1 border border-black border-t-0 border-l-2 border-r-0 border-b-0">
        <CommentList comment={data.replies} />
      </div> */}
    </div>
  ));
};



const CommentContainer = ({commentCount, videoID}) => {
  const [commentThreads, setCommentThreads] = useState()
  useEffect(() => {
    const getCommentThread = async() => {
      const res = await fetch(YOUTUBE_COMMENT_THREAD_API(videoID));
      const data = await res.json()
      setCommentThreads(data?.items);
    }
getCommentThread()
  }, [])
  return (
    <div>
      <div className="text-xl font-bold mt-5"> {commentCount} Comments </div>
      <CommentList comment={commentThreads} />
    </div>
  );
};

export default CommentContainer;
