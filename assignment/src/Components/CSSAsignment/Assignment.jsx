import React from "react";
import styles from "./Assignment.module.css"
import SvgComponent from "./SVGComponent";


function Assignment() {
    return (
        <div id={styles.main_cont}>
            <SvgComponent />
            <div>
                <div className={styles.heading}>Upgrade to reduce the <br /> connection time by upto <br /> 3x with Auto (2:1, 3:1) & <br /> Predictive Dialer</div>    
                <div className={styles.content}>Get Auto (2:1, 3:1) & Predictive Dialer <br /> for free with any subscription plan <br /> or you can buy the add-on</div>

                <button className={styles.button1}>Upgrade to Essential plan</button>
                <button className={styles.button2}> Buy add-on for $99.99</button>
            </div>
        </div>
    )
}

export default Assignment;