const addNumber = number => {
  return {
    type: 'MATH_ADD',
    payload: number
  };
}

const subtractNumber = number => {
  return {
    type: 'MATH_SUBTRACT',
    payload: number
  };
}

export {
  addNumber,
  subtractNumber
};
