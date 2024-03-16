import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/liveChatSlice";
import { generateUserName, nameList, shortLiveChatMessages } from "../utils/functions/helper";

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("")
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.liveChat.message);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateUserName(nameList),
          message: generateUserName(shortLiveChatMessages),
        })
      );
    }, 500);

    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <>
    <div className="  w-full h-[460px] border border-gray-300 rounded-t-lg  ">
      <p className=" text-xl px-4 py-3 bg-gray-200  border border-t-0 border-r-0 border-b-2 border-l-0 ">
        Live Chat
        </p>
      
      <div className="flex flex-col-reverse px-4 overflow-y-scroll h-[89%] ">
     
        {
            chatMessage.map((chat, index) =>  <ChatMessage key={index}
                name={chat.name}
                message={chat.message}
              /> )
        }
       
      </div>
    </div>

    <form className="flex items-center gap-4 border border-gray-300 rounded-b-lg py-5 px-4 w-full border-t-0 border-r-1 border-b-1 border-l-1" onSubmit={(e) => {
        e.preventDefault();
       liveMessage !== "" && dispatch(addMessage({
            name: "Khushi Johri" ,
            message: liveMessage
        }));
        setLiveMessage("")
    }}>
        <label className=" flex items-center gap-4 w-full">
            <p className=" font-bold">Khushi Johri</p>
        <input type="text" placeholder="Chat" className=" border border-gray-300  px-2 rounded-md " value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
        </label>
        <button className="border border-green-700 py-1 px-4 rounded-md bg-green-500 text-white font-bold"  >Send</button>
    </form>
    </>
  );
};

export default LiveChat;
