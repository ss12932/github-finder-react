const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// search users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({ q: text });
  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  console.log(response);
  // get the items array from rsp
  const { items } = await response.json();

  return items;
};

// get user repos
export const getUserRepos = async (login) => {
  const params = new URLSearchParams({ sort: 'created', per_page: 10 });
  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  console.log(response);
  // get the items array from rsp
  const data = await response.json();
  return data;
};

//get single user
export const getUser = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  if (response.status === 404) {
    window.location = '/notfound';
  } else {
    const data = await response.json();
    return data;
  }
};
