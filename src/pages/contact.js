import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
  <div style={{ color: `teal` }}>
    <Header headerText="Contact" />
    <p>Shoot me an email <a href="mailto:anna.wiktoria@me.com">here</a></p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>

  </Layout>
)