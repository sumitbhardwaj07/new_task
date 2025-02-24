import React, { useState } from "react";
import styles from "./Step6.module.css"; 

const suggestions = ["Steve Mathew", "Robert Pattinson", "Steve Waugh"];
const initialMembers = ["Fanny Russell", "Rodney Meyer", "Ellen Simmons", "Virgie Kim", "Emma Castro"];

const Step6 = ({prevStep}) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [members, setMembers] = useState(initialMembers);
  const [input, setInput] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setFilteredSuggestions(suggestions.filter((s) => s.toLowerCase().includes(e.target.value.toLowerCase())));
  };

  const handleSelectUser = (user) => {
    if (!selectedUsers.includes(user)) {
      setSelectedUsers([...selectedUsers, user]);
    }
    setInput("");
    setFilteredSuggestions([]);
  };

  const handleRemoveUser = (user) => {
    setSelectedUsers(selectedUsers.filter((u) => u !== user));
  };

  const handleAddUser = () => {
    if (input && !selectedUsers.includes(input)) {
      setSelectedUsers([...selectedUsers, input]);
    }
    setInput("");
  };

  return (
    <div className={styles.teamForm}>
      <h2>Team</h2>
      <div className={styles.inputContainer}>
        {selectedUsers.map((user) => (
          <span key={user} className={styles.selectedUser}>
            {user} <button onClick={() => handleRemoveUser(user)}>×</button>
          </span>
        ))}
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Invite or Add a person"
        />
        <button onClick={handleAddUser}>Add</button>
      </div>
      {filteredSuggestions.length > 0 && (
        <ul className={styles.suggestions}>
          {filteredSuggestions.map((s) => (
            <li key={s} onClick={() => handleSelectUser(s)}>{s}</li>
          ))}
        </ul>
      )}
      <ul className={styles.membersList}>
        {members.map((member) => (
          <li key={member}>
            <input type="checkbox" /> {member} <button className={styles.remove}>×</button>
          </li>
        ))}
      </ul>
      <button className={styles.back} onClick={prevStep} >Back</button>
      <button className={styles.createProject}>Create Project</button>
    </div>
  );
};

export default Step6;
