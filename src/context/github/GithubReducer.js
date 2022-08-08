const GithubReducer = (state, action) => {
  //use switch statement is more cleaner than if statements, can get messy.
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default GithubReducer;
