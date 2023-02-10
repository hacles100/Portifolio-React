import React from "react";
import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact
} from 'react-icons/di'

import '../styles/components/tech.sass'


const technologies = [
    {id: "html", name: "HTML5", icon: <DiHtml5/>},
    {id: "css", name: "CSS3", icon: <DiCss3/>},
    {id: "js", name: "JavaScript", icon: <DiJsBadge/>},
    {id: "node", name: "NodeJS", icon: <DiNodejsSmall/>},
    {id: "mysql", name: "MySQL", icon: <DiMysql/>},
    {id: "react", name: "React", icon: <DiReact/>},
];


const Tech = () => {

    return(
        <section className="techs">
            <h2>Techs</h2>

            <div className="techs-grid">
                {technologies.map((tech) => (
                  <div className="techs-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="techs-info">
                        <h3>{tech.name}</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                          Eum blanditiis odio eius molestiae est nihil voluptates vel qui labore molestias!</p>
                    </div>
                  </div>
                ))}
            </div>
        </section>
    )
}

export default Tech;