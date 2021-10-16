import actionTypes from './questions.actionTypes';

const questionsLoadStart = () => ({
  type: actionTypes.QUESTIONS_LOAD_START
});

const questionsLoadSuccess = (questions) => ({
  type: actionTypes.QUESTIONS_LOAD_SUCCESS,
  payload:questions
});

const questionsLoadError = (errorMessage) => ({
  type: actionTypes.QUESTIONS_LOAD_ERROR,
  payload:errorMessage
});

const questionsCurrentIncrease = (payload) => ({
  type: actionTypes.QUESTIONS_CURRENT_INCREASE,
  payload: payload
});

const questionsPointsIncrease = (payload) => ({
  type: actionTypes.QUESTIONS_POINTS_INCREASE,
  payload: payload
});

const questionsTimeDecrease = (payload) => ({
  type: actionTypes.QUESTIONS_TIME_DECREASE,
  payload: payload
});

const questionsTimeReset = (payload) => ({
  type: actionTypes.QUESTIONS_TIME_RESET,
  payload: payload
});

const questionsPointsReset = (payload) => ({
  type: actionTypes.QUESTIONS_POINT_RESET,
  payload: payload
});

const questionsCurrentPageReset = (payload) => ({
  type: actionTypes.QUESTIONS_CURRENT_PAGE_RESET,
  payload: payload
});



export default {
  questionsLoadStart,
  questionsLoadSuccess,
  questionsLoadError,
  questionsCurrentIncrease,
  questionsPointsIncrease,
  questionsTimeDecrease,
  questionsTimeReset,
  questionsPointsReset,
  questionsCurrentPageReset
}