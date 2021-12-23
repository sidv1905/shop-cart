const initState = {
  selectedId: 1,
};

const cartReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case "CHANGE_ID":
      console.log(action, "payload");
      return {
        selectedId: action.selectedId,
      };

    // you can have as many case statements as you need

    default:
      return state;
  }
};

export default cartReducer;
