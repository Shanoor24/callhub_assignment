import React, { useEffect } from 'react';
import FieldHeader from './FieldHeader';
import styles from "./FieldMapperConfig.module.css"
import FieldsRow from './FieldsRow';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddRow, handleSubmit, handleUpdateFinalData} from '../../Redux/FieldsData/actions';


function FieldMapperConfigMain() {
    const { fieldCount, finalData, keys, values } = useSelector((state) => state.fieldData);
    let keys_length = Object.keys(finalData).length;
    const dispatch = useDispatch();

    const handleFinalSubmit = (e) => {
        e.preventDefault();
        dispatch(handleUpdateFinalData());
    }


    useEffect(() => {
        if(keys_length === 1) {
            alert("Choose options in both fields at least in one row");
            dispatch(handleSubmit())
        } else if (keys_length > 1) {
            dispatch(handleSubmit())
            console.log(finalData);
            alert("Response submitted successfully!")
        }

        console.log(keys, values)

    }, [keys_length, keys, values])

    
    return (
        <div id={styles.Main_cont}>
            <FieldHeader />
            {fieldCount.map((item) => <FieldsRow key={item.id} id={item.id} callHubCustomStatus={item.callHubCustomStatus} salesStatus={item.salesStatus}/> )}
            <div className={styles.button_cont} onClick={() => dispatch(handleAddRow())}>
                <div>+</div>
                <div>map another field</div>
            </div>
            <button className={styles.submit_button} onClick={handleFinalSubmit}>Submit</button>
        </div> 
    )
}

export default FieldMapperConfigMain;