import React, { useState } from "react";
import styles from "./FieldsRow.module.css"

function FieldsRow({id, callHubCustomStatus, salesStatus, handleDelete, salesForceFields, callHubCustomFields, handleToggleSalesStatus, handleToggleCallHubStatus, handleSalesFieldOptionToggle, handleCallHubFieldOptionToggle}) {
    const [salesFieldValue, setSalesFieldValue] = useState("");
    const [callHubFieldValue, setCallHubFieldValue] = useState("");


    const handleUpdateSalesFieldValue = (clickedItemId) => {
        const clickedItem = salesForceFields.filter((item) => item.id === clickedItemId);
        setSalesFieldValue(clickedItem[0].name);
        handleSalesFieldOptionToggle(clickedItemId, id, salesFieldValue);
    }

    const handleUpdateCallHubFieldValue = (clickedItemId) => {
        const clickedItem = callHubCustomFields.filter((item) => item.id === clickedItemId);
        setCallHubFieldValue(clickedItem[0].name);
        handleCallHubFieldOptionToggle(clickedItemId, id, callHubFieldValue)
    }

    const handleDeleteField = (id) => {
        handleDelete(id, salesFieldValue, callHubFieldValue)
    }

    return (
        <div id={styles.Main_cont}>
            <div className={styles.field_cont} onClick={() => handleToggleSalesStatus(id)}>
                <div>{salesFieldValue === "" ? "Choose" : salesFieldValue}</div>
                <div>▼</div>
                {
                    salesStatus ? <div className={styles.options_cont}>
                            <div style={{pointerEvents: "none", opacity: "0.4"}}>Choose</div>
                            {
                                salesForceFields.map((item) => item.status && <div onClick={() => handleUpdateSalesFieldValue(item.id)}>{item.name}</div> )
                            }
                    </div> : ""
                }
            </div>
            <div className={styles.connect_icon}>
                <img src="https://i.imgur.com/77U9IWq.jpg" alt="connect_icon" style={{height: "21.6px"}} />
            </div>
            <div className={styles.field_cont} onClick={() => handleToggleCallHubStatus(id)}>
                <div>{callHubFieldValue === "" ? "Choose" : callHubFieldValue}</div>
                <div>▼</div>
                {
                    callHubCustomStatus ? <div className={styles.options_cont}>
                            <div style={{pointerEvents: "none", opacity: "0.4"}}>Choose</div>
                            {
                                callHubCustomFields.map((item) => item.status && <div onClick={() => handleUpdateCallHubFieldValue(item.id)}>{item.name}</div> )
                            }
                    </div> : ""
                }
            </div>
            <div className={styles.delete_icon} onClick={() => handleDeleteField(id)}>
                <img src="https://i.imgur.com/7hyNwFF.jpg" alt="delete_icon" style={{height: "20px"}}/>
            </div>
        </div>
    )
}

export default FieldsRow;