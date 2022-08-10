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
