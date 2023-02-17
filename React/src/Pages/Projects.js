import { ArrowBackIosNewOutlined, GitHub, Preview } from "@mui/icons-material/"
import { IconButton, Button } from '@mui/material';
import { Card } from "react-bootstrap"
import TagAdder from '../Components/TagAdder';

const ProjectInformation = [
    {
      "title": "FIVE-A-SIDE Application",
      "info": "Focusing on the usage of mobile technology in sports and fitness and good mobile design. Created a football application that allowed leagues, teams, and players to be created and handled the match creation, allowing referees to additionally use the application to add goals, substitutions, and cards for players. React native was used, alongside redux for storing session variables, with Firebase used for data storage, user authentication, and cloud functions.",
      "tags": [ "Firebase", "Cloud-Functions", "React-Native", "Redux", "GitHub" ],
      "github": "https://github.com/lAdam7/FIVE-A-SIDE"
    },
    {
      "title": "Concrete Sampling Application",
      "info": "This project required regular meetings with various stakeholders and project managers to produce specifications required for a web and mobile application, with new adaptations to requirements being made throughout the process as the product was live-tested with the intended users. Agile methodology was followed to plan out SCRUM sprints, my main focus was on the web aspect of the product using PHP, MySQL, and JQuery.",
      "tags": [ "PHP", "SMARTY", "Model-View-Controller", "MySQL", "jQuery", "PowerApps", "Jira", "Teams" ]
    },
    {
      "title": "Web Application Integration",
      "info": "Created a web application, presenting information regarding academic papers on the topic of Designing Interactive Systems (DIS). A REST API was implemented using object-oriented PHP following the model-view-controller (MVC) principles, with an additional documentation web page being created for the API. The frontend was built using React with an emphasis on creating small reusable components.",
      "tags": [ "PHP", "Model-View-Controller", "REST", "SQL", "React", "HTML", "CSS" ],
      "preview": "https://www.adam-lyon.com/kf6012/part2/",
      "github": "https://github.com/lAdam7/Web-Application-Integration"
    },
    {
      "title": "Computer Graphics and Animation",
      "info": "Focused on interaction, animation, and special effects utilizing ThreeJS, implemented a grid-based placement system that allowed for buildings and roads to be placed throughout the map. Animations consisted of cars that follow the user-placed roads, flags and physically moving objects using the CannonJS library. Special effects focused on fireworks, rain, and various sky settings.",
      "tags": [ "ThreeJS", "CannonJS", "GitHub" ],
      "preview": "https://www.adam-lyon.com/kf6018/",
      "github": "https://github.com/lAdam7/Computer-Graphics-Animation"
    },
    {
      "title": "Software Engineering Practice",
      "info": "Worked within a team using Java (Intellij) and GitHub for version control to solve a specific problem given to us, my responsibilities were managing the database required constant communication with all team members and the CI/CD of the project frequently testing the system and introducing unit tests that were executed upon every commit to the repository.",
      "tags": [ "Java", "SQL", "CI/CD", "GitHub", "Teams" ],
      "github": "https://github.com/lAdam7/Jar-Jar-Binks"
    },
    {
      "title": "Software Architecture for Games",
      "info": "Built upon an existing engine provided. Developed a top-down zombie shooting game that had special drops, explosions, keys to open doors, and a final boss to battle. Follows a component style architecture assigning collision, render, input, messaging, and physics components to the relevant game objects.",
      "tags": [ "C++", "GitHub" ],
      "github": "https://github.com/lAdam7/Software-Architecture-for-Games"
    },
    {
      "title": "Portfolio Site",
      "info": "Created a web application to showcase my experiences and projects. Implements webpages within a 3D scene using the CSS3DRenderer library.",
      "tags": [ "ThreeJS", "React", "Bootstrap", "GitHub" ],
      "github": "https://github.com/lAdam7/Portfolio-Three"
    }
  ];

/*
Display all projects using the bootstrap card style
*/
const Projects = () => {
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
                        <h1 style={{ marginLeft: "8%" }}><u>Projects</u></h1>

                        <div style={{ display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginLeft: "30px", marginRight: "30px" }}>
                           
                        
                        {
                                ProjectInformation.map((data, index) =>(
                                    <Card key={index} className="project-card">
                                        <Card.Header>
                                            <Card.Title>{data.title}</Card.Title>
                                            <TagAdder tags={data.tags} />
                                        </Card.Header>
                                        <Card.Body>
                                        
                                            <Card.Text>{data.info}</Card.Text>

                                       
                                        </Card.Body>
                                        

                                        
                                        
                                        <div style={{ paddingBottom: "10px", paddingLeft: "7.5px", paddingRight: "7.5px", marginLeft: "auto", marginRight: "auto" }}>
                                            {
                                                (data.preview !== undefined) 
                                                ?
                                                    <Button href={data.preview} target="_blank" className="btnPortfolio" style={{ marginLeft: "4px", marginRight: "4px", backgroundColor: "transparent", fontSize: "12px", color: "black", border: "1px solid black" }} startIcon={<Preview />}>
                                                        Visit Website
                                                    </Button>
                                                : null
                                            }
                                            {
                                                (data.github !== undefined) 
                                                ?
                                                    <Button href={data.github} target="_blank" className="btnPortfolio" style={{ marginLeft: "4px", marginRight: "4px", backgroundColor: "transparent", fontSize: "12px", color: "black", border: "1px solid black" }} startIcon={<GitHub  />}>
                                                        View Source Code
                                                    </Button>
                                                : null
                                            }
                                            
                                        </div>
                                        
                                    </Card>
                                ))
                            }
                           


                           </div>

                            
                        
                    </div>
        </div>
    )
}
export default Projects

/*
 <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                                    Web Application Integration
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                    hu
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    adjective
                                    </Typography>
                                    <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                                <TagAdder tags={[ "PHP", "Model-View-Controller", "REST", "React", "HTML", "CSS", "Teams", "GitHub" ]} />
                            </Card>
*/