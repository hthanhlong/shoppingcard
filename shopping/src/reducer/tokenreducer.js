export const tokenReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_TOKEN":
      return {
        ...state,
        token: action.payload.token,
        users: action.payload.users,
      };
    default:
      return state;
  }
};
