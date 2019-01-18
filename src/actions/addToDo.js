export default (toDoString) => {
  console.log('This action was called', toDoString)
  
  return {
    type: 'ADD_TODO',
    payload: toDoString
  }
}