import React, { useState } from "react"
import Typed from 'react-typed'
import Button from '@mui/material/Button';
import Timeline from "../Components/Timeline";

import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
    const [finishedTextAnimation, setFinishedTextAnimation] = useState(false);
    const [buttonPressed, setButtonPressed] = useState(false);

    const dropIn = {
        hidden: { transform: "scale(0)", opacity: 0 },
        visible: {
            opacity: 1, 
            transform: 'scale(1)', 
            transition: { ease: 'linear', duration: 2 } 
        },
        exit: { 
            opacity: 0, 
            transition: { ease: 'linear', duration: .5 } 
              
        },
      };

    let typeText = (
        <AnimatePresence>
            {(!buttonPressed) ? (
            <motion.div
            key={"modal"}
            className="backdrop"
            variants={dropIn}
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
        >
            <div className='animated-typing' style={{ backgroundColor: "white", padding: "20px", borderRadius: "4px", width: "80%", position: "absolute", top: "50%", msTransform: "translate(0, -50%)", transform:  "translate(0, -50%)" }}>
      
            <Typed
                style={{
                    fontSize: "40px",
                    lineHeight: "80px",
                    textAlign: "left"
                }}
                strings = {[
                "Welcome"
                ]}
                showCursor={false}
                typeSpeed={80}
            />
            <br></br>
            <div style={{ height: "110px" }}>
                <Typed
                    style={{ 
                        fontSize: "20px",
                        lineHeight: "30px"
                    }}
                    strings = {[
                    "My name is Adam Lyon and I have recently completed a BSc in Computer Science at Northumbria University."
                    ]}
                    typeSpeed={30}
                    onComplete={() => {
                        console.log("text animation done")
                        setFinishedTextAnimation(true);
                    }}
                />
            </div>

            <Button
                variant="outlined"
                target="_blank"
                id="btnProjects"
                style={{ visibility: (finishedTextAnimation) ? "visible" : "hidden", marginTop: "35px" }}
                className={ ((finishedTextAnimation) ? "fadeAnimate" : "") }
                onClick={() => {
                    setButtonPressed(true);
                }}
            >
                See More!
            </Button>

            
        </div>
        </motion.div>
        ) : null}
        </AnimatePresence>
    )

    const dropIn2 = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delay: .4,
            duration: .5
          }
        }
      };

    document.body.style.overflow = "hidden";
    return (
        
        <div style={{ width: "75%" }}>
            {typeText}
            {buttonPressed ? 
                <motion.div
                    key={"modal"}
                    className="backdrop"
                    variants={dropIn2}
                    initial={"hidden"}
                    animate={"visible"}
                >
                    <Timeline /> 
                </motion.div>
            : null}
            
        </div>

      )
}
export default Home