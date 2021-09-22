import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/FieldsData/actions";
import styles from "./PrintData.module.css"



function PrintData() {
    const {data} = useSelector((state) => state.fieldData)
    const dispatch = useDispatch();
    let latest_data = data[data.length - 1]
    let fields = [];

    for (let key in latest_data) {
        if (key !== "id") {
            fields.push([key, latest_data[key]])
            console.log(fields)
        }
    }

    useEffect(() => {
        dispatch(getData());
    }, [data])
    return (
        <div id={styles.Main_cont}>
            <h3 className={styles.heading}>Last Submitted Response</h3>
            <div className={styles.field_heading_cont}>
                <div>SALESFORCE FIELDS</div>
                <div>CALLHUB CUSTOM FIELDS</div>
            </div>
            {
                fields?.map((item) => <div className={styles.field_cont}>
                    <div>{item[0]}</div>
                    <div>{item[1]}</div>
                </div> )
            }
        </div>
    )
}

export default PrintData;