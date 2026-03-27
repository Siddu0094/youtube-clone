import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments.jsx";
import LiveChat from "./LiveChat.jsx";

const WatchPage = () => {
  const [searchparams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="w-full flex flex-col">

      {/* VIDEO + LIVECHAT */}
      <div className="flex flex-col lg:flex-row gap-5 w-full p-5">

        {/* VIDEO */}
        <div className="w-full lg:w-[70%]">
          <iframe
            className="w-full h-[220px] sm:h-[300px] lg:h-[450px]"
            src={"https://www.youtube.com/embed/" + searchparams.get("v")}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* LIVE CHAT */}
        <div className="w-full lg:w-[30%]">
          <LiveChat />
        </div>

      </div>

      {/* COMMENTS */}
      <Comments />
    </div>
  );
};

export default WatchPage;
