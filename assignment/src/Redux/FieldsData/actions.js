import { HANDLE_ADD_ROW, HANDLE_TOGGLE_SALES_FIELD_STATUS, HANDLE_TOGGLE_CALLHUB_FIELD_STATUS, HANDLE_TOGGLE_FIELDS_STATUS, HANDLE_KEYS, HANDLE_VALUES, HANDLE_DELETE, HANDLE_UPDATE_FINAL_DATA, HANDLE_SUBMIT, RESET_FINAL_DATA } from "./actionTypes"
import { v4 as uuid } from "uuid";


const handleAddRow = () => {
    const payload = {
        id: uuid(),
        salesStatus: false,
        callHubCustomStatus: false
    }
    return {
        type: HANDLE_ADD_ROW,
        payload
    }   
} // For adding new row

const handleToggleSalesStatus = (rowId) => {
    return {
        type: HANDLE_TOGGLE_SALES_FIELD_STATUS,
        rowId
    }
} // This will toggle the option box of salesforcefield

const handleResetFieldCount = () => {
    return {
        type : RESET_FINAL_DATA
    }
} 

const handleToggleCallHubStatus = (rowId) => {
    return {
        type: HANDLE_TOGGLE_CALLHUB_FIELD_STATUS,
        rowId
    }
} // This will toggle the option box of CallhubCustomfield

const handleToggleFieldsStatus = (fieldId, rowId, value) => {
    return {
        type: HANDLE_TOGGLE_FIELDS_STATUS,
        fieldId,
        rowId,
        value
    }
} // This will toggle the option's status in both fields

const handleKeys = (rowId, value) => {
    return {
        type: HANDLE_KEYS,
        rowId,
        value,
    }
} // This will help to store selected keys

const handleValues = (rowId, value) => {
    return {
        type: HANDLE_VALUES,
        rowId,
        value
    }
} // This will help to store selected values

const handleDelete = (rowId, salesFieldName, callHubFieldName) => {
    return {
        type: HANDLE_DELETE,
        rowId,
        salesFieldName,
        callHubFieldName
    }
} // This will delete the entire row

const handleUpdateFinalData = () => {
    return {
        type: HANDLE_UPDATE_FINAL_DATA
    }
} // This will make the match of keys and values

const handleSubmit = () => {
    return {
        type: HANDLE_SUBMIT
    }
} // This will store the final data and reset all the states.

export {handleAddRow, handleToggleSalesStatus, handleToggleCallHubStatus, handleToggleFieldsStatus, handleKeys, handleValues, handleDelete, handleUpdateFinalData, handleSubmit, handleResetFieldCount}



