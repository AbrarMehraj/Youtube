import React from "react";
import { connect } from "react-redux";
import { selectedVideo } from "../actions";

function VideoItem({ video, selectedVideo }) {
  console.log(video);
  console.log(selectedVideo);

  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  // const description = video.snippet.description;

  return (
    <div>
      <div
        onClick={() => {
          selectedVideo(video);
        }}
      >
        <img src={imageUrl} alt="Failed to fetch" />
      </div>

      <div>
        <div>{title}</div>
        {/* <div>{description}</div> */}
      </div>
    </div>
  );
}

// const mapStateToProps= (state) =>{
//   return { }
// }
export default connect(null, { selectedVideo })(VideoItem);
