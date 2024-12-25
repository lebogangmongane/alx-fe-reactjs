import axios from "axios";

const getUser = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response;
  } catch (err) {
    if (err.response && err.response.status === 404) {
      throw new Error("User not found");
    }
    throw new Error("An error occurred while fetching the user");
  }
};

export default { getUser };
