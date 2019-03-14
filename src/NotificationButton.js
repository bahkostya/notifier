import React from 'react';
import { askForPermissioToReceiveNotifications } from './push-notification';

const NotificationButton = ({ children }) => (
  <button onClick={askForPermissioToReceiveNotifications}>{children}</button>
);

export default NotificationButton;
