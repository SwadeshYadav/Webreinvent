export const setItems = (items) => {
    return {
      type: 'SET_ITEMS',
      payload: items
    };
  };
  
  export const setSelectedItem = (item) => {
    sessionStorage.setItem('selectedItem', JSON.stringify(item));
    return {
      type: 'SET_SELECTED_ITEM',
      payload: item
    };
  };
  
  export const fetchSelectedItem = () => {
    return dispatch => {
      const item = JSON.parse(sessionStorage.getItem('selectedItem'));
      if (item) {
        dispatch(setSelectedItem(item));
      } 
    };
  };
  