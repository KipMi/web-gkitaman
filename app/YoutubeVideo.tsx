"use client";

import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";
import axios from "axios";
const apiURL = process.env.NEXT_PUBLIC_API_URL;

type ComponentProps = {
  videoUrl: string;
};

type VideoData = {
  linkVideo: string;
};

const YoutubeVideo: React.FC<ComponentProps> = ({ videoUrl }) => {
  const [data, setData] = useState<VideoData>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/ibadah/1`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const videoId = getYouTubeID(data ? data.linkVideo : videoUrl);

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
