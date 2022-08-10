const GithubReducer = (state, action) => {
  //use switch statement is more cleaner than if statements, can get messy.
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_REPOS':
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    default:
      return state;
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      };
  }
};
export default GithubReducer;
