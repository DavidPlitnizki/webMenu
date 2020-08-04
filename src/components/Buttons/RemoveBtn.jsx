import React from 'react';
import styles from './StyleBtn.scss';


    const RemoveBtn = props => {
       
    return (
        <div className={styles.remove_btn} onClick={()=>props.clickHandle(props.item)}>
            <span className={styles.btn_txt}>X</span>
        </div>
    )
}

export default RemoveBtn;