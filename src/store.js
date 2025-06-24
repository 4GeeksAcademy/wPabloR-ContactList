export const initialStore=()=>{
  return{
    slug: "",
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'LOAD_CONTACTS':
      return {...store, contacts: action.payload};
    
    case 'ADD_CONTACT':
      return {...store, contacts: [...store.contacts, action.payload]};

    case 'DELETE_CONTACT':
      return {...store, contacts: store.contacts.filter(c => c.id !== action.payload)};

  default:
     return store

  }    
}