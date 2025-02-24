import { useState } from "react";
import styles from "./Step3.module.css"; 
const Step3 = ({nextStep, prevStep})=> {
  const [selectedView, setSelectedView] = useState("board");

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h2>Select a view</h2>
        <p>You can also customize this views in settings</p>
        <div className={styles.options}>
          <div 
            className={`${styles.option} ${selectedView === "list" ? styles.selected : ""}`} 
            onClick={() => setSelectedView("list")}
          >
            <div className={`${styles.icon} ${styles.list}`}></div>
            <span>List</span>
          </div>
          <div 
            className={`${styles.option} ${selectedView === "board" ? styles.selected : ""}`} 
            onClick={() => setSelectedView("board")}
          >
            <div className={`${styles.icon} ${styles.board}`}></div>
            <span>Board</span>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.back} onClick={prevStep}>Back</button>
          <button className={styles.next} onClick={nextStep}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Step3;