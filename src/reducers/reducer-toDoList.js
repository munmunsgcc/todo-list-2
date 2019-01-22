const initialState = ['Buy groceries', 'Pay bills', 'Water my plants', 'Buy dog food'];

export default (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];

    case 'REMOVE_TODO':
      newState = state.filter((ele, index) => {
        if (index === action.payload) {
          return false;
        }

        return true;
      });

      return newState;

    default:
      return state;
  }
};
