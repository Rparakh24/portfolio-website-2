import React from "react";
import Links from "./Links";
import Handles from "./Handles";
import POR from "./POR";
import gdsc from "../images/gdsc.png";
import et from "../images/et.jpeg";
import plex from "../images/plex.jpeg";
import Skill from "./Skill";
import flutter from "../images/flutter.svg";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import react from "../images/react.png";
import tailwind from "../images/tailwind.jpeg";
import node from "../images/node.png";
import github from "../images/github.png";
import flask from "../images/flask.webp";
import Project from "./Project";
import stocksure from "../images/stocksure.png";
import keeper from "../images/keeper.png";
import todo from "../images/todo.png";

function App() {
  return (
    <div>
      <div className="main spotlight-container">
        <div className="content">
          <div className="left-fix-content">
                <div className="landing-page">
                    <h1 className="main-head">Hi, I'm Ronit</h1>
                    <h3 className="main-head-three">A Developer</h3>
                    <p className="main-text">A tech enthusiast always looking to learn new technologies.</p>
                </div>
                <Links />
                <Handles />
          </div>
          <div className="right-scroll-content">
            <div id="about" className="right-about">
              <p>
                <span>I am a sophomore at Thapar Institute of Engineering and Technology pursuing Electronics and Computer Engineering.
                </span>While I have a strong foundation in MySQL, Python, C, and OOPS, my current exploration centers around Java and React.Js. Recently, I've developed a keen interest in Marketing and Product Management.
                    Actively seeking technology-related internships, I aim to apply my diverse skills and contribute to innovative projects. Let's connect and collaborate to push the boundaries of both technology and business together!
                </p>
            </div>
            <div id="por" className="right-por">
                <POR src = {et} name="Enactus Thapar" post = "- Core Member(July 23-Present)" content = "Enactus is a network of leaders committed to using business as a catalyst for positive social and environmental impact. We educate, inspire, and support young people to use innovation and entrepreneurship to solve the world’s biggest problems."/>
                <POR src = {gdsc} name="Google Developer Student Clubs" post = "- Core Member(July 23-Present)" content = "Meet and learn with other budding developers and build solutions for local businesses and communities with Google technology."/>
                <POR src = {plex} name="PLEX" post = "- Member(Sept 23- Dec 23)" content = "PLEX is an exclusive collective that empowers students to learn and execute a structured approach to building technology products."/>
            </div>
            <div id="skills" className="right-skills">
                <Skill src = {html} name="HTML5"/>
                <Skill src = {css} name="CSS3"/>
                <Skill src = {js} name="Javascript"/>
                <Skill src = {react} name="React.js"/>
                <Skill src = {tailwind} name="Tailwind"/>
                <Skill src = {node} name="NodeJs"/>
                <Skill src = {flutter} name="Flutter"/>
                <Skill src = {github} name="Github"/>
                <Skill src = {flask} name="Flask"/>
            </div>
            <div id="project" className="right-projects">
                <Project link = "https://stock-sure.vercel.app" src = {stocksure} head="StockSure" desc="Empowering investors with React's dynamic web experience. Enjoy 30% insurance in case of loss, 20% profit-sharing, and a user-friendly interface for confident, informed investment decisions. Your gateway to financial growth, simplicity, and security."/>
                <Project link = "" src = {keeper} head="Kepper App" desc="Inspired from Google Keep, this keeper app allows the user to store important peice of text in a visually appealing manner."/>
                <Project link = "https://github.com/Rparakh24/to-do-list" src = {todo} head="To-Do List" desc="A React powered to-do list that allows the user to add there tasks and strike them off once done."/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
