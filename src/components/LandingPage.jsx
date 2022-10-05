import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {

    const navigate = useNavigate()
    const navigateCreateEvent = (e)=> {
        navigate("/create")
    }




    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Imagine if {' '}
                <span style={{color: '#8456EC'}}>Snapchat</span>{' '}
                    had events.</h1>
                <h4> Easily host and share events with your friends across any social media</h4>
            </div>
            <div className={styles.image}>
                <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221005T032706Z&X-Amz-Expires=86400&X-Amz-Signature=07b2d1b68417b4b74c94addd83e1846678caa518d2c336171d68b3ef03f3ba34&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"/>
            </div>
            {/* <div className="eventName">
                <h4>Movie night</h4>
                <h6>Hosted by Elysia</h6>
            </div> */}
            {/* <div className="responses">
                <h6>14 responses <a href="">see guests</a></h6>
                <button>Invite</button>
            </div> */}
            {/* <div className="eventDetails">
                <div className="dateTime">
                    <h6>18 August 6:00PM</h6>
                    <p>to 19 August 1:00PM UTC +10</p>
                </div>
                <div className="location">
                    <h6>Street name</h6>
                    <p>301 Rowes Lane, WA, 7183</p>
                </div>
                <div className="link">
                    <h6>Link</h6>
                    <p><a href="https://www.netflix.com/">netflix.com</a></p>
                </div>      
            </div> */}
            <div className={styles.button}>
                <button onClick={navigateCreateEvent}>Create my event</button>
            </div>


        </div>

    )
}

export default LandingPage

