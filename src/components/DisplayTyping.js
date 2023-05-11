import styles from "./DisplayTyping.module.css";
import { useState } from "react";
import Panel from "./Panel";
const DisplayTyping = (props) => {


   
      
   
   
  return (
    <div className={styles.control}>
      
      <div>
        <textarea 
          value={props.value}
          onChange={props.onChange}
          onKeyPress={props.onKeyPress}
        />
        {props.isVisible && <p>Начните печатать, и таймер автоматически запустится, подсчитывая количество напечатанных символов в минуту.</p>}
      </div>
      
        
      
        

      

    </div>
  );
};
export default DisplayTyping;
