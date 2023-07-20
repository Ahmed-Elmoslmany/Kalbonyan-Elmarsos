import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Alert from './Alert'
import NavBar from "./NavBar";

import { useAppContext } from "../context/appContext";

function UpdateUser() {
  const [t, i18n] = useTranslation();
  document.body.dir = i18n.dir();

  const { user, updateUser, darkmode, showAlert, displayAlert
     } = useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState(user?.phone);
  const [birth, setBirth] = useState(user?.birth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !birth || !password) {
      displayAlert()
      return;
    }
    updateUser({ name, email, password, phone, birth });
    
  };

  return (
    <div className={darkmode ? "" : "updateUser-dark"}>
      <NavBar />
      <div className="img-task" />
      <form onSubmit={handleSubmit}>

      
      <div className="notes-div">
      {showAlert && <Alert />}
        <div className={darkmode ? "user-edit-head" : "user-edit-head-dark"}>
          <h1>{t("modifyUser")}</h1>
        </div>
      </div>
      <div className="notes-div">
        <div className="all-notes">
          <div className={darkmode ? "update-feild" : "update-feild-dark"}>
            <div className="for-label" >
              <label className="form-label" htmlFor="email">
              {t("email")}
              </label>
              <input
                type="text"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className={darkmode ? "update-input" : "update-input-dark"}
                placeholder={t("newpassword")}
              />
            </div>

            <div className="for-label">
              <label className="form-label" htmlFor="password">
              {t("password")}
              </label>
              <input
                type="password"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className={darkmode ? "update-input" : "update-input-dark"}
                placeholder="Please provide password"
              />
            </div>

            <div className="for-label">
              <label className="form-label" htmlFor="name">
              {t("username")}
              </label>
              <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                className={darkmode ? "update-input" : "update-input-dark"}
                placeholder="Create a new todo..."
              />
            </div>


            <div className="for-label">
              <label className="form-label" htmlFor="phone">
              {t("phone")}
              </label>
              <input
                type="text"
                value={phone}
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                className={darkmode ? "update-input" : "update-input-dark"}
                placeholder="Create a new todo..."
              />
            </div>

            <div className="for-label">
              <label className="form-label" htmlFor="birth">
              {t("birth")}
              </label>
              <input
                type="text"
                value={birth}
                name="birth"
                onChange={(e) => setBirth(e.target.value)}
                className={darkmode ? "update-input" : "update-input-dark"}
                placeholder="Create a new todo..."
              />
            </div>

          </div>
          <button
              type= 'submit'
              className={darkmode ? "submit-btn" : "submit-btn-dark"}
              onClick={() => {
                // setStepOne(false);
              }}
            >{t('save changes')}</button>
        </div>
        
      </div>
      </form>
    </div>
  );
}

export default UpdateUser;
