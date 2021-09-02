import React from "react";
import "antd/dist/antd.css";
import styles from "./users.module.css";
import "antd/dist/antd.css";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

/*
"userId": 1,
"id": 1,
"title": "",
"body": ""
*/
const Posts = (props) => {
  return (
    <>
      {props.posts.map((u) => (
        <div className={styles.posts_content} key={u.id}>
          <div className={styles.avatar}>
            <NavLink to={"/posts/" + u.id}>
              <div>
                <img
                  src={
                    u.avatar != null
                      ? u.avatar
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwAAVsLd7PDyf9XTI_XHd-F-w_lfF8-2r9Q&usqp=CAU"
                  }
                  alt="logo1"
                />
              </div>
              <h3>{u.title}</h3>
            </NavLink>
            <>
              <Button>Fee Back</Button>
            </>
            <div>{u.body}</div>
            <div className={styles.like}></div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Posts;
