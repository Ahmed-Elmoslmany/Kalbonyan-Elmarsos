import React, { useState } from "react";
import { useAppContext } from "../context/appContext";
import NavBar from "../components/NavBar";
import Alert from "../components/Alert";
import AllTasks from "./AllTasks";
import { useTranslation } from "react-i18next";

function AddTask() {
  const {
    handleChange,
    note,
    createNote,
    // editJob,
    getNotes,
    darkmode,
    
    showAlert,
    displayAlert,
    clearValues,
  } = useAppContext();

  const [t, i18n] = useTranslation();
  document.body.dir = i18n.dir();

  const [noteBtn, setNoteBtn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!note) {
      displayAlert();
      return;
    }

    createNote();
    getNotes();
    clearValues();
    setNoteBtn(false);
  };

  const handleNoteInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (value !== "") {
      setNoteBtn(true);
    }
    handleChange({ name, value });
  };
  return (
    <div className={darkmode ? "body-light" : "body-dark"}>
      <NavBar />
      <div className={darkmode ? "img-task" : "img-task-dark"} />
      
      <div className={darkmode ? "notes-div" : "notes-div-dark"}>
      {showAlert && <Alert />}
        <div className={darkmode ? "note-input" : "note-input-dark"}>
          <input
            type="text"
            value={note}
            name="note"
            onChange={handleNoteInput}
            className={darkmode ? "add-input" : "add-input-dark"}
            placeholder={t("Add new todo")}
          />
          {noteBtn && note && (
            <button type="submit" className="add-btn" onClick={handleSubmit}>
              {t("add")}
            </button>
          )}
        </div>
        <AllTasks />
      </div>
    </div>
  );
}

export default AddTask;
