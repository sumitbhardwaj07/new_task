import React, { useState } from "react";
import styles from "./Step5.module.css"; 

const Step5 = ({nextStep, prevStep}) => {
  const [tasks, setTasks] = useState([
    "Marketing Website Design",
    "Branding Design",
    "UI/UX Fundamentals",
    "Wireframe and Prototyping",
    "Style Guide",
    "UX Research and Flows",
    "Layout design",
  ]);
  const [newTask, setNewTask] = useState("");
  const [selectedTasks, setSelectedTasks] = useState([]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
    setSelectedTasks(selectedTasks.filter((t) => t !== task));
  };

  const toggleTaskSelection = (task) => {
    setSelectedTasks((prev) =>
      prev.includes(task) ? prev.filter((t) => t !== task) : [...prev, task]
    );
  };

  return (
    <div className={styles.taskManager}>
      <h2>Tasks</h2>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Add task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task} className={styles.taskItem}>
            <input
              type="checkbox"
              checked={selectedTasks.includes(task)}
              onChange={() => toggleTaskSelection(task)}
            />
            <span>{task}</span>
            <button className={styles.removeBtn} onClick={() => removeTask(task)}>×</button>
          </li>
        ))}
      </ul>
      <div className={styles.navigationButtons}>
        <button className={styles.back} onClick={prevStep}>Back</button>
        <button className={styles.next} onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step5;
