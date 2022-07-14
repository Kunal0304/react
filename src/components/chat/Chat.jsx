import SearchOutlined from '@mui/icons-material/SearchOutlined'
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import MicIcon from '@mui/icons-material/Mic';
import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./chat.css"
import { useParams } from 'react-router';
import db from '../../firebase';
import { useStateValue } from '../../context/Stateprovider';
import * as firebase from 'firebase';

const Chat = () => {
    const [seed, setseed] = useState('')
    const [input, setinput] = useState('')
    const { roomId } = useParams()


    const [roomname, setroomname] = useState('')
    const [messages, setmessages] = useState([])
    const [{ user },] = useStateValue()




    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setroomname(snapshot.data().name)
            ))

            db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => setmessages(snapshot.docs.map((doc => doc.data()))))
        }
    }, [roomId])

    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000))

    }, [roomId])
    const sendMessage = (e) => {
        e.preventDefault()
        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setinput('')

    }
    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className='chat__headerInfo'>
                    <h3>{roomname}</h3>
                    <p>last seen {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}</p>
                </div>
                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertOutlinedIcon />
                    </IconButton>
                </div>
            </div>
            <div className='chat__body'>
                {messages.map((message) => (

                    <p className={`chat__message  ${message.name === user.displayName && "chat__receiver"}`}>
                        <span className='chat__name'>{message.name}</span>
                        {message.message}<span className='chat__timestamp'>{new Date(message.timestamp?.toDate()).toUTCString()}</span></p>
                ))}

            </div>
            <div className='chat__footer'>
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={(e) => setinput(e.target.value)} type='text' placeholder='type a message'></input>
                    <button type='submit' onClick={sendMessage}>Send Message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat