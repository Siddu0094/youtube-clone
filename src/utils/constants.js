const GOOGLE_API_KEY = "AIzaSyDSUxA5wX6s8XZVTlgs3DEVHopXTFUtUCA";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;
export const YOUTUBE_SEARCH_API = "/api/suggestions?q=";
export const SEARCH_VIDEOS_API =
  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&key=${GOOGLE_API_KEY}&q=`;


  export const live_chat_count=6