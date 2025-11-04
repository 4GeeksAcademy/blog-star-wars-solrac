export const initialStore = () => {
  return {
    baseUrl: "https://dattebayo-api.onrender.com",
    personajes: [],
    akatsuki: [],
    kara:[],
    items:[],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'set_personajes':

      return {
        ...store,
        personajes: action.payload
      };

    case 'set_akatsuki':

      return {
        ...store,
        akatsuki: action.payload
      }

    case 'set_kara':

      return {
        ...store,
        kara: action.payload
      }

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