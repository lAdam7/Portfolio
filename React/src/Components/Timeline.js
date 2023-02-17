import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Person, Work, LinkedIn, GitHub, Code, Mail } from "@mui/icons-material/"


const Timeline = () => {

    return (
      
            <div style={{ width: "80% ", position: "absolute", top: "50%", left: "50%", msTransform: "translate(-50%, -50%)", transform:  "translate(-50%, -50%)" }}>
                
                <VerticalTimeline>
        


            <VerticalTimelineElement
              key={"i"} // eslint-disable-line react/no-array-index-key
              icon={<Person />}
              iconStyle={{ background: '#219b4c', color: 'white' }}
              contentStyle={{ borderTop: "3px solid #219b4c" }}
            >

                <h2 className="vertical-timeline-element-title">About Me</h2>
                <p style={{ fontSize: "16px" }}>Recent computer science graduate with first-class honours from Northumbria University. My interest in software development has stemmed from learning how to code on ROBLOX and then further pursuing studies in school and college, as I quickly became fascinated with how technology works.</p>
                <br />

               
                    <a href="https://linkedin.com/in/a-lyon" target="_blank" rel="noreferrer">
                        <LinkedIn fontSize="large" style={{ color: "black" }} />                                                                                                                    
                    </a>
                    <a href="https://github.com/lAdam7" target="_blank" rel="noreferrer" style={{ paddingLeft: "10px" }}>
                        <GitHub fontSize="large" style={{ color: "black" }} />
                    </a>
                    <a href="mailto:a.lyon2077@gmail.com" target="_blank" rel="noreferrer" style={{ paddingLeft: "10px" }}>
                        <Mail fontSize="large" style={{ color: "black" }} />
                    </a>
              
            </VerticalTimelineElement>

            <VerticalTimelineElement    
                icon={<Work />}
                iconStyle={{ background: '#A62C46', color: 'white' }}
                contentStyle={{ borderTop: "3px solid #A62C46" }}
            >
                <h2 className="vertical-timeline-element-title">Experiences</h2>
                <p style={{ fontSize: "16px" }}>Experience working within retail, in customer-facing roles additionally with web development experience, working for a German construction and machinery manufacturing company.</p>
                <br />

                <button
                    
                    style ={{ position: "absolute", bottom: "8px" }}
                    className="arrow-button"
                    onClick={() => {
                        window.top.postMessage("experiences", '*');
                    }}
                  >
                    VIEW EXPERIENCES<span className="arrow"></span>
                  </button>
            </VerticalTimelineElement>   

            <VerticalTimelineElement
                icon={<Code />}
                iconStyle={{ background: '#21759B', color: 'white' }}
                contentStyle={{ borderTop: "3px solid #21759B" }}
            >
                <h2 className="vertical-timeline-element-title">Projects</h2>
                <p style={{ fontSize: "16px" }}>Showcase of my latest works, projects, and developments. Experienced with software development, and unit tests and experience working within an agile project life cycle structure.</p>
                <br />

                <button
                    style ={{ position: "absolute", bottom: "8px" }}
                    className="arrow-button"
                    onClick={() => {
                        window.top.postMessage("projects", '*');
                    }}
                  >
                    VIEW PROJECTS<span className="arrow"></span>
                  </button>
                
        
               
            </VerticalTimelineElement>          


        </VerticalTimeline>

                
            </div>
        
    )
}
export default Timeline