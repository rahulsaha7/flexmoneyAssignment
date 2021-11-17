import axios from "axios";
import qs from "qs";

export const getApiData = async (FormData, url) => {
  const { data } = await axios.post(
    `https://flexassign.herokuapp.com/index.php/${url}`,
    qs.stringify(FormData)
  );

  return data;
};
