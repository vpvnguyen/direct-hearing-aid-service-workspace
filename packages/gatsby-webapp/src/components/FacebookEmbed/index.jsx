import React from "react";

const FacebookEmbed = () => {
  return (
    <iframe
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDirectHearingAidServices%2F&tabs&width=340&height=70&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
      width={340}
      height={70}
      style={{
        border: "none",
        overflow: "hidden",
      }}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
  );
};

export default FacebookEmbed;
