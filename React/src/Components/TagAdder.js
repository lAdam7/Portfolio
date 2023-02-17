const TAG_FINDER = [ // Retain caps for acceptable
    { // FRONTEND
        acceptable: [ "JAVASCRIPT", "REACT-NATIVE", "REACT", "HTML", "CSS", "REDUX", "THREEJS", "CANNONJS", "JQUERY", "POWERAPPS", "BOOTSTRAP" ],
        backgroundColor: "#7acfd6"
    },
    { // BACKEND
        acceptable: [ "PHP", "SMARTY", "MVC", "MODEL-VIEW-CONTROLLER", "REST", "FIREBASE", "CLOUD-FUNCTIONS", "JAVA", "SQL", "MYSQL", "CI/CD", "C++" ],
        backgroundColor: "#e0474c"
    },
    { // TECH
        acceptable: [ "TEAMS", "JIRA", "GITHUB" ],
        backgroundColor: "#9068be"
    }   
]
const DEFAULT_BACKGROUNDCOLOUR = "#808080"; // Colour of tag if not found in TAG_FINDER

/*
Find colour that the tag should be
*/
const TagMatcher = (tagName) => {
    let colour = DEFAULT_BACKGROUNDCOLOUR;

    let i = 0;
    while(i < TAG_FINDER.length && colour === DEFAULT_BACKGROUNDCOLOUR ) {
        if (TAG_FINDER[i].acceptable.includes(tagName.toUpperCase())) {
            colour = TAG_FINDER[i].backgroundColor
        }

        i++;
    }
    
    return colour;
}

/*
Display all the tags within the project card, for the languages / tech used
*/
const TagAdder = (props) => {

    return (     
        <div id="divColourTags" style={{ flexDirection: "row", flexWrap: "wrap"}}>
            {
                props.tags.map((tag, index) =>(
                    <p 
                        key={index}
                        style={{
                            backgroundColor: TagMatcher(tag)
                        }}
                    >{tag}</p>
                ))
            }
        </div>
    )
}
export default TagAdder