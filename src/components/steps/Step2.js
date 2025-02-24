import React, { useState } from "react";
import styles from "./Step2.module.css"; 

const Step2 = ({nextStep,prevStep}) => {
  const [hourlyRate, setHourlyRate] = useState("");
  const [budgetExceed, setBudgetExceed] = useState("");
  const [budgetReset, setBudgetReset] = useState(false);
  const [sendAlerts, setSendAlerts] = useState(true);

  return (
    <div className={styles.container}>
      <h2>Project type</h2>
      <p>Don't panic — You can also customize this types in settings</p>
      <div className={styles.tabs}>
        <button className={styles.active}>Time & Materials</button>
        <button>Fixed Fee</button>
        <button>Non-Billable</button>
      </div>
      
      <div className={styles.section}>
        <h4>Hourly</h4>
        <p>We need hourly rates to track your project's billable amount.</p>
        <select>
          <option>Project Hourly Rate</option>
        </select>
        <input
          type="text"
          value={`₹ ${hourlyRate}`}
          onChange={(e) => setHourlyRate(e.target.value.replace("₹ ", ""))}
        />
      </div>
      
      <div className={styles.section}>
        <h4>Budget</h4>
        <p>We need hourly rates to track your project's billable amount.</p>
        <select>
          <option>Hours per Person</option>
        </select>
        <div className={styles.checkboxGroup}>
          <input
            type="checkbox"
            checked={budgetReset}
            onChange={() => setBudgetReset(!budgetReset)}
          />
          <span> Budget resets every month</span>
        </div>
        <div className={styles.checkboxGroup}>
          <input
            type="checkbox"
            checked={sendAlerts}
            onChange={() => setSendAlerts(!sendAlerts)}
          />
          <span> Send email alerts if project exceeds</span>
          <input
            type="text"
            className={styles.smallInput} 
            value={budgetExceed}
            onChange={(e) => setBudgetExceed(e.target.value)}
          />%
          of budget
        </div>
      </div>
      
      <div className={styles.buttons}>
        <button className={styles.back} onClick={prevStep}>Back</button>
        <button className={styles.next} onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step2;
