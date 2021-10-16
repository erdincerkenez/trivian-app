import Axios from "axios"

const apiClient = () => {
  const axiosInstance = Axios.create({
    baseURL:"https://opentdb.com/api.php?",
    responseType: 'json',
  })

  return axiosInstance
}

export default apiClient;

