import getExcercises from '../../fetchData/excercises';

const initialState = [
  {
    category: 'Abs',
    excercises: [
      {
        id: 1,
        title: 'Arnold Press',
        image:
          'https://imgs.search.brave.com/rrk3joDmeDCDUUvq21sDWhx_hVSv1UfIm85SiILNN_4/rs:fit:800:800:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kdW1i/YmVsbC1pc29sYXRl/ZC13aGl0ZS1iYWNr/Z3JvdW5kLWR1bWJi/ZWxsLTE3NTUyOTY3/Ni5qcGc',

        about: 'Lorem ipsum sit dolor',
      },
      {
        id: 2,
        title: 'Mi nuevo ejercicio genial',
        image:
          'https://imgs.search.brave.com/rrk3joDmeDCDUUvq21sDWhx_hVSv1UfIm85SiILNN_4/rs:fit:800:800:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kdW1i/YmVsbC1pc29sYXRl/ZC13aGl0ZS1iYWNr/Z3JvdW5kLWR1bWJi/ZWxsLTE3NTUyOTY3/Ni5qcGc',

        about: 'Lorem ipsum sit dolor',
      },
    ],
  },
  {
    category: 'Back',
    excercises: [
      {
        id: 3,
        title: 'Back extension',
        image:
          'https://imgs.search.brave.com/rrk3joDmeDCDUUvq21sDWhx_hVSv1UfIm85SiILNN_4/rs:fit:800:800:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kdW1i/YmVsbC1pc29sYXRl/ZC13aGl0ZS1iYWNr/Z3JvdW5kLWR1bWJi/ZWxsLTE3NTUyOTY3/Ni5qcGc',
        about: 'Lorem ipsum sit dolor',
      },
    ],
  },
  {
    category: 'Biceps',
    excercises: [
      {
        id: 4,
        title: 'Bicep curl',
        image:
          'https://imgs.search.brave.com/rrk3joDmeDCDUUvq21sDWhx_hVSv1UfIm85SiILNN_4/rs:fit:800:800:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kdW1i/YmVsbC1pc29sYXRl/ZC13aGl0ZS1iYWNr/Z3JvdW5kLWR1bWJi/ZWxsLTE3NTUyOTY3/Ni5qcGc',
        about: 'Lorem ipsum sit dolor',
      },
    ],
  },
  {
    category: 'Legs',
    excercises: [
      {
        id: 5,
        title: 'Box Jump',
        image:
          'https://imgs.search.brave.com/rrk3joDmeDCDUUvq21sDWhx_hVSv1UfIm85SiILNN_4/rs:fit:800:800:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kdW1i/YmVsbC1pc29sYXRl/ZC13aGl0ZS1iYWNr/Z3JvdW5kLWR1bWJi/ZWxsLTE3NTUyOTY3/Ni5qcGc',
        about: 'Lorem ipsum sit dolor',
      },
      {
        id: 6,
        title:
          'El nuevo super ejercicio mistico del que nadie se esperaba que supere tantos caracteres',
        image:
          'https://imgs.search.brave.com/rrk3joDmeDCDUUvq21sDWhx_hVSv1UfIm85SiILNN_4/rs:fit:800:800:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kdW1i/YmVsbC1pc29sYXRl/ZC13aGl0ZS1iYWNr/Z3JvdW5kLWR1bWJi/ZWxsLTE3NTUyOTY3/Ni5qcGc',
        about: 'Lorem ipsum sit dolor',
      },
    ],
  },
];

export const ExcercisesReducer = (state = initialState, action) => {
  switch (action.payload) {
    case action.type === '@excercises/new-excercise':
      return addItem_To_(action.payload, state);
    case action.type === '@excercises/delete-excercise':
      return deleteItem_From_(action.payload.id, state);
    case action.type === '@excercises/edit-excercise':
      return editItem_From_(action.payload, state);
    default:
      return state;
  }
};

function deleteItem_From_(id, list) {
  return list.filter((item) => item.id != id);
}

function addItem_To_(item, list) {
  return [...list, { id: list.length + 1, ...item }];
}

function editItem_From_(modifiedItem, list) {
  return list.map((item) =>
    item.id === modifiedItem.id ? { ...modifiedItem } : item
  );
}
