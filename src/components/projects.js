import React from "react"
import styles from "./project.module.css"
import Container from "./container"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
      <a target="_blank" href={props.link}>Click me</a>
    </div>
  </div>
)

export default (props) => (
  <Container>
    <User
      username={props.username}
      avatar={props.avatar}
      excerpt={props.excerpt}
      link= {props.link}
    />
  </Container>
)