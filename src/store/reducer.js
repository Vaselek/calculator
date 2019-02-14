/* eslint no-eval: 0 */
const initialState = {
  expression: '',
  result: null
};

const operators = ['-', '+', '/', '*'];

const reducer = (state = initialState, action) => {
  if (action.type === 'CALCULATE') {
    return {
      ...state,
      result: eval(state.expression),
      expression: ''
    }
  }
  if (action.type === 'UPDATE_EXPRESSION_FROM_INPUT') {
    return {
      ...state,
      result: null,
      expression: action.value
    }
  }
  if (action.type === 'UPDATE_EXPRESSION') {
    if (action.value === 'c') {
      if (state.result) {
        return {
          ...state,
          result: null
        }
      }
      return {
        ...state,
        expression: state.expression.slice(0, -1)
      }
    }
    if (state.result && operators.includes(action.value)) {
      return {
        ...state,
        expression: state.result + action.value,
        result: null
      }
    }
    return {
      ...state,
      expression: state.expression + action.value,
      result: null
    }
  }
  return state;
};

export default reducer;
