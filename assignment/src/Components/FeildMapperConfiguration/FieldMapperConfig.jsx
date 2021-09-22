import React, { useEffect, useState } from 'react';
import FieldHeader from './FieldHeader';
import styles from "./FieldMapperConfig.module.css"
import FieldsRow from './FieldsRow';
import { v4 as uuid } from "uuid"


function FieldMapperConfigMain() {
    const [fieldCount, setFieldCount] = useState([{id: uuid(), salesStatus: false, callHubCustomStatus: false}]);
    const [selectedSalesIds, setSelectedSalesIds] = useState([]);
    const [selectedcallHubIds, setSelectedCallHubIds] = useState([]);
    const [keys, setKeys] = useState([]);
    const [values, setValues] = useState([]);
    let finalData = {};

    const handleAddRow = () => {
        const payload = {
            id: uuid(),
            salesStatus: false,
            callHubCustomStatus: false
        }
        setFieldCount([...fieldCount, payload])
    }

    const handleToggleSalesStatus = (id) => {
        const updatedFieldCount = fieldCount.map((item) => item.id === id ? {...item, salesStatus: !item.salesStatus} : {...item, salesStatus : false})

        setFieldCount(updatedFieldCount);
    }

    const handleToggleCallHubStatus = (id) => {
        const updatedFieldCount = fieldCount.map((item) => item.id === id ? {...item, callHubCustomStatus: !item.callHubCustomStatus} : {...item, callHubCustomStatus : false})

        setFieldCount(updatedFieldCount);
    }

    const initSalesForceFields = [
        {id: uuid(), name: "Contact ID", status: true},
        {id: uuid(), name: "Deleted", status: true},
        {id: uuid(), name: "Master Record ID", status: true},
        {id: uuid(), name: "Account ID", status: true},
        {id: uuid(), name: "Salutation", status: true},
        {id: uuid(), name: "Other Street", status: true},
        {id: uuid(), name: "Other City", status: true},
        {id: uuid(), name: "Other State/Province", status: true},
        {id: uuid(), name: "Zip/Postal Code", status: true},
        {id: uuid(), name: "Other_4", status: true},
        {id: uuid(), name: "Other_5", status: true},
        {id: uuid(), name: "Other_6", status: true}
    ]

    const initCallHubCustomFields = [
        {id: uuid(), name: "End_date", status: true},
        {id: uuid(), name: "test1", status: true},
        {id: uuid(), name: "Frequency_of_Giving", status: true},
        {id: uuid(), name: "test", status: true},
        {id: uuid(), name: "VANID105147", status: true},
        {id: uuid(), name: "Ward", status: true},
        {id: uuid(), name: "test_2", status: true},
        {id: uuid(), name: "test_3", status: true},
        {id: uuid(), name: "test_4", status: true},
        {id: uuid(), name: "test_5", status: true},
        {id: uuid(), name: "test_6", status: true},
        {id: uuid(), name: "test_7", status: true},
    ]

    const [salesForceFields, setSalesForceFields] = useState(initSalesForceFields);
    const [callHubCustomFields, setCallHubCustomFields] = useState(initCallHubCustomFields);

    const handleKeys = (mainId, value) => {
        if (selectedSalesIds.length > 0 && selectedSalesIds.includes(mainId)) {
            const updatedKeys = keys.map((item) => item.id === mainId ? {...item, name: value} : item);
            setKeys(updatedKeys);
        } else {
            const payload = {
                id : mainId,
                name: value
            }
            setKeys([...keys, payload]);
        }
    }

    const handleValues = (mainId, value) => {
        if (selectedcallHubIds.length > 0 && selectedcallHubIds.includes(mainId)) {
            const updatedValues = values.map((item) => item.id === mainId ? {...item, name: value} : item);
            setValues(updatedValues);
        } else {
            const payload = {
                id : mainId,
                name: value
            }
            setValues([...values, payload]);
        }
    }

    const handleSalesFieldOptionToggle = (id, mainId, value) => {
        if (selectedSalesIds.length > 0 && selectedSalesIds.includes(mainId)) {
            const updatedSalesForceFields = salesForceFields.map((item) => item.id === id ? {...item, status: false} : item.name === value ? {...item, status: true} : item);

            setSalesForceFields(updatedSalesForceFields);
        } else {
            const updatedSalesForceFields = salesForceFields.map((item) => item.id === id ? {...item, status: false} : item);
            
            setSalesForceFields(updatedSalesForceFields);
            setSelectedSalesIds([...selectedSalesIds, mainId])
        }
        
    }

    const handleCallHubFieldOptionToggle = (id, mainId, value) => {
        if (selectedcallHubIds.length > 0 && selectedcallHubIds.includes(mainId)) {
            const updatedCallHubCustomFields = callHubCustomFields.map((item) => item.id === id ? {...item, status: false} : item.name === value ? {...item, status: true} : item);

            setCallHubCustomFields(updatedCallHubCustomFields);
        } else {
            const updatedCallHubCustomFields = callHubCustomFields.map((item) => item.id === id ? {...item, status: false} : item);

            setCallHubCustomFields(updatedCallHubCustomFields);
            setSelectedCallHubIds([...selectedcallHubIds, mainId])
        }
        
    } 


    const handleDelete = (id, salesValue, CallHubvalue) => {
        const updatedFieldCount = fieldCount.filter((item) => item.id !== id);

        const updatedSalesForceFields = salesForceFields.map((item) => item.name === salesValue ? {...item, status: true} : item)
        setSalesForceFields(updatedSalesForceFields);

        const updatedCallHubCustomFields = callHubCustomFields.map((item) => item.name === CallHubvalue ? {...item, status: true} : item)
        setCallHubCustomFields(updatedCallHubCustomFields);

        const updatedKeys = keys.filter((item) => item.id !== id);
        setKeys(updatedKeys);

        const updatedValues = values.filter((item) => item.id !== id);
        setValues(updatedValues);


        setFieldCount(updatedFieldCount);
    }

    const handleData = () => {
        for(let i = 0; i < keys.length; i++) {
            if (keys[i]?.id === values[i]?.id) {
                finalData[keys[i].name] = values[i].name; 
            }
        }
        console.log(finalData);
    }
    


    useEffect(() => {
        // console.log(keys);
        // console.log(values);

        handleData();
        
    },[keys, values])

    
    return (
        <div id={styles.Main_cont}>
            <FieldHeader />
            {fieldCount.map((item) => <FieldsRow key={item.id} id={item.id} callHubCustomStatus={item.callHubCustomStatus} salesStatus={item.salesStatus} handleDelete={handleDelete} salesForceFields={salesForceFields} callHubCustomFields={callHubCustomFields} handleToggleSalesStatus={handleToggleSalesStatus} handleToggleCallHubStatus={handleToggleCallHubStatus} handleSalesFieldOptionToggle={handleSalesFieldOptionToggle} handleCallHubFieldOptionToggle={handleCallHubFieldOptionToggle} fieldCount={fieldCount} handleKeys={handleKeys} handleValues={handleValues}/> )}
            <div className={styles.button_cont} onClick={handleAddRow}>
                <div>+</div>
                <div>map another field</div>
            </div>
        </div> 
    )
}

export default FieldMapperConfigMain;