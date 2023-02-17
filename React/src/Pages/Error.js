import { useEffect, useState } from "react"
import BouncingLogo from "../Components/BouncingLogo"
import logo from "../images/error.png"

const Error = () => {
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
                imageWidth={247}
                imageHeight={17}
            />
        </div>
    )
}
export default Error