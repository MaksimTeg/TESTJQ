import React from "react";
import { connect } from "react-redux";
import Posts from "./Posts";
import { Preloader } from "../Preloader/Preloader";
import { getPostsThunk } from "../../Redux/post-reduser";

class PostsContainer extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Posts posts={this.props.posts} />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.postsPage.posts,
    isFetching: state.postsPage.isFetching
  };
};
export default connect(mapStateToProps, {
  getPosts: getPostsThunk
})(PostsContainer);
