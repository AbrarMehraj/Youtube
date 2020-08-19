export const Videos = (videos) => ({
  type: "VIDEOS_LIST",
  payload: videos,
});

// export const currentVideo = (video) => ({
//   type: "CURRENT_VIDEO",
//   payload: video,
// });

export const selectedVideo = (video) => ({
  type: "SELECTED_VIDEO",
  payload: video,
});
