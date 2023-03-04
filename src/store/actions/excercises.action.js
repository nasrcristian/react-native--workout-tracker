import store from '../store';

export const addExcercise = (event) => {
  const content = event.target.value;

  store.dispatch({
    type: '@excercises/new-excercise',
    payload: content,
  });
};
export const deleteExcercise = (event) => {
  const id = event.target.value;

  store.dispatch({
    type: '@excercises/delete-excercise',
    payload: id,
  });
};
export const editExcercise = (event) => {
  const content = event.target.value;

  store.dispatch({
    type: '@excercises/edit-excercise',
    payload: content,
  });
};
