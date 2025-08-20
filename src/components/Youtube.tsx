import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Youtube = ({
  id,
  title,
  ...rest
}: {
  id: string;
  title: string;
  [key: string]: any;
}) => {
  return (
    <div hidden={!id ? true : undefined}>
      <LiteYouTubeEmbed
        wrapperClass="yt-lite rounded-lg"
        id={id}
        title={title}
        {...rest}
      />
    </div>
  );
};

export default Youtube;
