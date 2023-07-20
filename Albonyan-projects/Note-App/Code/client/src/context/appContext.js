import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";
import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDEL_CHANGE,
  CLEAR_VALUES,
  CREATE_NOTE_BEGIN,
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_ERROR,
  GET_NOTES_BEGIN,
  GET_NOTES_SUCCESS,
  SET_EDIT_NOTE,
  EDIT_NOTE_BEGIN,
  EDIT_NOTE_SUCCESS,
  EDIT_NOTE_ERROR,
  DELETE_NOTE_BEGIN,
  DELETE_NOTES_BEGIN,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SET_DARK_MODE
} from "./action";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  
  user: user ? JSON.parse(user) : null,
  token: token,

  editNoteId: "",

  note: "",
  status: false,

  reRender: false,

  notes: [],
  totalnotes: 0,
  numOfPages: 1,
  page: 1,

  darkmode: false
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: "/api/v1",
  });
  // response

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // console.log(error.response)
      if (error.response.status === 401) {
        // logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      // axios.post("/api/v1/auth/register", currentUser);
      const response = await axios.post("/api/v1/auth/register", currentUser);

      console.log(response);
      const { user, token } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await axios.post("/api/v1/auth/login", currentUser);
      const { user, token } = data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token },
      });
      addUserToLocalStorage({ user, token });
      console.log(user);
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const updateUser = async ({ name, email, password, phone, birth }) => {
    dispatch({ type:   UPDATE_USER_BEGIN, });
     
    try {
      const {data} = await fetch(`/api/v1/auth/updateUser`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${state.token}`,
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
       
        body: JSON.stringify(
          { name, email, password, phone, birth }
        ),
      });
      // const user = currentUser
      // console.log(user)
      const { user ,token } = data;
      
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, token },
      });
      addUserToLocalStorage({ user, token });
    
    } catch (error) {
      dispatch({ type: UPDATE_USER_ERROR, payload: "Update fail!" });
      const token = state.token
      const user = { name, email, password, phone, birth }
      addUserToLocalStorage({user, token})
    }
    clearAlert();
  };

  // update & logout

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDEL_CHANGE, payload: { name, value } });
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const createNote = async () => {
    dispatch({ type: CREATE_NOTE_BEGIN });
    try {
      const { note } = state;
      await fetch("/api/v1/notes", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${state.token}`,
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          note,
        }),
      });
      dispatch({ type: CREATE_NOTE_SUCCESS });
      getNotes();
      // dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      dispatch({ type: CREATE_NOTE_ERROR, payload: "Create job fail!" });
    }
    clearAlert();

  };

  const getNotes = async () => {
    dispatch({ type: GET_NOTES_BEGIN });
    try {
      // const response = await fetch("/api/v1/notes", {
      //   method: "GET",
      //   headers: {
      //     Authorization: `Bearer ${state.token}`,
      //     "Content-Type": "application/json",
      //   },
      // });
      const { data } = await axios.get("/api/v1/notes", {
        headers: { Authorization: `Bearer ${state.token}` },
      });
      // console.log(data)
      const { notes, totalNotes, numOfPages } = data;
      dispatch({
        type: GET_NOTES_SUCCESS,
        payload: { notes, totalNotes, numOfPages },
      });
    } catch (error) {
      console.log(error);
    }
    clearAlert();
  };

  const setEditNote = (id) => {
    console.log(id);

    dispatch({ type: SET_EDIT_NOTE, payload: { id } });
  };

  const editNote = async (id) => {
    dispatch({ type: EDIT_NOTE_BEGIN });
    try {
      const { status } = state;
      console.log(id);
      await fetch(`/api/v1/notes/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${state.token}`,
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          status,
        }),
      });

      dispatch({ type: EDIT_NOTE_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      dispatch({
        type: EDIT_NOTE_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const deleteNote = async (noteId) => {
    dispatch({ type: DELETE_NOTE_BEGIN });
    try {
      await fetch(`/api/v1/notes/${noteId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${state.token}`,
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      getNotes();
    } catch (error) {
      console.log(error.response);
    }
  };

  const deleteNotes = async (userId) => {
    dispatch({ type: DELETE_NOTES_BEGIN });
    try {
      await fetch(`/api/v1/notes/${userId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${state.token}`,
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      getNotes();
    } catch (error) {
      console.log(error.response);
    }
  };

  const darkMode = () => {
    dispatch({type: SET_DARK_MODE})
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        registerUser,
        loginUser,

        logoutUser,
        updateUser,
        handleChange,
        clearValues,
        createNote,
        getNotes,
        setEditNote,
        editNote,
        deleteNote,
        deleteNotes,
        displayAlert,
        clearAlert,
        darkMode
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
