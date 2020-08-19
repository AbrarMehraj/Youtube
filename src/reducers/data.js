export const selectedVideo = (state = null, action) => {
  switch (action.type) {
    case "SELECTED_VIDEO":
      return action.payload;
    default:
      return state;
  }
};

export const videos = (state = [], action) => {
  switch (action.type) {
    case "VIDEOS_LIST":
      return action.payload;
    default:
      return state;
  }
};

// export default videos;
