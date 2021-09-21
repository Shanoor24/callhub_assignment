import React, { useState } from 'react';
import FieldHeader from './FieldHeader';
import styles from "./FieldMapperConfig.module.css"
import FieldsRow from './FieldsRow';


function FieldMapperConfigMain() {
    const [fieldCount, setFieldCount] = useState([1]);

    const handleAddRow = () => {
        setFieldCount([...fieldCount, (fieldCount[fieldCount.length - 1] + 1)])
    }

    const handleDelete = (id) => {
        const Updated_fieldCount = fieldCount.filter((item) => item !== id);

        setFieldCount(Updated_fieldCount);
    }


    const initSalesForceFields = [
        {id: 1, name: "Contact ID", status: true},
        {id: 2, name: "Deleted", status: true},
        {id: 3, name: "Master Record ID", status: true},
        {id: 4, name: "Account ID", status: true},
        {id: 5, name: "Salutation", status: true},
        {id: 6, name: "Other Street", status: true},
        {id: 7, name: "Other City", status: true},
        {id: 8, name: "Other State/Province", status: true},
        {id: 9, name: "Zip/Postal Code", status: true},
        {id: 10, name: "Other_4", status: true},
        {id: 11, name: "Other_5", status: true},
        {id: 12, name: "Other_6", status: true}
    ]

    const initCallHubCustomFields = [
        {id: 1, name: "End_date", status: true},
        {id: 2, name: "test1", status: true},
        {id: 3, name: "Frequency_of_Giving", status: true},
        {id: 4, name: "test", status: true},
        {id: 5, name: "VANID105147", status: true},
        {id: 6, name: "Ward", status: true},
        {id: 7, name: "test_2", status: true},
        {id: 8, name: "test_3", status: true},
        {id: 9, name: "test_4", status: true},
        {id: 10, name: "test_5", status: true},
        {id: 11, name: "test_6", status: true},
        {id: 12, name: "test_7", status: true},
    ]

    const [salesForceFields, setSalesForceFields] = useState(initSalesForceFields);
    const [callHubCustomFields, setCallHubCustomFields] = useState(initCallHubCustomFields);
    
    return (
        <div id={styles.Main_cont}>
            <FieldHeader />
            {fieldCount.map((item) => <FieldsRow key={item} id={item} handleDelete={handleDelete} salesForceFields={salesForceFields} callHubCustomFields={callHubCustomFields}/> )}
            <div className={styles.button_cont} onClick={handleAddRow}>
                <div>+</div>
                <div>map another field</div>
            </div>
        </div> 
    )
}

export default FieldMapperConfigMain;