import { postsAPI } from "../API/API";

const SET_USERS = "SET_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING   ";

let initialState = {
  posts: [],
  isFetching: true
};

const PostsReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return {
        ...state,
        posts: [...action.posts]
      };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

export const setUsers = (posts) => ({ type: SET_USERS, posts });

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

export const getPostsThunk = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    postsAPI.getPosts().then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data));
    });
  };
};
export default PostsReduser;
