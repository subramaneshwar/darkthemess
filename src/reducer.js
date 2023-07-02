
// Action types
const SET_THEME = 'SET_THEME';

// Initial state
const initialState = {
  theme: 'light',
};

// Reducer
export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

// Action creators
export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});


