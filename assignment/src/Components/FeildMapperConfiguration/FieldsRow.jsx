import React from "react";
import styles from "./FieldsRow.module.css"

function FieldsRow({id, handleDelete}) {
    return (
        <div id={styles.Main_cont}>
            <div className={styles.field_cont}>
                <div>Choose</div>
                <div>▼</div>
            </div>
            <div className={styles.connect_icon}>
                <img src="https://i.imgur.com/77U9IWq.jpg" alt="connect_icon" style={{height: "21.6px"}} />
            </div>
            <div className={styles.field_cont}>
                <div>Choose</div>
                <div>▼</div>
            </div>
            <div className={styles.delete_icon} onClick={() => handleDelete(id)}>
                <img src="https://i.imgur.com/7hyNwFF.jpg" alt="delete_icon" style={{height: "20px"}}/>
            </div>
        </div>
    )
}

export default FieldsRow;