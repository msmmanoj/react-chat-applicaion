import {ChatEngine} from 'react-chat-engine';
import './ChatEngine.css';

const ChatRoom = (props) => {

    const logout = () => {
      sessionStorage.clear();
      window.location.reload();
    }
    return (
        <div>
            <div className="chat-engine-header">
                <h3 style={{color:'#ffffff'}}>Hi , {sessionStorage.getItem('name')}</h3>
                <button className="logout" onClick={logout}>Logout</button>
            </div>
            <ChatEngine
                height='95vh'
                userName={sessionStorage.getItem('name')}
                userSecret={sessionStorage.getItem('password')}
                projectID='a40726f6-1b9e-4bd2-a8ea-43fbd5ffa8db'
            />
        </div>
    );
}

export default ChatRoom;