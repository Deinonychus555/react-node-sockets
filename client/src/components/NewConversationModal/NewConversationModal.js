import React, {useState} from 'react';
import { Form, Modal, Button } from 'react-bootstrap';

import {useContacts} from '../../contexts/ContactsProvider';
import {useConversations} from '../../contexts/ConversationsProvider';

const NewConversationModal = ({closeModal}) => {

    const {contacts} = useContacts();
    const {createConversation} = useConversations();
    const [selectedContactIds, setSelectedContactIds] = useState([]);
    
    console.trace(contacts);
    const handleSubmit = (e) => {
        e.preventDefault();
        createConversation(selectedContactIds);
        closeModal();
    } 

    const handleCheckboxChange = (contactId) => {
        setSelectedContactIds(prevSelectedContactsId => {
            if (prevSelectedContactsId.includes(contactId)){
                return prevSelectedContactsId.filter(id => contactId !== id);
            }else{
                return [...prevSelectedContactsId, contactId]
            }
        })
    }

    return (
        <>
        <Modal.Header closeButton>Create Conversation</Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                {contacts.map( contact => (
                    <Form.Group controlId={contact.id} key={contact.id}>
                        <Form.Check 
                            type='checkbox'
                            label={contact.name}
                            value={selectedContactIds.includes(contact.id)}
                            onChange={() => handleCheckboxChange(contact.id)}
                        />
                    </Form.Group>
                ))}
                <Button type='submit'>Create</Button>
            </Form>
        </Modal.Body>
        </>
    )
    }

export default NewConversationModal;
