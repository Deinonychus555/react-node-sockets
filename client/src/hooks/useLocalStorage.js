import { useEffect, useState } from 'react';

const PREFIX='react-messaging-app-';

export default function useLocalStorage(key, initialValue){

    const prefixedKey = PREFIX + key.replace(PREFIX, '');

    const [storedValue, setStoredValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey);
        if (jsonValue !== null) return JSON.parse(jsonValue);
        if (typeof initialValue === 'function'){
            return initialValue();
        }else {
            return initialValue;
        }
    })

    
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(storedValue))
    }, [prefixedKey, storedValue])
    

    /* 
    const setValue = value => {
        try{
            setStoredValue(value);
            localStorage.setItem(prefixedKey, JSON.stringify(value));
        } catch(error){
            console.error(error);
        }

    }
    */
    return [storedValue, setStoredValue] //return [storedValue, setStoredValue]
}