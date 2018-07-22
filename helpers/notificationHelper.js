import {Notifications, Permissions} from 'expo';
import {AsyncStorage} from 'react-native';

const NOTIFICATION_KEY = 'Flashcard:Notifications';

export function clearLocalNotifications() {

    console.log('clearLocalNotifications called');

    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync);
}

function createNotification() {
    return {
        title: 'Take a quiz',
        body: "📚 Don't forget to study today",
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if(data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({status}) => {
                        if(status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync(); // To avoid setting multiple notifications

                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate() + 1);
                            tomorrow.setHours(8);
                            tomorrow.setMinutes(0);

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day'
                                }
                            );

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        });
    console.log('setLocalNotifications called')
}