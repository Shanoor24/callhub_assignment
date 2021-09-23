import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleToggleCallHubStatus, handleToggleFieldsStatus, handleToggleSalesStatus, handleKeys, handleValues, handleDelete} from "../../Redux/FieldsData/actions";
import styles from "./FieldsRow.module.css"

function FieldsRow({
    id, 
    callHubCustomStatus, 
    salesStatus,
    }) {
    const [salesFieldValue, setSalesFieldValue] = useState("");
    const [callHubFieldValue, setCallHubFieldValue] = useState("");
    const { salesForceFields, callHubCustomFields, fieldCount } = useSelector((state) => state.fieldData)
    const dispatch = useDispatch()


    const handleUpdateFieldValues = (clickedItemId) => {
        const SalesClickedItem = salesForceFields.filter((item) => item.id === clickedItemId);
        const CallHubClickedItem = callHubCustomFields.filter((item) => item.id === clickedItemId);

        if(SalesClickedItem.length > 0) {
            setSalesFieldValue(SalesClickedItem[0].name);
            dispatch(handleToggleFieldsStatus(clickedItemId, id, salesFieldValue));
            dispatch(handleKeys(id, SalesClickedItem[0].name));
        } else if (CallHubClickedItem.length > 0) {
            setCallHubFieldValue(CallHubClickedItem[0].name);
            dispatch(handleToggleFieldsStatus(clickedItemId, id, callHubFieldValue));
            dispatch(handleValues(id, CallHubClickedItem[0].name));
        }
    }

    const handleDeleteField = (id) => {
       dispatch(handleDelete(id, salesFieldValue, callHubFieldValue));
    }

    return (
        <div id={styles.Main_cont}>
            <div className={styles.field_cont} onClick={() => dispatch(handleToggleSalesStatus(id))}>
                <div>{salesFieldValue === "" ? "Choose" : salesFieldValue}</div>
                <div>▼</div>
                {
                    salesStatus ? <div className={styles.options_cont}>
                            <div style={{pointerEvents: "none", opacity: "0.4"}}>Choose</div>
                            {
                                salesForceFields.map((item) => item.status && <div key={item.id} onClick={() => handleUpdateFieldValues(item.id)}>{item.name}</div> )
                            }
                    </div> : ""
                }
            </div>
            <div className={styles.connect_icon}>
                <img src="https://i.imgur.com/77U9IWq.jpg" alt="connect_icon" style={{height: "21.6px"}} />
            </div>
            <div className={styles.field_cont} onClick={() => dispatch(handleToggleCallHubStatus(id))}>
                <div>{callHubFieldValue === "" ? "Choose" : callHubFieldValue}</div>
                <div>▼</div>
                {
                    callHubCustomStatus ? <div className={styles.options_cont}>
                            <div style={{pointerEvents: "none", opacity: "0.4"}}>Choose</div>
                            {
                                callHubCustomFields.map((item) => item.status && <div key={item.id} onClick={() => handleUpdateFieldValues(item.id)}>{item.name}</div> )
                            }
                    </div> : ""
                }
            </div>
            {fieldCount.length !== 1 ? <div className={styles.delete_icon} onClick={() => handleDeleteField(id)}>
                <img src="https://i.imgur.com/7hyNwFF.jpg" alt="delete_icon" style={{height: "20px"}}/>
            </div> : ""}
        </div>
    )
}

export default FieldsRow;