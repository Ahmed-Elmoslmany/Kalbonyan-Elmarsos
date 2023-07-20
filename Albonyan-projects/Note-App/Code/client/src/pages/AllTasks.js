import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import { useTranslation } from "react-i18next";

import Job from "./Job";

function AllTasks() {

  const [t, i18n] = useTranslation();
  document.body.dir = i18n.dir();

  const { getNotes, notes, deleteNote, darkmode } = useAppContext();

  const [all, setAll] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [inqueue, setInqueue] = useState(false);

  const deleteAllNotes = () => {
    notes.map((note) => {
      if(note.status){
      deleteNote(note._id);
      }
      return null
    });
  };

  useEffect(() => {
    getNotes();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let num = 0;

  return (
   
    <div className={darkmode ? "all-notes" : "all-notes-dark"}>
      {notes.map((note) => {
        if (all) {
          num++;
          return <Job key={note._id} {...note} />;
        } else if (completed) {
          console.log(note);
          if (note.status === true) {
            num++;
            return <Job key={note._id} {...note} />;
          }
        } else if (inqueue) {
          if (note.status === false) {
            num++;
            return <Job key={note._id} {...note} />;
          }
        }
        return null
      })}

      {notes.length > 0 && (
        <div className={darkmode ? "notes-bottom" : "notes-bottom-dark"}>
          <p className="clear-all">{notes.length - num === 0 ? notes.length : num} {t('items left')}</p>
          <div className={darkmode ? "note-bar" : "note-bar-dark"}>
            <button
              className={all && "active-button"}
              onClick={() => {
                setAll(true);
                setCompleted(false);
                setInqueue(false);
              }}
              >
              {t("all")}
            </button>

            <button
              className={inqueue && "active-button"}
              onClick={() => {
                setInqueue(true);
                setCompleted(false);
                setAll(false);
              }}
              >
              {t("active")}
            </button>

            <button
              className={completed && "active-button"}
              onClick={() => {
                setCompleted(true);
                setInqueue(false);
                setAll(false);
              }}
              >
              {t("completed")}
            </button>
          </div>
          <div >
            <button
              className="clear-all"
              onClick={() => {
                deleteAllNotes();
              }}
              >
              {t('clear all')}
            </button>
          </div>
        </div>
      )}
    
    </div>
  );
}

export default AllTasks;
