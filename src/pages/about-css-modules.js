import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool</p>
    <User
      username="Webshop"
      avatar="./static/webshop.png"
      excerpt="This is a Javascript project where we created a webshop"
    />
    <User
      username="Frontend Tutorials"
      avatar="./static/frontend.png"
      excerpt="This is a website where we explained and made tutorilas for HTML, CSS, Javascript and Adobe XD"
    />
  </Container>
)