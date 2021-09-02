import React from "react";
import styles from "./postpage.module.css";
import { UpPost } from "./UpPost/UpPost";
import { Comments } from "./Comments/Comments";
import { Preloader } from "../Preloader/Preloader";

const PostUnifier = (props) => {
  return (
    <>
      <div className="">{props.post.title}</div>
      <div className={styles.avatar_name}>{props.post.body}</div>
      {/* !props.profile ? (
        <Preloader />
      ) : ( 
        <div className={styles.my_reset}>
          <UpPost post={props.post} />
          <div className={styles.write_posts}>
           <Comments profile={props.profile} />
          </div>
        </div>
      ) {/*} */}
    </>
  );
};

export default PostUnifier;
