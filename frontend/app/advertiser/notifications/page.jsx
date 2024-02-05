'use client'
import React, { useState } from 'react';

function NotificationsPage() {
  // Example notification data
  const initialNotifications = [
    { id: 1, message: 'New message received', type: 'info' },
    { id: 2, message: 'Your order has been shipped', type: 'success' },
    { id: 3, message: 'Error: Something went wrong', type: 'error' },
  ];

  const [notifications, setNotifications] = useState(initialNotifications);

  const removeNotification = (id) => {
    // Filter out the notification with the given id
    const updatedNotifications = notifications.filter((notification) => notification.id !== id);
    setNotifications(updatedNotifications);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications to display.</p>
      ) : (
        <ul className="space-y-2">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={`flex justify-between items-center border hover:bg-gray-200 bg-${notification.type}-100 text-${notification.type}-700 p-3 rounded-md shadow-md`}
            >
                <span>   {notification.message} </span>
           
              <button
                className="btn btn-error ml-2 text-sm text-white hover:text-gray-700 focus:outline-none"
                onClick={() => removeNotification(notification.id)}
              >
                Dismiss
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotificationsPage;
