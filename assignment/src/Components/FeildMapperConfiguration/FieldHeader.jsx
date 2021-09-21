import React from "react";
import styles from "./FieldHeader.module.css"

function FieldHeader() {
    return (
        <div id={styles.Main_cont}>
            <div>Salesforcefields</div>
            <div>CallHub custom fields</div>
        </div>
    )
}

export default FieldHeader;