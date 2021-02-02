import React, { useState } from 'react'
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import useLocalStorage from './hooks/useLocalStorage';
import {ContactsProvider} from './contexts/ContactsProvider';
import {ConversationsProvider} from './contexts/ConversationsProvider';
import {SocketProvider} from './contexts/SocketProvider';

function App() {
  const KEY='id'
  const [id, setId] = useLocalStorage(KEY);
  
  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id}/>
        </ConversationsProvider>  
      </ContactsProvider>
    </SocketProvider>
)


  return (
    <div className="app">
      {
      id? dashboard:      
      <Login onIdSubmit={setId}/>
      }
    </div>
  );
}

export default App;
