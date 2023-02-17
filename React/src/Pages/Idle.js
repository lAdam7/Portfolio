import { useEffect, useState } from "react"
import BouncingLogo from "../Components/BouncingLogo"
import logo from "../testlogo.png"

/*
Animated IDLE screen (currently react icon)
*/
const Idle = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [innerHeight, setInnerHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setInnerWidth(window.innerWidth);
            setInnerHeight(window.innerHeight);
        })
    }, []);

    return (
        <div style={{ backgroundColor: "red" }}>
            <BouncingLogo 
                img={logo} 
                windowWidth={innerWidth} 
                windowHeight={innerHeight} 
                imageWidth={96}
                imageHeight={96}
            />
        </div>
    )
}
export default Idle