import React, { useState } from 'react';
import FieldHeader from './FieldHeader';
import styles from "./FieldMapperConfig.module.css"
import FieldsRow from './FieldsRow';


function FieldMapperConfigMain() {
    const [fieldCount, setFieldCount] = useState([{id: 1, salesStatus: false, callHubCustomStatus: false}]);
    const [selectedSalesIds, setSelectedSalesIds] = useState([]);
    const [selectedcallHubIds, setSelectedCallHubIds] = useState([]);

    const handleAddRow = () => {
        const payload = {
            id: (fieldCount[fieldCount.length - 1].id + 1),
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

        setFieldCount(updatedFieldCount);
    }


    
    return (
        <div id={styles.Main_cont}>
            <FieldHeader />
            {fieldCount.map((item) => <FieldsRow key={item.id} id={item.id} callHubCustomStatus={item.callHubCustomStatus} salesStatus={item.salesStatus} handleDelete={handleDelete} salesForceFields={salesForceFields} callHubCustomFields={callHubCustomFields} handleToggleSalesStatus={handleToggleSalesStatus} handleToggleCallHubStatus={handleToggleCallHubStatus} handleSalesFieldOptionToggle={handleSalesFieldOptionToggle} handleCallHubFieldOptionToggle={handleCallHubFieldOptionToggle}/> )}
            <div className={styles.button_cont} onClick={handleAddRow}>
                <div>+</div>
                <div>map another field</div>
            </div>
        </div> 
    )
}

export default FieldMapperConfigMain;