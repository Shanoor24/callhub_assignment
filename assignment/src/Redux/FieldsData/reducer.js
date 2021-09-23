import { HANDLE_ADD_ROW, HANDLE_DELETE, HANDLE_KEYS, HANDLE_SUBMIT, HANDLE_TOGGLE_CALLHUB_FIELD_STATUS, HANDLE_TOGGLE_FIELDS_STATUS, HANDLE_TOGGLE_SALES_FIELD_STATUS, HANDLE_VALUES,HANDLE_UPDATE_FINAL_DATA, RESET_FINAL_DATA } from "./actionTypes"
import {v4 as uuid} from "uuid";

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

const initCallHubCustomFields =[
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

const initState = {
    fieldCount: [{id: uuid(), salesStatus: false, callHubCustomStatus: false}],
    selectedFieldsIds: [],
    keys: [],
    values: [],
    finalData: {},
    lastSubmittedResponse: {},
    salesForceFields: initSalesForceFields,
    callHubCustomFields: initCallHubCustomFields
}

const fieldsReducer = (state = initState, action) => {
    switch (action.type) {
            case HANDLE_ADD_ROW: {
                return {
                    ...state, fieldCount: [...state.fieldCount, action.payload]
                }
            }

            case HANDLE_TOGGLE_SALES_FIELD_STATUS: {
                const updatedFieldCount = state.fieldCount.map((item) => item.id === action.rowId ? {...item, salesStatus: !item.salesStatus} : {...item, salesStatus : false})
                return {
                    ...state, fieldCount: updatedFieldCount
                }
            }

            case HANDLE_TOGGLE_CALLHUB_FIELD_STATUS: {
                const updatedFieldCount = state.fieldCount.map((item) => item.id === action.rowId ? {...item, callHubCustomStatus: !item.callHubCustomStatus} : {...item, callHubCustomStatus : false})
                return {
                    ...state, fieldCount: updatedFieldCount
                }
            }

            case HANDLE_TOGGLE_FIELDS_STATUS: {
                let updatedSalesForceFields;
                let updatedCallHubCustomFields;
                let updatedSelectedFieldsIds = state.selectedFieldsIds;

                if (state.selectedFieldsIds.length > 0 && state.selectedFieldsIds.includes(action.rowId)) {
                    updatedSalesForceFields = state.salesForceFields.map((item) => item.id === action.fieldId ? {...item, status: false} : item.name === action.value ? {...item, status: true} : item);
                    updatedCallHubCustomFields = state.callHubCustomFields.map((item) => item.id === action.fieldId ? {...item, status: false} : item.name === action.value ? {...item, status: true} : item);
                } else {
                    updatedSalesForceFields = state.salesForceFields.map((item) => item.id === action.fieldId ? {...item, status: false} : item);
                    updatedCallHubCustomFields = state.callHubCustomFields.map((item) => item.id === action.fieldId ? {...item, status: false} : item);
                    updatedSelectedFieldsIds = [...state.selectedFieldsIds, action.rowId]
                }

                return{
                    ...state, salesForceFields: updatedSalesForceFields, callHubCustomFields: updatedCallHubCustomFields, selectedFieldsIds: updatedSelectedFieldsIds
                }
            }

            case HANDLE_KEYS: {
                let updateKeys;
                const rowIdCheck = state.keys.filter((item) => item.id === action.rowId);
                    if(rowIdCheck.length > 0) {
                        updateKeys = state.keys.map((item) => item.id === action.rowId ? {...item, name: action.value} : item);
                    } else {
                        const payload = {
                            id: action.rowId,
                            name: action.value
                        }
                        updateKeys = [...state.keys, payload];
                    }
                return {
                    ...state, keys: updateKeys
                }
            }

            case HANDLE_VALUES: {
                let updatedValues;
                const rowIdCheck = state.values.filter((item) => item.id === action.rowId);

                if (rowIdCheck.length > 0) {
                    updatedValues = state.values.map((item) => item.id === action.rowId ? {...item, name: action.value} : item);
                } else {
                    const payload = {
                        id: action.rowId,
                        name: action.value
                    }

                    updatedValues = [...state.values, payload];
                }
                return {
                    ...state, values: updatedValues
                }
            }

            case HANDLE_DELETE: {
                const updatedFieldCount = state.fieldCount.filter((item) => item.id !== action.rowId);
                const updatedSalesForceFields = state.salesForceFields.map((item) => item.name === action.salesFieldName ? {...item, status: true} : item)
                const updatedCallHubCustomFields = state.callHubCustomFields.map((item) => item.name === action.callHubFieldName ? {...item, status: true} : item)
                const updatedKeys = state.keys.filter((item) => item.id !== action.rowId);
                const updatedValues = state.values.filter((item) => item.id !== action.rowId);

                return {
                    ...state, 
                    fieldCount: updatedFieldCount, 
                    salesForceFields: updatedSalesForceFields,
                    callHubCustomFields: updatedCallHubCustomFields,
                    keys: updatedKeys,
                    values: updatedValues
                }
            }

            case HANDLE_UPDATE_FINAL_DATA: {
                let obj = {};
                for(let i = 0; i < state.keys.length; i++) {
                    for (let j = 0; j < state.values.length; j++) {
                        if (state.keys[i]?.id === state.values[j]?.id) {
                            obj[state.keys[i].name] = state.values[j].name; 
                        }
                    }
                }

                const updatedFinalData = (Object.keys(obj).length === 0) ? {id: uuid()} : {id: uuid(), ...obj}
                return {
                    ...state, finalData: updatedFinalData
                }
            }

            case HANDLE_SUBMIT: {
                return {
                    ...state, 
                    fieldCount: [{id: uuid(), salesStatus: false, callHubCustomStatus: false}],
                    selectedFieldsIds: [],
                    keys: [],
                    values: [],
                    lastSubmittedResponse: (Object.keys(state.finalData).length > 1) ? state.finalData : state.lastSubmittedResponse,
                    finalData: {},
                    salesForceFields: initSalesForceFields,
                    callHubCustomFields: initCallHubCustomFields
                }
            }

            case RESET_FINAL_DATA: {
                return {
                    ...state, finalData: {}
                }
            }
            
        default:
            return state;
    }
}

export {fieldsReducer};