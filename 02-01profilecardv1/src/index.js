import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img src="images/Avatar.png" className="image"></img>
    </div>
  );
}

function Intro() {
  return (
    <>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-Stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook(and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </>
  );
}

function SkillList(props) {
  return (
    <>
      <div className="skill-container">
      <Skill skill="Html+Css" emoji="💪" color="grey"/>
      <Skill skill="React" emoji="💪" color="orange"/>
      <Skill skill="Javascript" emoji="💪" color="yellow"/>
      <Skill skill="Svelte" emoji="😒" color="red"/>
      </div>
    </>
  );
}

function Skill(props){
  return(
    <div className="skill" style={{backgroundColor: props.color}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
