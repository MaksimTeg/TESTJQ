const SET_POST_PROFILE = "SET_POST_PROFILE";
const SET_COMMENTS_PROFILE = "SET_COMMENTS_PROFILE";

let initialState = {
  post: [],
  comments: []
};

const postProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST_PROFILE: {
      return { ...state, post: action.post };
    }
    case SET_COMMENTS_PROFILE: {
      return { ...state, comments: action.comments };
    }
    default:
      return state;
  }
};

export const setPostProfile = (post) => ({
  type: SET_POST_PROFILE,
  post
});
export const setCommentsProfile = (comments) => ({
  type: SET_COMMENTS_PROFILE,
  comments
});

export default postProfileReducer;
