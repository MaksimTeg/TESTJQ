import React from "react";
import PostUnifier from "./PostUnifier";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setPostProfile, setCommentsProfile } from "../../Redux/postProfile-reduser";
import axios from "axios";

class PostPageContainer extends React.Component {
  componentDidMount() {
    let userId =this.props.match.params.userId;
    if (!userId) {
      userId = 4;
    } 
    let postId =this.props.match.params.postId;
    if (!postId) {
      postId = 1;
    } 
    axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
    .then(response => {
        this.props.setPostProfile(response.data);
    }); 

    ComentsPage = (userId) => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`)
      .then(response => {
          this.props.setCommentsProfile(response.data);
      }); 
    };
  }
  render() {
    return <PostUnifier {...this.props} post={this.props.post} />;
  }
}

let mapStateToProps = (state) => ({
  post: state.postPage.post
  comments: state.postPage.comments
});

let PostPageUrlData = withRouter(PostPageContainer);

export default connect(mapStateToProps, { setPostProfile, setCommentsProfile })(
  PostPageUrlData
);
