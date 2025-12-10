import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import VideoCard, { AdRedborderVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { setresults } from "../utils/VideoSlice";

const EnhancedVideoCard = AdRedborderVideoCard(VideoCard);

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.video?.results || []);

  // Fetch popular videos on mount
  useEffect(() => {
    const getPopularVideos = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      dispatch(setresults(json.items || []));
    };
    getPopularVideos();
  }, [dispatch]);

  if (!videos || videos.length === 0) return <div>Loading...</div>;

  return (
    <div className="flex flex-wrap">
      <EnhancedVideoCard info={videos[0]} />
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
