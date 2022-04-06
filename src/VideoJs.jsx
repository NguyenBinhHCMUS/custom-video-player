import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "@videojs/themes/dist/sea/index.css";

export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const { options, onReady, themName = "sea" } = props;

  // React.useEffect(() => {
  //   // make sure Video.js player is only initialized once
  //   if (!playerRef.current) {
  //     const videoElement = videoRef.current;
  //     if (!videoElement) return;

  //     const player = (playerRef.current = videojs(videoElement, options, () => {
  //       console.log("player is ready");
  //       onReady && onReady(player);
  //     }));
  //   } else {
  //     // you can update player here [update player through props]
  //     // const player = playerRef.current;
  //     // player.autoplay(options.autoplay);
  //     // player.src(options.sources);
  //   }
  // }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;
    if (!player) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      playerRef.current = videojs(videoElement, options);
    }

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [options, videoRef, playerRef]);

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        className={`video-js vjs-big-play-centered vjs-theme-${themName}`}
      />
    </div>
  );
};

export default VideoJS;
