import React, {useEffect, useState} from "react";
import styles from "./Details.module.css";


const Details = () => {
    const [event, setEvent] = useState()

    return (
        <div className={Styles.image}>
            <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221005T032710Z&X-Amz-Expires=86400&X-Amz-Signature=6e634d2bc3a4fd6349b736ff829f0818b86e5ce9dee520c9e232dca4c043971b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"/>
        </div>
    )
}

export default Details

