const initalState = {
  lang: localStorage.getItem("lang") === "en" ? "en" : "ar",
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
  case "CHANGE_LANG":
    return {
      ...state,
      lang: action.value
    };
  default:
    return state;
  }
};

export default reducer;