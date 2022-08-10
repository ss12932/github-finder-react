import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../context/github/GithubContext';
// match prop wont work with react router 6, useparams
function User() {
  const { getUser, user } = useContext(GithubContext);

  //no 2nd parameter,  continously run and crash browser. make sure to put empty array
  const params = useParams();
  useEffect(() => {
    // getUser(match.params.login);
    getUser(params.login);
    //look in state, chrome dev tools, getting user data in the state.
  }, []);
  return <div>{user.login}</div>;
}

export default User;
