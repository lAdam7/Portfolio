import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IconButton } from "@mui/material";
import { Work, ArrowBackIosNewOutlined } from "@mui/icons-material/"

const ExperienceInformation = [
    {
        themeColour: "#219b4c",
        date: "06/2022 - Present",
        title: "Customer Assistant @Tesco",
        info: "My role at Tesco initially was to temporarily assist current employees during the busy summer period, later being converted to a permanent contract with the company. This position entails handling customer queries, serving on tills, and stocking shelves."
    },
    {
        themeColour: "#A62C46",
        date: "12/2021 - 06/2022",
        title: "Web Developer @BAUER Group",
        info: "The team project and professionalism module required working with an external client within a group. The role required regular meetings with various stakeholders and project managers to produce specifications required for a web and mobile application, with new adaptations to requirements being made throughout the process as the product was live-tested with the intended users. Agile methodology was followed to plan out SCRUM sprints, my main focus was on the web aspect of the product using PHP, MySQL, and JQuery."
    },
    {
        themeColour: "#21759B",
        date: "03/2017 - 09/2021",
        title: "Supervisor @Jooce LTD",
        info: "Originally, starting as a customer assistant and then worked up to a supervisor as the position became vacant. This role entailed handling customer queries, serving on tills, stocking shelves, managing the shop floor alongside managing the warehouse and keeping it up to business standards, and ensuring adequate and accurate stock levels were maintained."
    }
]

const Experiences = () => {
    document.body.style.overflow = "visible";
    return (
      
        <div>
        <IconButton 
            onClick={() => {
                window.top.postMessage('BackTimeline', '*');
            }}
        >
            <ArrowBackIosNewOutlined style={{ color: "black!important" }} />
        </IconButton>

        <div
            style={{ paddingBottom: "30px" }}
        >
            <h1 style={{ marginLeft: "8%" }}><u>Experiences</u></h1>
            <VerticalTimeline>

            {
                ExperienceInformation.map((data, index) => (
                    <VerticalTimelineElement
                        key={index} // eslint-disable-line react/no-array-index-key
                        icon={<Work />}
                        iconStyle={{ background: data.themeColour, color: 'white' }}
                        contentStyle={{ borderTop: "3px solid " + data.themeColour }}
                        date={data.date}
                    >
                        <h2 className="vertical-timeline-element-title">{data.title}</h2>
                        <p style={{ fontSize: "16px", fontWeight: "normal" }}>{data.info}</p>
                        <br />
                    </VerticalTimelineElement>
                ))
            }
               

            </VerticalTimeline>
        </div>

    </div>
    )
}
export default Experiences