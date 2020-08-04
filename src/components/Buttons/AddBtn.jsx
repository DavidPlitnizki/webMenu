import React from 'react';
import styles from './StyleBtn.scss';


    const AddBtn = props => {
    return (
        <div  className={styles.primary_btn} onClick={()=>props.clickHandle(props.item)}>
            <span className={styles.btn_txt}>ADD</span>
        </div>
    )
}

export default AddBtn;