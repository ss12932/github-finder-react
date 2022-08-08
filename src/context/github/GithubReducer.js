const GithubReducer = (state, action) => {
  //use switch statement is more cleaner than if statements, can get messy.
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export default GithubReducer;
