import React from "react";
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";

type ComponentProps = {
  videoUrl: string;
};

const YoutubeVideo: React.FC<ComponentProps> = ({ videoUrl }) => {
  const videoId = getYouTubeID(videoUrl);

  const opts = {
    height: "100%",
    width: "100%",
  };

  return (
    <div className="flex justify-center aspect-video">
      {videoId ? <YouTube videoId={videoId} opts={opts} /> : "Loading..."}
    </div>
  );
};

export default YoutubeVideo;
