import React, {useContext, createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';


const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {

    const [contacts, setContacts] = useLocalStorage('contacts', []);
    

    const createContact = (id, name) => {
        console.log(id, name);
        setContacts(prevContacts => {
            return [...prevContacts, {id, name}]
        })
    }

    return (
        <ContactsContext.Provider value={{contacts, createContact}}>
            {children}
        </ContactsContext.Provider>
    )
}

export const useContacts = () => useContext(ContactsContext);
