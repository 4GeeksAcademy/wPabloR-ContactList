
import { useContext, useReducer, createContext, useEffect } from "react";
import storeReducer, { initialStore } from "../store"  


const StoreContext = createContext()



export function StoreProvider({ children }) {
    
    const [store, dispatch] = useReducer(storeReducer, initialStore())
    
    useEffect(()=>{
       fetch("https://playground.4geeks.com/contact/agendas/mycontacts/contacts")
       .then(resp => resp.json())
       .then(data => {
           if (Array.isArray(data.contacts)){
               dispatch({type: 'LOAD_CONTACTS', payload: data.contacts})
           } else {
               console.error("Formato inesperado de respuesta")
           }
       })
       .catch(error => console.error("Error al cargar los contactos", error))
     },[])
     
    return <StoreContext.Provider value={{ store, dispatch }}>
        {children}
    </StoreContext.Provider>
}

export default function useGlobalReducer() {
    const { dispatch, store } = useContext(StoreContext)
    return { dispatch, store };
}