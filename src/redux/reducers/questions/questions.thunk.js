import QuestionsService from "../../../services/questions.service";
import actions from '../../actions/questions/questions.actions';

export const loadQuestionsAsync = (data) => (dispatch) => {
  dispatch(actions.questionsLoadStart())

  QuestionsService.getAllQuestions(data)
     .then(response => {
       dispatch(actions.questionsLoadSuccess(response.data));
      })
     .catch((error) => {
       dispatch(actions.questionsLoadError(error.data));

      });
};