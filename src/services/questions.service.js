import apiClient from "../helper/apiClient";

class QuestionsService {
  getAllQuestions = (data) => apiClient().post(null,null,{ params : data});
}

export default new QuestionsService();  