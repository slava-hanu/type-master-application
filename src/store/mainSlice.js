import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isButtonVisibilyti: false,
  isButtonVisibilytis: true,
  next: false,
  isRevealResult: false,
  isTextareaVisibilyti: false,
  textHide: true,
  isVisibilytiModal: true,
  loggedIn: false,
  login: "",
};
const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    isButtonVisibilyti(state) {
      state.isButtonVisibilyti = true;
    },
    isButtonVisibilytis(state) {
      state.isButtonVisibilytis = false;
    },
    onRevealResult(state) {
      state.isRevealResult = true;
    },

    onTextareaVisibilyti(state) {
      state.isTextareaVisibilyti = true;
    },

    onTextHide(state) {
      state.textHide = false;
    },
    onVisibilytiModal(state) {
      state.isVisibilytiModal = false;
    },
    onLogeIn(state) {
      state.loggedIn = true;
    },
    login(state, action) {
      state.login = action.payload;
    },
  },
});

export const mainSliceActions = mainSlice.actions;
export default mainSlice;
