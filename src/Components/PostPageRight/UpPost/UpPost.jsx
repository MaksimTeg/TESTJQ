import React from "react";
import styles from "./up.module.css";
import { Link } from "react-router-dom";
/*
userId": 1,
  "id": 1,
  "title": "",
  "body": ""
*/
export const UpPost = (props) => {
  return (
    <div
      className={styles.profile_background}
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6aPvGQssl_mjJxxV6KJtZWyt-OPJoH8ZhoR_p2Lo9wvuzKzVaexrVlqb7iqcynXwTCg&usqp=CAU')"
      }}
    >
      <Link to="/avatar">
        <div className="">{props.post.title}</div>
        <div className={styles.avatar_name}>{props.post.body}</div>
      </Link>
    </div>
  );
};
