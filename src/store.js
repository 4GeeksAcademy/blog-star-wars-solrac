export const initialStore=()=>{
  return{
    baseUrl: "https://dattebayo-api.onrender.com",
    characters:[],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set_characters':

      return {
        ...store,
        characters: action.payload
      };

    case 'toggle_fav': {
      const item = action.payload;
      const exists = store.favorites.some((fav) => fav.id === item.id);

      return {
        ...store,
        favorites: exists
          ? store.favorites.filter((fav) => fav.id !== item.id)
          : [...store.favorites, item],
      };
    }
 
    default:
      throw Error('Unknown action.');
  }    
}


//agredo al store una nueva lista de favoritos.