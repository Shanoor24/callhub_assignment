import React from 'react';
import FieldHeader from './FieldHeader';
import styles from "./FieldMapperConfig.module.css"
import FieldRow from './FieldRow';


function FieldMapperConfigMain() {
    
    return (
        <div id={styles.Main_cont}>
            <FieldHeader />
            <FieldRow />
        </div> 
    )
}

export default FieldMapperConfigMain;