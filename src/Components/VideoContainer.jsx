import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import VideoCard, { AdRedborderVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { setresults } from "../utils/VideoSlice";

// const EnhancedVideoCard = AdRedborderVideoCard(VideoCard);
    

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.video?.results || []);

  useEffect(() => {
    const getPopularVideos = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      dispatch(setresults(json.items || []));
    };
    getPopularVideos();
  }, [dispatch]);

  if (videos.length === 0) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* <EnhancedVideoCard info={videos[0]} /> */}
      {videos.map((video) => {
        const videoId = video.id?.videoId || video.id;
        return (
          <Link key={videoId} to={"/watch?v=" + videoId}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
