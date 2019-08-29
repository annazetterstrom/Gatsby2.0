import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
  <div style={{ color: `purple` }}>
    <Header headerText="My projects" />
    <p>Below you can see what projects I´ve been working on. </p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>

  <canvas id="pie-chart" width="300" height="auto"></canvas>

  
  </Layout>
  
)

