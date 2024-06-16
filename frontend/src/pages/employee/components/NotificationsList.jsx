import React from 'react';
import { Avatar, Group, Text, Divider } from '@mantine/core';
export const NotificationsList=()=>{
  const notifications = [
    {
      id: 1,
      avatar: '',
      senderName: 'Rabentiño',
      message: 'applied for leave',
      time: 'Just Now',
    },
    {
      id: 2,
      avatar: '',
      senderName: 'Alexa',
      message: 'shared a message regarding check in issue',
      time: 'This AM',
    },
    {
      id: 3,
      avatar: '',
      senderName: 'John',
      message: 'sent you a message',
      time: '2 hours ago',
    },
    {
      id: 4,
      avatar: '',
      senderName: 'Sarah',
      message: 'liked your post',
      time: 'Yesterday',
    },
    {
      id: 5,
      avatar: '',
      senderName: 'Mark',
      message: 'commented on your photo',
      time: '2 days ago',
    },
  ];
  
  const NotificationItem = ({ notification }) => (
    <Group>
      <Avatar src={notification.avatar} alt={notification.senderName} size="sm" />
      <div style={{ flex: 1, paddingLeft: 10 }}>
        <Text>{notification.senderName}</Text>
        <Text size="sm" color="gray">
          {notification.message}
        </Text>
      </div>
      <Text size="sm" color="gray" align="right">
        {notification.time}
      </Text>
    </Group>
  );
  
  return (
    <div>
      {notifications.map((notification) => (
        <React.Fragment key={notification.id}>
          <NotificationItem notification={notification} />
          <Divider />
        </React.Fragment>
      ))}
    </div>
  );
}

export default NotificationsList;
