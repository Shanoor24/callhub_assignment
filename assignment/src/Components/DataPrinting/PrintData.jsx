import React from "react";
import { useSelector } from "react-redux";
import styles from "./PrintData.module.css"



function PrintData() {
    const {lastSubmittedResponse} = useSelector((state) => state.fieldData)
    let fields = [];
    // let keys_length = Object.keys(lastSubmittedResponse).length;
    // if (keys_length > 1) {
    //     console.log(lastSubmittedResponse);
    //     console.log(keys_length);
    //     console.log(fields)
    // }

        for (let key in lastSubmittedResponse) {
            if (key !== "id") {
                fields.push([key, lastSubmittedResponse[key]])
            }
        }


    return (
        <div id={styles.Main_cont}>
            <h3 className={styles.heading}>Last Submitted Response</h3>
            <div className={styles.field_heading_cont}>
                <div>SALESFORCE FIELDS</div>
                <div>CALLHUB CUSTOM FIELDS</div>
            </div>
            {
               fields.length === 0 ? <div className={styles.field_cont}>
                        <div>Empty</div>
                        <div>Empty</div>
                </div> : fields?.map((item) => <div className={styles.field_cont}>
                    <div>{item[0]}</div>
                    <div>{item[1]}</div>
                </div> )
            }
        </div>
    )
}

export default PrintData;