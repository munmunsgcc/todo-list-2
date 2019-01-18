let initialState = [
  'Buy groceries',
  'Pay bills',
  'Water my plants',
  'Buy dog food'
]

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]

    case 'REMOVE_TODO':
      let newState = state.filter((ele, index) => {
        if (index === action.payload) {
          return false
        }
        return true
      })

      return newState

    default:
      return state
  }
}