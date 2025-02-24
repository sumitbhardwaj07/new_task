import React, { useState } from "react";
import styles from "./Step1.module.css"; 

const ProjectForm = ({nextStep}) => {
  const [projectName, setProjectName] = useState("");
  const [client, setClient] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className={styles.formContainer}>
      <h2>Create a project</h2>
      <label>Project name</label>
      <input
        type="text"
        placeholder="Enter project name here"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        className={styles.input}
      />

      <label>Client</label>
      <div className={styles.clientContainer}>
        <select value={client} onChange={(e) => setClient(e.target.value)} className={styles.select}>
          <option value="">Select a client</option>
          <option value="Client 1">Client 1</option>
          <option value="Client 2">Client 2</option>
        </select>
        <button className={styles.newClientBtn}>+ New Client</button>
      </div>

      <label>Dates</label>
      <div className={styles.dateContainer}>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className={styles.input} />
        <span>-</span>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className={styles.input} />
      </div>

      <label>Notes</label>
      <textarea
        placeholder="Optional"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className={styles.textarea}
      ></textarea>

      <div className={styles.buttons}>
        <button className={styles.backBtn}>Back</button>
        <button className={styles.nextBtn} onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default ProjectForm;
