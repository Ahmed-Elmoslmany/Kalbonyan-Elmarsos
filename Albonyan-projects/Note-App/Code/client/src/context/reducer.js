import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  LOGOUT_USER,
  CREATE_NOTE_BEGIN,
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_ERROR,
  HANDEL_CHANGE,
  CLEAR_VALUES,
  GET_NOTES_BEGIN,
  GET_NOTES_SUCCESS,
  SET_EDIT_NOTE,
  EDIT_NOTE_BEGIN,
  EDIT_NOTE_SUCCESS,
  EDIT_NOTE_ERROR,
  DELETE_NOTE_BEGIN,
  DELETE_NOTES_BEGIN,
  SET_DARK_MODE,
  DISPLAY_ALERT,
  CLEAR_ALERT,
} from "./action";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "please enter all values",
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      token: action.payload.token,
      user: action.payload.user,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "User Created Automate login... ",
    };
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: "Something wrong with server!",
    };
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      token: action.payload.token,
      user: action.payload.user,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Login Successful, Loging Tasks... ",
    };
  }

  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: "Something wrong with server!",
    };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
    };
  }

  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,

      user: action.payload.user,
      token: action.payload.token,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "User Profile Updated!",
    };
  }

  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "User Profile Updated!",
    };
  }

  if (action.type === HANDEL_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }

  if (action.type === CLEAR_VALUES) {
    const initialState = {
      note: "",
    };
    return {
      ...state,
      ...initialState,
    };
  }

  if (action.type === CREATE_NOTE_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === CREATE_NOTE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "New note created",
    };
  }

  if (action.type === CREATE_NOTE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: "Oops! can't create note",
    };
  }

  if (action.type === GET_NOTES_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }

  if (action.type === GET_NOTES_SUCCESS) {
    return {
      ...state,
      isLoading: false,

      notes: action.payload.notes,
      totalNotes: action.payload.totalNotes,
      numOfPages: action.payload.numOfPages,
    };
  }

  if (action.type === SET_EDIT_NOTE) {
    const note = state.notes.find((note) => note._id === action.payload.id);
    const { _id, status } = note;

    return {
      ...state,

      editNoteId: _id,

      status: !status,
    };
  }

  if (action.type === DELETE_NOTE_BEGIN) {
    return { ...state };
  }

  if (action.type === DELETE_NOTES_BEGIN) {
    return { ...state };
  }

  if (action.type === EDIT_NOTE_BEGIN) {
    return {
      ...state,
    };
  }

  if (action.type === EDIT_NOTE_SUCCESS) {
    return {
      ...state,
    };
  }

  if (action.type === EDIT_NOTE_ERROR) {
    return {
      ...state,
    };
  }

  if (action.type === SET_DARK_MODE) {
    const { darkmode } = state;
    console.log(darkmode);
    return {
      ...state,
      darkmode: !darkmode,
    };
  }

  throw new Error(`an error is no:  ${action.type}`);
};

export default reducer;
