import React, { useState, useEffect } from "react";
import FormRow from "../components/FormRow";
import Alert from "../components/Alert"
import { FaRegCalendarCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Wrapper from "../Layouts/LoginLayout";
import { useAppContext } from "../context/appContext";
import {useNavigate} from 'react-router-dom'
import Loading from "./Loading";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
  isMember: false,
  showAlert: true,
};

function Login() {
  const [t, i18n] = useTranslation();
  document.body.dir = i18n.dir();
  
  const navigate = useNavigate()

  const [values, setValues] = useState(initialState);

  const [stepOne, setStepOne] = useState(true);

  const { user, registerUser, loginUser , showAlert, displayAlert, isLoading } = useAppContext();

  const handelChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const memberToggle = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, password, confirmpassword,email, phone, birth, isMember } = values;
    if(!isMember && confirmpassword !== password){
      setStepOne(true)
      displayAlert();
      return;
    }

    if (!isMember && (!name  || !email || !password || !confirmpassword || !birth)) {
      console.log("EROR TRIM");
      displayAlert();
      return;
    }

    if ((!name && !isMember) || !password || !email ) {
      console.log("EROR TRIM");
      displayAlert();
      return;
    }
    
    const currentUser = { name, email, password, phone, birth };
    if (isMember) {
        loginUser(currentUser)
        setStepOne(true)
    } else {
      if (!stepOne) {
        registerUser(currentUser);
      }
    }
    console.log(values);
  };

  useEffect(() => {
    if(user){
      setTimeout(() => {
        navigate('/')
      }, 3000);
    }
  }, [user, navigate])

  useEffect(()=>{
    setTimeout(()=>{

    }, 3000)
  }, [isLoading])
  return (
    <Wrapper>
      
      
      
      <div className="center-layout">
        <div className="login-bk">
        <button className="lan-btn-login"
        onClick={()=>{
          i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
      }}
      >
        {i18n.language === 'ar' ? 'En' : 'Ar'}
      </button>
          <div className="login-logo">
            
            <FaRegCalendarCheck className="check-note" />
            <h1>Your Note</h1>
          </div>
          
        </div>
        { (isLoading && <Loading />) || !isLoading && user && <Loading />  }
        {!isLoading && !user &&
        <div className="login-form">
        {showAlert && <Alert /> }
        <h1>{values.isMember ? t("login") : stepOne ? t("signup") : t("complete signup") }</h1>
        
         
          <form className="form"  onSubmit={onSubmit}>
            
            {!values.isMember && !stepOne && (
              <FormRow
               labelText={t("username")}
                name="name"
                type="text"
                value={values.name}
                handleChange={handelChange}
              />
            )}
            {stepOne && (
              <FormRow
              labelText={t("email")}
                name="email"
                type="email"
                value={values.email}
                handleChange={handelChange}
              />
            )}
            {stepOne && (
              <FormRow
              labelText={t("password")}
                name="password"
                type="password"
                value={values.password}
                handleChange={handelChange}
              />
            )}

            {!values.isMember && stepOne && (
              <FormRow
              labelText={t("confirmpassword")}
                name="confirmpassword"
                type="password"
                value={values.confirmpassword}
                handleChange={handelChange}
              />
            )}

            {!values.isMember && !stepOne && (
              <FormRow
              labelText={t("phone")}
                name="phone"
                type="phone"
                value={values.phone}
                handleChange={handelChange}
              />
            )}

            {!values.isMember && !stepOne && (
              <FormRow
              labelText={t("birth")}
                name="birth"
                type="birth"
                value={values.birth}
                handleChange={handelChange}
              />
            )}
            <button
              type={stepOne ? 'button' : 'submit'}
              className="submit-btn"
              onClick={() => {
                setStepOne(false);
              }}
            >
              {!values.isMember ? t("complete signup")  : t("login")}
            </button>
            {!stepOne && 
            <button
            type="button"
            className="submit-btn-back"
            onClick={() => {
              setStepOne(true);
            }}
          >
            {t('back')}
          </button>
          }
            <p className="not-a-member">
              {values.isMember ? t("noMember") : t("member")}

              <button
                type="button"
                onClick={memberToggle}
                className="member-btn"
              >
                {values.isMember ? t("signup") : t("login")}
              </button>
              
            </p>
          </form>
        </div>
}
      </div>
    </Wrapper>
  );
}

export default Login;
