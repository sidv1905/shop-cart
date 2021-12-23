const initState = {
  data: [],
};

const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case "ALL_PRODUCTS":
      console.log(action, "payload of products");
      return {
        data: action.data,
      };

    // you can have as many case statements as you need

    default:
      return state;
  }
};

export default ProductsReducer;
