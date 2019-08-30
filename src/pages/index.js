import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import User from "../components/projects"
import {Bar, Doughnut, Pie} from "react-chartjs-2"

let userArray = [
  {username: "Webshop", avatar: "/webshop.png", excerpt: "This is a webshop we created in our Javascript course", link: "https://annazetterstrom.github.io/webshop/"},
  {username: "Frontend Project", avatar: "/frontend.png", excerpt: "This is a website with tutorials in HTML, CSS, Javascript and Adobe XD", link: "https://annazetterstrom.github.io/fend-tutorials/"}
]
export default () => (
  <Layout>
  <div style={{ color: `purple` }}>
    <Header headerText="My projects" />
    <p>Below you can see what projects I´ve been working on. </p>
  </div>
  <div>
   {
     userArray.map(userData => {
       return (
        <User 
          username= {userData.username}
          avatar= {userData.avatar}
          excerpt={userData.excerpt}
          link= {userData.link}
       /> )
     })
   } 
  </div>
  <div>
  <Bar 
    options={{maintainAspectRatio: false, responsive: true}}
       data={{
         labels: ["Lake Titicaca", "Bermuda Triangle", "Mount Everest", "Minister of Magic", "The Leaky Cauldron"],
         datasets: [
           {
             label: "Places I´ve left horcruxes",
             backgroundColor: ["#521380", "#C573FF","#A526FF","#623980","#841FCC"],
             data: [2,3,1,1,2]
           }
         ]}}
  />
  </div>
  <div>
  <Pie 
    options={{maintainAspectRatio: false, responsive: true}}
       data={{
         labels: ["Bosa", "Dunkin", "Walmart", "Krispy Kreme", "Dutch Donut Factory"],
         datasets: [
           {
             label: "My favorite Doughnuts",
             backgroundColor: ["#EB0E4B", "#E6ABFF","#FEACFF", "#D42CE8", "#B030FF"],
             data: [25,25,20,15,15]
           }
         ]}}
  />
  </div>
  <div>
  <Doughnut 
    options={{maintainAspectRatio: false, responsive: true}}
       data={{
         labels: ["Key Lime", "Pumpkin", "Pecan", "Lemon Meringue", "Turtle"],
         datasets: [
           {
             label: "My favorite Pies",
             backgroundColor: ["#331980", "#9F80FF","#6633FF","#504080","#5329CC"],
             data: [25,15,25,20,15]
           }
         ]}}
  />
  </div>
  
  
  </Layout>
  
)

