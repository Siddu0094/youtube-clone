import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSlice";
import { useParams, useSearchParams } from "react-router-dom";
import Comments from "./Comments.jsx";
import LiveChat from "./LiveChat.jsx";
const WatchPage = () => {
  // const params=useParams()
  // console.log(params) empty
  // here we have search params
  const [searchparams] = useSearchParams();
  //  console.log(searchparams.get("v"))

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
    <div className="flex  px-5 w-full ">
     <div>

        {/* iframe */} <iframe
        width="800"
        height="300"
        src={"https://www.youtube.com/embed/" + searchparams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    
     </div>
      {/* livechat */}
       <div className="w-full ">
      <LiveChat/>
      </div>
    </div>
    <Comments/>
    </div>
  );
};

export default WatchPage;
