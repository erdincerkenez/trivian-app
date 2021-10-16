import actionTypes from '../../actions/questions/questions.actionTypes';
import initialStates from './questions.initialStates'

const questionsReducer = (state = initialStates, {type, payload}) => {
  switch(type){
    case actionTypes.QUESTIONS_LOAD_START:
      return {
        ...state,
        isLoading: true,
        questions: null,
        errorMessage: null
      };

      case actionTypes.QUESTIONS_LOAD_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isQuestions:true,
          questions: payload,
          questionsCount:payload.results.length
        }

      case actionTypes.QUESTIONS_LOAD_ERROR:
        return {
          ...state,
          isQuestions:false,
          isLoading: false,
          errorMessage: payload
        }

        case actionTypes.QUESTIONS_CURRENT_INCREASE:
          return {
            ...state,
            currentQuestion : payload + 1
          }

          case actionTypes.QUESTIONS_POINTS_INCREASE:
            return {
              ...state,
              points : payload + 100
            }

          case actionTypes.QUESTIONS_TIME_DECREASE:
              return {
                ...state,
                time : payload
              }

          case actionTypes.QUESTIONS_TIME_RESET:
                return {
                  ...state,
                  time : payload
                }

          case actionTypes.QUESTIONS_POINT_RESET:
                  return {
                    ...state,
                    points : payload
                  }

          case actionTypes.QUESTIONS_CURRENT_PAGE_RESET:
                    return {
                      ...state,
                      currentQuestion : payload
                    }

      default:
        return state;
      
  }
}

export default questionsReducer;