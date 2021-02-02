import React, {useState} from 'react';
import {Tab, Nav, Button, Modal} from 'react-bootstrap';

import Conversations from '../Conversations/Conversations'
import NewConversationModal from '../NewConversationModal/NewConversationModal'
import Contacts from '../Contacts/Contacts'
import NewContactModal from '../NewContactModal/NewContactModal'


const CONVERSATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';


const SideBar = ({id}) => {

    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
    const [modalOpen, setModalOpen] = useState(false);
    const conversationOpen = activeKey === CONVERSATIONS_KEY; 

    const closeModal = () => setModalOpen(false);

    return (
        <div style={{width:'295px'}} className='d-flex flex-column'>
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONS_KEY}>
                            Conversations
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS_KEY}>
                            Contacts
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className='border-right overflow-auto flex-grow-1'>
                    <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                         <Conversations/>
                    </Tab.Pane>
                </Tab.Content>
                <Tab.Content>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <Contacts/>
                    </Tab.Pane>
                    <div className='p2 border-top border-right small'>
                        Your id: <span className='text-muted'>{id}</span>
                    </div>
                    <Button onClick={() => setModalOpen(true)} className='rounded-0'>
                        New {conversationOpen? 'Conversation' : 'Contact'}
                    </Button>
                 </Tab.Content>
            </Tab.Container>
            <Modal show={modalOpen} onHide={closeModal}>
                {conversationOpen ?
                <NewConversationModal closeModal={closeModal}/> :
                <NewContactModal closeModal={closeModal}/>
            }
            </Modal>
        </div>
    )
}

export default SideBar


/**
 * 
 * <Tab.Container activekey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventkey={CONVERSATIONS_KEY}>
                            Conversations
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventkey={CONTACTS_KEY}>
                            Contacts
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Tab.Container>
 */