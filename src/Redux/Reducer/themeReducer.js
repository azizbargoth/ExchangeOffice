import { TOGGLE_THEME } from '../Acitions/themeActions';
const savedTheme = localStorage.getItem("UserthemeMode") === "dark";
const initialState = {
  darkMode: savedTheme,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:      
        const newMode = !state.darkMode;
        // حفظ الوضع الجديد في localStorage
        localStorage.setItem("UserthemeMode", newMode ? "dark" : "light");
        return {
            ...state,
            darkMode:newMode,
        };
    default:
      return state;
  }
};

export default themeReducer;
