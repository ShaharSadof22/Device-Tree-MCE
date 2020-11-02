import React from 'react'
import { Fade, Bounce } from "react-awesome-reveal";


export function About() {
    return (
        <div className="about container">
            <Bounce duration="500">
                <h2>About Device Tree</h2>
            </Bounce>
            <p>This application builds as an exercise test during a job interview at <a target="_blank" href="https://www.mce.systems/">MCE Systems</a></p>
            <p>The app get all USB devices that connected to your PC and displays them in a tree platform. User can press on a device in the tree graph and get more data about the device.</p>
            <p>Try to add/remove USB devices and see that the app responds immediately to the change and render the tree in its new form.</p>
            <p>Want to kearn more about USB? Go <a target="_blank" href="https://www.computerhope.com/jargon/u/usb.htm">here</a></p>
            <Fade >
                <div>
                    <img alt="img" className="pc" src="https://res.cloudinary.com/cloudinary-img/image/upload/v1604334419/Device-Tree/1200px-Desktop_computer_clipart_-_Yellow_theme.svg_vldayy.png" />
                    <img alt="img" className="usb" src="https://res.cloudinary.com/cloudinary-img/image/upload/v1604334272/Device-Tree/pendrive_dexefb.webp" />
                </div>
            </Fade>
        </div>
    )
}