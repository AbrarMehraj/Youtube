import React from "react";
import { connect } from "react-redux";
import { selectedVideo } from "../actions";

function VideoItem({ video, selectedVideo }) {
  // console.log(video);
  // console.log(selectedVideo);

  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  // const description = video.snippet.description;

  return (
    <li className="list-group-item">
      <div
        className="video-list media"
        onClick={() => {
          selectedVideo(video);
        }}
      >
        <div className="media-left">
          <img src={imageUrl} alt="Failed to fetch" className="media-object" />
        </div>

        <div className="media-body">
          <div className="media-heading" style={{ marginLeft: "1rem" }}>
            {title}
          </div>
        </div>
      </div>
    </li>
  );
}

// const mapStateToProps= (state) =>{
//   return { }
// }
export default connect(null, { selectedVideo })(VideoItem);
