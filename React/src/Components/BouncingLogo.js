import { useEffect, useState } from "react";

// Used to spawn the logo in a random place, to make each load unique
function generateRandom(min, max) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

/*
Upon collision opposite set the axis for animation
*/
const BouncingLogo = (props) => {
    const [x, setX] = useState(50);
    const [y, setY] = useState(50);

    useEffect(() => {
        let currentX = generateRandom(50, window.innerWidth - 300);
        let currentY = generateRandom(50, window.innerHeight - 300);

        let movementX = 1;
        let movementY = 1;

        const interval = setInterval(() => {
            currentX = currentX + movementX;
            currentY = currentY + movementY;
            setX(currentX)
            setY(currentY)
            
            if (currentX + props.imageWidth >= props.windowWidth || currentX <= 0) {
                movementX = -movementX
            }

            if (currentY + props.imageHeight >= props.windowHeight || currentY <= 0) {
                movementY = -movementY
            }
           
        }, 5);
        return () => clearInterval(interval);
    }, [props]); // force update

    return (     
        <img style={{ position: "absolute", width: props.imageWidth+"px", height: props.imageHeight+"px", left: x+"px", top: y+"px" }} src={props.img} />
    )
}
export default BouncingLogo