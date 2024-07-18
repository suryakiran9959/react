export const reduxAction = (newOne) => {
  return {
    type: "ADD_TODO",
    payload: newOne,
  };
};
export const reduxActionDelete = (index) => {
  return {
    type: "DELETE_TODO",
    payload: index,
  };
};
