import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EventForm.module.css";

const EventForm = () => {
    const [eventName, setEventName] = useState("")
    const [hostName, setHostName] = useState("")
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")
    const [date, setDate] = useState("")
    const [location, setLocation] = useState("")
    const [eventPic, setEventPic] = useState ("")

    const [eventNameError, setEventNameError] = useState ("")
    const [hostNameError, setHostNameError] = useState ("")
    const [locationError, setLocationError] = useState ("")

    const navigate = useNavigate()
    const navigateDetails = (e)=>{
        navigate("/event")
    }

    const createEvent = (e) => {
        e.preventDefault();
    }

    const handleEventName = (e) => {
        const valToUpate = e.target.value
        setEventName(e.target.value);
        if(valToUpate.length < 2){
            setEventNameError("Event Name should be at least 2 characters")
        }else{
            setEventName("")
        }
    }

    const handleHostName = (e) => {
        const valToUpate = e.target.value
        setHostName(e.target.value);
        if(valToUpate.length < 2){
            setHostNameError("Host Name should be at least 2 characters")
        }else{
            setHostName("")
        }
    }

    const handleLocation = (e) => {
        const valToUpate = e.target.value
        setLocation(e.target.value);
        if(valToUpate.length < 2){
            setLocationError("Location should be at least 2 characters")
        }else{
            setLocation("")
        }
    }




    


    
    return (
        <div className={styles.containerBG}>
            <div className="container mt-5 col-3 bg-secondary text-white">
                <h1>Event Creation Form</h1>
                <div>
                    <form onSubmit={createEvent}>
                        <div>
                            <label className="form-label">Event Name</label>
                            <input type="text" name="eventName" value={eventName} onChange={handleEventName} className="form-control"/>
                            {
                                eventName.length < 2?
                                <span style={{color:"red"}}>{eventNameError}</span> :""
                            }    
                        </div>
                        <div>
                            <label className="form-label">Host Name</label>    
                            <input type="text" name="hostName" value={hostName}
                            onChange={handleHostName} className="form-control"/>
                        </div>
                        <div>
                            <label className="form-label">Start Time</label>
                            <input type="time" name="startTime" value={startTime}
                            onChange={e=>setStartTime(e.target.value)} className="form-control"/>
                            <label className="form-label">End Time</label>
                            <input type="time" name="endTime" value={endTime}
                            onChange={e=>setEndTime(e.target.value)} className="form-control"/>
                        </div>
                        <div>
                            <label className="form-label">Date</label>
                            <input type="date" name="date" value={date} onChange={e=>setDate(e.target.value)} className="form-control"/>
                        </div>
                        <div>
                            <label className="form-label">Location</label>    
                            <input type="text" name="location" value={location}
                            onChange={e=>setLocation(handleLocation)} className="form-control"/>
                        </div>
                        <div>
                            <label className="form-label">Image</label>
                            <input type="file" name="eventPic" value={eventPic}
                            onChange={e=>setEventPic(e.target.value)} className="form-control"/>
                        </div>
                        <button type="submit" onClick={navigateDetails}>Next</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default EventForm