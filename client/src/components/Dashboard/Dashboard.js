import React from 'react';

import OpenConversation from '../OpenConversation/OpenConversation';
import SideBar from '../SideBar/SideBar';
import {useConversations} from '../../contexts/ConversationsProvider'

const Dashboard = ({id}) => {

    const { selectedConversation } = useConversations();
 
    return (
        <div className='d-flex' style={{height: '100vh'}}>
            <SideBar id={id} />
            { selectedConversation && <OpenConversation />}
        </div>
    )
};

export default Dashboard
