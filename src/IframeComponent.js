// IframeComponent.js
import React from "react";

const IframeComponent = ({ src, title }) => {
  return (
    <iframe
      src={src}
      title={title}
      width="100%"
      height="500px"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
};

export default IframeComponent;
