import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const skillData = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "javaScript",
    level: "advanced",
    color: "#EFD812"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "GIt and Github",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

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
      <img src="images/Avatar.png" className="image" alt="img"></img>
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

function SkillList() {
  const skills = skillData;
  // const skillObj = [];
  const skillList = skills.length;
  return (
    <>
      {skillList > 0 ? (<div className="skill-container">
        {skillData.map(skill => (
        <Skill skillObj={skill} key={skill.name}/>
      ))}
      {/* <Skill skill="Html+Css" emoji="💪" color="grey"/>
      <Skill skill="React" emoji="💪" color="orange"/>
      <Skill skill="Javascript" emoji="💪" color="yellow"/>
      <Skill skill="Svelte" emoji="😒" color="red"/> */}
      </div>):null}
    </>
  );
}

function Skill({ skillObj }){
  return(
    <div className="skill" style={{backgroundColor: skillObj.color}}>
      <span>{skillObj.skill}</span>
      <span>{skillObj.level==="advanced" ? "💪": skillObj.level==="intermediate"? "👍" : "😵‍💫" }</span>
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
