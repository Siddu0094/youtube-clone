import React from "react";

export const AdRedborderVideoCard = (Component) => (props) => {
  return (
    <div className="border-2 border-red-500 m-2 p-2">
      <Component {...props} />
    </div>
  );
};

const VideoCard = ({ info }) => {
  if (!info) return null;

  const videoId = info.id?.videoId || info.id;
  const title = info.snippet?.title || "No Title";
  const channelTitle = info.snippet?.channelTitle || "Unknown Channel";
  const thumbnail = info.snippet?.thumbnails?.medium?.url || "";

  return (
    <div className="m-2 p-2 w-64 shadow-lg">
      <img className="w-full rounded-lg" src={thumbnail} alt={title} />
      <h3 className="font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 text-sm">{channelTitle}</p>
    </div>
  );
};

export default VideoCard;
