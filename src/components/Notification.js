// src/components/Notification.js
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const Notification = () => {
  const [message, setMessage] = useState('');
  const notification = useSelector(state => state.notification);
  const dispatch = useDispatch();

  const handleSetNotification = () => {
    dispatch({ type: 'SET_NOTIFICATION', payload: message });
  };

  return (
    <div>
      {notification && <div>{notification}</div>}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSetNotification}>Set Notification</button>
    </div>
  );
};

export default Notification;