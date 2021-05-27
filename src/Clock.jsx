import React from 'react'

const Clock = (props) => {
    return(
        <div>
            {console.log(props.seconds[1], parseInt(props.seconds[1]) & 2)}

        <div className="binary-grid">

        <div className="binary-line">
        <div className="hidden-bits"></div>
        <div className={parseInt(props.hours[1]) & 8 ? "circlesOn" : "circlesOff"}></div>
        <div className="hidden-bits"></div>
        <div className={parseInt(props.hours[1]) & 4 ? "circlesOn" : "circlesOff"}></div>
        <div className="hidden-bits"></div>
        <div className={parseInt(props.hours[1]) & 2 ? "circlesOn" : "circlesOff"}></div>
        <div className={parseInt(props.hours[0]) & 1 ? "circlesOn" : "circlesOff"}></div>
        <div className={parseInt(props.hours[1]) & 1 ? "circlesOn" : "circlesOff"}></div>
        </div>

        <div className="binary-line">
        <div className="hidden-bits"></div>
        <div className={parseInt(props.minutes[1]) & 8 ? "circlesOn" : "circlesOff"}></div>
        <div className={parseInt(props.minutes[0]) & 4 ? "circlesOn" : "circlesOff"}></div>
        <div className={parseInt(props.minutes[1]) & 4 ? "circlesOn" : "circlesOff"}></div>
        <div className={parseInt(props.minutes[0]) & 2 ? "circlesOn" : "circlesOff"}></div>
        <div className={parseInt(props.minutes[1]) & 2 ? "circlesOn" : "circlesOff"}></div>
        <div className={parseInt(props.minutes[0]) & 1 ? "circlesOn" : "circlesOff"}></div>
        <div className={parseInt(props.minutes[1]) & 1 ? "circlesOn" : "circlesOff"}></div>
        </div>
        <div className="binary-line">
        <div className="hidden-bits"></div>
        <div className={parseInt(props.seconds[1]) & 8 ? "circlesOn" : "circlesOff"}></div>
        <div className={parseInt(props.seconds[0]) & 4 ? "circlesOn" : "circlesOff"}></div>
        <div className={parseInt(props.seconds[1]) & 4 ? "circlesOn" : "circlesOff"}></div>
        <div className={parseInt(props.seconds[0]) & 2 ? "circlesOn" : "circlesOff"}></div>
        <div className={parseInt(props.seconds[1]) & 2 ? "circlesOn" : "circlesOff"}></div>
        <div className={parseInt(props.seconds[0]) & 1 ? "circlesOn" : "circlesOff"}></div>
        <div className={parseInt(props.seconds[1]) & 1 ? "circlesOn" : "circlesOff"}></div>
        </div>
        </div>
        </div>
    )
}

export default Clock
