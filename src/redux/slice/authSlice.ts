import { createSlice } from "@reduxjs/toolkit";
type User = {
    userInfo: string,
    role: string
}

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")!)
  : null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      userInfo: userInfoFromStorage?.user || null,
      role: userInfoFromStorage?.role || null,
    } as User | null,
  },
  reducers: {
    loginAction: (state, action) => {
        if(state.user){
            state.user.userInfo = action.payload.user;
            state.user.role = action.payload.role;
        }
    },
    logoutAction: (state)=> {
        state.user = null
    }
  },
});

const authReducer = authSlice.reducer
export default authReducer;
export const { loginAction, logoutAction } = authSlice.actions;
