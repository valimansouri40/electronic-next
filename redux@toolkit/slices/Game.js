import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  number : 0
};

export const authSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
        
        state.number = action.payload
      },
  }
});

// Action creators are generated for each case reducer function
export const { setCredentials } = authSlice.actions;
 export const selectnumber = state => state.game.number;
// export const selectIsLoggedIn = state => state.auth.isUserLoggedIn;
// export const selectShowProfileDropdown = state => state.auth.showProfileDropdown;
// export const selectShowSignOutModal = state => state.auth.showSignOutModal;

export default authSlice.reducer;
