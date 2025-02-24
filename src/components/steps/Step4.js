import { useState } from "react";
import { FaUsers, FaUserShield, FaUserFriends } from "react-icons/fa";
import styles from "./Step4.module.css"; 

const Step4 = ({nextStep, prevStep}) => {
  const [selectedOption, setSelectedOption] = useState("only_admins");

  return (
    <div className={styles.container}>
      <h2>Who can manage projects</h2>
      <p className={styles.subtext}>
        Don't panic — You can also customize this permissions in settings
      </p>

      <div className={styles.options}>
        <div
          className={`${styles.option} ${selectedOption === "everyone" ? styles.selected : ""}`}
          onClick={() => setSelectedOption("everyone")}
        >
          <FaUsers className={styles.icon} />
          <p className={styles.optionTitle}>Everyone</p>
          <p className={styles.optionDesc}>All users can now see it, but guests cannot access the projects.</p>
        </div>
        
        <div
          className={`${styles.option} ${selectedOption === "only_admins" ? styles.selected : ""}`}
          onClick={() => setSelectedOption("only_admins")}
        >
          <FaUserShield className={styles.icon} />
          <p className={styles.optionTitle}>Only Admin's</p>
          <p className={styles.optionDesc}>Only admins can manage everything.</p>
        </div>
        
        <div
          className={`${styles.option} ${selectedOption === "specific_people" ? styles.selected : ""}`}
          onClick={() => setSelectedOption("specific_people")}
        >
          <FaUserFriends className={styles.icon} />
          <p className={styles.optionTitle}>Only to Specific people</p>
          <p className={styles.optionDesc}>Only some specific people can able to see it</p>
        </div>
      </div>

      <div className={styles.footer}>
        <button className={styles.back} onClick={prevStep}>Back</button>
        <button className={styles.next} onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step4;
