import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import { Avatar, IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Sidebarchat from '../sidebarchat/Sidebarchat';
import db from '../../firebase';
import { useStateValue } from '../../context/Stateprovider';

const Sidebar = () => {
    const [rooms, setrooms] = useState([])
    const [{ user }] = useStateValue()
    useEffect(() => {

        const unSubscribe = db.collection('rooms').onSnapshot(snapshot => (
            setrooms(snapshot.docs.map(doc =>
            (
                {
                    id: doc.id, data: doc.data()
                }
            )
            ))
        ))
        return () => {
            unSubscribe()
        }

    }, [])

    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src={user?.photoURL} />
                <div className='sidebar__headerRight'>
                    <IconButton>

                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>

                        <ChatIcon />
                    </IconButton>
                    <IconButton>

                        <MoreVertIcon />
                    </IconButton>


                </div>

            </div>
            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>

                    <SearchOutlinedIcon />
                    <input type='text' placeholder='Search or search new text' />
                </div>

            </div>
            <div className='sidebar__chats'>
                <Sidebarchat addNewChat />
                {
                    rooms.map((room) => (
                        <Sidebarchat key={room.id} id={room.id} name={room.data.name} />

                    ))
                }


            </div>
        </div>
    )
}

export default Sidebar