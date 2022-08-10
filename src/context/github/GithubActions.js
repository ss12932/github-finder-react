import axios from 'axios';
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { authorization: `token ${GITHUB_TOKEN}` },
});

// search users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({ q: text });
  // use axios instance save lots line code compared to using fetch. await res.json. give response and json data. in obj called data
  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

//get user and repos

export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};

// // get user repos
// export const getUserRepos = async (login) => {
//   const params = new URLSearchParams({ sort: 'created', per_page: 10 });
//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//     headers: {
//       authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });
//   console.log(response);
//   // get the items array from rsp
//   const data = await response.json();
//   return data;
// };

// //get single user
// export const getUser = async (login) => {
//   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//     headers: {
//       authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });
//   if (response.status === 404) {
//     window.location = '/notfound';
//   } else {
//     const data = await response.json();
//     return data;
//   }
// };
